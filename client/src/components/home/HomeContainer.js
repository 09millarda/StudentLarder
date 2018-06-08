import Home from './Home';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  trendingRecipes: state.recipes.trendingRecipes
});

export default connect(mapStateToProps)(Home);