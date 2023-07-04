/**
 Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a
dash.
b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator.
 */

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

//I used the js_inter_ex1 method as well stackoverflow
function camelCase(cssProp){    
    var words = cssProp.split('-'); 
    var ucFirstLetters = words[0] + words.slice(1).map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);  
    }).join('');
  
    return ucFirstLetters;    
}

function camelCaseVariant(cssPropVariant){
    var newWords = cssPropVariant.split('-');
    for (let word in newWords){
        var newLetters = newWords[0] + newWords.slice(1).map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);  
        }).join('');
        return newLetters;
    }
}

console.log(camelCaseVariant('margin-left'));
console.log(camelCaseVariant('margin-right'));
console.log(camelCaseVariant('padding-top'));
