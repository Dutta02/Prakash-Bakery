import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./StoreLocater.css";
import { FaLocationArrow } from "react-icons/fa";

const storeIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const currentLocationIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png", 
  iconSize: [30, 50],
  iconAnchor: [15, 50],
  popupAnchor: [1, -40],
});

const stores = [
  { 
    id: 1, 
    name: "Prakash Bakery", 
    address: "Shop 9 GF, Urban 2, Vasna Rd, near Priya Cinema, Bhayli, Vadodara, Gujarat 390007", 
    phone: "4245245252", 
    lat: 22.2954852,
    lng: 73.1336728
  },
  { 
    id: 2, 
    name: "Prakash Bakery", 
    address: "76PM+QPC, Goverdhan Twp, Waghodia, Vadodara, Gujarat 390025", 
    phone: "1234567899", 
    lat: 22.296960475805562,  
    lng: 73.23355760582032
  },
  { 
    id: 3, 
    name: "Prakash Bakery", 
    address: "Opp Maa mobile, B/s Gayatri Khaman, LBSV Shopping Centre, Pani Tanki Rd, Karelibagh, Vadodara, Gujarat 390002", 
    phone: "1234567899", 
    lat: 22.329357267856597, 
    lng: 73.21158495115414
  },
  { 
    id: 4, 
    name: "Prakash Bakery", 
    address: "21, Nalanda Water Tank Rd, Uma Colony, Prabhat Nagar, Waghodia, Vadodara, Gujarat 390019", 
    phone: "Not update yet", 
    lat: 22.304773240474084, 
    lng: 73.22966120559195
  },
  { 
    id: 5, 
    name: "Prakash Bakery", 
    address: "Shop No 1, Aanand food zone, The Status Rd, opposite THE LANDMARK, Harni, Vadodara, Gujarat 390018", 
    phone: "Not update yet", 
    lat: 22.346093825486406, 
    lng: 73.21242483166738
  },
  { 
    id: 6, 
    name: "Prakash Bakery", 
    address: "Gf-01, Balyogi bhavan, Sama-Savli Rd, Raghuvir Nagar, Kasturba Nagar, New Sama, Vadodara, Gujarat 390008", 
    phone: "Not update yet", 
    lat: 22.352380667481032,
    lng:  73.20077207183103
  },{ 
    id: 7, 
    name: "Prakash Bakery", 
    address: "F-18 Natashapark - 1, Guru Gobindsinhji Marg, opposite Bhagirath Society, Nizampura, Vadodara, Gujarat 390002", 
    phone: "09173080972", 
    lat: 22.34452207067568, 
    lng: 73.17649548883864
  },{ 
    id: 8, 
    name: "Prakash Bakery", 
    address: "947V+59C, Mahatma Gandhi Rd, Dinbandhu Society, Vrindavan Society, Bajwa, Vadodara, Gujarat 391310", 
    phone: "09998485955", 
    lat: 22.36742303073465, 
    lng: 73.1444503992887
  },{ 
    id: 9, 
    name: "Prakash Bakery", 
    address: "C/80, Gujarat Refinery Rd, Smurti society, Sahyog Soceity, Gorwa, Vadodara, Gujarat 390016", 
    phone: "Not update yet", 
    lat: 22.341534922995727, 
    lng: 73.1488774847336
  },{ 
    id: 10, 
    name: "Prakash Bakery", 
    address: "2, Aastha Avenue, New IPCL Rd, Subhanpura, Vadodara, Gujarat 390016", 
    phone: "09624232728", 
    lat: 22.333226728988976, 
    lng: 73.15357272580457
  },{ 
    id: 11, 
    name: "Prakash Bakery", 
    address: "F/27, beside Pavandham, Bhagyalaxmi Society, Samta, Subhanpura, Vadodara, Gujarat 390023", 
    phone: "09825269908", 
    lat: 22.329072446373033, 
    lng: 73.14724435740457
  },{ 
    id: 12, 
    name: "Prakash Bakery", 
    address: "Gf 16, life arena complex, Gotri, Vadodara, Gujarat 390021", 
    phone: "Not update yet", 
    lat: 22.322161286226113,
    lng: 73.1383212195288
  },{ 
    id: 13, 
    name: "Prakash Bakery", 
    address: "Shop 9 GF, Urban 2, Vasna Rd, near Priya Cinema, Bhayli, Vadodara, Gujarat 390007", 
    phone: "09898321686", 
    lat: 22.30345040965505, 
    lng: 73.1274461636833
  },{ 
    id: 14, 
    name: "Prakash Bakery", 
    address: "GF-2B, VIHAV TRADE CENTER(VTC, 30MT, Vasna Bhayli Canal Rd, near WAVES CLUB, Bhayli, Vadodara, Gujarat 391410", 
    phone: "08735861686", 
    lat: 22.292332647911692,
    lng: 73.1308793909749
  },{ 
    id: 15, 
    name: "Prakash Bakery", 
    address: "843W+6W8, Vasna Saiyed Rd, Saiyed Vasna, Vadodara, Gujarat 390007", 
    phone: "09601884651", 
    lat: 22.308532520332637, 
    lng: 73.1459855910579
  },{ 
    id: 16, 
    name: "Prakash Bakery", 
    address: "Silver Oak Complex, Shree Nagar Society, Purushottam Nagar, Akota, Vadodara, Gujarat 390020", 
    phone: "Not update yet", 
    lat: 22.305356222830916,
    lng: 73.17310808666146
  },{ 
    id: 17, 
    name: "Prakash Bakery", 
    address: "F9, Vasna - Bhayli Main Rd, opp. Kalyan Party Plot, Sainath Park, Ashwamegh Nagar, Tandalja, Vadodara, Gujarat 390007", 
    phone: "Not update yet", 
    lat: 22.299956351295776,
    lng: 73.14770220470369 
  },{ 
    id: 18, 
    name: "Prakash Bakery", 
    address: "Shop No. 10-11, Mujmahuda Rd, beside SBI Bank, near Royal Orchid, Pratham Avenue, Akota, Vadodara, Gujarat 390020", 
    phone: "Not update yet", 
    lat: 22.29423861275273,
    lng: 73.1676149229949 
  },{ 
    id: 19, 
    name: "Prakash Bakery", 
    address: "Dwarkesh Complex, Sun Pharma Rd, Pramukh Swami nagar, Atladara, Vadodara, Gujarat 390012", 
    phone: "Not update yet", 
    lat: 22.288838311526195, 
    lng: 73.15662859566181
  },{ 
    id: 20, 
    name: "Prakash Bakery", 
    address: "Ghanshyam Nagar-2, B 32, opp. Dhanlaxmi Soc, Ghanshyamnagar Soc - 2, Ghanshyam Nagar Society 2, Manjalpur, Vadodara, Gujarat 390011", 
    phone: "09328274853", 
    lat: 22.28506567463598, 
    lng: 73.18858307101165
  },{ 
    id: 21, 
    name: "Prakash Bakery", 
    address: "A4, AMRUTNAGAR SHOPPING CENTER, Novino Tarsali Road, New Era School Rd, near NEW ERA HIGH SCHOOL, Amrut Nagar Society, Makarpura, Vadodara, Gujarat 390010", 
    phone: "Not update yet", 
    lat: 22.257742570053516, 
    lng: 73.20162933471971
  }

]

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function StoreLocator() {
  const [selectedStore, setSelectedStore] = useState(null);
  const [position, setPosition] = useState([22.2954852, 73.1336728]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [zoom, setZoom] = useState(12); 
  const markerRefs = useRef({});


  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCurrentLocation([latitude, longitude]);
        setPosition([latitude, longitude]);
        setZoom(15); 
      },
      () => alert("Could not get your location"),
      { enableHighAccuracy: true }
    );
  };


  const handleStoreClick = (store) => {
    setSelectedStore(store);
    setPosition([store.lat, store.lng]);
    setZoom(15); 
    if (markerRefs.current[store.id]) {
      markerRefs.current[store.id].openPopup();
    }
  };

  const getDirections = (store) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`, "_blank");
  };

  return (
    <div className="store-locator">
      <div className="store-list">
        <div className="location-button" onClick={getCurrentLocation}>
          <FaLocationArrow className="location-icon" /> Get Current Location
        </div>

        <h1 className="lol">Stores Near You</h1>
        {stores.map((store) => (
          <div key={store.id} className="store-item" onClick={() => handleStoreClick(store)}>
            <h3>SHOP : {store.name}</h3>
            <p> Address : {store.address}</p>
            <p> Phone Number : {store.phone}</p>
            <button onClick={(e) => { e.stopPropagation(); getDirections(store); }} className="get-direction">
              <FaLocationArrow className="direction-icon" /> <span className="directionname">Get Directions</span>
            </button>
          </div>
        ))}
      </div>

      <MapContainer center={position} zoom={zoom} style={{ height: "100vh", width: "70%" }}>
        <ChangeView center={position} zoom={zoom} />
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

      
        {currentLocation && (
          <Marker position={currentLocation} icon={currentLocationIcon}>
            <Popup>You are here!</Popup>
          </Marker>
        )}

        
        {stores.map((store) => (
          <Marker 
            key={store.id} 
            position={[store.lat, store.lng]} 
            icon={storeIcon} 
            ref={(el) => (markerRefs.current[store.id] = el)}
          >
            <Popup>
              <h3>{store.name}</h3>
              <p>{store.address}</p>
              <p>{store.phone}</p>
              <button onClick={() => getDirections(store)}>Get Directions</button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default StoreLocator;


