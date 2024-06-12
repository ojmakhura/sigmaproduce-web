// Generated by andromda-angular cartridge (service\service.impl.ts.vsl) CAN EDIT
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VillageVO } from '@app/model/bw/co/sigmaproduce/village/village-vo';
import { HttpClient } from '@angular/common/http';
import { Page } from '@app/model/page.model';

@Injectable({
  providedIn: 'root'
})
export class VillageApi {
    
    protected path = '/village';

    constructor(private http: HttpClient) {
    }

    public findById(id: number | any ): Observable<VillageVO | any> {

        return this.http.get<VillageVO | any>(this.path + `/${id}`);

    }

    public getAll(): Observable<VillageVO[] | any[]> {

        return this.http.get<VillageVO[] | any[]>(this.path);

    }

    public getDistrictVillages(districtId: string | any ): Observable<VillageVO | any> {

        return this.http.get<VillageVO | any>(this.path + `/district`);

    }

    public remove(id: number | any ): Observable<boolean | any> {

        return this.http.delete<boolean | any>(this.path + `/${id}`);

    }

    public save(village: VillageVO | any ): Observable<VillageVO | any> {

        return this.http.post<VillageVO | any>(this.path, village);

    }

    public search(criteria: string | any ): Observable<VillageVO[] | any[]> {

        return this.http.get<VillageVO[] | any[]>(this.path + `/search`);

    }

}
