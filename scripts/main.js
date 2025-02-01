import Copy from './copy.js';
import Animations from './animations.js';
import Triggers from './triggers.js';
import Form from './form.js';

const animationsProperties = [
  { event: 'load', target: 'header', animation: 'fadeIn', duration: 2 },
  { event: 'load', target: 'section', animation: 'fadeIn', duration: 2 },
  { event: 'scroll', target: 'header', animation: 'fadeIn', duration: 2 },
  { event: 'scroll', target: 'section', animation: 'fadeIn', duration: 2 },
  { event: 'load', target: '.modal-container', animation: 'bounceIn', duration: 0.5 },
  { event: 'load', target: '#navigation .references', animation: 'fadeInDown', duration: 0.5 },
];
const copyingProperties = [
  { source: '.modal .button', target: '.modal-container-body', event: 'click' },
];
const triggersProperties = [
  { trigger: '.facebook-button', target: '.fb-widget-container', class: 'width--340px' },
  { trigger: '.click-to-copy', target: '.modal', class: 'content--center' },
  { trigger: '.modal .icon-button', target: '.modal', class: 'content--center' },
  { trigger: 'nav .hamburger', target: '#navigation', class: 'expanded' }
];

const formProperties = ['contact-form'];

new Animations(animationsProperties);
new Copy(copyingProperties);
new Triggers(triggersProperties);
new Form(formProperties);