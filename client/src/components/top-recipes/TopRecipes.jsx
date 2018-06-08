import React, { Component } from 'react';
import RecipeCard from './../recipe-card/RecipeCard';

class TopRecipes extends Component {
  render() {
    const recipeCards = this.props.topRecipes.map((value, index) => {
      const recipe = {
        publisher: value.publisher,
        title: value.title,
        social_rank: parseFloat(value.social_rank).toFixed(0),
        source_url: value.source_url,
        image_url: value.image_url,
        publisher_url: value.publisher_url
      };
      return (
        <div className="col-md-4" key={index}>
          <RecipeCard recipe={recipe} />
        </div>
      );
    });
    return (
      <div>
        <section className="jumbotron text-center" style={{ marginBottom: '0px' }}>
          <div className="container" style={{ width: '640px' }}>
            <h1 className="jumbotron-heading">Top Recipes</h1>     
            <p className="lead text-muted my-0">The top 30 most popular recipes.</p>
          </div>
        </section>
        <div className="bg-light py-4">
          <div className="container">
            <div className="row">
              {recipeCards}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopRecipes;