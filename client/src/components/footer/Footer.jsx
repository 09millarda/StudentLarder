import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="text-muted footer navbar-fixed-bottom">
        <div className="container">
          <p className="float-right">
            <button onClick={() => document.documentElement.scrollTop = 0} className="btn btn-link">Back to top</button>
          </p>
          <p style={{ fontWeight: '600' }}>© Copyright Alistair Millard 2018</p>
          <div style={{ height: '5px' }} />
          <p>You can view more of my work on my GitHub page <a href="https://www.github.com/09millarda" target="_blank" rel="noopener noreferrer">here</a></p>
        </div>
      </footer>
    ); 
  }
}

export default Footer;