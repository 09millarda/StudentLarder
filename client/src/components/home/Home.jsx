import React, { Component } from 'react';
import RecipeCard from '../recipe-card/RecipeCard';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor (props) {
    super (props);
  }

  componentDidMount () {
    this.props.fetchTrendingRecipes();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render () {
    const recipe = {
      publisher: 'The Pioneer Woman',
      title: 'Perfect Iced Coffee',
      social_rank: 100,
      source_url: 'http://thepioneerwoman.com/cooking/2011/06/perfect-iced-coffee/',
      image_url: 'http://static.food2fork.com/icedcoffee5766.jpg'
    };

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
            <div className="row">
              <div className="col-md-4">
                <RecipeCard recipe={recipe} />
              </div>
              <div className="col-md-4">
                <RecipeCard recipe={recipe} />
              </div>
              <div className="col-md-4">
                <RecipeCard recipe={recipe} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;