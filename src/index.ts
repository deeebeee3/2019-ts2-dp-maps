// import { User } from './User';
// import { Company } from './Company';
import { CustomMap } from './CustomMap';

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);

new CustomMap('map');

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
