import { useEffect, useState } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"

export default function LocationMarker({onLocationFound}) {
    const [position, setPosition] = useState(null)

    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
        onLocationFound(e.latlng)
      },
    })

    
    useEffect(() => {
        if(map){
            map.locate()
        }
    },[map])
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }