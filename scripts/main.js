const handleMessage = (new Messages).handle;

const animations = new Animations(['scroll', 'load'], ['header', 'section']);
const copying = new Copy([{ source: '.click-to-copy', target: '.click-to-copy-target', event: 'click' }], handleMessage);
const widgets = new Widget([{ trigger: '.facebook-button', target: '.fb-widget-container' }]);

animations.init();
copying.init();
widgets.init();