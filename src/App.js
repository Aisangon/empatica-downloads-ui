import React, { Component} from 'react';
import './App.css';
import DownloadMap from './components/Map'

class App extends Component {
    state = {
        downloads: [
            {
                longitude: 51.505, 
                latitude: -0.09,
                app_id: "1234",
                downloaded_at: Date.now()
            },
            {
                longitude: 52.505, 
                latitude: -0.012,
                app_id: "6789",
                downloaded_at: Date.now()
            }
        ]
    }
    render() {
        return (
            <DownloadMap downloads={this.state.downloads}></DownloadMap>
        );
    }
}

export default App;
