const PRODUCTS_CACHE_KEY = "products_cache";
const PRICES_CACHE_KEY = "prices_cache";
const CACHE_EXPIRATION_TIME = 5 * 60 * 1000;

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

export function getCache<T>(key: string): CacheEntry<T> | null {
  const stored = localStorage.getItem(key);
  if (!stored) return null;
  try {
    const entry: CacheEntry<T> = JSON.parse(stored);
    const now = Date.now();
    if (now - entry.timestamp > CACHE_EXPIRATION_TIME) {
      localStorage.removeItem(key);
      return null;
    }
    return entry;
  } catch {
    localStorage.removeItem(key);
    return null;
  }
}

export function setCache<T>(key: string, data: T) {
  const entry: CacheEntry<T> = {
    data,
    timestamp: Date.now(),
  };
  localStorage.setItem(key, JSON.stringify(entry));
}
