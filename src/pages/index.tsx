import type { NextPage } from 'next'
import Biografia from '../Components/Biografia'
import BotaoAlterarVisualizacao from '../Components/BotaoAlterarVisualizacao'
import Header from '../Components/Header'
import Layout from '../Components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Header />
        <Biografia />
        <BotaoAlterarVisualizacao />
      </div>
    </Layout>
  )
}

export default Home
