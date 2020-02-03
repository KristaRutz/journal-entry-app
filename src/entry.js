var vowels = /[aeiou]/i;
var consonants = /[bcdfghjklmnpqrstvxzwy]/i;

export function Entry(heading, body){
  this.heading = heading,
  this.body = body
}

Entry.prototype.numberOfWords = function(){
  var words = this.body.split(" ")
  return words.length
}

Entry.prototype.numberOfVowels = function (){
  var letters = this.body.split("")
  var vowelCount = 0
  for(var i = 0; i < letters.length; i++){
    if(letters[i].match(vowels)){
      vowelCount += 1;
    }  
  } 
  return vowelCount;
}

Entry.prototype.numberOfConsonants = function (){
  var letters = this.body.split("");
  var consCount = 0
  for(var i = 0; i < letters.length; i ++){
    if(letters[i].match(consonants)){
      consCount += 1;
    }
  }
  return consCount;
}

Entry.prototype.getTeaser = function (){
  var sentences = this.body.split(".");
  var firstSent = sentences[0];
  var firstSentWords = firstSent.split(" ")
  var str = ""
  for(var i = 0; i < 8; i++){
    if (firstSentWords[i]){
      str = str + firstSentWords[i] + " "
    }
  }
  return str
}



