// Generated by andromda-angular cartridge (service\service.impl.ts.vsl) CAN EDIT
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CultivationListVO } from '@app/model/farm/cultivation/cultivation-list-vo';
import { CultivationVO } from '@app/model/farm/cultivation/cultivation-vo';
import { CultivationCriteria } from '@app/model/farm/cultivation/cultivation-criteria';
import { HttpClient } from '@angular/common/http';
import { Page } from '@app/model/page.model';

@Injectable({
  providedIn: 'root',
})
export class CultivationApi {
  protected path = '/farm/cultivation';

  constructor(private http: HttpClient) {}

  public findById(id: string | any): Observable<CultivationVO | any> {
    return this.http.get<CultivationVO | any>(this.path + `/${id}`);
  }

  public getAll(): Observable<CultivationListVO[] | any[]> {
    return this.http.get<CultivationListVO[] | any[]>(this.path);
  }

  public getAllPaged(pageNumber: number | any, pageSize: number | any): Observable<Page<CultivationListVO> | any> {
    return this.http.get<Page<CultivationListVO> | any>(this.path + `/page/${pageNumber}/size/${pageSize}`);
  }

  public pagedSearch(
    pageNumber: number | any,
    pageSize: number | any,
    criteria: CultivationCriteria | any
  ): Observable<Page<CultivationListVO> | any> {
    return this.http.post<Page<CultivationListVO> | any>(this.path + `/search/page/${pageNumber}/size/${pageSize}`, {
      pageNumber: pageNumber,
      pageSize: pageSize,
      criteria: criteria,
    });
  }

  public remove(id: string | any): Observable<boolean | any> {
    return this.http.delete<boolean | any>(this.path + `/${id}`);
  }

  public save(cultivation: CultivationVO | any): Observable<CultivationVO | any> {
    return this.http.post<CultivationVO | any>(this.path, cultivation);
  }

  public search(criteria: CultivationCriteria | any): Observable<CultivationListVO[] | any[]> {
    return this.http.post<CultivationListVO[] | any[]>(this.path + `/search`, criteria);
  }
}
