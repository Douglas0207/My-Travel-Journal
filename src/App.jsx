import Header from "./components/Header"
import Entry from "./components/Entry"
import tada from './images/tada.png'
import Tower from './images/tower.png'

export default function App() {
  const entries = [
    {
      img: { src: tada, alt: "Tada Waterfalls picture" },
      title: "Tada Waterfalls",
      place: "Andhra Pradesh",
      googleMapsLink: "https://maps.app.goo.gl/mYxtWWYFCQUevifm9",
      description: "Tada Falls, also known as Ubbalamadugu Falls, is a stunning waterfall located in the Chittoor district of Andhra Pradesh, India, approximately 80 kilometers from Chennai. The waterfall cascades from a height of about 100 meters, creating a breathtaking spectacle."
    },
    {
      img: { src: Tower, alt: "tower picture" },
      title: "Anna Nagar Tower Parl",
      place: "Chennai",
      googleMapsLink: "https://maps.app.goo.gl/DJhgt9PyzDemBCTq7",
      description: "Anna Nagar Tower Park, officially known as Dr Visvesvaraya Tower Park, is an urban park located in the suburb of Anna Nagar, Chennai, India.The park covers an area of 15 acres (6.1 ha) and was created on January 21, 1968.It features a 133 ft (41 m) tall watch tower",
    }
  ];

  return (
    <>
      <Header />
      {entries.map((entry, index) => (
        <Entry 
          key={index}
          img={entry.img}
          title={entry.title}
          place={entry.place}
          googleMapsLink={entry.googleMapsLink}
          description={entry.description}
        />
      ))}
    </>
  );
}