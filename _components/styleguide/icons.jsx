import React from 'react';
import PropTypes from 'prop-types';

class Icons extends React.Component {
  render() {
    return (
      <section className="block block--size-a">
        <header>
          <h2 className="header--stylesheet">Default buttons <small>(.btn)</small></h2>
        </header>
        <div className="icons">
          <ul className="list--unstyled">
            <li>
              <i className="icon icon--placeholder" aria-hidden="true"></i> .icon .icon--placeholder
            </li>
            <li>
              <i className="icon icon--arrow-left" aria-hidden="true"></i> .icon .icon--arrow-left
            </li>
            <li>
              <i className="icon icon--arrow-right" aria-hidden="true"></i> .icon .icon--arrow-right
            </li>
            <li>
              <i className="icon icon--arrow-up" aria-hidden="true"></i> .icon .icon--arrow-up
            </li>
            <li>
              <i className="icon icon--arrow-down" aria-hidden="true"></i> .icon .icon--arrow-down
            </li>
            <li>
              <i className="icon icon--chevron-up" aria-hidden="true"></i> .icon .icon--chevron-up
            </li>
            <li>
              <i className="icon icon--chevron-down" aria-hidden="true"></i> .icon .icon--chevron-down
            </li>
            <li>
              <i className="icon icon--x" aria-hidden="true"></i> .icon .icon--x
            </li>
            <li>
              <i className="icon icon--menu" aria-hidden="true"></i> .icon .icon--menu
            </li>
            <li>
              <i className="icon icon--check" aria-hidden="true"></i> .icon .icon--check
            </li>
          </ul>
        </div>
    </section>
    )
  }
}

export default Icons;