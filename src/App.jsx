import './css/bootstrap.css'
import './css/style.css'
import './script/jquery-3-4-1'
import './script/script'
import Footer from './components/Footer'
import Header from './components/Header'
import Iphone from './components/Iphone'
import Mac_lap from './components/Mac_lap'
import Iphone_pro from './components/Iphone_pro'
import Cards from './components/Cards'

function App() {

  return (
    <>
      <Header />
      
      <Mac_lap />
      <Iphone />
      <Iphone_pro />
      <Cards />
      <Footer />
      
    </>  
      
  )
}

export default App
