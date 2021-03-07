import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeleatendimentoPage } from './teleatendimento.page';

describe('TeleatendimentoPage', () => {
  let component: TeleatendimentoPage;
  let fixture: ComponentFixture<TeleatendimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeleatendimentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeleatendimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
