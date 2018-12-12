import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCorpClientComponent } from './add-corp-client.component';

describe('AddCorpClientComponent', () => {
  let component: AddCorpClientComponent;
  let fixture: ComponentFixture<AddCorpClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCorpClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCorpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
