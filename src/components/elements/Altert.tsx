interface Props {
  description: string
}

export default function Alert({ description }: Props) {
  return (
    <div>
      <p className='bg-red-500 backdrop-blur-lg inline-block px-8 py-4 rounded-md text-black/50 font-bold shadow-xl'>
        {description}
      </p>
    </div>
  )
}
