import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api'

export const api = axios.create({ baseURL: API_BASE })

// Contacts
export const getContacts = (q='') => api.get(`/contacts${q ? `?q=${encodeURIComponent(q)}` : ''}`)
export const addContact = (data) => api.post('/contacts', data)
export const updateContact = (id, data) => api.put(`/contacts/${id}`, data)
export const deleteContact = (id) => api.delete(`/contacts/${id}`)

// Stats
export const getStats = () => api.get('/stats')
