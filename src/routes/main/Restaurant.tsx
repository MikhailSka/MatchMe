import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

import axios from 'axios';

const libraries: ("places")[] = ["places"];

interface Location {
  lat: number;
  lng: number;
}

interface Restaurant {
  place_id: string;
  geometry: {
    location: Location;
  };
  name: string;
  vicinity: string;
}

function Restaurant() {
  const [location, setLocation] = useState<Location>({ lat: 40.730610, lng: -73.935242 });
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selected, setSelected] = useState<Restaurant | null>(null);

  const onMapClick = useCallback(async (event: google.maps.MouseEvent) => {
    const lat = event.latLng?.lat();
    const lng = event.latLng?.lng();

    if (!lat || !lng) return; 

    setLocation({ lat, lng });

    try {
        const response = await axios.get(`http://localhost:3001/api/restaurants?lat=${lat}&lng=${lng}`);
        setRestaurants(response.data.results);
    } catch (error) {
        console.error("Error fetching data from the server:", error);
    }
}, []);
  return "hello";
}

export default Restaurant;
