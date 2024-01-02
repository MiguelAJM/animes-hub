interface Props {
  styles: string
}

export default function Divider({ styles }: Props) {
  return <hr className={`border-t-2 ${styles}`} />
}
