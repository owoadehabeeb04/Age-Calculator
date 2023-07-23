"strict mode";
const inputday = document.querySelector(".inputday");
const inputmonth = document.querySelector(".inputmonth");
const inputyear = document.querySelector(".inputyear");
console.log(inputday, inputmonth, inputyear);
const btn = document.querySelector(".calculatebtn");
console.log(btn);
const yearno = document.querySelector(".yearno");
const monthno = document.querySelector(".monthno");
const dayno = document.querySelector(".dayno");
console.log(yearno, monthno, dayno);
const errorday = document.querySelector('.errorday')
const errormonth = document.querySelector('.errormonth')
const erroryear = document.querySelector('.erroryear')
const labelday = document.querySelector('.labelday')
const labelmonth = document.querySelector('.labelmonth')
const labelyear = document.querySelector('.labelyear')

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const now = new Date();
  console.log(now);
  const year = now.getFullYear();
  console.log(year);
  const month = now.getMonth() + 1;
  console.log(month);
  const day = now.getDate();
  console.log(day);
  // get the input values entered by user
  inputdayValue = parseInt(inputday.value, 10);
  // console.log(inputdayValue);
  inputmonthValue = parseInt(inputmonth.value, 10);
  inputyearValue = parseInt(inputyear.value, 10);

  // Check if the number is a number.
  if (isNaN(inputdayValue)) {
    console.log("falsy");
    inputday.classList.add('errorinput')
    inputmonth.classList.add('errorinput')
    inputyear.classList.add('errorinput')
    inputday.classList.remove('successinput')
    inputmonth.classList.remove('successinput')
    inputyear.classList.remove('successinput')

    labelday.classList.add('errorlabel')
    labelmonth.classList.add('errorlabel')
    labelyear.classList.add('errorlabel')

    errorday.classList.remove('hidden')
    errormonth.classList.remove('hidden')
    erroryear.classList.remove('hidden')
  }
  // Check if the number is between 1 and 12.
  else if (
    inputdayValue < 1 ||
    inputdayValue > 31 ||
    inputmonthValue < 1 ||
    inputmonthValue > 12 ||
    String(inputyearValue).length > 4 ||
    String(inputyearValue).length < 4 ||
    inputyearValue > year
  ) {
    console.log("false");
  alert('invalid details try again !')
  }
  else if (inputyearValue === year){
    if(inputmonthValue > month - 1 || inputdayValue > day) {
      console.log('false');
      alert('check your month input and day input again')
    } else {
      console.log('nice');
      console.log("nice");
      function turnDateValues(dd, mm, yyyy) {
        // Create a Date object from the three input values.
        var date = new Date(yyyy, mm - 1, dd);
        // Return the Date object.
        return date;
      }
      const dd = inputdayValue;
      const mm = inputmonthValue;
      const yyyy = inputyearValue;
      const date = turnDateValues(dd, mm, yyyy);
  
      console.log(date);
      let resultyear = now.getFullYear() - date.getFullYear();
      let resultmonth = now.getMonth() - date.getMonth();
      let resultdays = now.getDate() - date.getDate();
  
      if (resultmonth < 0 || (resultmonth === 0 && resultdays < 0)) {
        resultyear--;
        if (resultmonth === 0) {
          resultmonth = 11;
        } else {
          resultmonth = 12 + resultmonth;
        }
        resultdays = 30 + resultdays;
      }
      console.log(resultyear, resultmonth, resultdays);
      
    console.log(yearno.innerHTML = resultyear)
    console.log(monthno.innerHTML = resultmonth)
    console.log(dayno.innerHTML = resultdays)
    inputday.classList.remove('errorinput')
    inputmonth.classList.remove('errorinput')
    inputyear.classList.remove('errorinput')
    inputday.classList.add('successinput')
    inputmonth.classList.add('successinput')
    inputyear.classList.add('successinput')

    
    labelday.classList.remove('errorlabel')
    labelmonth.classList.remove('errorlabel')
    labelyear.classList.remove('errorlabel')

    errorday.classList.add('hidden')
    errormonth.classList.add('hidden')
    erroryear.classList.add('hidden')
    }
  }
  else if (inputyearValue > year){
alert('check your yyyy input')
  }

  // The number is valid.
  else {
    console.log("nice");
    function turnDateValues(dd, mm, yyyy) {
      // Create a Date object from the three input values.
      var date = new Date(yyyy, mm - 1, dd);
      // Return the Date object.
      return date;
    }

    const dd = inputdayValue;
    const mm = inputmonthValue;
    const yyyy = inputyearValue;
    const date = turnDateValues(dd, mm, yyyy);

    console.log(date);
    let resultyear = now.getFullYear() - date.getFullYear();
    let resultmonth = now.getMonth() - date.getMonth();
    let resultdays = now.getDate() - date.getDate();

    if (resultmonth < 0 || (resultmonth === 0 )) {
      resultyear--;
      if (resultmonth === 0) {
        resultmonth = 11;}
      // } else if (resultdays > 30) {
      //   resultmonth = resultmonth + 1;
      //   resultdays = 30 - resultdays;
      // } else if (resultdays < 0) {
      //   resultmonth = resultmonth + resultdays
      // }
       else {
        resultmonth = 12 + resultmonth;
      }
    }
    else if (resultdays > 30 ) {
        resultmonth = resultmonth + 1;
        resultdays = 30 - resultdays;
    } else if (resultdays < 0) {
  resultdays = 30 + resultdays
    }
    console.log(resultyear, resultmonth, resultdays);

    console.log(yearno.innerHTML = resultyear)
    console.log(monthno.innerHTML = resultmonth)
    console.log(dayno.innerHTML = resultdays)
    
inputday.classList.remove('errorinput')
inputmonth.classList.remove('errorinput')
inputyear.classList.remove('errorinput')
inputday.classList.add('successinput')
    inputmonth.classList.add('successinput')
    inputyear.classList.add('successinput')
    labelday.classList.remove('errorlabel')
    labelmonth.classList.remove('errorlabel')
    labelyear.classList.remove('errorlabel')
    errorday.classList.add('hidden')
    errormonth.classList.add('hidden')
    erroryear.classList.add('hidden')
  }
});

console.log(monthno);


// console.log(inputday.style.border = '2px solid hsl(0, 100%, 67%)')