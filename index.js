
function introduction (name) {
    return `Hi, my name is ${name}.`;
}
// Hi, my name is [name] and I am learning to program in [language].
// const name = "Aki";
// const language= "Ember.js";
function introductionWithLanguage (name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

//function logTwoValues(value1, value2) {
 //   console.log(`The two values are ${value1} and ${value2}.`);
 // }

 function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;

 }