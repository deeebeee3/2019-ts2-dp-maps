import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);

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
