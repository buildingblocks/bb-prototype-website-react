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
        "copy": "There was a problem completing your subscription, please try again.",
        "timeout": 1500
      },
      {
        "alertType": "notice",
        "copy": "There was a problem completing your subscription, please try again.",
        "timeout": 2500
      },
      {
        "alertType": "error",
        "copy": "There was a problem completing your subscription, please try again."
      }
    ];
    return (
      <div>
        <Headings />
        <Paragraphs />
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

export default Styleguide;