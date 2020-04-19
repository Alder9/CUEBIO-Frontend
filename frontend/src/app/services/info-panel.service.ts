import { Injectable } from '@angular/core';

import { Apple } from '../apple';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPanelService {
  show: boolean = false;

  apple: Apple;
  private images: String[];
  imagesSource = new BehaviorSubject<String[]>([]);

  constructor(private http: HttpClient) { 
    this.images = new Array<String>();
  }

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

    this.http.get<String[]>('http://localhost:3000/images/' + this.apple.tree_tag_id)
      .subscribe(data => {
        this.images = data;
        this.imagesSource.next(this.images);
      })
    
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, {responseType: 'blob'});
  }
}
