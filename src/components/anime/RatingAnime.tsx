import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled
} from '@tabler/icons-react'
import Alert from '../elements/Altert'

interface Props {
  score: number
}

export default function RatingAnime({ score }: Props) {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let newScore = score / 2
    let number = index + 0.5

    return (
      <span className='text-yellow-400' key={index}>
        {newScore >= index + 1 ? (
          <IconStarFilled size={24} />
        ) : newScore >= number ? (
          <IconStarHalfFilled size={24} />
        ) : (
          <IconStar size={24} />
        )}
      </span>
    )
  })

  return (
    <>
      {score && ratingStar ? (
        <div className='flex items-center gap-4'>
          <p className='text-4xl font-semibold'>{score}</p>
          <span className='flex gap-2'>{ratingStar}</span>
        </div>
      ) : (
        <Alert description='No score available' />
      )}
    </>
  )
}
