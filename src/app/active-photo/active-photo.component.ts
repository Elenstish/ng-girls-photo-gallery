import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Photo} from '../photo';
import {PhotosService} from '../photos.service';

@Component({
  selector: 'app-active-photo',
  templateUrl: './active-photo.component.html',
  styleUrls: ['./active-photo.component.scss']
})
export class ActivePhotoComponent implements OnInit {
  activePhoto$: Observable<Photo> = this.photosService.activePhoto$;

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
  }

  hidePhoto(): void {
    this.photosService.activePhotoID$.next(this.photosService.noPhotoID);
  }

}
