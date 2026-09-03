import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DMSCaseStudy from './pages/DMSCaseStudy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/case-studies/data-management-system"
        element={<DMSCaseStudy />}
      />
    </Routes>
  )
}

export default App
