export interface Characters {
    data: Datum[];
}

export interface Datum {
    character:    Character;
    role:         string;
    voice_actors: VoiceActor[];
}

export interface Character {
    mal_id: number;
    url:    string;
    images: { [key: string]: Image };
    name:   string;
}

export interface Image {
    image_url:       string;
    small_image_url: string;
}

export interface VoiceActor {
    person:   Person;
    language: string;
}

export interface Person {
    mal_id: number;
    url:    string;
    images: Images;
    name:   string;
}

export interface Images {
    jpg: Jpg;
}

export interface Jpg {
    image_url: string;
}
