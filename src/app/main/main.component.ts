import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  photoUrl: string[] = [];

  constructor(private photoService: PhotoService) {
    this.fechPhoto();
  }

  ngOnInit(): void {}

  onClick() {
    this.fechPhoto();
  }

  fechPhoto() {
    this.photoService.getPhoto().subscribe((response) => {
      // console.log(response.urls.regular);
      this.photoUrl.push(response.urls.regular);
    });
  }
}
