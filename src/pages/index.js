import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '../styles/Home.module.css'
import styles from '../Hojas-de-estilos/ContenedorGeneral.module.css'
import Formulario from '../Componentes/Formulario.js'
import Menu from '@/Componentes/Menu'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sistemas ewe</title>

      </Head>
    <div className={styles.contenedorcabecera}>
      <Image
        src="/Logo/Logo.jpg"
        alt="Saitamita"
        width={100}
        height={100}
      />
    </div>
    <div className={styles.contenedorPrincipal}>
      <Menu></Menu>
      <Formulario/>
    </div>
    
    
    </>
  )
}
