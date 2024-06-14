import app from 'flarum/forum/app';

app.initializers.add('dhtml/flarum-ext-translate', () => {
  console.log("Translation initialized");


  console.log(app.translator.trans('flarum-ext-contactme.forum.title'));

  /*
  extend(HeaderPrimary.prototype, 'items', function(items: { add: (arg0: string, arg1: any) => void; }) {
    const languages = new ItemList();

    const availableLanguages = {
      'en': 'English',
      'fr': 'French',
      'es': 'Spanish',
      'de': 'German',
      'zh': 'Chinese',
      'ja': 'Japanese',
      'ru': 'Russian'
    };

    Object.keys(availableLanguages).forEach(lang => {
      languages.add(lang, LinkButton.component({
        // @ts-ignore
        children: availableLanguages[lang],
        onclick: () => {
          const text = prompt('Enter text to translate');
          if (!text) return;

          app.request({
            method: 'POST',
            url: app.forum.attribute('apiUrl') + '/translate',
            body: { text, targetLanguage: lang },
          }).then(response => {
            // @ts-ignore
            alert('Translated text: ' + response.translatedText);
          });
        }
      }));
    });

    items.add('translateDropdown',
      Dropdown.component({
        buttonClassName: 'Button Button--link',
        label: 'Translate',
        children: languages.toArray()
      })
    );
  });
   */
});
