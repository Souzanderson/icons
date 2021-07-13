import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalbiconComponent } from './malbicon.component';

describe('MalbiconComponent', () => {
  let component: MalbiconComponent;
  let fixture: ComponentFixture<MalbiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalbiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalbiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
