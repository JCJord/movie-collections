import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getErrorMessage } from 'src/app/core/helpers/errorTranslateHelper';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  searchForm = new FormGroup({
    search: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z0-9]*$')  // only alphanumeric
    ])
  });

  constructor() { }

  ngOnInit(): void {

  }

  getError(controlName: string): string | null {
    return getErrorMessage(this.searchForm.get(controlName));
  } 
}
