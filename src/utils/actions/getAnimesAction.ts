
export const getAnimesAction = async (page: number) => {
  const ANIMES_URL = 'https://api.jikan.moe/v4/anime?'
  const QUERY_PARAMS = `sfw&limit=24&type=tv&status=upcoming&page=${page}`

  const res = await fetch(`${ANIMES_URL}${QUERY_PARAMS}`)
  const data = await res.json()

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}
