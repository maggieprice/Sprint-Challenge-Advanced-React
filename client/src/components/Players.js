import React from 'react';
import axios from 'axios';
export const url = "http://localhost:5000/api/players";
class Players extends React.Component{
    state = {
      players: [],
    };
    componentDidMount(){
    axios
    .get(url)
    .then(res => {
      this.setState({
        players: res.data
      });
      console.log(res);
    })

    .catch(err => console.log(err));
  }
render () {
return (
<div className='player-card' data-testid="data-list"> {this.state.players.map(player => (
<div className='playercard' key={player.id} data-testid="grid"> 
<h2>Player Name: {player.name}</h2>
<h3>Player Country: {player.country}</h3>
<p>Searches: {player.searches}</p>
</div>))}
</div>
);
     } 
    }

export default Players;