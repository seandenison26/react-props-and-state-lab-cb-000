import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  changeType = (type) => {
    this.setState({filters: {type: type}})
  }

  find = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all') url += `?type=${this.state.filters.type}`
    fetch(url).then(pets => this.setState({pets: pets}))
  }

  adopt = (pet) => {
    this.setState({adoptedPets: this.state.adoptedPets.concat(pet)})
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.changeType} onFindPetsClick={this.find}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.adopt}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
