import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureDetailHeaderComponent } from './candidature-detail-header.component';

describe('CandidatureDetailHeaderComponent', () => {
  let component: CandidatureDetailHeaderComponent;
  let fixture: ComponentFixture<CandidatureDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatureDetailHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatureDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
