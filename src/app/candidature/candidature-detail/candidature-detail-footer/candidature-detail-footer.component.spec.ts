import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureDetailFooterComponent } from './candidature-detail-footer.component';

describe('CandidatureDetailFooterComponent', () => {
  let component: CandidatureDetailFooterComponent;
  let fixture: ComponentFixture<CandidatureDetailFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatureDetailFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatureDetailFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
