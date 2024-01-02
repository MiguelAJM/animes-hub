import Alert from "../elements/Altert"

export interface Props {
  trailer: Trailer
}

export interface Trailer {
  youtube_id: string
  url: string
  embed_url: string
}

export default function TrailerAnime({ trailer }: Props) {
  const { embed_url } = trailer
  return (
    <>
      <h2 className='text-5xl font-light mb-4'>
        <span className='line-clamp-1'>Trailer</span>
      </h2>
      {embed_url ? (
        <iframe
          className='w-full aspect-video mb-8 rounded-xl'
          src={embed_url}
          allowFullScreen
        />
      ) : (
        <Alert description='No trailers available' />
      )}
    </>
  )
}