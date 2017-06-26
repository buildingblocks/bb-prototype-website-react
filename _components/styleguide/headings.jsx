import React from 'react';
import PropTypes from 'prop-types';

class Headings extends React.Component {
  render() {
    return (
      <section className="block block--size-a">
        <header>
          <h2 className="header--stylesheet">Headings</h2>
        </header>
        <h1>H1.	Cras justo odio, dapibus</h1>
        <h2>H2. Cras justo odio, dapibus</h2>
        <h3>H3. Cras justo odio, dapibus</h3>
        <h4>H4. Cras justo odio, dapibus</h4>
        <h5>H5. Cras justo odio, dapibus</h5>
      </section>

    )
  }
}

export default Headings;