import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelContainerComponent } from './parcel-container.component';

describe('ParcelContainerComponent', () => {
  let component: ParcelContainerComponent;
  let fixture: ComponentFixture<ParcelContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
