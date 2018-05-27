import Home from './Home';
import { connect } from 'react-redux';
import { fetchTrendingRecipes } from './../../redux/actions/recipes';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchTrendingRecipes
  }, dispatch);
}

const mapStateToProps = state => ({
  trendingRecipes: state.recipes.trendingRecipes
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);