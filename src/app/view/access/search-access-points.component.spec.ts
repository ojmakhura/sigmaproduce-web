// Generated by andromda-angular cartridge (view\view.component.spec.ts.vsl) DO NOT EDIT!
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchAccessPointsComponentImpl } from '@app/view/access/search-access-points.component.impl.';

describe('SearchAccessPointsComponentImpl', () => {
  let component: SearchAccessPointsComponentImpl;
  let fixture: ComponentFixture<SearchAccessPointsComponentImpl>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAccessPointsComponentImpl],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAccessPointsComponentImpl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});