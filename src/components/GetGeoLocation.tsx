/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { showToast } from './Toast';

interface GeolocationComponentProps {
  setCoordinates: (coords: [number, number]) => void;
}

const GeolocationComponent: React.FC<GeolocationComponentProps> = ({ setCoordinates }) => {
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const getLocation = (): void => {
    setLoading(true);
    setStatus('Requesting location access...');
    
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
      showToast({msg:'Geolocation is not supported by your browser',type:'error'})
      setLoading(false);
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const { longitude, latitude } = position.coords;
        // Note: API expects [longitude, latitude] format for GeoJSON points
        setCoordinates([longitude, latitude]);
        setStatus(`Location found at: [${longitude.toFixed(6)}, ${latitude.toFixed(6)}]`);
        showToast({msg:`Location found at: [${longitude.toFixed(6)}, ${latitude.toFixed(6)}]`,type:'success'})
        setLoading(false);
      },
      (error: GeolocationPositionError) => {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            setStatus("Location request denied. Please allow location access.");
            showToast({msg: "Location request denied. Please allow location access.",type:'error'})
            break;
          case error.POSITION_UNAVAILABLE:
            setStatus("Location information is unavailable.");
            showToast({msg: "Location information is unavailable.",type:'error'})
            break;
          case error.TIMEOUT:
            setStatus("The request to get location timed out.");
            showToast({msg:"The request to get location timed out.",type:'error'})
            break;
          default:
            setStatus("An unknown error occurred.");
            showToast({msg:"An unknown error occurred.",type:'error'})
        }
        setLoading(false);
      },
      { 
        enableHighAccuracy: true,  // Use GPS if available
        timeout: 5000,             // Time to wait for location
        maximumAge: 0              // Always get fresh location
      }
    );
  };

  return (
    <div className="">
      <button
        type="button"
        onClick={getLocation}
        disabled={loading}
        className="bg-primary text-[#fff] text-sm  w-full p-3 rounded-md hover:bg-primary transition duration-200 disabled:bg-blue-300"
      >
        {loading ? "Getting location..." : "Find location"}
      </button>
      
      {/* {status && (
        <p className="text-sm text-gray-600">{status}</p>
      )} */}
    </div>
  );
};

export default GeolocationComponent;

