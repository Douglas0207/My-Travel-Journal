import gps from '../images/gps.png'; // Importing the gps image

export default function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img 
          src={props.img.src} 
          alt={props.img.alt} 
          className="main-image" 
        />
      </div>

      <div className="info-container">
        <img 
          src={gps} 
          alt="Gps" 
          className="marker" 
        />
        <span className="place">{props.place}</span>
        <a 
          href={props.googleMapsLink} 
          className="view"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps
        </a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="entry-text">{props.description}</p>
      </div>
    </article>
  );
}