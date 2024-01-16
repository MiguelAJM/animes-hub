interface Props {
  title: string
  IconTitle: JSX.Element
  iconColor: string
  button?: boolean
  pagination?: JSX.Element
}

export default function MainTitleAnime({
  title,
  IconTitle,
  iconColor,
  button,
  pagination
}: Props) {
  return (
    <div className='flex flex-wrap justify-between gap-4'>
      <article className='flex items-center gap-1 md:gap-4'>
        <span className={iconColor}>{IconTitle}</span>
        <h2 className='text-xl md:text-2xl font-bold'>{title}</h2>
      </article>
      {button === true && pagination}
    </div>
  )
}
