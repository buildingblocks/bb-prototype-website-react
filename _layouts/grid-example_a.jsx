import React from 'react';
import PropTypes from 'prop-types';

// header and footer to be included on every page
import Header from '../_components/header.jsx';
import Footer from '../_components/footer.jsx';
import Grid from '../_components/grid.jsx';

// add components here

class StyleguidePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const pageClassName = this.props.pageClassName ? this.props.pageClassName : '';
    const visibleGrid = this.props.visibleGrid;

    return (
      <div>
        <Header />
        <div id="page" className={pageClassName}>
          <main className="main" role="main">

            <div className="layout layout--a">
              <div className="region region--a">
                <div className="region-inner">

                  {/* React App component */}
                  <div id="react-app-component" className="react-app-component block block--size-a"></div>

                  <article className="gridblock block block--size-a">
                    <h1 className="gridblock__title">.block--size-a</h1>
                    <p className="gridblock__body">100% width at all break points.</p>
                  </article>

                  <article className="gridblock block block--size-b">
                    <h1 className="gridblock__title">.block--size-b</h1>
                    <p className="gridblock__body">100% width up to break-point-d. 66% over break-point-d</p>
                  </article>
              
                  <article className="gridblock block block--size-c">
                    <h1 className="gridblock__title">.block--size-c</h1>
                    <p className="gridblock__body">100% width up to break-point-d. 33% over break-point-d</p>
                  </article>


                  <article className="gridblock block block--size-d">
                    <h1 className="gridblock__title">.block--size-d</h1>
                    <p className="gridblock__body">100% width up to break-point-d. 50% over break-point-d</p>
                  </article>
              
                  <article className="gridblock block block--size-d">
                    <h1 className="gridblock__title">.block--size-d</h1>
                    <p className="gridblock__body">100% width up to break-point-d. 50% over break-point-d</p>
                  </article>


                  <article className="gridblock block block--size-e">
                    <h1 className="gridblock__title">.block--size-e</h1>
                    <p className="gridblock__body">100% width up to break-point-d. 60% over break-point-d</p>
                  </article>
              

                  <article className="gridblock block block--size-f">
                    <h1 className="gridblock__title">.block--size-f</h1>
                    <p className="gridblock__body">100% width up to break-point-d. 40% over break-point-d</p>
                  </article>
              


                  <article className="gridblock block block--size-g">
                    <h1 className="gridblock__title">.block--size-g</h1>
                    <p className="gridblock__body">100% width up to break-point-d. 25% over break-point-d</p>
                  </article>

                  <article className="gridblock block block--size-g">
                    <h1 className="gridblock__title">.block--size-g</h1>
                    <p className="gridblock__body">100% width up to break-point-d. 25% over break-point-d</p>
                  </article>
              
                  <article className="gridblock block block--size-g">
                    <h1 className="gridblock__title">.block--size-g</h1>
                    <p className="gridblock__body">100% width up to break-point-d. 25% over break-point-d</p>
                  </article>
              
                  <article className="gridblock block block--size-g">
                    <h1 className="gridblock__title">.block--size-g</h1>
                    <p className="gridblock__body">100% width up to break-point-d. 25% over break-point-d</p>
                  </article>
              

                </div>
              </div>
            </div>

            {
              visibleGrid ? 
              <Grid />
              : null
            }

          </main>
        </div>
        <Footer />
      </div>
    )
  }
}

export default StyleguidePage;