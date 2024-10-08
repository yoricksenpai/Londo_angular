import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPartComponent } from './contact-part.component';

describe('ContactPartComponent', () => {
  let component: ContactPartComponent;
  let fixture: ComponentFixture<ContactPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
