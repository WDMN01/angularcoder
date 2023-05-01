import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablamaterialComponent } from './tablamaterial.component';

describe('TablamaterialComponent', () => {
  let component: TablamaterialComponent;
  let fixture: ComponentFixture<TablamaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablamaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablamaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
