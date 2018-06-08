import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/nav-bar/NavBar';
import Home from './components/home/HomeContainer';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import swal from 'sweetalert';
import Search from './components/search/SearchContainer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import root  from './redux/reducers/root';
import thunk from 'redux-thunk';
import $ from 'jquery';
import TopRecipes from './components/top-recipes/TopRecipesContainer';
import Startup from './startup/StartupContainer';
import Results from './components/results/ResultsContainer';

const middleware = applyMiddleware(thunk);

const store = createStore(
  root,
  middleware
);

class App extends Component {
  componentDidMount() {
    this.registerEventListeners();
  }

  render() {
    return (
      <Provider store={store}>
        <Startup>
          <Router>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <NavBar />
              <main role="main" style={{ flex: '1' }}>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/search/results" component={Results} />
                <Route exact path="/about" component={About} />
                <Route exact path="/top-recipes" component={TopRecipes} />
              </main>
              <Footer />
            </div>          
          </Router>
        </Startup>
      </Provider>
    );
  }

  registerEventListeners() {
    $(document).on('click', '.external-link', e => {
      e.preventDefault();
      
      const link = e.target.getAttribute('href');

      swal({
        title: 'Are you sure?',
        text: 'The link you just clicked is outside of this website, therefore we have no control over its contents.',
        icon: 'warning',
        buttons: {
          cancel: 'Stay',
          continue: 'Continue'
        }
      })
      .then(value => {
        switch (value) {
          case 'continue':
            window.open(link, '_blank');
            break;
          default:
            // link not visited
        }
      });
    });
  }
}

export default App;
