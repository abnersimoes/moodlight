export function getIsBrowser() {
  return typeof window !== 'undefined'
}

export function getItem(key: string) {
  const isBrowser = getIsBrowser()

  if (isBrowser) {
    return localStorage.getItem(key)
  }

  return null
}
