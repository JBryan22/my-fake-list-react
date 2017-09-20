import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import MyFakeList from './components/my_fake_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { list: ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5', 'List item 6'] };

  }


//i am setting the state of videos in the main index file because these list items should be viewable across the entire page, thus we put it in the base/root file that everything else is connected to.

  render() {
    return (
      <div>
        <SearchBar />
        <MyFakeList list={this.state.list} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
