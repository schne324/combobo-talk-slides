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
import teamwork from '../../img/teamwork.png';
import codevdesign from '../../img/code-vs-design.png';

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
      <h2 className="large">What We Do</h2>
      <h3>We work for <strong>Deque Systems</strong>.</h3>
      &nbsp;
      <p>We design and build <strong>web applications</strong> to help <strong>development teams</strong> perform <strong>accessibility testing</strong>.</p>
    </div>
  ),
  (
    <div>
      <h2>{'Today, we\'re talking about:'}</h2>
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
        <img src={oldFilters} width="400px" alt="multi-select filters in WorldSpace Assure prior to version 1.4" />
      </div>
    </div>
  ),
  (
    <div>
      <h2 className="title-offscreen">Framing the Problem: Existing Comboboxes</h2>
      <div className="two-col">
        <img src={singleExample1} alt="single select combobox example 1"/>
        <img src={multiExample2} alt="multi select combobox example 1"/>
      </div>
      <div className="two-col">
        <img src={multiExample1} alt="multi select combobox example 2"/>
        <img src={singleExample2} alt="single select combobox example 2"/>
      </div>
    </div>
  ),
  (
    <div>
      <h2 className="title-centered large">Accessibility === difficult</h2>
      <h3 className="title-centered image-space">Working with teammates === less difficult</h3>
      <div className="full-image">
        <img className="bottom-aligned-image" src={teamwork} width="500px" alt="" />
      </div>
    </div>
  ),
  (
    <div>
      <h1 className="title-centered">Design Reviews</h1>
    </div>
  ),
  (
    <div>
      <div className="background-image">
        <img src={codevdesign} alt="" width="600px"/>
      </div>
      <div className="two-col">
        <h2 className="align-right">Designer</h2>
      </div>
      <div className="two-col">
        <h2 className="align-left white-text">Developer</h2>
      </div>
    </div>
  ),
  (
    <div>
      <h1>Prototyping</h1>
    </div>
  ),
  (
    <div>
      <h2>Types of prototypes</h2>
      <ul>
        <li><strong>Low fidelity</strong> for testing layout, content, etc.</li>
        <li><strong>Higher fidelity</strong> for testing with keyboard / AT users</li>
        <li><strong>Interactive</strong> for testing...interactions</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h1>Interactive Prototype Case Study: Combobo</h1>
    </div>
  )
];

export default slides;
export const length = slides.length;
