'strict mode'
const inputday = document.querySelector('.inputday');
const inputmonth = document.querySelector('.inputday');
const inputyear = document.querySelector('.inputday');
console.log(inputday, inputmonth, inputyear);
const btn = document.querySelector('.calculatebtn')
console.log(btn);
const yearno = document.querySelector('.yearno')
const monthno = document.querySelector('.yearno')
const dayno = document.querySelector('.yearno')
console.log(yearno, monthno, dayno);


btn.addEventListener('click', function(e){
e.preventDefault()
const now = new Date();
console.log(now);
const year = now.getFullYear()
console.log(year);
// get the input values entered by user
inputdayValue = parseInt(inputday.value, 10)
// console.log(inputdayValue);
inputmonthValue = parseInt(inputmonth.value, 10)
inputyearValue = parseInt(inputyear.value, 10)



    // Check if the number is a number.
    if (isNaN(inputdayValue)) {
      console.log('falsy');
    }
    // Check if the number is between 1 and 12.
    else if (inputdayValue < 1 || inputdayValue > 31 || inputmonthValue < 1 || inputmonthValue > 12) {
    console.log('false');
    }
    // The number is valid.
else {
console.log('nice');
    }
    

    





            // Check if the value is within the valid range (1 to 12)
// if (isNaN(inputValue) || inputValue < 1 || inputValue > 12) {
//                 alert('Please enter a number between 1 and 12, inclusive.');
//                 inputElement.value = ''; // Clear the input field
//             }

})