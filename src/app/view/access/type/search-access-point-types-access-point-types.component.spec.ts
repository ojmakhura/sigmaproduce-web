// Generated by andromda-jsf cartridge (view\table\table.component.spec.ts.vsl)
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAccessPointTypesAccessPointTypesComponentImpl } from '@app/view/access/type/search-access-point-types-access-point-types.component.impl';

describe('SearchAccessPointTypesAccessPointTypesComponentImpl', () => {
  let component: SearchAccessPointTypesAccessPointTypesComponentImpl;
  let fixture: ComponentFixture<SearchAccessPointTypesAccessPointTypesComponentImpl>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAccessPointTypesAccessPointTypesComponentImpl],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAccessPointTypesAccessPointTypesComponentImpl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
