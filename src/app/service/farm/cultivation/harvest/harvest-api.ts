// Generated by andromda-angular cartridge (service\service.impl.ts.vsl) CAN EDIT
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HarvestVO } from '@app/model/farm/cultivation/harvest/harvest-vo';
import { HarvestList } from '@app/model/farm/cultivation/harvest/harvest-list';
import { HarvestCriteria } from '@app/model/farm/cultivation/harvest/harvest-criteria';
import { HttpClient } from '@angular/common/http';
import { Page } from '@app/model/page.model';

@Injectable({
  providedIn: 'root',
})
export class HarvestApi {
  protected path = '/farm/cultivation/harvest';

  constructor(private http: HttpClient) {}

  public findById(id: string | any): Observable<HarvestVO | any> {
    return this.http.get<HarvestVO | any>(this.path + `/${id}`);
  }

  public getAll(): Observable<HarvestList[] | any[]> {
    return this.http.get<HarvestList[] | any[]>(this.path);
  }

  public getAllPaged(pageNumber: number | any, pageSize: number | any): Observable<Page<HarvestList> | any> {
    return this.http.get<Page<HarvestList> | any>(this.path + `/page/${pageNumber}/size/${pageSize}`);
  }

  public pagedSearch(
    criteria: HarvestCriteria | any,
    pageNumber: number | any,
    pageSize: number | any
  ): Observable<Page<HarvestList> | any> {
    return this.http.post<Page<HarvestList> | any>(this.path + `/search/page/${pageNumber}/size/${pageSize}`, {
      criteria: criteria,
      pageNumber: pageNumber,
      pageSize: pageSize,
    });
  }

  public remove(id: string | any): Observable<boolean | any> {
    return this.http.delete<boolean | any>(this.path + `/${id}`);
  }

  public save(harvest: HarvestVO | any): Observable<HarvestVO | any> {
    return this.http.post<HarvestVO | any>(this.path, harvest);
  }

  public search(criteria: HarvestCriteria | any): Observable<HarvestList[] | any[]> {
    return this.http.post<HarvestList[] | any[]>(this.path + `/search`, criteria);
  }
}
