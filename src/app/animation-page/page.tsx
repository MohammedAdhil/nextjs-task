// import styles from './page.module.css'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/app/Components/Animation/Animation'), {
    ssr: false,
})

export default function Home() {
  return (
    <main className="animation-section">
        <Scene />
    </main>
  )
}
