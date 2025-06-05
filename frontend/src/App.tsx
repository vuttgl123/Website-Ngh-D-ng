import Header from './components/header/Header'
import Banner from "./components/banner/Banner"
import Section from './components/section/Section'
import Footer from './components/footer/Footer'
import WaveTop from './components/WaveTop'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Section />
      <WaveTop fill="#f5eee5" />
      <Footer />

      {/* Các route hoặc nội dung khác */}
    </>
  )
}

export default App
