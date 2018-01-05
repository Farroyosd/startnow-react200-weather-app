import { connect } from 'react-redux';
import CitySelect from './CitySelect';


function mapStoreToProps(store) {
  return {
    cityData: store.citySelect.cityData
  };
}


export default connect(mapStoreToProps)(CitySelect);