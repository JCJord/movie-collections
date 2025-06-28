import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getErrorMessage } from 'src/app/core/helpers/errorTranslateHelper';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output() onSearch = new EventEmitter<string>();

  searchForm = new FormGroup({
    search: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z0-9]*$')
    ])
  });

  ngOnInit(): void {
  }

  getError(controlName: string): string | null {
    return getErrorMessage(this.searchForm.get(controlName));
  } 

  search() {
    if (this.searchForm.valid) {
      const query = this.searchForm.get('search')?.value;
      this.onSearch.emit(query);
    } else {
      this.searchForm.markAllAsTouched();
    }
  }
}
