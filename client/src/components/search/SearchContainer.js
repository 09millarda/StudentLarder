import { connect } from 'react-redux';
import { searchForRecipes, clearSearchResults } from './../../redux/actions/recipes';
import { bindActionCreators } from 'redux';
import Search from './Search';

const mapDispatchToProps = dispatch => {
  return bindActionCreators ({
    searchForRecipes,
    clearSearchResults
  }, dispatch);
}

const mapStateToProps = state => {
  return {
    results: state.recipes.results
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);