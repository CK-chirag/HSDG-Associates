import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './commonComponents/Header'
import Footer from './commonComponents/Footer'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import AboutUs from './components/AboutUs/AboutUs'
import Careers from './components/Careers/Careers'
import ContactUs from './components/ContactUs/ContactUs'
import InsightsPage from './components/Insights/InsightsPage'
import InsightDetail from './components/Insights/InsightDetail'
import IndustriesPage from './components/Industries/IndustriesPage'
import IndustryDetail from './components/Industries/IndustryDetail'
import ForeignDesk from './components/ForeignDesk/ForeignDesk'
import AdminDashboard from './pages/AdminDashboard'
import AdminJobs from './pages/AdminJobs'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/manage-insights-hsdg" element={<AdminDashboard />} />
          <Route path="/manage-jobs-hsdg" element={<AdminJobs />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/foreign" element={<ForeignDesk />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
