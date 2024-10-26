import React, { useState, useEffect } from 'react';
import Tours from './Tours.jsx'
import Loading from './Loading.jsx';


const url = 'https://course-api.com/react-tours-project'

function App() {
  
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true)
    const data = await fetch(url);
    const res = await data.json();
    setTours(res)
    setLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours)
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  if (!tours.length) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
   <main>
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
        <Tours tours={tours} removeTour={removeTour}/>
      </div>
    </section>
   </main>
  )
}

export default App
