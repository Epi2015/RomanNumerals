conversion = function(inputInt) {
  // var values = [1000, 500,100,50,10,5]
  var roman = ["M", "C", "X", "I"]
  var indexes = [0, 1, 2, 3]

  var results = []
  if (inputInt <= 3999){
      var output = inputInt.toString().split('').map(function(t){return parseInt(t)});

      for (i = 0; i < 3 ; i++) {
        if (output.length === 4) {
          break;
        }
        output.unshift(0);
      }

      debugger;
      indexes.forEach(function(index) {
        var outputIndex = index

        if (output[outputIndex] > 0) {
          for (i = 0; i < output[outputIndex] ; i++) {
            results.push(roman[outputIndex]);
          }
        }
      });

        console.log(results);


  }else {
    return false;
    alert("That's not a compatible number.")
  }
}
