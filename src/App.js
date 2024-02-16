import data from './data.js';
import Navbar from './components/Navbar.js';
import DestinationCard from './components/DestinationCard.js';

export default function App() {
  const dataElements = data.map(destination => {
    return (
      <DestinationCard
        key={destination.id}
        {...destination}
      />
    )
  })

  return (
    <div>
      <Navbar />
      {dataElements}
    </div>
  )
}