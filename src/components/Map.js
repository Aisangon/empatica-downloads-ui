import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class DownloadMap extends Component {

    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    }

    render() {
        return(
            this.props.downloads ?
                <Map 
                    center={[this.state.lat, this.state.lng]} 
                    zoom={this.state.zoom}
                    style={{ width: '100%', height: '900px'}}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        this.props.downloads.map((download, idx) => {
                            const markerPosition = [download.longitude, download.latitude]
                            const t = new Date(download.downloaded_at);
                            const formattedDate = t.toUTCString()
                            return(
                                <Marker key={`marker-${idx}`} position={markerPosition}>
                                    <Popup>
                                        User app id: {download.app_id} <br/> downloaded on: {formattedDate}
                                    </Popup>
                                </Marker>
                            )
                        })
                    }
                </Map>
            :
            'Data is loading...'
        )
    }
}