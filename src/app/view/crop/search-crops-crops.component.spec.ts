// Generated by andromda-jsf cartridge (view\table\table.component.spec.ts.vsl)
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCropsCropsImplComponent } from '@app/view/crop/search-crops-crops-impl.component';

describe('SearchCropsCropsImplComponent', () => {
  let component: SearchCropsCropsImplComponent;
  let fixture: ComponentFixture<SearchCropsCropsImplComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCropsCropsImplComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCropsCropsImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
