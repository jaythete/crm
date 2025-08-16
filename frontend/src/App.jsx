import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ContactsList from './components/ContactsList'
import ContactForm from './components/ContactForm'
import logo from './assets/logo.png'

export default function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Quorium Consulting" style={{ height: "28px" }} />
          <div>Quorium <span style={{fontWeight:400, color:'#666'}}>Consulting</span></div>
        </div>
        <nav className="row" style={{gap:12}}>
          <Link to="/" className="btn btn-outline">Dashboard</Link>
          <Link to="/contacts" className="btn btn-outline">Contacts</Link>
        </nav>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contacts" element={<ContactsList />} />
          <Route path="/contacts/new" element={<ContactForm />} />
          <Route path="/contacts/:id" element={<ContactForm />} />
        </Routes>
      </div>
    </>
  )
}
