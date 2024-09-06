import { Component } from 'react';
import './card-list.styles.css';
import CardContainer from './cardContainer/cardContainer.component';

class CardList extends Component {
    render() {
        return (
            <div className='card-list'>
                {
                    this.props.monsters.map(monster => <CardContainer monster={monster} />)
                }
            </div>
        );
    }
}

export default CardList;