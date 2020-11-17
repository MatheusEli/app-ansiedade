import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListmusicPage } from './listmusic.page';

describe('ListmusicPage', () => {
  let component: ListmusicPage;
  let fixture: ComponentFixture<ListmusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmusicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListmusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
