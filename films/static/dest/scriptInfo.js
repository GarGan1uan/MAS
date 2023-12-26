"use strict";
// let film_info = JSON.parse(localStorage.getItem("films") || "");
displayFilm(films);
function displayFilm(films) {
    let allFilms = document.getElementById("allFilms");
    while (allFilms === null || allFilms === void 0 ? void 0 : allFilms.firstChild) {
        allFilms.removeChild(allFilms.firstChild);
    }
    for (let i = 0; i < films.length; i++) {
        if (films[i].info == true) {
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
            name.textContent = "Название фильма: " + films[i].name;
            age.textContent = "Возрастное ограничение: " + films[i].age + "+";
            description.textContent = "Описание: " + films[i].description;
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
            budget.textContent = "Бюджет: " + films[i].budget + "$";
            fees.textContent = "Мировые сборы: " + films[i].fees + "$";
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
            div2.appendChild(composer);
            div2.appendChild(producer);
            div2.appendChild(operator);
            div2.appendChild(budget);
            div2.appendChild(fees);
            let review_page = document.createElement("div");
            review.appendChild(review_page);
            review_page.textContent = "Отзывы";
            let rev_list = document.createElement("div");
            review.appendChild(rev_list);
            if (films[i].review.length == 0) {
                rev_list.textContent = "Отзывов нет. Оставьте свой отзыв, будте первым.";
            }
            else {
                for (let k = 0; k < films[i].review.length; k++) {
                    let rev_p = document.createElement("p");
                    let rev = document.createElement("div");
                    rev.setAttribute("class", "rev");
                    let name = document.createElement("p");
                    name.textContent = films[i].review[k].name;
                    let text = document.createElement("p");
                    text.textContent = films[i].review[k].text;
                    let mark = document.createElement("p");
                    mark.textContent = "Оценка: " + films[i].review[k].mark.toString();
                    rev_list.appendChild(rev_p);
                    rev_p.appendChild(rev);
                    rev.appendChild(name);
                    rev.appendChild(text);
                    rev.appendChild(mark);
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
                name.textContent = "Имя пользователя: ";
                name_input.type = "text";
                name_input.required = true;
                name_input.id = "rev_name";
                let text = document.createElement("p");
                let text_input = document.createElement("textarea");
                text.textContent = "Отзыв: ";
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
                add_btn.value = "Добавить свой отзыв";
                add_btn.setAttribute("class", "btn_add");
                rev_form.appendChild(add_btn);
                add_btn.addEventListener('click', () => {
                    let name_input_input = document.getElementById("rev_name");
                    let name_value = name_input_input.value;
                    let text_input_input = document.getElementById("rev_text");
                    let text_value = text_input_input.value;
                    let mark_input_input = document.getElementById("rev_mark");
                    let mark_value = +mark_input_input.value;
                    if (name_value !== "" && text_value !== "" && mark_value >= 0 && mark_value <= 10) {
                        let r2 = new Review(name_value, text_value, mark_value);
                        films[i].review.push(r2);
                        localStorage.setItem("films", JSON.stringify(films));
                    }
                });
            });
        }
    }
}
