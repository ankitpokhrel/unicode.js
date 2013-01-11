#unicode.js
==========

A small javascript library to enable native input support in textfields.

##Simple Explanation
Adding *class="language"* to normal input textfields and textarea will allow user to type directly in a specified language.
It uses google transliteration lib for unicode purpose. So *"language"* can be the languages supported by google transliteration library.
```html
<input type="text" class="nepali" id="anything" />
<textarea class="nepali" id="abc"></textarea>
```

The above code will allow the user to type directly in **Nepali** language.
