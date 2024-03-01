import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseInt(faker.address.latitude()),
      lng: parseInt(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `User name : ${this.name} `;
  }
}
