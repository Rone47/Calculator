const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the index.html file
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Handle POST request for the calculator
app.post("/", function (req, res) {
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);
    var operator = req.body.operator; // Get the operator from the form
  
    if (!isNaN(num1) && !isNaN(num2)) {
      var result;
  
      // Perform the calculation based on the selected operator
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          res.send("Invalid operator. Please select a valid operator (+, -, *, /).");
          return;
      }
  
      res.send("The result of the calculation is " + result);
    } else {
      res.send("Invalid input. Please enter valid numbers.");
    }
  });
  

// Serve the bmicalculator.html file
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

// Handle POST request for the BMI calculator
app.post("/bmicalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  if (!isNaN(weight) && !isNaN(height) && height > 0) {
    // Assuming height is provided in meters, not centimeters
    var bmi = weight / (height * height);
    res.send("Your BMI is " + bmi.toFixed(2));
  } else {
    res.send("Invalid input. Please enter valid weight and height.");
  }
});

app.listen(4000, function () {
  console.log("Server is running on port 4000.");
});

