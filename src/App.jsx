import data from './data.js'
import Header from './components/Header'
import TravelCard from './components/Travelcard'

function App() {
 const travelEl = data.map(item => <TravelCard  key= {item.id} {...item}/>)

  return (
    <div className='container'>
      <Header />
      {travelEl}
    </div>
  )
}

export default App
