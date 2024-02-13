export default function Template(
  { children }: { children: React.ReactNode }
) {
  return (
    <section className="flex flex-wrap w-full justify-between gap-4">
      {children}
    </section>
  )
}