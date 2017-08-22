> THIS PACKAGE IS DEPRECATED AND IS NOT MAINTAINED ANYMORE.

## unicode.js

A small javascript library to enable native input support in textfields.

### Usage
Adding *class="unicode"* and *lang="language"* to normal input textfields and textarea will allow user to type directly in a specified language. It uses google transliteration lib for unicode purpose. So *"language"* can be the languages supported by google transliteration library.
```html
<input type="text" class="unicode" lang="ne" />
<textarea class="unicode" lang="ru"></textarea>
```

The above code will allow the user to type directly in **Nepali** and **Russian** language.
