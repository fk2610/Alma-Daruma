import { connect } from 'react-redux';
import Loader from './Loader';

const mapStateToProps = (state) => {
  const { rootReducer } = state;
  return {
    loading: rootReducer.loading,
  };
};

export default connect(mapStateToProps)(Loader);
