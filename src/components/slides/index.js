import React from 'react';
// images
import logo from '../../img/deque-logo-white.png';

// NOTE: for code blocks use --> import Highlight from 'react-highlight';

const slides = [
  // title slide
  (
    <div>
      <div className='logo'>
        <img src={logo} alt='Deque' width={'110'} />
      </div>
      <h1>Designers and Developers Working Together - Mass Hysteria! (And Accessible Websites!)</h1>
      <div className='by-who'>
        <p>By Caitlin Geier and Harris Schneiderman</p>
        <p>Deque Systems</p>
        <p className="offscreen">Use arrow keys to navigate through slides</p>
      </div>
    </div>
  ),
  (
    <div>
      <h2>Slide 2 blah blah blah</h2>
    </div>
  ),
  (
    <div>
      <h2>Slide 3 Caitlin testing it out and stuff</h2>
    </div>
  )
];

export default slides;
export const length = slides.length;
