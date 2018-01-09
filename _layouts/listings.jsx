import React from 'react';
import PropTypes from 'prop-types';
import globalData from '../_data/global.json';

class Listings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pages = this.props.pages;
    let divStyle = {
        backgroundImage: `url(${globalData.clientImage})`
    };

    return (
      <div>
        <div className="main" id="main" role="main">

            <div className="client-image" style={divStyle}>
                <img className="client-logo" src={globalData.clientLogo} alt="Client Logo" height="50" />
            </div>


            <div className="site-files">
                <div className="container">
                    <header className="header" role="banner">
                            <a href="#" className="logo">
                                <img src="_bb/bb-logo.svg" alt="Building Blocks" width="83" height="50" />
                            </a>
                            <h1 className="project-title">
                                {globalData.title}
                            </h1>
                    </header>
                    <div className="content">

                        <h2 className="bb-page-title">Styleguide</h2>
                        <ul className="file-list">
                            <li className="file"><a href="styleguide.html?debug=js">Styleguide <span>styleguide.html</span></a></li>
                        </ul>

                        <div className="bb-page-list" data-page-type="fullPage">
                            <h2 className="bb-page-title">All Pages</h2>
                            <ul className="file-list">
                            {
                                pages.map(function (page, index) {
                                    return(
                                        <li key={index} className="file">
                                            <a href={page + '?debug=js'}>{page}</a>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>

                    </div>

                    <footer className="footer" role="contentinfo">
                        <p>&copy; Copyright 2018 Building Blocks Ltd.</p>
                    </footer>

                </div>
            </div>

        </div>
    </div>
    )
  }
}

Listings.propTypes = {
  pages: PropTypes.array,
  published: PropTypes.string
};

export default Listings;