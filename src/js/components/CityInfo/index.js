import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
    return {
      cityData: store.citySelect.cityData
    };
  }
  export default connect(mapStoreToProps)(CityInfo);
  