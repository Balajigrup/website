import AboutHero from '../components/AboutHero'
import OurJourney from '../components/OurJourney'
import Leadership from '../components/Leadership'
import Awards from '../components/Awards'
import Timeline from '../components/Timeline'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <div className="about-page">
      <AboutHero />
      <Leadership />
      <OurJourney />
      <Awards />
      <Timeline />
      <Banner />
      <Footer />
    </div>
  )
}

export default AboutPage
