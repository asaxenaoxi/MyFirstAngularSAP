import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllCorpClientComponent } from './list-all-corp-client.component';

describe('ListAllCorpClientComponent', () => {
  let component: ListAllCorpClientComponent;
  let fixture: ComponentFixture<ListAllCorpClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllCorpClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllCorpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
