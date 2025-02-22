import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheAFaireComponent } from './tache-a-faire.component';

describe('TacheAFaireComponent', () => {
  let component: TacheAFaireComponent;
  let fixture: ComponentFixture<TacheAFaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TacheAFaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacheAFaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
