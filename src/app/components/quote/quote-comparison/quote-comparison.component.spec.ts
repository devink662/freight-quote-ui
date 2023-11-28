import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteComparisonComponent } from './quote-comparison.component';

describe('QuoteComparisonComponent', () => {
  let component: QuoteComparisonComponent;
  let fixture: ComponentFixture<QuoteComparisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteComparisonComponent]
    });
    fixture = TestBed.createComponent(QuoteComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
