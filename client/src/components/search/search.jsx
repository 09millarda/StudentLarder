import React, { Component } from 'react';
class Search extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: [],
      errMessage: undefined,
      ingredientKey: 0
    };
  }

  componentDidMount() {
    const ingredientInput = document.getElementById('ingredientInput');
    ingredientInput.addEventListener('keydown', () => {
      this.setState({
        errMessage: undefined
      });
    });
  }

  createErrorMessage(id, text) {
    id = `${id}-errMessage`;
    const errMessage = <p className="formError" id={id} style={{ marginBottom: '-5px' }}>{text}</p>;
    this.setState({
      errMessage
    });
  }

  onDeleteIngredient(e) {
    const ingredientItemKey = e.target.getAttribute('data-key');
    const ingredients = this.state.ingredients.slice(0);
    const ingredientsKeyArr = ingredients.map(i => i.props['data-key']);

    const index = ingredientsKeyArr.indexOf(ingredientItemKey);

    if (index > -1) {
      ingredients.splice(index, 1);
    }

    this.setState({
      ingredients,
      errMessage: undefined
    });
  }

  onAddIngredient(e) {
    e.preventDefault();
    const ingredientInput = document.getElementById('ingredientInput');
    const ingredient = ingredientInput.value;
    
    if (ingredient.length === 0 || ingredient.length > 25) {
      this.createErrorMessage(ingredientInput.getAttribute('id'), 'An ingredient must be between 1 and 25 characters in length');
    } else {
      const ingredientsKeyArr = this.state.ingredients.map(i => i.props['data-key'].toUpperCase());

      if (ingredientsKeyArr.indexOf(ingredient.toUpperCase()) === -1) {
        ingredientInput.value = '';
        const newIngredient = <li className="list-group-item ingredient" key={this.state.ingredientKey} data-key={ingredient} onClick={e => this.onDeleteIngredient(e)}>{ingredient}<span style={{ float: 'right', color: 'white', pointerEvents: 'none' }}><i className="fas fa-times" /></span></li>;
        const ingredients = this.state.ingredients.slice(0);
        ingredients.push(newIngredient);
        this.setState({
          ingredients,
          ingredientKey: this.state.ingredientKey + 1,
          errMessage: undefined
        });
      } else {
        this.createErrorMessage(ingredientInput.getAttribute('id'), 'This ingredient is already added');
      }      
    }
  }

  searchForRecipes = () => {
    this.props.clearSearchResults();
    this.props.searchForRecipes(this.state.ingredients.map(i => i.props['data-key']));
    this.props.history.push('/search/results');
  }

  render() {
    let clearButton = <button className="btn btn-link" style={{ width: '100%', textAlign: 'center' }} onClick={() => this.setState({ ingredients: [] })}>clear</button>;
    let searchButton = <button className="btn btn-primary px-5 mt-3" onClick={this.searchForRecipes}>Search</button>
    if (this.state.ingredients.length === 0) {
      clearButton = undefined;
      searchButton = undefined;
    }
    return (
      <div>
        <section className="jumbotron text-center" style={{ marginBottom: '0px' }}>
          <div className="container" style={{ width: '640px' }}>
            <h1 className="jumbotron-heading">Recipe Searcher</h1>
            <p className="text-muted lead">Search for great recipes by entering your ingredients below.</p>
          </div>
        </section>
        <div className="jumbotron bg-light">
          <div className="container" style={{ maxWidth: '500px' }}>
            <form onSubmit={e => this.onAddIngredient(e)}>
              <div className="form-group">
                <label htmlFor="ingredientInput" className="text-muted">Enter an ingredient</label>
                <div className="input-group">
                  <input type="text" name="ingredient" id="ingredientInput" maxLength="25" className="form-control" />
                  <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit" style={{ borderRadius: '0px 5px 5px 0px' }}>Add</button>
                  </span>
                </div>   
                {this.state.errMessage}        
              </div>
            </form>
          </div>
          <div className="container" style={{ maxWidth: '500px' }}>
            <hr/>
            <ul className="list-group" id="ingredientsList">
              {this.state.ingredients}
            </ul>
            <div className="text-center">
              {searchButton}          
            </div>
            {clearButton}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;