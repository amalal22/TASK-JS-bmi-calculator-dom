function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let heightM = height / 100;
  let BMI = weight / (heightM * heightM);
  //console.log(BMI);

  let Status = ``;
  if (BMI < 18.5) {
    Status = `you are under weight`;
  } else if (BMI <= 24.9) {
    Status = `you have Healthy Weight`;
  } else if (BMI <= 29.9) {
    Status = `you are Over Weight`;
  } else {
    Status = `you are Above Obesity`;
  }
  alert(Status);
}
