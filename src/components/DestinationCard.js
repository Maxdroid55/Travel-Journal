import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function DestinationCard(props) {
  return (
    <section className="card">
      <img src={props.imgUrl} alt={props.country} className="destination--img" />
      <div className="destination--text">
        <h3 className="country--name">
          <FontAwesomeIcon className="location--dot--icon" icon={faLocationDot} />&nbsp;
          {props.country.toUpperCase()}
          <span className="map--url">
            <a href={props.mapUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
          </span>
        </h3>
        <h2 className="location">{props.location}</h2>
        <h4 className="date">{props.date}</h4>
        <p className="description">{props.description}</p>
      </div>

    </section>
  )
}