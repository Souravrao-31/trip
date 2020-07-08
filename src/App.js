import React from 'react';
import {Nav} from './components/Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AddTrip} from './components/Trip/AddTrip';
import {TripList} from './components/Trip/TripList';


//We are making Class here 
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTrips: [
        {
          place: "Indore",
          date: "04-05-2016",
          type: "club"
        },
        {
          place: "Mumbai",
          date: "08-12-2019",
          type: "Adventure"
        },
      ],
    };
    this.addTrip = this.addTrip.bind(this)
  }


  addTrip(newTrip) {
    this.setState((prevState) => {
      return {
        allTrips: [...prevState.allTrips, newTrip]
      };
    });
  }

  render() {
    return (
      <Router> 
      <div className="route-container">
        <Nav/>
        <switch>
         <Route 
           path ="/list"
           render = {(props) => (
             <TripList {...props} trips={this.state.allTrips} />
           )
          }
         />

          <Route
              path="/add"
              render={(props) => (
                 <AddTrip {...props} AddNewTrip={this.addTrip} />
                 )}
          />
          </switch>
      </div>
      </Router>
    );
  }
}
export default App;
