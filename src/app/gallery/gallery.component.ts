import { Component, OnInit } from '@angular/core';
import {Photo} from '../photo';
import {PhotosService} from '../photos.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  photosList$: Observable<Photo[]> = this.photosService.activeCategoryPhotos$;

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
  }

}
