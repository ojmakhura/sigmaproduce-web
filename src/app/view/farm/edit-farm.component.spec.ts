// Generated by andromda-angular cartridge (view\view.component.spec.ts.vsl) DO NOT EDIT!
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditFarmImplComponent } from '@app/view/farm/edit-farm-impl.component.';

describe('EditFarmImplComponent', () => {
  let component: EditFarmImplComponent;
  let fixture: ComponentFixture<EditFarmImplComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditFarmImplComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFarmImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
