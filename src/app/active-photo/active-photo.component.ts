import {Component, OnDestroy} from '@angular/core';
import {Photo} from '../photo';
import {PhotosService} from '../photos.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-active-photo',
  templateUrl: './active-photo.component.html',
  styleUrls: ['./active-photo.component.scss']
})
export class ActivePhotoComponent implements OnDestroy {
  photo: Photo;

  photoSubscription: Subscription =
      this.photosService.activePhoto$.subscribe(photo => {
    this.photo = photo;
  });

  constructor(private photosService: PhotosService) { }

  ngOnDestroy(): void {
    this.photoSubscription.unsubscribe();
  }

  hidePhoto(): void {
    this.photosService.activePhotoID$.next(this.photosService.noPhotoID);
  }

}
