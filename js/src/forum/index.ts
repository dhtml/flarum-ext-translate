import app from 'flarum/forum/app';
import HeaderPrimary from "flarum/admin/components/HeaderPrimary";

app.initializers.add('dhtml/flarum-ext-translate', () => {
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
        children: availableLanguages[lang],
        onclick: () => {
          const text = prompt('Enter text to translate');
          if (!text) return;

          app.request({
            method: 'POST',
            url: app.forum.attribute('apiUrl') + '/translate',
            body: { text, targetLanguage: lang },
          }).then(response => {
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
});
