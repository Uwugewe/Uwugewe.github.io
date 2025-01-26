const animationsProperties = [
  { event: 'load', target: 'header', animation: 'fadeIn', duration: 2 },
  { event: 'load', target: 'section', animation: 'fadeIn', duration: 2 },
  { event: 'scroll', target: 'header', animation: 'fadeIn', duration: 2 },
  { event: 'scroll', target: 'section', animation: 'fadeIn', duration: 2 },
  { event: 'click', target: '.click-to-copy', animation: 'headShake', duration: 0.5 },
];
const copyingProperties = [{ source: '.click-to-copy', target: '.click-to-copy-target', event: 'click' }];
const widgetsProperties = [{ trigger: '.facebook-button', target: '.fb-widget-container' }];

const animations = new Animations(animationsProperties);
const copying = new Copy(copyingProperties);
const widgets = new Widget(widgetsProperties);

animations.init();
copying.init();
widgets.init();