var wordArray = [];
var findVowels = function(string){
	var wordArray = string.split("");
  //var letters = string.match(/[a-b]/);
  if (/[^A-Za-z]/.test(string) === true) {
  	alert("!");
  }
  else if (wordArray[0].match(/[aeiouAEIOU]/)) {
 		wordArray.push("a");
    wordArray.push("y");
    console.log(wordArray);
  } else if (wordArray[1].match(/[aeiouAEIOU]/) && (wordArray[0] !== "q")){
  	var firstLetter = wordArray[0];
    wordArray.shift();
    wordArray.push(firstLetter);
    wordArray.push("a");
    wordArray.push("y");
    console.log(wordArray);
  } else if (wordArray[2].match(/[aeiouAEIOU]/) || (wordArray[0] === "q")){
    var letterOne = wordArray[0];
    var letterTwo = wordArray[1];
    wordArray.shift();
    wordArray.shift();
    wordArray.push(letterOne);
    wordArray.push(letterTwo);
    wordArray.push("a");
    wordArray.push("y");
    console.log(wordArray);
  } else {
  	var letterOne = wordArray[0];
    var letterTwo = wordArray[1];
    var letterThree = wordArray[2];
    wordArray.shift();
    wordArray.shift();
    wordArray.shift();
    wordArray.push(letterOne);
    wordArray.push(letterTwo);
    wordArray.push(letterThree);
    wordArray.push("a");
    wordArray.push("y");
    console.log(wordArray);
  }
}

findVowels("queen");
