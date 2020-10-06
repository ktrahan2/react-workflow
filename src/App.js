import React, {Component} from 'react';
import './App.css';
import Container from './components/Container';

class App extends Component {
  
  state = {
    games: [
      {name: "Rainbow Six Siege", 
      image_url: "https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/en_US/dw44a8a154/images/large/5e159fce5cdf9a1ec45ad825.jpg"
    },
    {
      name: "Mario Galaxy", 
      image_url: "https://s1.gaming-cdn.com/images/products/6723/orig/super-mario-galaxy-switch-cover.jpg"
    }
    ]
  }


  render() {
    return (
      <div className="App">
        <Container games={this.state.games}/>  
      </div>
    );
  }
}

export default App;
