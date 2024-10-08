import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPartComponent } from './second-part.component';

describe('SecondPartComponent', () => {
  let component: SecondPartComponent;
  let fixture: ComponentFixture<SecondPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
