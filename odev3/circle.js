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