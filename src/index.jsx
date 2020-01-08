import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titles: [],
    };
    this.loadTitlesFromWikipedia = this.loadTitlesFromWikipedia.bind(this);
  }

  loadTitlesFromWikipedia() {
    fetch('https://ja.wikipedia.org/w/api.php?action=query&format=json&list=random&rnlimit=30&rnnamespace=0&origin=*')
    .then(response => response.json())
    .then((res) => {
      this.setState({
        titles: res.query.random.map((v) => v.title),
      });
    });
  }

  render() {
    return (
      <div>
        <button className="gacha-button" onClick={this.loadTitlesFromWikipedia}>Wikipedia から記事タイトルをガチャる</button>
        <ul className="random-table">
          {this.state.titles.map((title) => (<li key={title}>{title}</li>))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
