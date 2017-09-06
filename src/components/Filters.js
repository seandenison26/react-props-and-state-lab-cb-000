import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.filters.type
    }
  }

  find = () => {
    this.props.onFindPetsClick()
  }

  type = (e) => {
    this.setState({type:e.target.value})
    this.props.onChangeType(e.target.value)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select value={this.state.type} name="type" id="type" onChange={this.type}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.find} className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
