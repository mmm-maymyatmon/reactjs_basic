import { useState, useEffect } from "react";
import User from "./components/users/User";


function App() {

  const [users, setUsers] = useState([]);

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

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Users</h1>
      {
        users.map(user => <User key={user.uuid} data={user} remove={removeUserHandler} />)
      }
    </div>
  );
}

export default App;
