import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './productos.service';
import { BrowserModule } from '@angular/platform-browser';

imports: [
  BrowserModule,
  HttpClientModule
]
describe('ProductosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductosService = TestBed.get(ProductosService);
    expect(service).toBeTruthy();
  });
});
