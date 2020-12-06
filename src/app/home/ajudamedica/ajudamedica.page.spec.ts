import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjudamedicaPage } from './ajudamedica.page';

describe('AjudamedicaPage', () => {
  let component: AjudamedicaPage;
  let fixture: ComponentFixture<AjudamedicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjudamedicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjudamedicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
