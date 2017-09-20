import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {

    super(props);

    this.state = { searchTerm: '' };

  }

  render() {
    return (
      <div>
        <input value={this.state.searchTerm} onChange={(event) => this.setState({ searchTerm: event.target.value})} />
        <p>{this.state.searchTerm}</p>
      </div>
    );
  }
}

export default SearchBar;
