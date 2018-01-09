import React from 'react';
import PropTypes from 'prop-types';

import Blockquote from './blockquote.jsx';
import Buttons from './buttons.jsx';
import Form from './form.jsx';
import Headings from './headings.jsx';
import Icons from './icons.jsx';
import Lists from './lists.jsx';
import Paragraphs from './paragraphs.jsx';
import Alerts from '../_misc/alerts.jsx';
import Colours from './colours.jsx';

class Styleguide extends React.Component {
  render() {
    const alertData = [
      {
        "alertType": "success",
        "copy": "You have now subscribed successfully. Thankyou",
        "timeout": 500
      },
      {
        "alertType": "warning",
        "copy": "This is a warning about your siubmission, please try again.",
        "timeout": 1500
      },
      {
        "alertType": "error",
        "copy": "There was a problem completing your subscription, please try again."
      }
    ];
    return (
      <div className="styleguide">
        <Headings />
        <Paragraphs />
        <Colours />
        <Blockquote />
        <Lists />
        <Form />
        <Buttons />
        <Icons />

        <Alerts data={alertData} />
      </div>
    )
  }
}
module.exports = Styleguide;
export default Styleguide;