import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   name: { firstName: 'Prem', lastName: 'Kodali' },
    //   company: 'iProtechs'
    // }
    // this.myVar = {name:'OK'};

    // this.state = {
    //   monsters: [
    //     { name: 'Linda', id: 1 },
    //     { name: 'Frank', id: 2 },
    //     { name: 'Jacky', id: 3 },
    //     { name: 'Andrei', id: 4 }
    //   ]
    // }

    // this.state = {
    //   monsters: [],
    //   filteredMonsters: [],
    // }

    this.state = {
      monsters: [],
      searchString: '',
    }
  }

  async componentDidMount() {
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    this.setState({ monsters: users, 
      // filteredMonsters: users 
    });
  }

  onSearch = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState({ searchString });
  }

  render() {
    const swfMonsters = [];
    const incfMonsters = [];
    this.state.monsters.forEach(monster => {
      if (monster.name.toLowerCase().startsWith(this.state.searchString)) {
        swfMonsters.push(monster);
        return;
      }
      if (monster.name.toLowerCase().includes(this.state.searchString)) {
        incfMonsters.push(monster);
      }
    });
    const filteredMonsters = [...swfMonsters, ...incfMonsters];

    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Hi, I am {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}.
      //     </p>
      //     <button onClick={()=>{
      //       // this.setState({ name: { firstName: 'Premchand', lastName: this.state.name.lastName } }, () => {console.log(2, this.state);
      //       // });
      //       // console.log(3, this.state);
      //       this.setState((state, props) => {
      //         console.log(1, state, props);
      //         return { name: { firstName: 'Premchand', lastName: this.state.name.lastName } }
      //       }, () => {
      //         console.log(2, this.state);
      //       });
      //       console.log(3, this.state);
            
      //     }}>Change Name</button>
      //     {/* <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p> */}
      //     {/* <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a> */}
      //   </header>
      // </div>

      // <div className='App'>
      //   <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
      //     if (event.target.value === '') {
      //       this.setState({ filteredMonsters: this.state.monsters });
      //       return;
      //     }
      //     const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLowerCase().startsWith(event.target.value.toLowerCase()));
      //     this.setState({ filteredMonsters: filteredMonsters }, () => console.log(77));
      //     filteredMonsters.push(...this.state.monsters.filter((monster) => !monster.name.toLowerCase().startsWith(event.target.value.toLowerCase()) && monster.name.toLowerCase().includes(event.target.value.toLowerCase())));
      //     this.setState({ filteredMonsters: filteredMonsters }, () => console.log(79));
      //   }} />
      //   {
      //     this.state.filteredMonsters.map(monster => <div key={monster.id}><h1>{monster.name}</h1></div>)
      //   }
      // </div>

      <div className='App'>
        <input className='search-box' type='search' placeholder='search monsters' onChange={this.onSearch} />
        {
          filteredMonsters.map(monster => <div key={monster.id}><h1>{monster.name}</h1></div>)
        }
      </div>
    );
  }
}

export default App;