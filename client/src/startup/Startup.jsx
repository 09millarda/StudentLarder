import { Component } from 'react';

class Startup extends Component {
  componentDidMount() {
    this.props.fetchTrendingRecipes();
    this.props.fetchTopRecipes();
  }

  render() {
    return this.props.children;
  }
}

export default Startup;