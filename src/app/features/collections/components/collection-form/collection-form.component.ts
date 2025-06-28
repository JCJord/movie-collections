import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { getErrorMessage } from 'src/app/core/helpers/errorTranslateHelper';
import { Collection } from 'src/app/models/collection-form.model';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.scss']
})
export class CollectionFormComponent implements OnInit {
  collectionForm!: FormGroup;
  @Output() onFormSubmit = new EventEmitter<Collection>();

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.collectionForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    this.onFormSubmit.emit(this.collectionForm.value);
    this.router.navigate(['/collections']);
  }

  getError(controlName: string): string | null {
    return getErrorMessage(this.collectionForm.get(controlName));
  } 
}
