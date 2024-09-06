import { Component } from 'react';

class CardList extends Component {
    render() {
        return (
            this.props.monsters.map(monster => <div key={monster.id}><h1>{monster.name}</h1></div>)
        );
    }
}

export default CardList;