"use strict";
class Review {
    constructor(name, text, mark) {
        this.name = name;
        this.text = text;
        this.mark = mark;
    }
}
class Film {
    constructor(id_film, name, description, country, genres, producer, operator, composer, budget, fees, age, time, release, poster) {
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
    }
}
let film1 = new Film("1", "Сделка с дьяволом", "Четыре подростка, принадлежащих к древней касте людей, обладающих сверхъестественными способностями, должны остановить зло, которое они сами когда-то выпустили на волю. Но, чтобы успешно справиться со своей миссией, им необходимо научиться доверять друг другу.", "США", ["Ужас", "Триллер", "Фэнтези"], "Гарри Лучези", "Рэнни Харлин", "Дж. С. Кардоне", 20000000, 37597471, 16, "97 мин.", "2006", "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/0d1a2bcc-44bc-4582-a62e-9c12d162be68/300x450");
let film2 = new Film("2", "Хитровка. Знак четырёх", "Москва, 1902 год. Знаменитый режиссер Константин Станиславский в поисках вдохновения для постановки новой пьесы решает познакомиться с жизнью городского «дна». Он обращается за помощью к признанному знатоку московских трущоб Владимиру Гиляровскому. Вместе они отправляются на легендарную бандитскую Хитровку и оказываются втянуты в расследование убийства загадочного местного жителя — индийца-сикха с тёмным прошлым.", "Россия", ["Детектив, Комедия"], "Карен Шахназаров", "Карен Шахназаров", "Екатерина Кочеткова", 400000, 496660, 12, "129 мин.", "2023", "https://avatars.mds.yandex.net/get-kinopoisk-image/10671298/f96062f4-4749-4e19-9443-ef44170e7d55/300x450");
let film3 = new Film("3", "Падение Луны", "10 лет спустя Луна внезапно сходит с орбиты и идёт на столкновение с Землёй, что провоцирует множественные катаклизмы и грозит гибелью человечества. Астроном-самородок, первым заметивший данную аномалию и считающий, что Луна является мегаструктурой, безуспешно пытается достучаться до правительства, поэтому просит помощи у вышедшего в отставку Харпера.", "США", ["Фантастика", "Боевик"], "Джон А. Амикарелла", "Джон А. Амикарелла", "Харальд Клозер", 150000000, 67295363, 12, "130", "2022", "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/080648f5-f42f-46cb-81eb-e205f0f4f1bc/300x450");
let films = [];
// localStorage.clear();
if (localStorage["films"] == null) {
    films.push(film1, film2, film3);
    localStorage.setItem("films", JSON.stringify(films));
}
else {
    films = JSON.parse(localStorage.getItem("films") || "");
}
displayFilms(films);
function displayFilms(films) {
    let allFilms = document.getElementById("allFilms");
    while (allFilms === null || allFilms === void 0 ? void 0 : allFilms.firstChild) {
        allFilms.removeChild(allFilms.firstChild);
    }
    for (let i = 0; i < films.length; i++) {
        let img = document.createElement("img");
        let name = document.createElement("p");
        let age = document.createElement("p");
        let description = document.createElement("p");
        let release = document.createElement("p");
        let genres = document.createElement("p");
        let country = document.createElement("p");
        let time = document.createElement("p");
        let composer = document.createElement("p");
        let producer = document.createElement("p");
        let operator = document.createElement("p");
        let budget = document.createElement("p");
        let fees = document.createElement("p");
        img.src = films[i].poster;
        name.textContent = films[i].name;
        age.textContent = "Возрастное ограничение: " + films[i].age;
        description.textContent = films[i].description;
        release.textContent = "Год выпуска: " + films[i].release.toString();
        genres.textContent += "Жанры: ";
        for (let j = 0; j < films[i].genres.length; j++) {
            genres.textContent += films[i].genres[j];
            if (j != films[i].genres.length - 1) {
                genres.textContent += ", ";
            }
        }
        country.textContent = "Страна: " + films[i].country;
        time.textContent = "Длительность: " + films[i].time;
        composer.textContent += "Сценарист: " + films[i].composer;
        producer.textContent = "Продюсер: " + films[i].producer;
        operator.textContent = "Режиссер: " + films[i].operator;
        budget.textContent = "Бюджет: " + films[i].budget;
        fees.textContent = "Мировые сборы: " + films[i].fees;
        let main_div = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let review = document.createElement("div");
        let film = document.createElement("div");
        review.setAttribute("class", "review");
        main_div.setAttribute("class", "main");
        div1.setAttribute("class", "image");
        div2.setAttribute("class", "text");
        film.setAttribute("class", "film");
        name.setAttribute("class", "name");
        allFilms === null || allFilms === void 0 ? void 0 : allFilms.appendChild(main_div);
        main_div.appendChild(film);
        main_div.appendChild(review);
        film.appendChild(div1);
        film.appendChild(div2);
        main_div.appendChild(review);
        div1.appendChild(img);
        div2.appendChild(name);
        div2.appendChild(country);
        div2.appendChild(age);
        div2.appendChild(release);
        div2.appendChild(genres);
        div2.appendChild(country);
        div2.appendChild(time);
        // if (books[i].publisher != "неизвестен") {
        //     let publisher = document.createElement("p");
        //     publisher.textContent = "Издатель: " + books[i].publisher;
        //     div2.appendChild(publisher);
        // }
        // if (books[i].publishing_year != "неизвестен") {
        //     let pub_year = document.createElement("p");
        //     pub_year.textContent = "Год издания: " + books[i].publishing_year.toString();
        //     div2.appendChild(pub_year);
        // }
        // div2.appendChild(curr_lang);
        // if (books[i].pages != "неизвестно") {
        //     let pages = document.createElement("p");
        //     pages.textContent = "Количество страниц: " + books[i].pages.toString();
        //     div2.appendChild(pages);
        // }
        // if (books[i].series != "нет") {
        //     let series = document.createElement("p");
        //     series.textContent = "Серия книг: " + books[i].series;
        //     div2.appendChild(series);
        // }
        // if (books[i].volume != "нет") {
        //     let volume = document.createElement("p");
        //     volume.textContent = "Том: " + books[i].volume;
        //     div2.appendChild(volume);
        // }
        // if (books[i].translator && books[i].translator != unknown_translator.name) {
        //     let translator = document.createElement("p");
        //     translator.textContent = "Переводчик: " + books[i].translator;
        //     div2.appendChild(translator);
        // }
        // if (books[i].artist && books[i].artist != unknown_artist.name) {
        //     let artist = document.createElement("p");
        //     artist.textContent = "Художник: " + books[i].artist;
        //     div2.appendChild(artist);
        // }
        div2.appendChild(description);
        let del_btn = document.createElement("input");
        del_btn.type = "button";
        del_btn.value = "Удалить фильм";
        del_btn.setAttribute("class", "delete_btn");
        del_btn.id = films[i].id_film;
        del_btn.addEventListener('click', () => {
            let isDelete = confirm("Удалить фильм?");
            if (isDelete) {
                for (let k = 0; k < films.length; k++) {
                    if (films[k].id_film == del_btn.id) {
                        let films_ls = JSON.parse(localStorage.getItem("films") || "");
                        films_ls.splice(k, 1);
                        localStorage.setItem("books", JSON.stringify(films_ls));
                        displayFilms(films_ls);
                        break;
                    }
                }
            }
        });
        div2.appendChild(del_btn);
        let disp_rev_btn = document.createElement("input");
        let rev_list = document.createElement("div");
        let hide_rev_btn = document.createElement("input");
        review.appendChild(disp_rev_btn);
        review.appendChild(hide_rev_btn);
        review.appendChild(rev_list);
        disp_rev_btn.type = "button";
        disp_rev_btn.value = "Открыть отзывы";
        disp_rev_btn.setAttribute("class", "btn");
        hide_rev_btn.type = "button";
        hide_rev_btn.value = "Скрыть отзывы";
        hide_rev_btn.style.display = "none";
        hide_rev_btn.setAttribute("class", "btn");
        disp_rev_btn.addEventListener('click', () => {
            hide_rev_btn.style.display = "inline-flex";
            disp_rev_btn.style.display = "none";
            if (films[i].review.length == 0) {
                rev_list.textContent = "Отзывов нет";
            }
            else {
                for (let k = 0; k < films[i].review.length; k++) {
                    let rev_p = document.createElement("p");
                    let rev = document.createElement("div");
                    rev.setAttribute("class", "rev");
                    let name = document.createElement("p");
                    name.textContent = "Название: " + films[i].review[k].name;
                    let text = document.createElement("p");
                    text.textContent = "Отзыв: " + films[i].review[k].text;
                    let mark = document.createElement("p");
                    mark.textContent = "Оценка: " + films[i].review[k].mark.toString();
                    rev_list.appendChild(rev_p);
                    rev_p.appendChild(rev);
                    rev.appendChild(name);
                    rev.appendChild(mark);
                    rev.appendChild(text);
                }
            }
            let p_add_rev = document.createElement("p");
            let add_rev_btn = document.createElement("input");
            add_rev_btn.value = "Добавить отзыв";
            add_rev_btn.type = "button";
            add_rev_btn.setAttribute("class", "btn");
            rev_list.appendChild(p_add_rev);
            p_add_rev.appendChild(add_rev_btn);
            add_rev_btn.addEventListener('click', () => {
                let rev_form = document.createElement("form");
                let name = document.createElement("p");
                let name_input = document.createElement("input");
                name.textContent = "Название: ";
                name_input.type = "text";
                name_input.required = true;
                name_input.id = "rev_name";
                let text = document.createElement("p");
                let text_input = document.createElement("textarea");
                text.textContent = "Содержание: ";
                text_input.required = true;
                text_input.id = "rev_text";
                let mark = document.createElement("p");
                let mark_input = document.createElement("input");
                mark.textContent = "Оценка: ";
                mark_input.type = "number";
                mark_input.required = true;
                mark_input.id = "rev_mark";
                mark_input.min = "0";
                mark_input.max = "10";
                p_add_rev.appendChild(rev_form);
                rev_form.appendChild(name);
                name.appendChild(name_input);
                rev_form.appendChild(text);
                text.appendChild(text_input);
                rev_form.appendChild(mark);
                mark.appendChild(mark_input);
                add_rev_btn.style.display = "none";
                let add_btn = document.createElement("input");
                add_btn.type = "submit";
                add_btn.value = "Добавить";
                add_btn.setAttribute("class", "btn");
                rev_form.appendChild(add_btn);
                add_btn.addEventListener('click', () => {
                    let name_input_input = document.getElementById("rev_name");
                    let name_value = name_input_input.value;
                    let text_input_input = document.getElementById("rev_text");
                    let text_value = text_input_input.value;
                    let mark_input_input = document.getElementById("rev_mark");
                    let mark_value = +mark_input_input.value;
                    if (name_value !== "" && text_value !== "" && mark_value >= 0 && mark_value <= 10) {
                        let new_review = new Review(name_value, text_value, mark_value);
                        let films_for_rev = JSON.parse(localStorage.getItem("films") || "");
                        for (let m = 0; m < films_for_rev.length; m++) {
                            if (films_for_rev[m].isbn == films[i].id_film) {
                                films_for_rev[m].review.push(new_review);
                                localStorage.setItem("films", JSON.stringify(films_for_rev));
                            }
                        }
                    }
                });
            });
        });
        hide_rev_btn.addEventListener('click', () => {
            hide_rev_btn.style.display = "none";
            disp_rev_btn.style.display = "inline-flex";
            while (rev_list.firstChild) {
                rev_list.removeChild(rev_list.firstChild);
            }
        });
    }
}
films.forEach( (element) => {
    console.log(element);
});
// if (localStorage["films"]==null){
//     films.push(film1, film2, film3);
//     localStorage.setItem("films", JSON.stringify(films));
// }
// else{
//     films = JSON.parse(localStorage.getItem("films") || "");
// }
// function ViewFilms(films: Film[]){
//     let allFilm = document.getElementById("view__films");
//     while(allFilm?.firstChild){
//         let poster = document.createElement("img");
//         let name = document.createElement("p");
//         let year = document.createElement("p");
//         poster.
//     }
// }
