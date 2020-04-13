import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UriConstant } from '../core/constants/uri-constant';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient,
    private uriConstant: UriConstant) { }

  get() {
    return this.httpClient.get(this.uriConstant.MenuUri);
  }

  delete(id) {
    return this.httpClient.delete(`${this.uriConstant.MenuUri}?id=${id}`);
  }

  update(menu) {
    return this.httpClient.patch(this.uriConstant.MenuUri, menu);
  }

  add(menu) {
    return this.httpClient.post(this.uriConstant.MenuUri, menu);
  }
}