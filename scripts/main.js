const animationsProperties = [
  { event: 'load', target: 'header', animation: 'fadeIn', duration: 2 },
  { event: 'load', target: 'section', animation: 'fadeIn', duration: 2 },
  { event: 'scroll', target: 'header', animation: 'fadeIn', duration: 2 },
  { event: 'scroll', target: 'section', animation: 'fadeIn', duration: 2 },
  { event: 'load', target: '.modal-container', animation: 'bounceIn', duration: 0.5 },
];
const copyingProperties = [
  { source: '.modal .button', target: '.modal-container-body', event: 'click' },
];
const triggersProperties = [
  { trigger: '.facebook-button', target: '.fb-widget-container', class: 'width--340px' },
  { trigger: '.click-to-copy', target: '.modal', class: 'content--center' },
  { trigger: '.modal .icon-button', target: '.modal', class: 'content--center' }
];

const animations = new Animations(animationsProperties);
const copying = new Copy(copyingProperties);
const triggers = new Triggers(triggersProperties);

animations.init();
copying.init();
triggers.init();