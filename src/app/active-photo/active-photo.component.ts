import {Component, OnDestroy, OnInit} from '@angular/core';
import {Photo} from '../photo';
import {PhotosService} from '../photos.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-active-photo',
  templateUrl: './active-photo.component.html',
  styleUrls: ['./active-photo.component.scss']
})
export class ActivePhotoComponent implements OnInit, OnDestroy {
  photo: Photo;
  isPDF = false;
  photoSubscription: Subscription;

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
   this.photoSubscription = this.photosService.activePhoto$.subscribe(photo => {
     this.photo = photo;
     if (this.photo) {
       this.isPDF = (this.photo.url.indexOf('pdf') > -1);
     }
   });
  }

  ngOnDestroy(): void {
    this.photoSubscription.unsubscribe();
  }

  hidePhoto(): void {
    this.photosService.activePhotoID$.next(this.photosService.noPhotoID);
  }

}
