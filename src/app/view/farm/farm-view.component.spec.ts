// Generated by andromda-angular cartridge (view\view.component.spec.ts.vsl) DO NOT EDIT!
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmViewImplComponent } from '@app/view/farm/farm-view-impl.component.';

describe('FarmViewImplComponent', () => {
	let component: FarmViewImplComponent;
	let fixture: ComponentFixture<FarmViewImplComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [FarmViewImplComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FarmViewImplComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
