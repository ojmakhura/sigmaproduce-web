// Generated by andromda-jsf cartridge (view\table\table.component.ts.vsl) DO NOT EDIT!
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Component, OnInit, ViewChild, AfterViewInit, inject, Input, OnDestroy, signal } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormArray } from '@angular/forms';
import { ControllerBase } from '@app/controller/utils/controller.base';
import { ActivatedRoute, Router } from '@angular/router';
import { UseCaseScope } from '@app/utils/use-case-scope';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CropState } from '@app/store/crop/crop.state';
import * as CropSelectors from '@app/store/crop/crop.selectors';

import { CropListVO } from '@app/model/crop/crop-list-vo';
import { SearchCropsImplComponent } from '@app/view/crop/search-crops-impl.component';
import { CropControllerImpl } from '@app/controller/crop/crop-controller.impl';

@Component({
  selector: 'app-search-crops-crops-base',
  template: '',
})
export abstract class SearchCropsCropsComponent implements OnInit, AfterViewInit, OnDestroy {
  cropsColumns = ['code', 'name', 'type', 'actions'];

  totalElements = signal(0);
  crops$: Observable<Array<CropListVO>>;
  cropsSubscription: Subscription;

  cropsDataSource = new MatTableDataSource<CropListVO>([]);
  @ViewChild('cropsPaginator', { static: true }) cropsPaginator: MatPaginator;
  @ViewChild('cropsSort', { static: true }) cropsSort: MatSort;

  @Input() protected pageVariables: any;
  protected route: ActivatedRoute = inject(ActivatedRoute);
  protected router: Router = inject(Router);
  protected useCaseScope: UseCaseScope = inject(UseCaseScope);
  protected store: Store<CropState> = inject(Store);
  protected cropController: CropControllerImpl = inject(CropControllerImpl);
  protected searchCropsComponent: SearchCropsImplComponent = inject(SearchCropsImplComponent);

  constructor() {
    this.crops$ = this.store.pipe(select(CropSelectors.selectCrops));
  }

  ngOnInit(): void {}

  afOnDestroy() {}
  ngOnDestroy() {
    if (this.cropsSubscription) {
      this.cropsSubscription.unsubscribe();
    }
    this.afOnDestroy();
  }

  ngAfterViewInit() {
    this.cropsSubscription = this.crops$.subscribe((crops) => {
      this.cropsDataSource.data = crops;
      this.totalElements.set(crops.length ? crops.length : 0);
    });
    this.cropsDataSource.paginator = this.cropsPaginator;
    this.cropsDataSource.sort = this.cropsSort;
  }

  doSearchCropsEdit(form: any): any {}

  searchCropsEdit(id: string) {
    let form = {
      id: id,
    };
    let queryParams: any = {
      id: id,
    };
    this.cropController.setQueryParams(Object.assign({}, queryParams));
    let params = this.doSearchCropsEdit(form);
    this.useCaseScope.pageVariables = Object.assign({}, params);
    this.cropController.searchCropsEdit(params);
  }

  doSearchCropsDetails(form: any): any {}

  searchCropsDetails(id: string) {
    let form = {
      id: id,
    };
    let queryParams: any = {
      id: id,
    };
    this.cropController.setQueryParams(Object.assign({}, queryParams));
    let params = this.doSearchCropsDetails(form);
    this.useCaseScope.pageVariables = Object.assign({}, params);
    this.cropController.searchCropsDetails(params);
  }
}
