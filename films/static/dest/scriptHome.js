"use strict";
// localStorage.clear();
displayFilms(films);
function displayFilms(films) {
    // console.log(films);
    let allFilms = document.getElementById("allFilms");
    while (allFilms === null || allFilms === void 0 ? void 0 : allFilms.firstChild) {
        allFilms.removeChild(allFilms.firstChild);
    }
    for (let i = 0; i < films.length; i++) {
        let films_info = JSON.parse(localStorage.getItem("films") || "");
        films_info[i].info = false;
        localStorage.setItem("films", JSON.stringify(films_info));
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
        time.textContent = "Длительность: " + films[i].time + " мин.";
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
        // div1.addEventListener("click", () =>  window.location.href = ("FilmInfo.html"));   //   нот ворк
        div2.appendChild(description);
        let inf_btn = document.createElement("input");
        inf_btn.type = "button";
        inf_btn.value = "Подробнее";
        inf_btn.setAttribute("class", "info_btn");
        inf_btn.id = films[i].id_film;
        inf_btn.addEventListener('click', () => {
            for (let k = 0; k < films.length; k++) {
                console.log("Фильм " + films_info[k].name + " " + films[k].id_film + " " + films_info[k].info);
                if (films[k].id_film == inf_btn.id) {
                    let films_info = JSON.parse(localStorage.getItem("films") || "");
                    films_info[k].info = true;
                    localStorage.setItem("films", JSON.stringify(films_info));
                    window.location.href = ("FilmInfo.html");
                    break;
                }
            }
        });
        div2.appendChild(inf_btn);
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
                        localStorage.setItem("films", JSON.stringify(films_ls));
                        displayFilms(films_ls);
                        break;
                    }
                }
            }
        });
        div2.appendChild(del_btn);
    }
}
