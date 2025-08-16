import { useEffect, useState } from 'react'
import { getStats } from '../api'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [stats, setStats] = useState({ totalContacts: 0, activeLeads: 0, properties: 0 })
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    getStats().then(({data}) => setStats(data)).finally(() => setLoading(false))
  }, [])

  return (
    <div className="card">
      <h1 className="h1">Welcome to Quorium CRM</h1>
      {loading ? <p>Loading…</p> : (
        <div className="grid" style={{marginBottom: 20}}>
          <div className="stat">
            <div style={{fontSize:28, fontWeight:700}}>{stats.totalContacts}</div>
            <div>Total Contacts</div>
          </div>
          <div className="stat">
            <div style={{fontSize:28, fontWeight:700}}>{stats.activeLeads}</div>
            <div>Active Leads</div>
          </div>
          <div className="stat">
            <div style={{fontSize:28, fontWeight:700}}>{stats.properties}</div>
            <div>Properties</div>
          </div>
        </div>
      )}
      <button className="btn" onClick={() => navigate('/contacts/new')}>Add New Contact</button>
    </div>
  )
}
