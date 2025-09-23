import { Suspense, useState } from 'react'
import './App.css'
import Available from './components/Available'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Selected from './components/Selected'

function App() {
  const [available, setAvailable] = useState(true)

  const playersPromise =  fetch('/player.json')
    .then(res => res.json())
    .catch(err => console.log(err))

  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* <Banner></Banner> */}
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <h1 className='text-2xl text-gray-500 font-semibold'>Available Players</h1>

        <div>
          <button onClick={() => setAvailable(true)} className='btn btn-accent rounded-l-2xl'>Available</button>
          <button onClick={() => setAvailable(false)} className='btn btn-info rounded-r-2xl'>Selected <span>0</span> </button>
        </div>
      </div>
      {
        available === true ?   <Suspense fallback={ <span className='loading loading-spinner text-2xl'></span>}>
                                  <Available playersPromise={playersPromise}></Available>
                              </Suspense> : <Selected></Selected>
      }

    </>
  )
}

export default App
