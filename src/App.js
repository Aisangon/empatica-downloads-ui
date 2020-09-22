import React, { Component} from 'react';
import './App.css';
import DownloadMap from './components/Map'
import StatsDialog from './components/Dialog'

class App extends Component {
    state = {
        downloads: [],
        stats: {}
    }

    componentDidMount() {
        const getDownloads = fetch('http://localhost:8888/api/downloads')
        .then(response => response.json())
        .then(data => this.setState({ downloads: data.downloads }))

        const getStats = fetch('http://localhost:8888/api/stats')
        .then(response => response.json())
        .then(data => this.setState({ stats: data.stats }))

        Promise.all([getDownloads, getStats])
    }

    render() {
        return (
            <React.Fragment>
                <StatsDialog stats={this.state.stats}></StatsDialog>
                <DownloadMap downloads={this.state.downloads}></DownloadMap>
            </React.Fragment>
        );
    }
}

export default App;
