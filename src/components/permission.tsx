type PermissionProps = {
  title: string
}

export default function Permission({
  title,
  children,
}: React.PropsWithChildren<PermissionProps>) {
  return (
    <section className='rounded-lg border-2 border-emerald-800 bg-lime-100 px-5 py-3 text-black'>
      <h3 className='mb-2 text-2xl font-semibold'>{title}</h3>
      <p className=''>{children}</p>
    </section>
  )
}
