import React, { Component } from 'react';

let fakeServerData = {
  user: {
    name: "Erik Rudhe"
  }
};


function Header(){
  return(
    <header className="navbar">
      <h3>Welcome to vizspo {fakeServerData.user.name}</h3>
    </header>
  )
}

class MainContent extends Component{
  render(){
    return(
      <div>
        Number text
      </div>
    )
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      serverData: {}
    }
  }
  componentDidMount(){
    this.setState({serverData: fakeServerData});
  }
/*
 componentDidMount(){
    
  fetch('https://api.spotify.com/v1/me', {
    headers: {'Authorization: Bearer' + accessToken}
  }).then(response => response.json())
  .then(data => console.log(data))
 }
 */

  render() {
    
    let text = "Log into spotify";

    return ( 
      <div>
        <Header/>
        <MainContent/>
      </div> 
      
    )} 
  }


export default App;
