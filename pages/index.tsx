import Head from 'next/head'
import { NextPage } from 'next'
import  Header  from "../components/Header"
import Hero from '@/components/Hero'



const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Paulo Maldonado</title>
      </Head>

      {/* Headers */}
      <Header />
      {/* Hero */}
      <section id='hero'>
        <Hero />
      </section>
      {/* About */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  )
}

export default Home;