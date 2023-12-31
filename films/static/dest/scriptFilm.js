"use strict";
class Review {
    constructor(name, text, mark) {
        this.name = name;
        this.text = text;
        this.mark = mark;
    }
}
let r1 = new Review("Карл", "Не знаю, почему я так люблю этот фильм. Если взглянуть на него трезвым объективным взглядом, то это совершенно посредственная и банальная история. Узнаваемая и предсказуемая. Но люблю я такие вот незатейливые подростковые истории.", 4);
let r2 = new Review("Мария", "Вначале фильм заинтриговал. Вся эта мистическая атмосфера, общежитие, похожее на замок с лесом вокруг, неожиданная смерть школьника и какой-то темный. Но чем дальше в лес шли, тем становилось хуже.", 2);
class Film {
    constructor(id_film, name, description, country, genres, producer, operator, composer, budget, fees, age, time, release, poster, checked, info) {
        this.review = [];
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
let film1 = new Film("1", "Сделка с дьяволом", "Четыре подростка, принадлежащих к древней касте людей, обладающих сверхъестественными способностями, должны остановить зло, которое они сами когда-то выпустили на волю. Но, чтобы успешно справиться со своей миссией, им необходимо научиться доверять друг другу.", "США", ["Ужасы", "Триллер", "Фэнтези"], "Гарри Лучези", "Рэнни Харлин", "Дж. С. Кардоне", 20000000, 37597471, 16, 97, "2006", "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/0d1a2bcc-44bc-4582-a62e-9c12d162be68/300x450", true, false);
let film2 = new Film("2", "Хитровка. Знак четырёх", "Москва, 1902 год. Знаменитый режиссер Константин Станиславский в поисках вдохновения для постановки новой пьесы решает познакомиться с жизнью городского «дна». Он обращается за помощью к признанному знатоку московских трущоб Владимиру Гиляровскому. Вместе они отправляются на легендарную бандитскую Хитровку и оказываются втянуты в расследование убийства загадочного местного жителя — индийца-сикха с тёмным прошлым.", "Россия", ["Детектив", "Комедия"], "Карен Шахназаров", "Карен Шахназаров", "Екатерина Кочеткова", 400000, 496660, 12, 129, "2023", "https://avatars.mds.yandex.net/get-kinopoisk-image/10671298/f96062f4-4749-4e19-9443-ef44170e7d55/300x450", true, false);
let film3 = new Film("3", "Падение Луны", "10 лет спустя Луна внезапно сходит с орбиты и идёт на столкновение с Землёй, что провоцирует множественные катаклизмы и грозит гибелью человечества. Астроном-самородок, первым заметивший данную аномалию и считающий, что Луна является мегаструктурой, безуспешно пытается достучаться до правительства, поэтому просит помощи у вышедшего в отставку Харпера.", "США", ["Фантастика", "Боевик"], "Джон А. Амикарелла", "Джон А. Амикарелла", "Харальд Клозер", 150000000, 67295363, 12, 130, "2022", "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/080648f5-f42f-46cb-81eb-e205f0f4f1bc/300x450", true, false);
film1.review.push(r1, r2);
let films = [];
if (localStorage["films"] == null) {
    films.push(film1, film2, film3);
    localStorage.setItem("films", JSON.stringify(films));
}
else {
    films = JSON.parse(localStorage.getItem("films") || "");
}
