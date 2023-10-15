import { ScaleLoader } from 'react-spinners'
import colors from 'tailwindcss/colors'

type LoadingProps = {
  message: string
}

export default function Loading({ message }: LoadingProps) {
  const loader = (
    <ScaleLoader
      color={colors.lime[100]}
      loading={true}
      speedMultiplier={0.5}
      height={24}
      width={3}
      radius={10}
    />
  )

  return (
    <div className='flex items-center justify-center rounded-xl bg-emerald-800 p-5'>
      {loader}
      <span className='mx-3 font-display text-2xl text-lime-100'>
        {message}
      </span>
      {loader}
    </div>
  )
}
