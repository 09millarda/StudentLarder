import { connect } from 'react-redux';
import Results from './Results';

const mapStateToProps = state => {
  return {
    results: state.recipes.results
  }
};

export default connect(mapStateToProps)(Results);