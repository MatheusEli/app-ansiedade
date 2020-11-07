import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicoterapiaPage } from './musicoterapia.page';

describe('MusicoterapiaPage', () => {
  let component: MusicoterapiaPage;
  let fixture: ComponentFixture<MusicoterapiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicoterapiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicoterapiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
