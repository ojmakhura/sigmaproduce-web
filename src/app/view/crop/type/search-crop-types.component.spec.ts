// Generated by andromda-angular cartridge (view\view.component.spec.ts.vsl) DO NOT EDIT!
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchCropTypesImplComponent } from '@app/view/crop/type/search-crop-types-impl.component.';

describe('SearchCropTypesImplComponent', () => {
	let component: SearchCropTypesImplComponent;
	let fixture: ComponentFixture<SearchCropTypesImplComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [SearchCropTypesImplComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchCropTypesImplComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
