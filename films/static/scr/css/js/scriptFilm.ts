class Review {
    name: string;
    text: string;
    mark: number;
    constructor(name: string, text: string, mark: number) {
        this.name = name;
        this.text = text;
        this.mark = mark;
    }
}

let r1 = new Review("Карл","Не знаю, почему я так люблю этот фильм. Если взглянуть на него трезвым объективным взглядом, то это совершенно посредственная и банальная история. Узнаваемая и предсказуемая. Но люблю я такие вот незатейливые подростковые истории.", 4);
let r2 = new Review("Мария","Вначале фильм заинтриговал. Вся эта мистическая атмосфера, общежитие, похожее на замок с лесом вокруг, неожиданная смерть школьника и какой-то темный. Но чем дальше в лес шли, тем становилось хуже.", 2);


class Film {
    id_film: string;
    name: string;
    description: string;
    country: string;
    genres: string[];
    producer: string;
    operator: string;
    composer: string;
    budget: number;
    fees: number;
    age: number;
    time: number;
    release: string;
    poster: string;
    review: Review[] = [];
    checked: boolean;
    info: boolean;

    constructor(id_film: string, name: string, description: string, country: string, genres: string[], producer: string, operator: string, composer: string, budget: number, fees: number, age: number, time: number, release: string, poster: string, checked: boolean, info: boolean){
        this.id_film = id_film;
        this.name = name;
        this.description = description;
        this.country = country;
        this.genres = genres;
        this.producer = producer;
        this.operator = operator;
        this.composer = composer;
        this.budget = budget;
        this.fees = fees;
        this.age = age;
        this.time = time;
        this.release = release;
        this.poster = poster;
        this.checked = checked;
        this.info = info;
    }
}

