import { useState, useEffect } from "react";
import User from "./components/users/User";
import AddUser from "./components/users/AddUser";


function App() {

  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(res => res.json())
      .then(users => {
        let rawUser = users.results;
        let filteredUsers = rawUser.map(user => {
          return {
            uuid: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            phone: user.phone,
            image: user.picture.thumbnail
          }
        })

        setUsers(filteredUsers)
        console.log(filteredUsers)
      })
      .catch(err => console.log(err))
  }, [])

  const removeUserHandler = (uuid) => {
    setUsers(users.filter(user => user.uuid !== uuid))
  }

  const showFormHandler = () => {
    setShowForm(!showForm)
  }

  const addUserHandler = (user) => {
    setUsers([user, ...users])
    setShowForm(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">User Directory</h1>
        <div className="flex justify-center mb-6">
          <button
            onClick={showFormHandler}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
          >
            {showForm ? "Close Form" : "Add User"}
          </button>
        </div>
        {showForm && (
          <div className="mb-8">
            <AddUser addUser={addUserHandler} />
          </div>
        )}
        <div className="grid">
          {users.map((user) => (
            <User key={user.uuid} data={user} remove={removeUserHandler} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
