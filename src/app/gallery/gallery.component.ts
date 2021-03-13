import { Component, OnInit } from '@angular/core';
import {Photo} from '../photo';
import {PhotosService} from '../photos.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  photosList: Photo[] = this.photosService.photos;

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
  }

}
