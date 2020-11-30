import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TreinoRespPage } from './treino-resp.page';

describe('TreinoRespPage', () => {
  let component: TreinoRespPage;
  let fixture: ComponentFixture<TreinoRespPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinoRespPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TreinoRespPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
