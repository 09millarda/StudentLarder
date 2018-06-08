import React, { Component } from 'react';
import RecipeCard from '../recipe-card/RecipeCard';

class Carousel extends Component {
  render() {
    const recipeCards = this.props.recipes.map((value, index) => {
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

    const panels = [];

    for (let i = 0; i < recipeCards.length; i++) {
      let classNames = 'carousel-item';
      if (i === 0) classNames += ' active';

      panels.push(
        (
          <div className={classNames} key={i}>
            <div className="row">
              {recipeCards.slice(i, i+3)}
            </div>
          </div>
        )
      )
    }

    return (
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {panels}
        </div>
      </div>
    );
  }
}

export default Carousel;