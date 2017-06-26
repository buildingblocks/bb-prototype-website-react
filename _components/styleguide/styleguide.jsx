import React from 'react';
import PropTypes from 'prop-types';

import Blockquote from './blockquote.jsx';
import Buttons from './buttons.jsx';
import Form from './form.jsx';
import Headings from './headings.jsx';
import Icons from './icons.jsx';
import Lists from './lists.jsx';
import Paragraphs from './paragraphs.jsx';

class Styleguide extends React.Component {
  render() {
    return (
      <div>
        <Headings />
        <Paragraphs />
        <Blockquote />
        <Lists />
        <Form />
        <Buttons />
        <Icons />
      </div>
    )
  }
}

export default Styleguide;