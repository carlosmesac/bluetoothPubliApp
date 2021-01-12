import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuMasterPage } from './menu-master.page';

describe('MenuMasterPage', () => {
  let component: MenuMasterPage;
  let fixture: ComponentFixture<MenuMasterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMasterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuMasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
