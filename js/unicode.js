/*
*
* @Lib Unicode.js
* @Author Ankit Pokhrel
* @Version 0.0
*
*/

//Load google transliteration package
google.load("elements", "1", {packages: "transliteration"});

//Find all elements with class unicode and make it transliterable
;function init(){	
  var fields = document.getElementsByClassName('unicode'); // returns nodelist, cannot use foreach loop in nodelist so
  
  var forEach = Array.prototype.forEach; // extending foreach prototype, works in almost all browsers
 
  forEach.call(fields, function(elm){ 
	 var id = elm.getAttribute('id');
	 if(null == id){
		id = GUID();
		elm.setAttribute('id', id);
	 }
	 
	 var lang = elm.getAttribute('lang');
	 if(null == lang) lang = "ne";
	 
	 var options = {
	  sourceLanguage:
		  google.elements.transliteration.LanguageCode.ENGLISH,
	  destinationLanguage: lang,
	  shortcutKey: 'ctrl+l',
	  transliterationEnabled: true
	 };

	 var control = new google.elements.transliteration.TransliterationControl(options);	 
	 control.makeTransliteratable([id]);
  });
}

//Change from one language to another
var mcontrol = null;
;function changeLanguage(id, lang){
 if( null == mcontrol ){
	 var options = {
		  sourceLanguage:
			  google.elements.transliteration.LanguageCode.ENGLISH,
		  destinationLanguage: lang,
		  shortcutKey: 'ctrl+l',
		  transliterationEnabled: true
		 };
	 mcontrol = new google.elements.transliteration.TransliterationControl(options);	 
	 mcontrol.makeTransliteratable([id]);
 } else {
	mcontrol.setLanguagePair( google.elements.transliteration.LanguageCode.ENGLISH, lang);
 }
}

//function GUID credit - John Millikin, http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
//Create a globally unique identifier. Used in the elements with no Id.
;function GUID (){
    var S4 = function (){
        return Math.floor(
                Math.random() * 0x10000 /* 65536 */
            ).toString(16);
    };

    return (
            S4() + S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + S4() + S4()
        );
}

google.setOnLoadCallback(init);