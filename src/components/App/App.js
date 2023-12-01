import Welcome from '../Welcome/Welcome';
import Dashboard from '../Dashboard/Dashboard';
import { useState, useEffect } from 'react';
import { fetchData } from '../../apiCalls';

function App() {
  const [userStatus, setUserStatus] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchData()
    .then((data) => {
      setUser(data.data.attributes['user-data'])
      console.log(`useEffect`, user)
    })
  }, [])
  
  return (
    <>
      <Welcome userStatus={userStatus} setUserStatus={setUserStatus} />
      {/* {user && <Dashboard user={user} />} */}
    </>
  );
}

export default App;
