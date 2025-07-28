"use client";

import { useEffect, useRef, useState } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

const okunlandCenter = { lat: 8.2716, lng: 5.9992 };

const LGAS = [
  { name: "All", center: okunlandCenter },
  { name: "Yagba West", center: { lat: 8.2833, lng: 5.4333 } },
  { name: "Yagba East", center: { lat: 8.2333, lng: 5.95 } },
  { name: "Ijumu", center: { lat: 7.8667, lng: 5.9 } },
  { name: "Kabba/Bunu", center: { lat: 8.15, lng: 5.75 } },
];

const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
    libraries: ["places"],
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>([]);
  const [selectedLGA, setSelectedLGA] = useState("All");

  const currentCenter =
    LGAS.find((lga) => lga.name === selectedLGA)?.center || okunlandCenter;

  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    const map = mapRef.current;
    map.panTo(currentCenter); // ensure map moves to new center

    const service = new window.google.maps.places.PlacesService(map);
    setPlaces([]);

    const placeTypes = ["school", "church", "hospital", "restaurant"];

    placeTypes.forEach((type) => {
      service.nearbySearch(
        {
          location: currentCenter,
          radius: 10000,
          type,
        },
        (results, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            results
          ) {
            setPlaces((prev) => [...prev, ...results]);
          }
        }
      );
    });
  }, [isLoaded, selectedLGA, currentCenter]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="w-full min-h-screen py-8">
      <div className="max-w-5xl mx-auto mb-4 px-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Filter by Local Government Area
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md text-green-400"
          value={selectedLGA}
          onChange={(e) => setSelectedLGA(e.target.value)}
        >
          {LGAS.map((lga, index) => (
            <option key={index} value={lga.name}>
              {lga.name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-[98%] mx-auto h-[600px]">
        <GoogleMap
          center={currentCenter}
          zoom={10}
          mapContainerClassName="w-full h-full rounded-lg"
          onLoad={(map) => (mapRef.current = map)}
        >
          {places.map((place, index) => (
            <MarkerF
              key={index}
              position={{
                lat: place.geometry?.location?.lat() || 0,
                lng: place.geometry?.location?.lng() || 0,
              }}
              title={place.name}
            />
          ))}
        </GoogleMap>
      </div>
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">About Okunland</h2>
          <p className="text-gray-700 mb-4">
            Okunland, located in Kogi State, Nigeria, is known for its rich
            history, cultural depth, and breathtaking landscapes. It is home to
            several thriving communities, historical landmarks, and an abundance
            of natural resources.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">1.2M+</h3>
            <p className="text-gray-600">Population</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">20+</h3>
            <p className="text-gray-600">Mineral Deposits</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">50+</h3>
            <p className="text-gray-600">Historical Sites</p>
          </div>
        </div>
      </section>

      {/* Mineral Resources */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Mineral Resources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Coal</li>
            <li>Limestone</li>
            <li>Marble</li>
            <li>Iron ore</li>
            <li>Clay</li>
          </ul>
        </div>
      </section>

      {/* Historical Sites */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Historical & Cultural Sites
          </h2>
          <p className="text-gray-700 mb-4">
            Okunland boasts several historical and cultural sites that attract
            tourists and researchers alike.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Idanre Hills</li>
            <li>Ogidi Cultural Festival Grounds</li>
            <li>Old churches and missionary sites</li>
          </ul>
        </div>
      </section>

      {/* Local Cuisine */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Local Cuisine</h2>
          <p className="text-gray-700">
            From delicious pounded yam to egusi soup and akara, Okunland is also
            known for its mouth-watering meals.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Visit Okunland</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Come experience the rich heritage, welcoming people, and untapped
          beauty of Okunland.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          Learn More
        </button>
      </section>
    </div>
  );
};

export default MapComponent;
