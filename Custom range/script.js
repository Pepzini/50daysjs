const range = document.getElementById('range');

range.addEventListener('input', (event) =>{
    const value = +event.target.value
    //the plus sign in he above gives it a class of number
   const label = event.target.nextElementSibling;

   const rangeWidth = getComputedStyle(event.target).getPropertyValue('width')
   //the get.computedstyle allows you to get the styling from the code
   //the get.propertyvalue allows you to specify the exact property you want to get frm the css
   const labelWidth = getComputedStyle(label).getPropertyValue('width')

   const number_width = +rangeWidth.substring(0, rangeWidth.length - 2) //this takes away the pixes from the width value
   const number_label_width = +labelWidth.substring(0, labelWidth.length - 2)
   
   const maximumValue = +event.target.max;
   const minimumValue =  +event.target.min;

   const left = value * (number_width / maximumValue) - number_label_width / 2 + scale(value, minimumValue, maximumValue, 10, -10);

   label.style.left = `${left}px`
   
   label.innerHTML = value;

})

//the function below map a range of numbers to another range of numbers

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
