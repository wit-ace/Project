const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const mymap = L.map('map').setView([28.770116, 77.967909], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 8,
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

const marker = L.marker([26.459883, 80.381077]).addTo(mymap);

// Add popup message
let template = `

<h3>1.KANPUR </h3>
<h4>Sea level = 126 m</h4>
<h4>27.77 metres</h4>

`
marker.bindPopup(template);  

// Add circle 
/*
const circle = L.circle([26.459883, 80.381077], {
    radius: 55000, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/
//marker 2
const marker2 = L.marker([30.497837, 75.166084]).addTo(mymap);
// Add popup message
let template2 = `

<h3>2.PUNJAB</h3>
<h4>Sea level = 126 m</h4>
<h4>27.77 metres</h4>
`
marker2.bindPopup(template2);
  
/*
const circle2 = L.circle([30.497837, 75.166084], {
    radius: 15000, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERaaaaaaaaaaaRRRR')
*/
//marker 3


// Adding Marker

const marker3 = L.marker([29.540493, 77.615512]).addTo(mymap);

// Add popup message
let template3 = `

<h3>3.MUZAFFARNAGAR</h3>
<h4>Sea level = 267  m</h4>
<h4>Water level = 3.5-9.95 mbgl</h4>
`
marker3.bindPopup(template3);  

// Add circle 
/*
const circle3 = L.circle([29.540493, 77.615512], {
    radius: 55000, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/

//marker 4

// Adding Marker

const marker4 = L.marker([31.693105, 76.785581]).addTo(mymap);

// Add popup message
let template4 = `

<h3>4.HIMACHAL PRADESH</h3>
<h4>Sea level = 350m</h4>
<h4>Water level = (0.41-26.33)m bgl</h4>
`
marker4.bindPopup(template4);  

// Add circle 
/*
const circle4 = L.circle([31.693105, 76.785581], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/

//marker 5

// Adding Marker

const marker5 = L.marker([26.724755, 82.188330]).addTo(mymap);

// Add popup message
let template5 = `

<h3>5.Faizabad</h3>
<h4>Sea level = 97 m</h4>
<h4>Water level = 3.60-12.50 mbgl</h4>
`
marker5.bindPopup(template5);  

// Add circle 
/*
const circle5 = L.circle([26.724755, 82.188330], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/
//marker 6

// Adding Marker

const marker6 = L.marker([26.689819, 83.515110]).addTo(mymap);

// Add popup message
let template6 = `

<h3>6.Gorakhpur</h3>
<h4>Sea level = 84 m</h4>
<h4>Water level = 7-8 mbgl</h4>
`
marker6.bindPopup(template6);  

// Add circle 
/*
const circle6 = L.circle([26.689819, 83.515110], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/
// marker 7

// Adding Marker

const marker7 = L.marker([29.950347, 77.543880]).addTo(mymap);

// Add popup message
let template7 = `

<h3>7.Saharanpur</h3>
<h4>Sea level = 269 m</h4>
<h4>Water level = 15.9 mbgl</h4>
`
marker7.bindPopup(template7);  

// Add circle 
/*
const circle7 = L.circle([29.950347, 77.543880], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/

//marker 8

// Adding Marker

const marker8 = L.marker([27.897889, 78.053314]).addTo(mymap);

// Add popup message
let template8 = `

<h3>8.Aligarh </h3>
<h4>Sea level = 178 m</h4>
<h4>Water level = 21.4 mbgl</h4>
`
marker8.bindPopup(template8);  

// Add circle 
/*
const circle8 = L.circle([27.897889, 78.053314], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/

//marker 9

// Adding Marker

const marker9 = L.marker([27.055061, 79.948889]).addTo(mymap);

// Add popup message
let template9 = `

<h3>9.Kannauj</h3>
<h4>Sea level = 139m</h4>
<h4>Water level = 20 m bgl</h4>
`
marker9.bindPopup(template9);  

// Add circle 
/*
const circle9 = L.circle([27.055061, 79.948889], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/

//marker 10


// Adding Marker

const marker10 = L.marker([29.794820, 76.390083]).addTo(mymap);

// Add popup message
let template10 = `

<h3>10.Kaithal </h3>
<h4>Sea level = 250 m</h4>
<h4>Water level = 15 mbgl</h4>
`
marker10.bindPopup(template10);  

// Add circle 
/*
const circle10 = L.circle([29.794820, 76.390083], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/

//marker 11


// Adding Marker

const marker11 = L.marker([30.317377, 76.379584]).addTo(mymap);

// Add popup message
let template11 = `

<h3>11.Patiala </h3>
<h4>Sea level = 257 m</h4>
<h4>Water level = 6.99-24.8 mbgl</h4>
`
marker11.bindPopup(template11);  

// Add circle 
/*
const circle11 = L.circle([30.317377, 76.379584], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/

//marker 12


// Adding Marker

const marker12 = L.marker([28.641893, 78.574127]).addTo(mymap);

// Add popup message
let template12 = `

<h3>12.Sambhal </h3>
<h4>Sea level = 203 m</h4>
<h4>Water level = 14 mbgl</h4>
`
marker12.bindPopup(template12);  

// Add circle 
/*
const circle12 = L.circle([28.641893, 78.574127], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/

//marker 13


// Adding Marker

const marker13 = L.marker([28.578746, 78.516985]).addTo(mymap);

// Add popup message
let template13 = `

<h3>13.Rampur </h3>
<h4>Sea level = 100-350 m</h4>
<h4>Water level = 4.66 mbgl</h4>
`
marker13.bindPopup(template13);  

// Add circle 
/*
const circle13 = L.circle([28.578746, 78.516985], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/

//marker 14


// Adding Marker

const marker14 = L.marker([28.892824, 76.582342]).addTo(mymap);

// Add popup message
let template14 = `

<h3>14.Rohtak</h3>
<h4>Sea level = 220 m</h4>
<h4>Water level = 5-10 mbgl</h4>
`
marker14.bindPopup(template14);  

// Add circle 
/*
const circle14 = L.circle([28.892824, 76.582342], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/

//marker 15


// Adding Marker

const marker15 = L.marker([28.826754, 78.747752]).addTo(mymap);

// Add popup message
let template15 = `

<h3>15.Moradabad</h3>
<h4>Sea level = 198 m</h4>
<h4>water level = (13.5-14.6)mbgl</h4>
` 
marker15.bindPopup(template15);  

// Add circle 
/*
const circle15 = L.circle([28.826754, 78.747752], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/

//marker 16


// Adding Marker

const marker16 = L.marker([27.175508, 78.043680]).addTo(mymap);

// Add popup message
let template16 = `

<h3>16.Agra</h3>
<h4>Sea level = 170 m</h4>
<h4>water level = 494 ft</h4>
`
marker16.bindPopup(template16);  

// Add circle 
/*
const circle16 = L.circle([27.175508, 78.043680], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/
//marker 17


// Adding Marker

const marker17 = L.marker([28.319055, 79.873439]).addTo(mymap);

// Add popup message
let template17 = `

<h3>17.Bilaspur</h3>
<h4>Sea level = 262 m</h4>
<h4>Water level = 5-16.5 mbgl</h4>
`
marker17.bindPopup(template17);  

// Add circle 
/*
const circle17 = L.circle([28.319055, 79.873439], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/

//marker 18


// Adding Marker

const marker18 = L.marker([27.593696, 80.681054]).addTo(mymap);

// Add popup message
let template18 = `

<h3>18.Sitapur</h3>
<h4>Sea level = 138 m</h4>
<h4>Water level = 2.50-9.36 mbgl</h4>
`
marker18.bindPopup(template18);  

// Add circle 
/*
const circle18 = L.circle([27.593696, 80.681054], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/


//marker 19


// Adding Marker

const marker19 = L.marker([26.812233, 80.945524]).addTo(mymap);

// Add popup message
let template19 = `

<h3>19.Lakhnow</h3>
<h4>Sea level = 123 m</h4>
<h4>Water level =  mbgl</h4>
`
marker19.bindPopup(template19);  

// Add circle 
/*
const circle19 = L.circle([26.812233, 80.945524], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/
//marker 20

// Adding Marker
const marker20 = L.marker([26.217475, 81.324553]).addTo(mymap);

// Add popup message
let template20 = `

<h3>20.Raebareli</h3>
<h4>Sea level = 110 m</h4>
<h4>Water level = 3.15-23.00 mbgl</h4>
`
marker20.bindPopup(template20);  

// Add circle 
/*
const circle20 = L.circle([26.217475, 81.324553], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')

*/


//marker 21

// Adding Marker
const marker21 = L.marker([29.394069, 76.971709]).addTo(mymap);

// Add popup message
let template21 = `

<h3>21.Panipat</h3>
<h4>Sea level = 219m</h4>
<h4>Water level = 10-20 mbgl</h4>
`
marker21.bindPopup(template21);  

// Add circle 
/*
const circle21 = L.circle([29.394069, 76.971709], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/

//marker 22

// Adding Marker
const marker22 = L.marker([29.154578, 77.992351]).addTo(mymap);

// Add popup message
let template22 = `

<h3>22.Hastinapur</h3>
<h4>Sea level = 212m</h4>
<h4>Water level = 18 mbgl</h4>
`
marker22.bindPopup(template22);  

// Add circle 
/*
const circle22 = L.circle([29.154578, 77.992351], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/


//marker 23

// Adding Marker
const marker23 = L.marker([28.994966, 77.688575]).addTo(mymap);

// Add popup message
let template23 = `

<h3>23.Meerut</h3>
<h4>Sea level = 247 m</h4>
<h4>Water level = 50 mbgl</h4>
`
marker23.bindPopup(template23);  

// Add circle 
/*
const circle23 = L.circle([28.994966, 77.688575], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/


//marker 24

// Adding Marker
const marker24 = L.marker([28.839580, 77.574435]).addTo(mymap);

// Add popup message
let template24 = `

<h3>24.Modi Nagar</h3>
<h4>Sea level = 219m</h4>
<h4>Water level = 20 mbgl</h4>
`
marker24.bindPopup(template24);  

// Add circle 
/*
const circle24 = L.circle([28.839580, 77.574435], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/


//marker 25

// Adding Marker
const marker25 = L.marker([28.681282, 77.433611]).addTo(mymap);

// Add popup message
let template25 = `

<h3>25.Ghaziabad</h3>
<h4>Sea level = 214 m</h4>
<h4>Water level = 20.8 mbgl</h4>
`
marker25.bindPopup(template25);  

// Add circle 
/*
const circle25 = L.circle([28.681282, 77.433611], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/


//marker 26

// Adding Marker
const marker26 = L.marker([28.402957, 77.848370]).addTo(mymap);

// Add popup message
let template26 = `

<h3>26.Bulandshahr</h3>
<h4>Sea level = 195 m</h4>
<h4>Water level =19 mbgl</h4>
`
marker26.bindPopup(template26);  

// Add circle 
/*
const circle26 = L.circle([28.402957, 77.848370], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/



//marker 27

// Adding Marker
const marker27 = L.marker([29.873090, 77.884179]).addTo(mymap);

// Add popup message
let template27 = `

<h3>27.Roorkee</h3>
<h4>Sea level = 266 m</h4>
<h4>Water level = 1.6-23 mbgl</h4>
`
marker27.bindPopup(template27);  

// Add circle 
/*
const circle27 = L.circle([29.873090, 77.884179], {
    radius: 150500, 
    color: 'green', 
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('WATERRRRR')
*/
