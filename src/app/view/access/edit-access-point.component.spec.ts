// Generated by andromda-angular cartridge (view\view.component.spec.ts.vsl) DO NOT EDIT!
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditAccessPointComponentImpl } from '@app/view/access/edit-access-point.component.impl.';

describe('EditAccessPointComponentImpl', () => {
  let component: EditAccessPointComponentImpl;
  let fixture: ComponentFixture<EditAccessPointComponentImpl>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditAccessPointComponentImpl],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccessPointComponentImpl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
