import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;
  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseInt(faker.address.latitude()),
      lng: parseInt(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
      <h1>Company name : ${this.companyName} </h1>
      <h3> CatchPhrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
