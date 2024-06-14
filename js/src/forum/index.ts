import app from 'flarum/forum/app';

app.initializers.add('dhtml/flarum-ext-translate', () => {
  console.log('[dhtml/flarum-ext-translate] Hello, forum!');
});
