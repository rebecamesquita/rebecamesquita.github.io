import Greetings from '../components/Greetings'
import Hero from '../components/Hero'
import MeetingIntro from '../components/MeetingIntro'
import PhotoBand from '../components/PhotoBand'
import PinFeatures from '../components/PinFeatures'
import WorkTeaser from '../components/WorkTeaser'
import About from '../components/About'
import CaseStudyPreview from '../components/CaseStudyPreview'
import ContactCTA from '../components/ContactCTA'

function Home() {
  return (
    <main>
      <Greetings />
      <Hero />
      <MeetingIntro />
      <PhotoBand />
      <PinFeatures />
      <WorkTeaser />
      <About />
      <CaseStudyPreview />
      <ContactCTA />
    </main>
  )
}

export default Home
