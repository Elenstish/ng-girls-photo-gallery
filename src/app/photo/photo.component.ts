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

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
  }

  onPhotoClick(photoID: string): void {
    this.photosService.activePhotoID$.next(photoID);
  }

}
