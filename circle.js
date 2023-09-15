
// let arguments = process.argv.slice(2);

// function calculate (radius){
//     const calculateArea = Math.PI * Math.pow(radius, 2);
//     console.log(
//         `Dairenin alanı: (${parseFloat(calculateArea).toFixed(1)})`
//     );
// }

// calculate(arguments[0]);


function circleArea(r) {
    let area  = r * r * Math.PI;
    console.log("Dairenin alanı:",area);
    // return area
}

function circleCircumference(r) {
    let circumrefence = 2 * r * Math.PI;
    console.log("Dairenin Çevresi:",circumrefence);
    // return circumrefence
}

module.exports = {circleArea, circleCircumference};
