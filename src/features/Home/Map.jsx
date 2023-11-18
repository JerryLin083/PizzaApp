import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";

// import L from "leaflet";

// let DefaultIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow,
//   iconAnchor: [0, 0],
// });

// L.Marker.prototype.options.icon = DefaultIcon;

import SectionContainer from "../ui/SectionContainer";

const Map = () => {
  return (
    <SectionContainer display="row">
      <div className="w-full h-[500px] lg:flex-1/2">
        <MapContainer
          className="h-full"
          center={[25.0478, 121.5319]}
          zoom={5}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[25.0478, 121.5319]}>
            <Popup>
              🍕 Jerry&apos;s pizza. <br /> Best pizza in the world.
            </Popup>
          </Marker>
          <Marker position={[24.1469, 120.6839]}>
            <Popup>
              🍕 Jerry&apos;s pizza. <br /> Best pizza in the world.
            </Popup>
          </Marker>
          <Marker position={[22.9908, 120.2133]}>
            <Popup>
              🍕 Jerry&apos;s pizza. <br /> Best pizza in the world.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="mt-12 px-8 lg:mt-0 lg:flex-1/2">
        <h1 className="font-semibold text-3xl">Contact Us</h1>
        <p className="text-stone-400">
          Have a question, suggestion, or just want to say hello? We&apos;d love
          to hear from you!
        </p>

        <h4 className="mt-2 text-lg text-orange-400">Customer Support:</h4>
        <ul className="text-stone-400">
          <li>
            Our dedicated customer support team is ready to assist you with any
            inquiries you may have.
          </li>
          <li>- Email: support@pizzatime.com</li>
          <li>- Phone: 000 (000) 123 4567</li>
          <li>- Hours: Monday - Friday, 8:00am - 9:00pm (EST)</li>
        </ul>

        <h4 className="mt-2 text-lg text-orange-400">General Inquiries:</h4>
        <ul className="text-stone-400">
          <li>
            If you have general questions about our company, partnerships, or
            anything else, feel free to get in touch.
          </li>
          <li>- Email: info@pizzatime.com</li>
        </ul>

        <h4 className="mt-2 text-lg text-orange-400">
          Feedback and Suggestions:
        </h4>
        <ul className="text-stone-400">
          <li>
            We value your feedback and are always striving to improve. If you
            have any suggestions, comments, or ideas on how we can enhance our
            offerings, please let us know.
          </li>
          <li>- Email: feedback@pizzatime.com</li>
        </ul>
      </div>
    </SectionContainer>
  );
};

export default Map;
