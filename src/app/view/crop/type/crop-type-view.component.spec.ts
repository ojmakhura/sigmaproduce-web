// Generated by andromda-angular cartridge (view\view.component.spec.ts.vsl) DO NOT EDIT!
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CropTypeViewImplComponent } from '@app/view/crop/type/crop-type-view-impl.component.';

describe('CropTypeViewImplComponent', () => {
	let component: CropTypeViewImplComponent;
	let fixture: ComponentFixture<CropTypeViewImplComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [CropTypeViewImplComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CropTypeViewImplComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});