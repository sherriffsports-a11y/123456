export type RateLimitResult = {
  allowed: boolean
  /** Seconds until the caller may retry. Only meaningful when blocked. */
  retryAfterSeconds: number
}

type Bucket = { count: number; resetAt: number }

/**
 * Fixed-window counters held in process memory.
 *
 * This is a deliberate first line of defence, not a guarantee: each serverless
 * instance keeps its own map, so an attacker spread across instances gets a
 * higher effective limit, and counters reset on cold start. It stops naive
 * scripted abuse cheaply. Anything stronger needs a shared store (Redis) or
 * rate limiting at the edge — see the README.
 */
const buckets = new Map<string, Bucket>()

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
  now: number = Date.now(),
): RateLimitResult {
  // Opportunistically drop expired buckets so the map cannot grow without
  // bound on a long-lived instance.
  for (const [bucketKey, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(bucketKey)
  }

  const existing = buckets.get(key)

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true, retryAfterSeconds: 0 }
  }

  existing.count += 1

  if (existing.count > limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    }
  }

  return { allowed: true, retryAfterSeconds: 0 }
}

/** Exposed so tests can start from a known state. */
export function resetRateLimits() {
  buckets.clear()
}
