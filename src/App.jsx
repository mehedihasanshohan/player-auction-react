import { Suspense, useState } from 'react'
import './App.css'
import Available from './components/Available'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Selected from './components/Selected'

const playersPromise =  fetch('/player.json')
    .then(res => res.json())
    .catch(err => console.log(err))

function App() {
  const [available, setAvailable] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(10000);

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      {/* <Banner></Banner> */}
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <h1 className='text-2xl text-gray-500 font-semibold'>Available Players</h1>

        <div>
          <button onClick={() => setAvailable(true)} className={`btn btn-accent rounded-l-2xl ${available === true? "underline underline-offset-4 decoration-2 decoration-blue-700" : "no-underline"}`}>Available</button>
          <button onClick={() => setAvailable(false)} className={`btn btn-info rounded-r-2xl ${available === !true ? "underline underline-offset-4 decoration-2 decoration-blue-700" : "no-underline"}`}>Selected <span>0</span> </button>
        </div>
      </div>
      {
        available === true ?   <Suspense fallback={ <h2>loading... </h2>}>
                                  <Available
                                    availableBalance={availableBalance}
                                    setAvailableBalance={setAvailableBalance}
                                    playersPromise={playersPromise}>
                                  </Available>
                              </Suspense> : <Selected></Selected>
      }

    </>
  )
}

export default App
