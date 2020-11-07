import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

  export interface LifeSpan {
      ended?: boolean;
      begin: string;
      end: string;
  }

  export interface Area {
      id: string;
      type: string;
      typeIid: string;
      name: string;
      sortName: string;
      lifeSpan: LifeSpan;
  }

  export interface LifeSpan2 {
      ended?: any;
  }

  export interface BeginArea {
      id: string;
      type: string;
      typeId: string;
      name: string;
      sortName: string;
      lifeSpan: LifeSpan2;
  }

  export interface LifeSpan3 {
      begin: string;
      end: string;
      ended?: boolean;
  }

  export interface Alias {
      sortName: string;
      typeId: string;
      name: string;
      locale: string;
      type: string;
      primary?: boolean;
      beginDate: string;
      endDate: string;
  }

  export interface Tag {
      count: number;
      name: string;
  }

  export interface Artist {
      id: string;
      type: string;
      typeId: string;
      score: number;
      name: string;
      sortName: string;
      country: string;
      area: Area;
      beginArea: BeginArea;
      disambiguation: string;
      isnis: string[];
      lifeSpan: LifeSpan3;
      aliases: Alias[];
      tags: Tag[];
      gender: string;
  }

  export interface User {
      created: Date;
      count: number;
      offset: number;
      artists: Artist[];
  }





@Component({
  selector: 'app-musicoterapia',
  templateUrl: './musicoterapia.page.html',
  styleUrls: ['./musicoterapia.page.scss'],
})
export class MusicoterapiaPage implements OnInit {

  public result : User[];

  constructor(private http: HttpClient) {
    this.load();
   }

  ngOnInit() {
  }

  public async load(){
    const url = 'http://musicbrainz.org/ws/2/artist/?query=nirvana&fmt=json';
    this.result = await this.http.get(url).toPromise() as User[];
  }

}
