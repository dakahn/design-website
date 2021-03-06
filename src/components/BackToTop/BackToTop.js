import React from 'react';
import { UpToTop20 } from '@carbon/icons-react';
import ScrollToTop from 'react-scroll-up';

export default class BackToTop extends React.Component {
  render() {
    return (
      <ScrollToTop showUnder={300} style={{ zIndex: 9999 }}>
        <button className="back-to-top" aria-label="Back to Top">
          <UpToTop20 />
        </button>
      </ScrollToTop>
    );
  }
}
