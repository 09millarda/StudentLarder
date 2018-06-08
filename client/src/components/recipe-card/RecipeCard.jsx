import React, { Component } from 'react';

class RecipeCard extends Component {
  render() {
    return (
      <div className="card mb-4 box-shadow">
        <div className="recipe-image" style={{ backgroundImage: `url(${this.props.recipe.image_url})` }} />
        <div className="card-body" style={{padding: '1.25rem'}}>
          <div className="row ">
            <div className="col-sm-9" style={{ height: '2.8em', lineHeight: '1.3em', overflow: 'hidden' }}>{this.props.recipe.title}</div>
            <div className="col-sm-3 card-rating">{this.props.recipe.social_rank}%</div>
          </div>
          <div className="d-flex justify-content-between align-items-center" style={{ marginRight: '0px !important' }}>
            <div className="btn-group">
              <a href={this.props.recipe.source_url} className="btn btn-sm btn-outline-secondary external-link" title="Open in new tab">View</a>
              <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => this.onSaveRecipe()}>Save</button>
            </div>
            <small><a href={this.props.recipe.publisher_url} target="_blank" className="text-muted external-link" title="Open in new tab">{this.props.recipe.publisher}</a></small>
          </div>
        </div>
      </div>
    );
  }

  onSaveRecipe = () => {
    console.log(this.props.recipe);
  }
}

export default RecipeCard;