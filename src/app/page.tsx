import { redirect } from 'next/navigation'

export default function RootPage() {
  // Redirige al locale por defecto
  redirect('/en')
} 