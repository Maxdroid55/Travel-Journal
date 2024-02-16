import data from './data.js';
import Navbar from './components/Navbar.js';
import DestinationCard from './components/DestinationCard.js';

export default function App() {
  const dataElements = data.map(destination => {
    return (
      <DestinationCard
        imgUrl={destination.imgUrl}
        country={destination.country}
        mapUrl={destination.mapUrl}
        location={destination.location}
        date={destination.date}
        description={destination.description}
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