import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Week06Component } from './week06.component';

describe('Week06Component', () => {
  let component: Week06Component;
  let fixture: ComponentFixture<Week06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week06Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Week06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
