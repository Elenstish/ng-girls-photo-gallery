import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../photo';
import {PhotosService} from '../photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo: Photo;
  isPDF = false;

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.isPDF = (this.photo.url.indexOf('pdf') > -1);
  }

  onPhotoClick(photoID: string): void {
    this.photosService.activePhotoID$.next(photoID);
  }

}
