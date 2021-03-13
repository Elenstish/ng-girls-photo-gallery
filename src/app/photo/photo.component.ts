import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo: Photo;

  constructor() { }

  ngOnInit(): void {
  }

  onPhotoClick(id) {
    console.warn(id);
  }

}
