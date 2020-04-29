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
  private images: string[];
  imagesSource = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) { 
    this.images = new Array<string>();
  }

  showPanel() {
    this.show = true;
  }

  hidePanel() {
    this.show = false;
  }

  add(apple: Apple) {
    this.apple = apple;
    this.grabImages();
  }

  grabImages() {
    console.log("Grabbing images for " + this.apple.tree_tag_id);

    this.http.get<string[]>('http://ec2-18-188-46-232.us-east-2.compute.amazonaws.com:3000/images/' + this.apple.tree_tag_id)
      .subscribe(data => {
        this.images = data;
        this.imagesSource.next(this.images);
      })
    
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, {responseType: 'blob'});
  }
}
