// Generated by andromda-jsf cartridge (view\table\table.component.spec.ts.vsl)
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCropTypesCropTypesImplComponent } from '@app/view/crop/type/search-crop-types-crop-types-impl.component';

describe('SearchCropTypesCropTypesImplComponent', () => {
  let component: SearchCropTypesCropTypesImplComponent;
  let fixture: ComponentFixture<SearchCropTypesCropTypesImplComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCropTypesCropTypesImplComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCropTypesCropTypesImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
