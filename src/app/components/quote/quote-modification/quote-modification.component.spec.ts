import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteModificationComponent } from './quote-modification.component';

describe('QuoteModificationComponent', () => {
  let component: QuoteModificationComponent;
  let fixture: ComponentFixture<QuoteModificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteModificationComponent]
    });
    fixture = TestBed.createComponent(QuoteModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
