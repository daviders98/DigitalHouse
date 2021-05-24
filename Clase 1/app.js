function spinWords(sentence){
  return sentence.split(" ").map(function(word){
      return (word.length>=5) ? word.split("").reverse().join(""):word;
  }).join(" ");
}

console.log(spinWords("Hey fellow warriors"));