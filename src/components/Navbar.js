import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  return (
    <nav>
      <FontAwesomeIcon className="navbar--icon" icon={faEarthAmericas} />&nbsp;
      My Travel Journal
    </nav>
  )
}