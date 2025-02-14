'use client';
import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Maps = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
          version: 'weekly',
        });

        const mapsLibrary = await loader.importLibrary('maps') as google.maps.MapsLibrary;
        const markerLibrary = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

        const { Map } = mapsLibrary;
        const { Marker } = markerLibrary;

        const position = { lat: 28.571562, lng: 77.269652 };

        const map = new Map(mapRef.current as HTMLDivElement, {
          center: position,
          zoom: 20,
        });

        new Marker({
          map: map,
          position: position,
        });
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, []);

  return (
    <div style={{ height: '700px', position: 'relative' }}>
      <div ref={mapRef} style={{ height: '100%' }} />
    </div>
  );
};

export default Maps;
