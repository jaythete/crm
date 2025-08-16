import { useEffect, useState } from 'react'
import { addContact, updateContact, getContacts } from '../api'
import { useNavigate, useParams } from 'react-router-dom'

export default function ContactForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [form, setForm] = useState({ name:'', phone:'', email:'', status:'Lead' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (id) {
      // naive fetch by id via listing (keeps backend simple)
      getContacts().then(({data}) => {
        const found = data.find(x => x._id === id)
        if (found) setForm({ name: found.name, phone: found.phone, email: found.email, status: found.status })
      })
    }
  }, [id])

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (id) await updateContact(id, form)
      else await addContact(form)
      navigate('/contacts')
    } finally { setLoading(false) }
  }

  return (
    <div className="card">
      <h1 className="h1">{id ? 'Edit Contact' : 'Add Contact'}</h1>
      <form onSubmit={submit} className="row" style={{flexDirection:'column', gap:12, maxWidth:480}}>
        <input className="search" placeholder="Full name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
        <input className="search" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
        <input className="search" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
        <select className="search" value={form.status} onChange={e=>setForm({...form, status:e.target.value})}>
          <option>Lead</option>
          <option>Client</option>
        </select>
        <div className="row" style={{gap:12}}>
          <button className="btn" type="submit" disabled={loading}>{loading ? 'Saving…' : 'Save'}</button>
          <button className="btn btn-outline" type="button" onClick={()=>navigate('/contacts')}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
