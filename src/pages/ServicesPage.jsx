import ServicesHero from '../components/ServicesHero'
import ServicesDetail from '../components/ServicesDetail'
import TrustedByLeaders from '../components/TrustedByLeaders'
import WhyChooseBalaji from '../components/WhyChooseBalaji'
import Testimonials from '../components/Testimonials'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function ServicesPage() {
  return (
    <div className="services-page">
      <ServicesHero />
      <ServicesDetail />
      <TrustedByLeaders />
      <WhyChooseBalaji />
      <Testimonials />
      <Banner />
      <Footer />
    </div>
  )
}

export default ServicesPage
