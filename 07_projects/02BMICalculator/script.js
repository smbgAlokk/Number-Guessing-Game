// BMI = weight (kg) / (height (cm) / 100)2

/*
const h = document.querySelector("#height");
const w = document.querySelector("#weight");

Above both usecase will give you empty
*/

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    alert("Please enter a valid height");
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    alert("Please enter a valid weight");
  } else {
    const bmi = weight / ((height * height) / 10000);
    result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;

    if (bmi < 18.6) {
      result.innerHTML = `Your BMI is <Span>${bmi.toFixed(
        2
      )}</span><div> Under Weight </div>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `Your BMI is <Span>${bmi.toFixed(
        2
      )}</span><div> Normal Range </div>`;
    } else {
      result.innerHTML = `Your BMI is <span>${bmi.toFixed(
        2
      )}</span><div>Overweight</div>`;
    }
  }
});
