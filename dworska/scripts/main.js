import Animations from './animations.js';
import Triggers from './triggers.js';
import List from './list.js';
import Cookies from './cookies.js';

const animationsProperties = [
  { event: 'load', target: 'header', animation: 'fadeIn', duration: 2 },
  // { event: 'load', target: 'section', animation: 'fadeIn', duration: 2 },
  // { event: 'scroll', target: 'header', animation: 'fadeIn', duration: 2 },
  // { event: 'scroll', target: 'section', animation: 'fadeIn', duration: 2 },
  { event: 'load', target: '.modal-container', animation: 'bounceIn', duration: 0.5 },
  { event: 'load', target: '#navigation .references', animation: 'fadeInDown', duration: 0.5 },
];

const triggersProperties = [
  { trigger: '.facebook-button', target: '.fb-widget-container', class: 'width--340px' },
  { trigger: '.hamburger', target: '#navigation', class: 'expanded' }
];

new Animations(animationsProperties);
new Triggers(triggersProperties);
new List();
new Cookies();
