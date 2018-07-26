import { Injectable } from '@angular/core';
import { IBook } from './book.model';

import { RestService } from '../../../shared/rest.service';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
}
