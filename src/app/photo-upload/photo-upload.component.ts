import { Component, OnInit } from '@angular/core';
import {forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';
import {PhotosService} from '../photos.service';
import {FileContent, readFileContent} from '../read-file-content';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent implements OnInit {
  filesCollection = [];

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
  }

  handleFileInput(event): void {
    const images: File[] = event.target.files;
    const imagesCollection = Array.from(images);
    const imagesContent: Array<Promise<FileContent>> =
        imagesCollection.map(file => readFileContent(file))

    const uploadedImages$ = forkJoin(imagesContent).pipe(
        map(imagesSources => {
          const imagesWithSource = imagesCollection.map(
              (image, idx) => ({
                name: image.name,
                id: uuidv4(),
                url: imagesSources[idx]
              })
          );
          return imagesWithSource;
        }),
    );

    uploadedImages$.subscribe(
        photos => this.photosService.newPhotos$.next(photos)
    );
  }

}
