
let arguments = process.argv.slice(2);

function calculate (radius){
    const calculateArea = Math.PI * Math.pow(radius, 2);
    console.log(
        `Dairenin alanı: (${parseFloat(calculateArea).toFixed(1)})`
    );
}

calculate(arguments[0]);