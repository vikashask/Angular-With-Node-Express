import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

import { ProductService } from './product.service';
import { IProduct } from './product.model';

import { RestService } from '../../../shared/rest.service';

describe('ProductService', () => {
    let injector: TestBed;
    let service: ProductService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ProductService, RestService]
        });

        injector = getTestBed();
        service = injector.get(ProductService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

});
