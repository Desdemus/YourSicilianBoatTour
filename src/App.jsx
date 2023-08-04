import FifthStep from './pages/Landing/components/FifthStep/FifthStep'
import RandomTour from './pages/Landing/components/RandomTour'
import Header from './pages/Landing/components/header'
import Hero from './pages/Landing/components/hero'
import Infosection from './pages/Landing/components/infosection'
import { tourdata } from './pages/Landing/utils/data'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <FifthStep />
      <Infosection />
      <RandomTour cardsData={tourdata} />
    </>
  )
}


export default App
