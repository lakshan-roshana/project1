import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttestComponent } from './texttest.component';

describe('TexttestComponent', () => {
  let component: TexttestComponent;
  let fixture: ComponentFixture<TexttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexttestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
