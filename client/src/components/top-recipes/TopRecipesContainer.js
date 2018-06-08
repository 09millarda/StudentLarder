import TopRecipes from './TopRecipes';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  topRecipes: state.recipes.topRecipes
});

export default connect(mapStateToProps)(TopRecipes);