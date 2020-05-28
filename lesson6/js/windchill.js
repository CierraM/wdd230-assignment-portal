function calculateWindchill() {

let  t = parseFloat(document.getElementById('temp').innerHTML);
let s = parseFloat(document.getElementById('windSpeed').innerHTML);
console.log(s)
console.log(t)

if(t <= 50 && s > 3){
let windChill = 35.74 + 0.6215 * t -35.75 * Math.pow(s, 0.16) + 0.4275 *t * Math.pow(s, .16);
windChill = Math.round(windChill)
document.getElementById('windChill').innerHTML = windChill
}
else{
    document.getElementById('windChillDiv').innerHTML = 'N/A'
    
}
}

calculateWindchill()