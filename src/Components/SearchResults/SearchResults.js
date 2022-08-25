import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

class SearchResults extends React.Component {
    render() {
        return (
            <div className='SearchResults'>
                <h2>Search Results</h2>
                <Tracklist isRemoval={false} onAdd={this.props.onAdd} tracks={this.props.searchResults} />
            </div>
        );
    }
}

export default SearchResults;