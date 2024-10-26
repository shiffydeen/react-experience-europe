import React, { useState, useEffect } from 'react';
import Tours from './Tours.jsx'
import Loading from './Loading.jsx';


const url = 'https://course-api.com/react-tours-project'

function App() {
  
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    const data = await fetch(url);
    const res = await data.json();
    setTours(res)
  }

  useEffect(() => {
    fetchTours()
  }, [])


  return (
   <main>
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
        <Tours tours={tours}/>
      </div>
    </section>
   </main>
  )
}

export default App
