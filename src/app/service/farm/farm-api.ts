// Generated by andromda-angular cartridge (service\service.impl.ts.vsl) CAN EDIT
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FarmListVO } from '@app/model/farm/farm-list-vo';
import { FarmVO } from '@app/model/farm/farm-vo';
import { FarmCriteria } from '@app/model/farm/farm-criteria';
import { HttpClient } from '@angular/common/http';
import { Page } from '@app/model/page.model';

@Injectable({
  providedIn: 'root',
})
export class FarmApi {
  protected path = '/farm';

  constructor(private http: HttpClient) {}

  public findByDistrict(districtId: string | any): Observable<FarmListVO | any> {
    return this.http.post<FarmListVO | any>(this.path + `/district/${districtId}`, districtId);
  }

  public findById(id: string | any): Observable<FarmVO | any> {
    return this.http.get<FarmVO | any>(this.path + `/${id}`);
  }

  public findByVillage(villageId: string | any): Observable<FarmListVO | any> {
    return this.http.get<FarmListVO | any>(this.path + `/village/${villageId}`);
  }

  public getAll(): Observable<FarmListVO[] | any[]> {
    return this.http.get<FarmListVO[] | any[]>(this.path);
  }

  public getAllPaged(pageNumber: number | any, pageSize: number | any): Observable<Page<FarmListVO> | any> {
    return this.http.get<Page<FarmListVO> | any>(this.path + `/page/${pageNumber}/size/${pageSize}`);
  }

  public pagedSearch(
    pageNumber: number | any,
    pageSize: number | any,
    criteria: string | any
  ): Observable<Page<CropListVO> | any> {
    return this.http.get<Page<CropListVO> | any>(this.path + `/search/page/${pageNumber}/size/${pageSize}`);
  }

  public remove(id: string | any): Observable<boolean | any> {
    return this.http.delete<boolean | any>(this.path + `/${id}`);
  }

  public save(farm: FarmVO | any): Observable<FarmVO | any> {
    return this.http.post<FarmVO | any>(this.path, farm);
  }

  public search(criteria: FarmCriteria | any): Observable<FarmListVO[] | any[]> {
    return this.http.get<FarmListVO[] | any[]>(this.path + `/search`);
  }
}
