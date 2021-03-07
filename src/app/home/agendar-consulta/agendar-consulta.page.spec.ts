import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgendarConsultaPage } from './agendar-consulta.page';

describe('AgendarConsultaPage', () => {
  let component: AgendarConsultaPage;
  let fixture: ComponentFixture<AgendarConsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendarConsultaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgendarConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
