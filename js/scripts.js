conversion = function(inputInt) {
  // var values = [1000, 500,100,50,10,5]
  var roman = ["M", "C", "X", "I"]
  var indexes = [0, 1, 2, 3]

  // var exceptions = ["CCCCCCCC", "CCCCC", "CCCC", "XXXXXXXXXXXXXX", "XXXXX", "XXXX", "IIIIIIIII", "IIIII", "IIII" ]
  // var conversionExceptions = ["CM", "D", "CD", "XC", "L", "XL", "IX", "V", "IV"]

  var results = []
  if (inputInt <= 3999){
      var output = inputInt.toString().split('').map(function(t){return parseInt(t)});

      for (i = 0; i < 3 ; i++) {
        if (output.length === 4) {
          break;
        }
        output.unshift(0);
      }

      indexes.forEach(function(index) {
        var outputIndex = index

        if (output[outputIndex] > 0) {
          for (i = 0; i < output[outputIndex] ; i++) {
            results.push(roman[outputIndex]);
          }
        }
      });

        var stringResults = results.join("");
        var stringResults = stringResults.replace(/CCCCCCCCC/gi, 'CM');
        var stringResults = stringResults.replace(/CCCCC/gi, 'D');
        var stringResults = stringResults.replace(/CCCC/gi, 'CD');
        var stringResults = stringResults.replace(/XXXXXXXXX/gi, 'XC');
        var stringResults = stringResults.replace(/XXXXX/gi, 'L');
        var stringResults = stringResults.replace(/XXXX/gi, 'XL');
        var stringResults = stringResults.replace(/IIIIIIIII/gi, 'IX');
        var stringResults = stringResults.replace(/IIIII/gi, 'V');
        var stringResults = stringResults.replace(/IIII/gi, 'IV');

        return stringResults;

  }else {
    return false;
    alert("That's not a compatible number.")
  }
}


$(document).ready(function(){
  $("#numeralCalculator").submit(function(event){
    var inputInt =$("#inputInt").val();
    var finalNumber = conversion(inputInt);
    // location.href = "puzzleOutput.html";
    $(".calculated").text(finalNumber);

    event.preventDefault();
  });
});
