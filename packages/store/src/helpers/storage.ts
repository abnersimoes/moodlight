export function getIsBrowser(): boolean {
  return typeof window !== 'undefined'
}

export function getItem(key: string): string | null {
  const isBrowser = getIsBrowser()

  if (isBrowser) {
    return localStorage.getItem(key) || null
  }

  return null
}
