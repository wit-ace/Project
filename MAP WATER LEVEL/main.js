const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const mymap = L.map('map').setView([28.770116, 77.967909], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 13,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);


/*
// Add Polygon

const polygon = L.polygon([
   
    [27.736188, 77.975485],
    [28.731497, 76.974342],
    [27.729324, 77.972234],
    [28.732368, 76.981293],
], {
    color:'blue',
    fillColor:'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup(' WATER LEVEL ZONE ')
//polygon.bindPopup(' I am a polygon')
*/







// Adding Marker

const marker = L.marker([28.748708, 77.985433]).addTo(mymap);

// Add popup message
let template = `

<h3>DELHI</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker.bindPopup(template);  

// Add circle 

const circle = L.circle([28.748708, 77.985433], {
    radius: 55000, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')

//marker 2
const marker2 = L.marker([30.497837, 75.166084]).addTo(mymap);
// Add popup message
let template2 = `

<h3>PUNJAB</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker2.bindPopup(template2);
  

const circle2 = L.circle([30.497837, 75.166084], {
    radius: 15000, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERaaaaaaaaaaaRRRR')

//marker 3


// Adding Marker

const marker3 = L.marker([29.540493, 77.615512]).addTo(mymap);

// Add popup message
let template3 = `

<h3>MUZAFFARNAGAR</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker3.bindPopup(template3);  

// Add circle 

const circle3 = L.circle([29.540493, 77.615512], {
    radius: 55000, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')


//marker 4

// Adding Marker

const marker4 = L.marker([31.693105, 76.785581]).addTo(mymap);

// Add popup message
let template4 = `

<h3>HIMACHAL PRADESH</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker4.bindPopup(template4);  

// Add circle 

const circle4 = L.circle([31.693105, 76.785581], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')


//marker 5

// Adding Marker

const marker5 = L.marker([26.724755, 82.188330]).addTo(mymap);

// Add popup message
let template5 = `

<h3>Faizabad</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker5.bindPopup(template5);  

// Add circle 

const circle5 = L.circle([26.724755, 82.188330], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')

//marker 6

// Adding Marker

const marker6 = L.marker([26.689819, 83.515110]).addTo(mymap);

// Add popup message
let template6 = `

<h3>Gorakhpur</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker6.bindPopup(template6);  

// Add circle 

const circle6 = L.circle([26.689819, 83.515110], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')

// marker 7

// Adding Marker

const marker7 = L.marker([23.313084, 77.564670]).addTo(mymap);

// Add popup message
let template7 = `

<h3>BHOPAL</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker7.bindPopup(template7);  

// Add circle 

const circle7 = L.circle([23.313084, 77.564670], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')


//marker 8

// Adding Marker

const marker8 = L.marker([23.092961, 87.234603]).addTo(mymap);

// Add popup message
let template8 = `

<h3>WEST BENGAL</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker8.bindPopup(template8);  

// Add circle 

const circle8 = L.circle([23.092961, 87.234603], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')


//marker 9

// Adding Marker

const marker9 = L.marker([12.005443, 78.668376]).addTo(mymap);

// Add popup message
let template9 = `

<h3>TAMIL NADU</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker9.bindPopup(template9);  

// Add circle 

const circle9 = L.circle([12.005443, 78.668376], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')


//marker 10


// Adding Marker

const marker10 = L.marker([18.778352, 79.261052]).addTo(mymap);

// Add popup message
let template10 = `

<h3>TELANGANA</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker10.bindPopup(template10);  

// Add circle 

const circle10 = L.circle([18.778352, 79.261052], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')


//marker 11


// Adding Marker

const marker11 = L.marker([14.689789, 78.359659]).addTo(mymap);

// Add popup message
let template11 = `

<h3>ANDHRA PRADESH</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker11.bindPopup(template11);  

// Add circle 

const circle11 = L.circle([14.689789, 78.359659], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')


//marker 12


// Adding Marker

const marker12 = L.marker([22.130649, 70.974962]).addTo(mymap);

// Add popup message
let template12 = `

<h3>DELHI</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker12.bindPopup(template12);  

// Add circle 

const circle12 = L.circle([22.130649, 70.974962], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')


//marker 13


// Adding Marker

const marker13 = L.marker([26.462236, 73.444507]).addTo(mymap);

// Add popup message
let template13 = `

<h3>DELHI</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker13.bindPopup(template13);  

// Add circle 

const circle13 = L.circle([26.462236, 73.444507], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')


//marker 14


// Adding Marker

const marker14 = L.marker([27.992385, 94.917741]).addTo(mymap);

// Add popup message
let template14 = `

<h3>ARUNACHAL PRADESH</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker14.bindPopup(template14);  

// Add circle 

const circle14 = L.circle([27.992385, 94.917741], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')