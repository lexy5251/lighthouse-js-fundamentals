var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});



function map(arr, func){
  var newArray = [];

  arr.forEach(function(item){


    newArray.push(func(item));

  });

  return newArray;


}



