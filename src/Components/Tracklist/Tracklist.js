import React from 'react';
import Track from '../Track/Track'
import './Tracklist.css';

class Tracklist extends React.Component {
    render() {
        return (
            <div className='Tracklist'>
                {
                    this.props.tracks.map(track => {
                        return <Track isRemoval={this.props.isRemoval} onAdd={this.props.onAdd} onRemove={this.props.onRemove} track={track} key={track.id} />
                    })
                }
            </div>
        );
    }
}

export default Tracklist;