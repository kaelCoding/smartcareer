import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Benefits from '@/components/Benefits'
import Experience from '@/components/Experience'
import Features from '@/components/Features'
import Steps from '@/components/Steps'
import DataSection from '@/components/DataSection'
import GettingStarted from '@/components/GettingStarted'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Benefits />
      <Experience />
      <Features />
      <Steps />
      <DataSection />
      <GettingStarted />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
}
