import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props) {
    super(props)
  }
  adopted = (pet) => {
    return this.props.adoptedPets.indexOf(pet.id) > -1 ? true : false
  }



  render() {
    const pets = this.props.pets.map(pet => <Pet onAdoptPet={this.props.onAdoptPet} isAdopted={this.adopted(pet)}/>)

    return (
      <div className="ui cards">
          {pets}
      </div>
    );
  }
}

export default PetBrowser;
