// Generated by andromda-angular cartridge (view\view.component.spec.ts.vsl) DO NOT EDIT!
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCropImplComponent } from '@app/view/crop/edit-crop-impl.component.';

describe('EditCropImplComponent', () => {
	let component: EditCropImplComponent;
	let fixture: ComponentFixture<EditCropImplComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [EditCropImplComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EditCropImplComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});