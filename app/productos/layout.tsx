export default function Layout(
  { children }: { children: React.ReactNode }
) {
  return (
    <main className="p-12">
      {children}
    </main>
  )
}