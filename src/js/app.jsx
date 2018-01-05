import React from 'react';
import CitySelect from './components/CitySelect';
import CityInfo from './components/CityInfo';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
  }



  render() {
    
    
    return (
      <div className='container'>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Origin Weather Application</h1>
            <p className="lead">Always know if you'll need an umbrella!</p>
          </div>
        </div>

        <CitySelect/>

        <div className="row">
          <CityInfo />
          <SearchHistory />
        </div>
      </div>
    );
  }
}
