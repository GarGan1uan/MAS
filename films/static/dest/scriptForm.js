"use strict";
const poster_default = "https://sklad-vlk.ru/d/cml_419459db_460fe794_2.jpg";
function createFilm() {
    let name = document.getElementById("1");
    let name_value = name.value;
    let description = document.getElementById("2");
    let description_value = description.value;
    let country = document.getElementById("3");
    let country_value = country.value;
    let genres = document.getElementById("4");
    let genres_value = [];
    for (let i = 0; i < genres.options.length; i++) {
        if (genres.options[i].selected) {
            genres_value.push(genres.options[i].value);
        }
    }
    let producer = document.getElementById("5");
    let producer_value = producer.value;
    let operator = document.getElementById("6");
    let operator_value = operator.value;
    let composer = document.getElementById("7");
    let composer_value = composer.value;
    let budget = document.getElementById("8");
    let budget_value = (Number)(budget.value);
    let fees = document.getElementById("9");
    let fees_value = (Number)(fees.value);
    let age = document.getElementById("10");
    let age_value = (Number)(age.value);
    let time = document.getElementById("11");
    let time_value = (Number)(time.value);
    let release = document.getElementById("12");
    let release_value = release.value;
    let poster = document.getElementById("13");
    let poster_value = poster.value;
    let id = (String)(films.length + 1);
    if (name_value != "" && description_value != "" && country_value != null && genres_value != null && producer_value != "" && operator_value != "" && composer_value != "" && (String)(budget_value) != "" && fees_value != null && age_value != null && time_value != null && release_value != null && poster_value != null && genres_value.length > 0) {
        let film;
        if (poster_value == "")
            poster_value = poster_default;
        film = new Film(id, name_value, description_value, country_value, genres_value, poster_value, operator_value, composer_value, budget_value, fees_value, age_value, time_value, release_value, poster_value, true, false);
        let films = JSON.parse(localStorage.getItem("films") || "");
        films.push(film);
        localStorage.setItem("films", JSON.stringify(films));
        window.location.href = ("index.html");
    }
}
