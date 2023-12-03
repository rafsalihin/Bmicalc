function calculateBMI(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var age = parseInt(document.getElementById('age').value);
  var gender = document.querySelector('input[name="gender"]:checked');
  var height = parseFloat(document.getElementById('height').value);
  var weight = parseFloat(document.getElementById('weight').value);
  var unit = document.querySelector('input[name="unit"]:checked');
  var email = document.getElementById('email').value;
  var sleep = document.getElementById('sleep');
  var otherCondition = document.getElementById('other-condition').value;
  var bmi;

  
  if (unit.value === 'imperial') {
     bmi = weight / (height * height);
     bmi = bmi*703; //conversion factor for bmi if imperial unit
  } else if (unit.value === 'metric') {
    height = height / 100; // convert cm to meter 
    bmi = weight / (height * height);
  }
  
  var category;
  var message;
  var Smessage;
  if (bmi < 18.5) {
    category = 'Underweight';
    message = 'It is important to maintain a healthy weight for overall well-being. Consider consulting a healthcare professional for guidance.';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal weight';
    message = 'Keep up the good work by maintaining a balanced diet and regular physical activity.';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
    message = 'It is advisable to focus on healthy eating habits and incorporate regular exercise to manage your weight effectively.';
  } else {
    category = 'Obesity';
    message = 'It is important to prioritize your health. Recommended to consult with a healthcare professional for personalized guidance and support.';
  }


  if(sleep.value === "less than 4"){
    Smessage = 'Sleeping less than 4 hours on a regular basis can have serious consequences for your health and well-being.'+
    ' Consider making adjustments to your schedule It is recommended to aim for 7-9 hours of sleep.';
  } else if(sleep.value === "4-6"){
    Smessage = 'Sleeping between 4 and 6 hours per night may not provide sufficient rest for your body and mind.'+
    ' It is recommended to aim for 7-9 hours of sleep.';
  } else if(sleep.value === "6-8"){
    Smessage = 'Sleeping between 6 and 8 hours per night is within the recommended range for most adults.'+
    ' Follow a consistent sleep schedule and practice relaxation techniques to optimize your sleep quality.';  
  } else if(sleep.value === "8-10"){
    Smessage = 'Sleeping between 8 and 10 hours per night is considered sufficient for adults.'+
    'Maintain your sleep routine for the best sleep quality. ';
  } else if(sleep.value === "more than 10"){
    Smessage = 'Sleeping 10 hours per night may indicate an excessive amount of sleep.'+
    ' It can lead to daytime drowsiness and other health issues. Consult a healthcare professional if you consistently require more than 10 hours of sleep.' ; }  
  
    var checkboxes = document.querySelectorAll('input[name="conditions"]:checked');
    var selectedConditions = Array.from(checkboxes).map(function (checkbox) {
      return checkbox.value;
    });
  
    if (otherCondition.trim() !== '') {
      selectedConditions.push(otherCondition);
    }
  
    var condText = 'No history of other health condition';
    if (selectedConditions.length > 0) {
      condText = 'Health condition: ' + selectedConditions.join(', ') + '.';
    }
  var result =
  'Name: ' +
  name +'<br>' +
  'Age: ' +
  age +'<br>' +
  'Gender: ' +
  gender.value + '<br>' +
  'Email: ' +
  email + '<br>' +
  condText + '<br>' +
  'Sleep Duration: ' + sleep.value + ' hours <br><br>' +
  'Your BMI: ' +
  bmi.toFixed(2) +' (' +  category + ')'+ '<br>'+
  'Your Bmi was calculated using ' + unit.value + ' unit.' + '<br><br>' +
  message + '<br><br>'+
  Smessage + '<br>';

  document.getElementById('result').innerHTML = result;


  if (age <= 0){
    alert("Please enter valid value for age. Larger than 0.");
    document.getElementById('result').innerHTML = '';
  }
  
  if (height <= 0){
    alert("Please enter valid value for weight. Larger than 0.");
    document.getElementById('result').innerHTML = '';
  }
  
  if (weight <= 0){
    alert("Please enter valid value for height. Larger than 0.");
    document.getElementById('result').innerHTML = '';
  }

  if(sleep.value === 'placeholder'){
    alert("Please select amount of sleep");
    document.getElementById('result').innerHTML = ''; 
  }

}
var metricRadio = document.getElementById('metric');
var imperialRadio = document.getElementById('imperial');

metricRadio.addEventListener('change', function() {
 document.getElementById('weight unit').innerHTML = "Weight (kg):";
 document.getElementById('height unit').innerHTML = "Height (cm):";
});

imperialRadio.addEventListener('change', function() {
  document.getElementById('weight unit').innerHTML = "Weight (lbs):";
  document.getElementById('height unit').innerHTML = "Height (in):";
});


function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('male').checked = false;
  document.getElementById('female').checked = false;
  document.getElementById('metric').checked = false;
  document.getElementById('imperial').checked = false;
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('weight unit').innerHTML = "Weight:";
  document.getElementById('height unit').innerHTML = "Height:";
  document.getElementById('email').value = '';
  document.getElementById('result').innerHTML = '';
  document.getElementById('sleep').value = 'placeholder';
  document.getElementById('other-condition').value = '';
  var checkboxes = document.getElementsByName('conditions');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
}


document.getElementById('bmi_form').addEventListener('submit', calculateBMI);
document.getElementById('clear-button').addEventListener('click', clearForm);