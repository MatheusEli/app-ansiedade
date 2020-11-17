export interface Area {
    'sort-name': string;
    'type-id'?: any;
    type?: any;
    disambiguation: string;
    id: string;
    'iso-3166-1-codes': string[];
    name: string;
}

export interface LifeSpan {
    begin: string;
    end: string;
    ended: boolean;
}

export interface BeginArea {
    type?: any;
    id: string;
    disambiguation: string;
    'sort-name': string;
    'type-id'?: any;
    name: string;
}

export interface ReleaseGroup {
    'first-release-date': string;
    'secondary-types': string[];
    disambiguation: string;
    'secondary-type-ids': string[];
    title: string;
    'primary-type-id': string;
    id: string;
    'primary-type': string;
}

export interface getAlbumsResult {
    end_area?: any;
    country: string;
    area: Area;
    'life-span': LifeSpan;
    name: string;
    ipis: any[];
    'sort-name': string;
    begin_area: Area;
    'gender-id'?: any;
    disambiguation: string;
    'release-groups': ReleaseGroup[];
    gender?: any;
    'end-area'?: any;
    'type-id': string;
    id: string;
    type: string;
    isnis: string[];
    'begin-area': Area;
}