import Welcome from '../Welcome/Welcome';
import Dashboard from '../Dashboard/Dashboard';
import { useState, useEffect } from 'react';
import { fetchData } from '../../apiCalls';

function App() {
  const [data, setData] = useState([]);
  const [userStatus, setUserStatus] = useState(false);

  useEffect(() => {
    fetchData()
    .then((data) => {
      setData(data)
      console.log(`useEffect`, data)
    })
  }, [])
  
  return (
    <>
      <Welcome userStatus={userStatus} setUserStatus={setUserStatus} />
      <Dashboard data={data} />
    </>
  );
}

export default App;
