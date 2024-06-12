// Generated by andromda-angular cartridge (service\service.impl.ts.vsl) CAN EDIT
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CultivationListVO } from '@app/model/farm/cultivation/cultivation-list-vo';
import { CultivationProblemListVO } from '@app/model/farm/cultivation/problem/cultivation-problem-list-vo';
import { CultivationCriteria } from '@app/model/farm/cultivation/cultivation-criteria';
import { CultivationProblemVO } from '@app/model/farm/cultivation/problem/cultivation-problem-vo';
import { HttpClient } from '@angular/common/http';
import { Page } from '@app/model/page.model';

@Injectable({
  providedIn: 'root',
})
export class CultivationProblemApi {
  protected path = '/farm/cultivation/problem';

  constructor(private http: HttpClient) {}

  public findById(id: string | any): Observable<CultivationProblemVO | any> {
    return this.http.get<CultivationProblemVO | any>(this.path + `/${id}`);
  }

  public getAll(): Observable<CultivationProblemListVO[] | any[]> {
    return this.http.get<CultivationProblemListVO[] | any[]>(this.path);
  }

  public getAllPaged(
    pageNumber: number | any,
    pageSize: number | any
  ): Observable<Page<CultivationProblemListVO> | any> {
    return this.http.get<Page<CultivationProblemListVO> | any>(this.path + `/page/${pageNumber}/size/${pageSize}`);
  }

  public pagedSearch(
    pageNumber: number | any,
    pageSize: number | any,
    criteria: CultivationCriteria | any
  ): Observable<Page<CultivationListVO> | any> {
    return this.http.get<Page<CultivationListVO> | any>(this.path + `/search/page/${pageNumber}/size/${pageSize}`);
  }

  public remove(id: string | any): Observable<boolean | any> {
    return this.http.delete<boolean | any>(this.path + `/${id}`);
  }

  public save(cultivationProblem: CultivationProblemVO | any): Observable<CultivationProblemVO | any> {
    return this.http.post<CultivationProblemVO | any>(this.path, cultivationProblem);
  }

  public search(criteria: CultivationCriteria | any): Observable<CultivationListVO[] | any[]> {
    return this.http.get<CultivationListVO[] | any[]>(this.path + `/search`);
  }
}