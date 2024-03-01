function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    var result = document.getElementById('result');
    var bmi = bmiCalculator(weight, height);

    if (bmi) {
      result.innerHTML = bmi;
    } else {
      result.innerHTML = "Please enter valid values for weight and height.";
    }
  }

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    var txt = "";

    if (bmi <= 18.5) {
      txt = "Your BMI is " + bmi.toFixed(2) + ", so you are underweight.";
    } else if (bmi <= 24.9) {
      txt = "Your BMI is " + bmi.toFixed(2) + ", so you have a normal weight.";
    } else {
      txt = "Your BMI is " + bmi.toFixed(2) + ", so you are overweight.";
    }
    return txt;
  }