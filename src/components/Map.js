import {MapContainer, TileLayer, Marker,Tooltip} from 'react-leaflet'
import React, {Component} from "react";
import "../public/assets/styles/map.css"
import 'leaflet/dist/leaflet.css';
import mapIcon from "../public/assets/images/map-icon.png"
import L from "leaflet"
class Map extends Component{

    render(){
        
        const data = this.props.dataToShow;
        const lat = data.coord.lat
        const lon = data.coord.lon
        const customIcon = new L.Icon({//creating a custom icon to use in Marker
            iconUrl: mapIcon,
            iconSize: [35, 35],
            iconAnchor: [30, 30]
          });
      
        return (
            <div className="map-container" key={data.name}>
            <MapContainer className='leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-retina leaflet-container' center={[lat,lon]} zoom={13} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon = {customIcon} position ={[lat,lon]}>
                    <Tooltip>Bem vindo a {data.name}</Tooltip>
                </Marker>
            </MapContainer>
            </div>

        );
    }



}

export default Map;