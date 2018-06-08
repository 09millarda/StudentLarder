import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './../carousel/Carousel';

class Home extends Component {
  render () {
    return (
      <div>
        <section className="jumbotron text-center" style={{ marginBottom: '0px' }}>
          <div className="container" style={{ width: '640px' }}>
            <h1 className="jumbotron-heading">Student Larder</h1>     
            <p className="lead text-muted">Use up those weird ingredients at the back of your larder by searching for recipes using the ingredients you want to use. Find tasty, new meals, save waste and save money!</p>     
            <p>
              <Link to="/search" className="btn btn-primary my-2">Start now</Link>
              &nbsp;
              <Link to="/about" className="btn btn-secondary my-2">Find out more</Link>
            </p>
          </div>
        </section>
        <div className="bg-light">
          <div className="text-center py-4">
            <h2>Trending Recipes</h2>
          </div> 
          <div className="container">
            <Carousel recipes={this.props.trendingRecipes} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;