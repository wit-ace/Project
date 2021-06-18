const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const map = L.map('map').setView([22.9, 78.6], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 8,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

const marker = L.marker([22.9, 78.6]).addTo(map);
let template = `

<h3>MADHYA PRADESH WEATHER</h3>
<div style="text-align:center">
  <img width="320" height="70"src="./WFImages/mp.png"/>
</div>
`
marker.bindPopup(template);  

const marker1 = L.marker([28.7, 77.1]).addTo(map);
let template1 = `

<h3>NEW DELHI WEATHER</h3>
<div style="text-align:center">
  <img width="320" height="70"src="./WFImages/delhi.png"/>
</div>
`
marker1.bindPopup(template1); 

const marker2 = L.marker([19.0, 72.8]).addTo(map);
let template2 = `

<h3>MAHARASHTRA WEATHER</h3>
<div style="text-align:center">
  <img width="320" height="70"src="./WFImages/mhrst.png"/>
</div>
`
marker2.bindPopup(template2);  

const marker3 = L.marker([22.5, 88.3]).addTo(map);
let template3 = `

<h3>WEST BENGAL WEATHER</h3>
<div style="text-align:center">
  <img width="320" height="70"src="./WFImages/wb.png"/>
</div>
`
marker3.bindPopup(template3);  

const marker4 = L.marker([25.0, 85.3]).addTo(map);
let template4 = `

<h3>BIHAR WEATHER</h3>
<div style="text-align:center">
  <img width="320" height="70"src="./WFImages/bihar.png"/>
</div>
`
marker4.bindPopup(template4);  

const marker5 = L.marker([26.8, 80.9]).addTo(map);
let template5 = `

<h3>UTTAR PRADESH WEATHER</h3>
<div style="text-align:center">
  <img width="320" height="70"src="./WFImages/UP.png"/>
</div>
`
marker5.bindPopup(template5);  

const marker6 = L.marker([26.2, 92.9]).addTo(map);
let template6 = `

<h3>ASSAM WEATHER</h3>
<div style="text-align:center">
  <img width="320" height="70"src="./WFImages/assam.png"/>
</div>
`
marker6.bindPopup(template6);  

const marker7 = L.marker([31.1, 75.3]).addTo(map);
let template7 = `

<h3>PUNJAB WEATHER</h3>
<div style="text-align:center">
  <img width="320" height="70"src="./WFImages/pb.png"/>
</div>
`
marker7.bindPopup(template7);  

const marker8 = L.marker([17.3, 78.4]).addTo(map);
let template8 = `

<h3>HYDERABAD WEATHER</h3>
<div style="text-align:center">
  <img width="320" height="70"src="./WFImages/hyd.png"/>
</div>
`
marker8.bindPopup(template8);  

const marker9 = L.marker([11.1, 78.6]).addTo(map);
let template9 = `

<h3>TAMIL NADU WEATHER</h3>
<div style="text-align:center">
  <img width="320" height="70"src="./WFImages/tn.png"/>
</div>
`
marker9.bindPopup(template9);  