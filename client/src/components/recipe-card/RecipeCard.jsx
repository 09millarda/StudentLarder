import React, { Component } from 'react';

class RecipeCard extends Component {
  render() {
    return (
      <div className="card mb-4 box-shadow">
        <img src={this.props.recipe.image_url} alt="placeholder" className="card-img-top"/>
        <div className="card-body" style={{padding: '1.25rem'}}>
          <p className="card-text">{this.props.recipe.title} <span className="card-rating">{this.props.recipe.social_rank}%</span></p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Save</button>
            </div>
            <small><a href={this.props.recipe.source_url} className="text-muted external-link" title="Open in new tab">{this.props.recipe.publisher}</a></small>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;