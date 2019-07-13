// import { User } from './User';
// import { Company } from './Company';

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);

//render map
new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: { lat: 0, lng: 0 }
});

//make the map 100% height and width
var body = document.body,
  html = document.documentElement;
var height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);
document.getElementById('map').style.height = height + 'px';
