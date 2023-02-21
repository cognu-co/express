import { Link } from 'react-router-dom'

export function Blank() {
  return (
    <main className="flex-1 flex items-center justify-center text-rotion-400">
      Pesquise ou
      <Link to="/document"> crie um novo cliente</Link>
    </main>
  )
}
