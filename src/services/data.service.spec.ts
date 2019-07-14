import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpErrorResponse } from '@angular/common/http';

let httpClientSpy: { get: jasmine.Spy };
let dataService: DataService;

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  dataService = new DataService(<any> httpClientSpy);

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('should return expected puppy data (HttpClient called once)', () => {
    const expectedData =
      [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

    httpClientSpy.get;
    const data = dataService.getRestItems();

    dataService.getPuppyData().subscribe(
      data => expect(data).toEqual(expectedData, 'expected data'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    dataService.getPuppyData().subscribe(
      data => fail('expected an error, no puppy data'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });

});