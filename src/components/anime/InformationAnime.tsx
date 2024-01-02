interface Props {
  status: string
  duration: string
  year: number
  rank: number
  popularity: number
  members: number
}

export default function InformationAnime({
  status,
  duration,
  year,
  rank,
  popularity,
  members
}: Props) {
  return (
    <ul className='flex flex-col md:flex-wrap md:flex-row gap-4 justify-start w-full mt-8'>
      <li className='w-32'>
        <article>
          <h2 className='text-md font-normal opacity-70'>Status</h2>
          <p className='text-md font-bold'>{status ? status : 'Unknown'}</p>
        </article>
      </li>
      <li className='w-32'>
        <article>
          <h2 className='text-md font-normal opacity-70'>Duration</h2>
          <p className='text-md font-bold'>{duration ? duration : 'Unknown'}</p>
        </article>
      </li>
      <li className='w-32'>
        <article>
          <h2 className='text-md font-normal opacity-70'>Year</h2>
          <p className='text-md font-bold'>{year ? year : 'Unknown'}</p>
        </article>
      </li>
      <li className='w-32'>
        <article>
          <h2 className='text-md font-normal opacity-70'>Rank</h2>
          <p className='text-md font-bold'>{rank ? rank : 'Unknown'}</p>
        </article>
      </li>
      <li className='w-32'>
        <article>
          <h2 className='text-md font-normal opacity-70'>Popularity</h2>
          <p className='text-md font-bold'>
            {popularity ? popularity : 'Unknown'}
          </p>
        </article>
      </li>
      <li className='w-32'>
        <article>
          <h2 className='text-md font-normal opacity-70'>Members</h2>
          <p className='text-md font-bold'>{members ? members : 'Unknown'}</p>
        </article>
      </li>
    </ul>
  )
}
