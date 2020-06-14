import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecugenSingleComponent } from './secugen-single.component';

describe('SecugenSingleComponent', () => {
  let component: SecugenSingleComponent;
  let fixture: ComponentFixture<SecugenSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecugenSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecugenSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
