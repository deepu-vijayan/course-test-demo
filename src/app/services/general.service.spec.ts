import { TestBed } from '@angular/core/testing';
import { MaterialModule } from '../material/material.modul';
import { GeneralService } from './general.service';
import {MatDialog} from '@angular/material/dialog';


describe('GeneralService', () => {
  let service: GeneralService;
  let matDialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule],
      providers:[
        GeneralService
      ]
    });
    service = TestBed.inject(GeneralService);
    matDialog = TestBed.inject(MatDialog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
