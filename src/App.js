import React, { Component } from 'react';
import './App.css';

import VirtualScreen from './components/VirtualScreen';
import Timer from './components/Timer';
import Login from './components/Login';
import CreatePet from './components/CreatePet';
import { auth, database } from './firebase';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      pets: null,
      pet: null
    }

    this.petsRef = database.ref('pets');
    this.getActivePet = this.getActivePet.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });

      if(currentUser) {
        this.petsRef.orderByChild('user').equalTo(this.state.currentUser.uid).limitToFirst(1).on('value', snapshot => {
          this.setState({ pets: snapshot.val() });
        });
      }
    });
  }

  getActivePet() {
    let activePet = this.state.pets[Object.keys(this.state.pets)[0]];
    return activePet;
  }

  render() {
    const { currentUser, pets } = this.state;

    return (
      <div className="App">
        <div>{!currentUser && <Login />}</div>
        {currentUser && (
          <div className="app-main">
            {pets && (
              <div>
                <VirtualScreen currentUser={currentUser} pet={this.getActivePet()}/>
              </div>
            )}
            {!pets && (
              <CreatePet currentUser={currentUser} />
            )}
            <button onClick={() => auth.signOut()}>Log out</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
