import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProgramsHero from '../../components/ProgramsHero'
import EducationProgram from '../../components/EducationProgram'
import HealthcareProgram from '../../components/HealthcareProgram'
import CommunityProgram from '../../components/CommunityProgram'
import EmergencyProgram from '../../components/EmergencyProgram'

export default function Programs() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProgramsHero />
      <EducationProgram />
      <HealthcareProgram />
      <CommunityProgram />
      <EmergencyProgram />
      <Footer />
    </main>
  )
} 