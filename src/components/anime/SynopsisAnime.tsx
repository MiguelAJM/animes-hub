import Alert from "../elements/Altert"

interface Props {
  synopsis: string
}
export default function SynopsisAnime({ synopsis }: Props) {
  return (
    <>
    {synopsis ? (
      <div className='w-full'>
        <h3 className='text-2xl font-bold mb-3'>Synopsis</h3>
        <p className='font-normal opacity-70'>{synopsis}</p>
      </div>
    ) : (
      <Alert description='No synopsis available' />
    )}
  </>
  )
}
