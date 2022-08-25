import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    render() {
        return (
            <div className='Playlist'>
                <input onChange={this.handleNameChange} value={this.props.playlistName} />
                <Tracklist onRemove={this.props.onRemove} isRemoval={true} tracks={this.props.playlistTracks} />
                <button onClick={this.props.onSave} className='Playlist-save'>SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;