let film1 = new Film("1", "Сделка с дьяволом", "Четыре подростка, принадлежащих к древней касте людей, обладающих сверхъестественными способностями, должны остановить зло, которое они сами когда-то выпустили на волю. Но, чтобы успешно справиться со своей миссией, им необходимо научиться доверять друг другу.", "США", ["Ужасы", "Триллер", "Фэнтези"], "Гарри Лучези", "Рэнни Харлин", "Дж. С. Кардоне", 20000000, 37597471, 16, 97, "2006", "https://www.kinopoisk.ru/1D7Px0132/96c73evfC/5oe4IUpeUsC_ktFAOCZcQTBP_Rveks8C8pEXQuwQWkXHROZ4o2imvEM6yDGPVfir50rIsYXH-10mclgE1-vC89eO6RAHIhqhw5epHFFnLEBhd40r35qSI6uBYw-ZfSb5B-Qu3WvwWhzDi008nkmN3oI3ybGop7I4FjYBzXu7Wj6Ch1yRek6HXJfqOLwIPrjJ6HbhK9aPO45ieHNeYCQyGWN88g2zgHp0U5MhRIZEfZIqm7lVJL8WoYYy7W0Orxq6-rf4eYKSj6hT0gRklDI4teQyaS_u-8MO3tD3vhiYetXTpKK9dyTKtNfnKSRmKBVq5kM9taiPpjU-5gmlbveGbqJPHBkS0tMcYwqQfISWoBEsNq0fkn8zGiLQc87QZDYhs8hCFc8sFli3S-Xo7iSNPh5fJa3cr1p17koRPUbnWs5-m5ztRp6HqAOGRDB0csRhMHKNGwZH345a6KtW5AhGRffEasHTQF687381wJJU8Uaix63lJNeuseryzTkei0JOMtfkPUJe00QjnkC4hPakAYTy4btO4xN2zozn4lSYjqG7ZP4dq9S-iH97fYT6yHUSoruxKRzX7oGWqv0N2ueW0jp3DFkuPlNMGzokZMTqIMFoug2n8gsvyjbUMy6I8Pq5fzyOddv0mjCTl024zjzh7qoH_WUot665jqp9YcZTmu6y1yxlBn5H3C-WyOAU9nB5eJrBN-b7q77WaD8qoORexZ9wHpFfbKqgRwdVTE6IVRoym0HdqItaNb5GSWlOD-ZWejdkqWIum3zHkrAY9KZUTRzO7Q9-IzcmWoRjSsCQ2lU3ILr5T5CGgMfnqWR2PPFafp_tdRg7miFqUhVVgvdiWobrNLFaEiNop4qU4Awq2OXwot3Lmld_El6MY2ro-No1S9ByNYd4zgi_u_n8Jiix2hLD8UkI02aRlia1VeI32royQ7hBfjoTHIeahNDo6sSdlJbhPw77YxquTEv20EjWTRsIcrFP2JpYz-dRbNpcBTYOg3E1LBNqXXamlW222x7Ogh8g4d7-N5DvahB8DDKgFTQa6Rcen-eGahTnWuTMxtUbeBZJL3A6hJd35Tzq3CFeRh9p5YxLurFy4gE5NjMW0l6fZHluUivkl7a01Lge-OUYMvljosdbXob8E_JkkD6p4wgmDdvsithT49EAdgwdkg7PPUlImyIlvu79EbJbbk4uB5TJ7iJb9CvCdMCEbkyFDG6lRw6bTzoicHviXHQGQdfIcjXzdEIIR3sVTGrMoe4-G2lh1BPytUoiHbVC30JyVksMWdL229i7MrCwTCpI8czmFZcq6zN-TmA76vyU-q1LUMqJg8AqfEuLwVQGfNGyZhNRVZy_urlOypF5rnfi0upPfF2S3tPAl06s6GDuDGEc8gmv6kdnEn5EB65A4H7BR8S63dcE3uTD983IlqQdogbXUXkQK0qJljL5gc6H-rL213whBg6_fFvGkKzU9rRJFLp5E_rHG94ubBeu0IBWlSPQrhFP5Io0N4tZUCoEkW6Gh62ltKMisXIyzemmE87yyr-sVXber9jDViTU5EbA-fDqIcv-W1s-eghz6mhMNhVD7LZtx_SujG8rVXCGcDnOEiNB1cwHnplmOsm5ApN64trbtOVKPps0Pwag6IgmXM1kOm3Lwse_tu5MN-KYvLIlH9RK2XPc0txHu-FUovSNuuKHUX1QsypFTj5p2Z6f-ioqm9RVJp6bUDuKCDwYdiRVuKIZa9onV0r64J864OSuxVfIoj0LDLK0AyvBeE4MZa7mI6X5fGs2VUbmlR0Kj5pCLsfwsZLOo0xf5lTQkCpEXYjmeYfm_2umcmTrilSALl2_-Abdu5wW8AvnHWz6iPX-lmfxeayb1jnKrtHhOhNy-jJXtDFikqfot1YkKOCG-NXgjl0Xeh-_VvIQ4_6IwEK9q_w-3QP4jggDP5VQ5oiRZgYzIalUv3qF-iqVGZornvaqzyQlaioPcDNSwPT4bsx9OGKdQ1aDlw4mfHvmeLAm4X9wcnnDSFKA6589TAb0sboqLx3F3BNSdc6q3aHGl87qUjd0kQ4eN8C7ygywEO5wdSCSEW8W69eayggzhmS0Ds3D1M6VNyimJJMTZViCzPnO7oO5SShXVkXyshW5rt-q4qJPICkmzjNMQxrQSBSOPJ0IJh0TdtevDspwuy50BEZRa0hm7bfAPoBbu-lomjz5riJbbV04WzLxGjbNoWYHCsLm7-yt5jIzWCeSRGRklrzBoA6NY_brR9JKxJdqaAReOVP4jpG_mJ4kG5f96KpMbU7OT90RkOe2BaI-hX0Sq3KqBo8UmdoGj6SvMgD8lL7wXUyG9XOGS9MK8ij_vlwg9tm7bPIJy2i6ANuP4ehOoPWW5iNl-TCzntW-Wr11rpdull5_5D1GWndwI-IAKITuhIWsPt23jtfP2o7sH1JcFAKd6yA2Yf90sqDjS214hkit6jpbJWVMu8LZ_nLNKeaXinrmD-iRBtK3QFPSiPxYJmwZbHIhD_rzYxY-JDcGhDRCKacEnhWLyI6ww8e1wFqofXrGC93dvBcunZaWkYUao5JSsuesVf4mByQrwrQstG4ouaCm3Ydae2eSsgg7jkCw7iGbKG51q9zWCEMr1cgGnGmqNpOdOSTTKgmermmhbgvOti7zKCXail88Fx683JCuVNW8Iu0zztPTCn4Yp1IQkMINr9BqBR_cStDTo_1wggAdQjrnUe1cw_oNIhrdhc6LAj5KW3TRllrbYI8OWHxEtjyxLJKVC9YPR94CRG9edJQyme9cOsmL1D6sS2uxMCIkddb6C939zJcqie46cXGKj15CiosAeVJaFyxPBji0_Cb4xfSmSZNqA5MaQti_ohx4crHXsBadX2CCfFejMfjSUKHOwtP93QwzUiEqNsmdppcapjZ7ZH1aLnvwS47YOAzmpEkQHqWH4hsXvsJoQ76E7KpJW4iOcfekmiiLt3H4Upjx2qrHyVUs57Zxqmow", true, false);
let film2 = new Film("2", "Хитровка. Знак четырёх", "Москва, 1902 год. Знаменитый режиссер Константин Станиславский в поисках вдохновения для постановки новой пьесы решает познакомиться с жизнью городского «дна». Он обращается за помощью к признанному знатоку московских трущоб Владимиру Гиляровскому. Вместе они отправляются на легендарную бандитскую Хитровку и оказываются втянуты в расследование убийства загадочного местного жителя — индийца-сикха с тёмным прошлым.", "Россия", ["Детектив", "Комедия"], "Карен Шахназаров", "Карен Шахназаров", "Екатерина Кочеткова", 400000, 496660, 12, 129, "2023", "https://www.kinopoisk.ru/1D7Px0132/96c73evfC/5oe4IUpeUsC_ktFAOCZcQTBP_Rveks8C8pEXQuwQWkXHROZ4o2imvEM6yDmLVfCj50rJ9ZiOmhBrPkwFlr_bm9eO8HVbIha135OofT17IRR4J5U6isaWI6uBYw-ZfSb5B-Qu3WvwWhzDi008nkmN3oI3ybGop7I4FjYBzXu7Wj6Ch1yRek6HXJfqOLwIPrjJ6HbhK9aPO45ieHNeYCQyGWN88g2zgHp0U5MhRIZEfZIqm7lVJL8WoYYy7W0Orxq6-rf4eYKSj6hT0gRklDI4teQyaS_u-8MO3tD3vhiYetXTpKK9dyTKtNfnKSRmKBVq5kM9taiPpjU-5gmlbveGbqJPHBkS0tMcYwqQfISWoBEsNq0fkn8zGiLQc87QZDYhs8hCFc8sFli3S-Xo7iSNPh5fJa3cr1p17koRPUbnWs5-m5ztRp6HqAOGRDB0csRhMHKNGwZH345a6KtW5AhGRffEasHTQF687381wJJU8Uaix63lJNeuseryzTkei0JOMtfkPUJe00QjnkC4hPakAYTy4btO4xN2zozn4lSYjqG7ZP4dq9S-iH97fYT6yHUSoruxKRzX7oGWqv0N2ueW0jp3DFkuPlNMGzokZMTqIMFoug2n8gsvyjbUMy6I8Pq5fzyOddv0mjCTl024zjzh7qoH_WUot665jqp9YcZTmu6y1yxlBn5H3C-WyOAU9nB5eJrBN-b7q77WaD8qoORexZ9wHpFfbKqgRwdVTE6IVRoym0HdqItaNb5GSWlOD-ZWejdkqWIum3zHkrAY9KZUTRzO7Q9-IzcmWoRjSsCQ2lU3ILr5T5CGgMfnqWR2PPFafp_tdRg7miFqUhVVgvdiWobrNLFaEiNop4qU4Awq2OXwot3Lmld_El6MY2ro-No1S9ByNYd4zgi_u_n8Jiix2hLD8UkI02aRlia1VeI32royQ7hBfjoTHIeahNDo6sSdlJbhPw77YxquTEv20EjWTRsIcrFP2JpYz-dRbNpcBTYOg3E1LBNqXXamlW222x7Ogh8g4d7-N5DvahB8DDKgFTQa6Rcen-eGahTnWuTMxtUbeBZJL3A6hJd35Tzq3CFeRh9p5YxLurFy4gE5NjMW0l6fZHluUivkl7a01Lge-OUYMvljosdbXob8E_JkkD6p4wgmDdvsithT49EAdgwdkg7PPUlImyIlvu79EbJbbk4uB5TJ7iJb9CvCdMCEbkyFDG6lRw6bTzoicHviXHQGQdfIcjXzdEIIR3sVTGrMoe4-G2lh1BPytUoiHbVC30JyVksMWdL229i7MrCwTCpI8czmFZcq6zN-TmA76vyU-q1LUMqJg8AqfEuLwVQGfNGyZhNRVZy_urlOypF5rnfi0upPfF2S3tPAl06s6GDuDGEc8gmv6kdnEn5EB65A4H7BR8S63dcE3uTD983IlqQdogbXUXkQK0qJljL5gc6H-rL213whBg6_fFvGkKzU9rRJFLp5E_rHG94ubBeu0IBWlSPQrhFP5Io0N4tZUCoEkW6Gh62ltKMisXIyzemmE87yyr-sVXber9jDViTU5EbA-fDqIcv-W1s-eghz6mhMNhVD7LZtx_SujG8rVXCGcDnOEiNB1cwHnplmOsm5ApN64trbtOVKPps0Pwag6IgmXM1kOm3Lwse_tu5MN-KYvLIlH9RK2XPc0txHu-FUovSNuuKHUX1QsypFTj5p2Z6f-ioqm9RVJp6bUDuKCDwYdiRVuKIZa9onV0r64J864OSuxVfIoj0LDLK0AyvBeE4MZa7mI6X5fGs2VUbmlR0Kj5pCLsfwsZLOo0xf5lTQkCpEXYjmeYfm_2umcmTrilSALl2_-Abdu5wW8AvnHWz6iPX-lmfxeayb1jnKrtHhOhNy-jJXtDFikqfot1YkKOCG-NXgjl0Xeh-_VvIQ4_6IwEK9q_w-3QP4jggDP5VQ5oiRZgYzIalUv3qF-iqVGZornvaqzyQlaioPcDNSwPT4bsx9OGKdQ1aDlw4mfHvmeLAm4X9wcnnDSFKA6589TAb0sboqLx3F3BNSdc6q3aHGl87qUjd0kQ4eN8C7ygywEO5wdSCSEW8W69eayggzhmS0Ds3D1M6VNyimJJMTZViCzPnO7oO5SShXVkXyshW5rt-q4qJPICkmzjNMQxrQSBSOPJ0IJh0TdtevDspwuy50BEZRa0hm7bfAPoBbu-lomjz5riJbbV04WzLxGjbNoWYHCsLm7-yt5jIzWCeSRGRklrzBoA6NY_brR9JKxJdqaAReOVP4jpG_mJ4kG5f96KpMbU7OT90RkOe2BaI-hX0Sq3KqBo8UmdoGj6SvMgD8lL7wXUyG9XOGS9MK8ij_vlwg9tm7bPIJy2i6ANuP4ehOoPWW5iNl-TCzntW-Wr11rpdull5_5D1GWndwI-IAKITuhIWsPt23jtfP2o7sH1JcFAKd6yA2Yf90sqDjS214hkit6jpbJWVMu8LZ_nLNKeaXinrmD-iRBtK3QFPSiPxYJmwZbHIhD_rzYxY-JDcGhDRCKacEnhWLyI6ww8e1wFqofXrGC93dvBcunZaWkYUao5JSsuesVf4mByQrwrQstG4ouaCm3Ydae2eSsgg7jkCw7iGbKG51q9zWCEMr1cgGnGmqNpOdOSTTKgmermmhbgvOti7zKCXail88Fx683JCuVNW8Iu0zztPTCn4Yp1IQkMINr9BqBR_cStDTo_1wggAdQjrnUe1cw_oNIhrdhc6LAj5KW3TRllrbYI8OWHxEtjyxLJKVC9YPR94CRG9edJQyme9cOsmL1D6sS2uxMCIkddb6C939zJcqie46cXGKj15CiosAeVJaFyxPBji0_Cb4xfSmSZNqA5MaQti_ohx4crHXsBadX2CCfFejMfjSUKHOwtP93QwzUiEqNsmdppcapjZ7ZH1aLnvwS47YOAzmpEkQHqWH4hsXvsJoQ76E7KpJW4iOcfekmiiLt3H4Upjx2qrHyVUs57Zxqmow", true, false);
let film3 = new Film("3", "Падение Луны", "10 лет спустя Луна внезапно сходит с орбиты и идёт на столкновение с Землёй, что провоцирует множественные катаклизмы и грозит гибелью человечества. Астроном-самородок, первым заметивший данную аномалию и считающий, что Луна является мегаструктурой, безуспешно пытается достучаться до правительства, поэтому просит помощи у вышедшего в отставку Харпера.", "США", ["Фантастика", "Боевик"], "Джон А. Амикарелла", "Джон А. Амикарелла", "Харальд Клозер", 150000000, 67295363, 12, 130, "2022", "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/080648f5-f42f-46cb-81eb-e205f0f4f1bc/300x450", true, false);

film1.review.push(r1, r2);


let films: Film[] = [];


if (localStorage["films"] == null) {
    films.push(film1, film2, film3);
    localStorage.setItem("films", JSON.stringify(films));
}
else {
    films = JSON.parse(localStorage.getItem("films") || "");
}