import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DonateHero from '../../components/DonateHero'
import DonationForm from '../../components/DonationForm'
import DonationImpact from '../../components/DonationImpact'

export default function Donate() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <DonateHero />
      <DonationForm />
      <DonationImpact />
      <Footer />
    </main>
  )
} 