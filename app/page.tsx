import Hero from '@/components/home/Hero'
import Featured from '@/components/home/Featured'
import About from '@/components/home/About'
import Experience from '@/components/home/Experience'
import Toolbox from '@/components/home/Toolbox'
import Contact from '@/components/home/Contact'
import HomeTOC from '@/components/home/HomeTOC'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-ghd-bg">
      <HomeTOC />
      <Hero />
      <div className="border-t border-ghd-border" />
      <Featured />
      <div className="border-t border-ghd-border" />
      <About />
      <div className="border-t border-ghd-border" />
      <Experience />
      <div className="border-t border-ghd-border" />
      <Toolbox />
      <div className="border-t border-ghd-border" />
      <Contact />
    </main>
  )
}
