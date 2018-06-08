import { fetchTrendingRecipes, fetchTopRecipes } from './../redux/actions/recipes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Startup from './Startup';

const mapDispatchToProps = dispatch => {
  return bindActionCreators ({
    fetchTrendingRecipes,
    fetchTopRecipes
  }, dispatch);
}

const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Startup);