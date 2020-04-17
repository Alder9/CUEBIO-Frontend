import { Injectable } from '@angular/core';

import { Apple } from '../apple';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPanelService {

  show: boolean = false;

  apple: Apple;
  images: Observable<any>;

  constructor(private http: HttpClient) { }

  showPanel() {
    this.show = true;
  }

  hidePanel() {
    this.show = false;
  }

  add(apple: Apple) {
    this.apple = apple;
    console.log(this.apple);
  }

  grabImages() {
    console.log("Grabbing images for " + this.apple.tree_tag_id);

    this.http.get('http://localhost:3000/images/' + this.apple.tree_tag_id)
      .subscribe(data => {
        console.log(data);
      })
    
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, {responseType: 'blob'});
  }
}
