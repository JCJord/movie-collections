import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/core/services/collection.service';
import { Collection } from 'src/app/models/collection-form.model';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss']
})
export class CreateCollectionComponent implements OnInit {

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
  }
  
  onFormSubmit(formData: Collection): void {
    this.collectionService.createCollection(formData);
  }
}
