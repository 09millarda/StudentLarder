import React, { Component } from 'react';
import RecipeCard from './../recipe-card/RecipeCard';

const results = results => {
  return results.map((value, index) => {
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
};

const noResults = () => {
  return (
    <div className="text-center" style={{ width: '100%' }}>
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
      <p className="text-lead" style={{ letterSpacing: '1px' }}>LOADING...</p>
    </div>
  );
};

class Results extends Component {
  render() {
    let contentToRender = this.props.results.length > 0 ? results(this.props.results) : noResults();

    return (
      <div>
        <section className="jumbotron text-center" style={{ marginBottom: '0px' }}>
          <div className="container" style={{ width: '640px' }}>
            <h1 className="jumbotron-heading">Search Results</h1>
            <p className="lead text-muted my-0">This is what we found. Looks tasty...</p>
          </div>
        </section>
        <div className="bg-light py-4">
          <div className="container">
            <div className="row">
              {contentToRender}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;