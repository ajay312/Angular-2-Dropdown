//a simple service
import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class brandService {
      public totalArray: Array<string> = [];

  constructor(http:Http) {
    this.acuraJson = http.get('api/acura.json').map(res => res.json());
    this.fordJson = http.get('api/ford.json').map(res => res.json())
   
    this.makesJson = http.get('api/makes.json').map(res => res.json())

  }
}