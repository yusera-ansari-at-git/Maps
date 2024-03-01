/// <reference types="@types/google.maps" />
// import { User } from './User';
// import { Company } from './Company';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';
// const user = new User();
// console.log(user);
// const company = new Company();
// console.log(company);

const customMap = new CustomMap('map');
customMap.addMarker(new User());
customMap.addMarker(new Company());
