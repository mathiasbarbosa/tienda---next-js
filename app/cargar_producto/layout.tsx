export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-11">
      {children}
    </main>
  )
}