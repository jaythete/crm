import { useEffect, useState } from 'react'
import { getContacts, deleteContact } from '../api'
import { Link } from 'react-router-dom'

export default function ContactsList() {
  const [contacts, setContacts] = useState([])
  const [q, setQ] = useState('')

  const load = () => getContacts(q).then(({data}) => setContacts(data))
  useEffect(() => { load() }, [q])

  return (
    <div className="card">
      <div className="space-between">
        <h1 className="h1">Contacts List</h1>
        <Link to="/contacts/new" className="btn">Add Contact</Link>
      </div>
      <input className="search" placeholder="Search contacts…" value={q} onChange={e => setQ(e.target.value)} style={{margin:'12px 0'}} />
      <table className="table">
        <thead>
          <tr>
            <th>Contact Name</th><th>Phone</th><th>Email</th><th>Status</th><th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(c => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.email}</td>
              <td>{c.status}</td>
              <td className="row" style={{justifyContent:'flex-end'}}>
                <Link to={`/contacts/${c._id}`} className="btn btn-outline">Edit</Link>
                <button className="btn btn-outline" onClick={async () => { await deleteContact(c._id); load(); }}>Delete</button>
              </td>
            </tr>
          ))}
          {contacts.length === 0 && (
            <tr><td colSpan="5" style={{textAlign:'center', padding:20, color:'#666'}}>No contacts</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
