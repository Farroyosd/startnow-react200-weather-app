import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
    return {
      searchHistory: store.citySelect.searchHistory
    };
  }
  export default connect(mapStoreToProps)(SearchHistory);