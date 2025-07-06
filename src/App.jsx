import { useState } from 'react'
import './index.css'

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Peter",
      lastName: "Parker",
      age: 21,
      location: "USA, New York",
      gender: "male",
    }
  ])
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    location: '',
    gender: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleAddUser = (e) => {
    e.preventDefault()
    const newUser = {
      id: users.length + 1,
      ...formData,
      age: parseInt(formData.age) || 0
    }
    setUsers(prev => [...prev, newUser])
    setFormData({ firstName: '', lastName: '', age: '', location: '', gender: '' })
  }

  const handleRemoveUser = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Name"
              className="p-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Surname"
              className="p-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Age"
              className="p-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Location"
              className="p-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              placeholder="Gender"
              className="p-2 border rounded focus:outline-none focus:border-blue-500 col-span-2"
            />
            <button
              onClick={handleAddUser}
              className="col-span-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Add User
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div className="grid grid-cols-2 gap-4">
                <p className="text-sm"><span className="font-semibold">Name:</span> {user.firstName}</p>
                <p className="text-sm"><span className="font-semibold">Surname:</span> {user.lastName}</p>
                <p className="text-sm"><span className="font-semibold">Age:</span> {user.age}</p>
                <p className="text-sm"><span className="font-semibold">Location:</span> {user.location}</p>
                <p className="text-sm col-span-2"><span className="font-semibold">Gender:</span> {user.gender}</p>
              </div>
              <button
                onClick={() => handleRemoveUser(user.id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App