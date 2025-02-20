import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidaturesRecentesComponent } from './candidatures-recentes.component';

describe('CandidaturesRecentesComponent', () => {
  let component: CandidaturesRecentesComponent;
  let fixture: ComponentFixture<CandidaturesRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidaturesRecentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidaturesRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
