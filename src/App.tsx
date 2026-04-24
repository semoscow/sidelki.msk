import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'
import Vacancies from './pages/Vacancies'
import Privacy from './pages/Privacy'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uslugi" element={<Services />} />
          <Route path="/uslugi/:slug" element={<ServiceDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/vakansii" element={<Vacancies />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
