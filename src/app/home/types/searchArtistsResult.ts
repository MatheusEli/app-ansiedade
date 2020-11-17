

    export interface LifeSpan {
        ended?: boolean;
        begin: string;
        end: string;
    }

    export interface Area {
        id: string;
        type: string;
        'type-id': string;
        name: string;
        'sort-name': string;
       ' life-span': LifeSpan;
    }

    export interface Alias {
        'sort-name': string;
        'type-id': string;
        name: string;
        locale: string;
        type: string;
        primary?: boolean;
        'begin-date': string;
        'end-date': string;
    }

    export interface Tag {
        count: number;
        name: string;
    }

    export interface Artist {
        id: string;
        type: string;
        'type-id': string;
        score: number;
        name: string;
        'sort-name': string;
        country: string;
        area: Area;
        'begin-area': Area;
        disambiguation: string;
        isnis: string[];
        'life-span': LifeSpan;
        aliases: Alias[];
        tags: Tag[];
        gender: string;
    }

    export interface SearchArtistsResult {
        created: Date;
        count: number;
        offset: number;
        artists: Artist[];
    }