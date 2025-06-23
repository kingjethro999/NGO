import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import AboutHero from '../../components/AboutHero'
import MissionSection from '../../components/MissionSection'
import TeamSection from '../../components/TeamSection'
import ValuesSection from '../../components/ValuesSection'

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <Footer />
    </main>
  )
} 