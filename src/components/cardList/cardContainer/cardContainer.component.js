import { Component } from "react";
import './card.styles.css';

class CardContainer extends Component {
  render() {
    const { id, name } = this.props.monster;
    return (
      <div className='card-container' key={id}>
        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
        <h2>{name}</h2>
        <p>{this.props.monster.email}</p>
      </div>
    );
  }
}

export default CardContainer;