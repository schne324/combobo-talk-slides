import React from 'react';
// images
import logo from '../../img/deque-logo-white.png';
import caitlin from '../../img/caitlin.jpg';
import harris from '../../img/harris.jpg';
import oldFilters from '../../img/old-assure-filters.png';
import multiExample1 from '../../img/multiselect-combobox-example-1.png';
import multiExample2 from '../../img/multiselect-combobox-example-2.png';
import singleExample1 from '../../img/single-select-combobox-example-1.png';
import singleExample2 from '../../img/single-select-combobox-example-2.png';

// NOTE: for code blocks use --> import Highlight from 'react-highlight';

const slides = [
  // title slide
  (
    <div>
      <div className='logo'>
        <img src={logo} alt='Deque' width={'110'} />
      </div>
      <h1 className="title-slide">Designers and Developers Working Together - Mass Hysteria!</h1>
      <h2>(And Accessible Websites!)</h2>
      <div className='by-who'>
        &nbsp;
        <p>Caitlin Geier and Harris Schneiderman</p>
        <p className="offscreen">Use arrow keys to navigate through slides</p>
      </div>
    </div>
  ),
  (
    <div>
      <h2 className="title-offscreen">Who we are</h2>
      <div className="two-col profile">
        <img src={harris} alt="" />
        <h3>Harris Schneiderman</h3>
        <p>Developer</p>
      </div>
      <div className="two-col profile">
        <img src={caitlin} alt="" />
        <h3>Caitlin Geier</h3>
        <p>UX Designer</p>
      </div>
    </div>
  ),
  (
    <div>
      <h2>What We Do</h2>
      <p>We work for <strong>Deque Systems</strong>.</p>
      &nbsp;
      <p>We design and build <strong>web applications</strong> to help <strong>development teams</strong> perform <strong>accessibility testing</strong>.</p>
    </div>
  ),
  (
    <div>
      <h2>Today, we&#39;re talking about:</h2>
      <ul>
        <li>Collaboration</li>
        <li>Comboboxes</li>
        <li>Accessibility</li>
        <li>How it can All Go Wrong</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h2 className="title-centered">Framing the Problem</h2>
      <div className="full-image">
        <img src={oldFilters} width="400px;" alt="multi-select filters in WorldSpace Assure prior to version 1.4" />
      </div>
    </div>
  ),
  (
    <div>
      <h2 className="title-offscreen">Framing the Problem: Existing Comboboxes</h2>
      <div className="two-col">
        <img src={singleExample1} />
        <img src={multiExample2} />
      </div>
      <div className="two-col">
        <img src={multiExample1} />
        <img src={singleExample2} />
      </div>
    </div>
  )
];

export default slides;
export const length = slides.length;
