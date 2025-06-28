import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectionList } from '@angular/material/list';
import { Observable } from 'rxjs';
import { CollectionService } from 'src/app/core/services/collection.service';
import { Collection } from 'src/app/models/collection-form.model';
import { Show } from 'src/app/models/movie.model';

@Component({
  selector: 'app-collection-select-dialog',
  templateUrl: './collection-select-dialog.component.html',
  styleUrls: ['./collection-select-dialog.component.scss']
})
export class CollectionSelectDialogComponent implements OnInit {
  collections$!: Observable<Collection[]>;
  @ViewChild('collectionList') collectionList!: MatSelectionList;

  constructor(
    private collectionService: CollectionService,
    public dialogRef: MatDialogRef<CollectionSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {show: Show},
  ) {}

  ngOnInit(): void {
    this.collections$ = this.collectionService.collections$;
  }

  addMovieToSelectedCollection(): void {
    const selected = this.collectionList.selectedOptions.selected[0]?.value;
    if (!selected) {
      console.warn('No collection selected');
      return;
    }

    this.collectionService.addShowToCollection(selected.id, this.data.show);
    this.dialogRef.close();
  }
}
