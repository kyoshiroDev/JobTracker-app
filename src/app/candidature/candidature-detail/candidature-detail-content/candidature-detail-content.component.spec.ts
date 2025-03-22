import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureDetailContentComponent } from './candidature-detail-content.component';

describe('CandidatureDetailContentComponent', () => {
  let component: CandidatureDetailContentComponent;
  let fixture: ComponentFixture<CandidatureDetailContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatureDetailContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatureDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
