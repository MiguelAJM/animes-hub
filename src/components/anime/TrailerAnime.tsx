import Alert from "../elements/Altert"
import { Trailer } from "@/interfaces/animes"

export interface Props {
  trailer: Trailer
}

export default function TrailerAnime({ trailer }: Props) {
  return (
    <>
      <h2 className='text-5xl font-light mb-4'>
        <span className='line-clamp-1'>Trailer</span>
      </h2>
      {trailer.embed_url ? (
        <iframe
          className='w-full aspect-video mb-8 rounded-xl'
          src={trailer.embed_url}
          allowFullScreen
        />
      ) : (
        <Alert description='No trailers available' />
      )}
    </>
  )
}