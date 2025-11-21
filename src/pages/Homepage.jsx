import Hero from '../components/Hero'
import OurReach from '../components/OurReach'
import TrustedByLeaders from '../components/TrustedByLeaders'
import BalajiAdvantage from '../components/BalajiAdvantage'
import Commitment from '../components/Commitment'
import Services from '../components/Services'
import Banner from '../components/Banner'
import Leadership from '../components/Leadership'
import Training from '../components/Training'
import Awards from '../components/Awards'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div className="homepage">
      <Hero />
      <OurReach />
      <TrustedByLeaders />
      <BalajiAdvantage />
      <Commitment />
      <Services />
      <Banner />
      <Leadership />
      <Training />
      <Awards />
      <Contact />
      <Footer />
    </div>
  )
}

export default Homepage
