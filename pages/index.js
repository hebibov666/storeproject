import Image from 'next/image'
import { Inter } from 'next/font/google'
import Register from './components/register'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import Navbar from './components/Navbar'
export default function Home() {
  return (
    <main>
      <Navbar/>
    </main>
  )
}
