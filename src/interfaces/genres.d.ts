export interface Genres {
    data: Datum[];
}

export interface Datum {
    mal_id: number;
    name:   string;
    url:    string;
    count:  number;
}
