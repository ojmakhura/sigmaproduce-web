// Generated by andromda-angular cartridge (service\service.impl.ts.vsl) CAN EDIT
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CropIssueVO } from '@app/model/bw/co/sigmaproduce/crop/issue/crop-issue-vo';
import { HttpClient } from '@angular/common/http';
import { Page } from '@app/model/page.model';

@Injectable({
  providedIn: 'root'
})
export class CropIssueApi {
    
    protected path = '/crop/issue';

    constructor(private http: HttpClient) {
    }

    public findById(id: string | any ): Observable<CropIssueVO | any> {

        return this.http.get<CropIssueVO | any>(this.path + `/${id}`);

    }

    public getAll(): Observable<CropIssueVO[] | any[]> {

        return this.http.get<CropIssueVO[] | any[]>(this.path + `/all`);

    }

    public getAllPaged(pageNumber: number | any , pageSize: number | any ): Observable<Page<CropIssueVO>[] | any[]> {

        return this.http.get<Page<CropIssueVO>[] | any[]>(this.path + `/all/paged`);

    }

    public remove(id: string | any ): Observable<boolean | any> {

        return this.http.delete<boolean | any>(this.path + `/${id}`);

    }

    public save(cropIssue: CropIssueVO | any ): Observable<CropIssueVO | any> {

        return this.http.post<CropIssueVO | any>(this.path, cropIssue);

    }

    public search(criteria: string | any ): Observable<CropIssueVO[] | any[]> {

        return this.http.get<CropIssueVO[] | any[]>(this.path + `/search`);

    }

    public searchByType(type: CropIssueType | any ): Observable<CropIssueVO[] | any[]> {

        return this.http.get<CropIssueVO[] | any[]>(this.path + `/search/type`);

    }

    public searchByTypeAndCrop(type: CropIssueType | any , cropId: string | any ): Observable<CropIssueVO[] | any[]> {

        return this.http.get<CropIssueVO[] | any[]>(this.path + `/search/crop/${cropId}/type/${type}`);

    }

    public searchByTypeAndCropPaged(type: CropIssueType | any , cropId: string | any , pageNumber: number | any , pageSize: number | any ): Observable<Page<CropIssueVO>[] | any[]> {

        return this.http.get<Page<CropIssueVO>[] | any[]>(this.path + `/search/paged/crop/${cropId}/type/${type}`);

    }

    public searchPaged(criteria: string | any , pageNumber: number | any , pageSize: number | any ): Observable<Page<CropIssueVO>[] | any[]> {

        return this.http.get<Page<CropIssueVO>[] | any[]>(this.path + `/search/paged`);

    }

}
