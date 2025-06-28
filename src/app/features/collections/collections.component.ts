import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionService } from 'src/app/core/services/collection.service';
import { Collection } from 'src/app/models/collection-form.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  collections$!: Observable<Collection[]>;

  constructor(private collectionService: CollectionService) {
  }
  
  ngOnInit(): void {
    this.collections$ = this.collectionService.collections$;
  }

  deleteFromCollection(collectionId: string, movieId: number): void {
    this.collectionService.removeShowFromCollection(collectionId, movieId);
  }

  trackByCollectionId(index: number, item: Collection): string {
    return item.id!;
  }
}
