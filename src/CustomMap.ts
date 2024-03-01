import { Company } from './Company';
import { User } from './User';
export interface Mappable {
  markerContent(): string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;
}
export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }
  addMarker(user: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: user.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.locaion.lat,
  //       lng: company.locaion.lng,
  //     },
  //   });
  // }
}
