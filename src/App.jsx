import { Suspense } from 'react'
import './App.css'
import Available from './components/Available'
import Banner from './components/Banner'
import Navbar from './components/Navbar'

function App() {

  const playersPromise =  fetch('/player.json')
    .then(res => res.json())
    .catch(err => console.log(err))

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense>
        <Available playersPromise={playersPromise}></Available>
      </Suspense>
    </>
  )
}

export default App
