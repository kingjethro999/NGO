import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import ProgramsSection from '../components/ProgramsSection'
import ImpactSection from '../components/ImpactSection'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProgramsSection />
      <ImpactSection />
      <CTASection />
      <Footer />
    </main>
  )
} 