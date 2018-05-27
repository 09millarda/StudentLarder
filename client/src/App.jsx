import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/nav-bar/NavBar';
import Home from './components/home/HomeContainer';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import swal from 'sweetalert';
import Search from './components/search/search';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import root from './redux/reducers/root';

const store = createStore(root, {
  recipes: {
    topRecipes: [],
    trendingRecipes: []
  }
}, window.devToolsExtension && window.devToolsExtension());

class App extends Component {
  componentDidMount() {
    this.registerEventListeners();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <NavBar />
            <main role="main" style={{ flex: '1' }}>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/about" component={About} />
            </main>
            <Footer />
          </div>          
        </Router>
      </Provider>
    );
  }

  registerEventListeners() {
    const links = document.getElementsByClassName('external-link');
  
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        swal({
          title: 'Are you sure?',
          text: 'The link you just clicked is outside of out website, therefore we have no control over its contents.',
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
}

export default App;
