function filter() {

    let search = <HTMLInputElement>document.getElementById("1");
    let search_value = search.value;
    let edit_search = edit(search_value);

    for (let i: number = 0; i < films.length; i++) {
        films[i].checked = true;
    }

    let checkFilms: Film[] = [];
    
    if (edit_search != "") {
        for (let i: number = 0; i < films.length; i++) {
            let film_name = edit(films[i].name);
            if(!film_name.includes(edit_search)){
                films[i].checked = false;
            }
        }
    }


    // --------------------------------------------------- ЖАНРЫ -------------------------------------------------
    let genres = <HTMLSelectElement>document.getElementById("2");
    let genres_value: string[] = [];
    for (let i: number = 0; i < genres.options.length; i++) {
        if (genres.options[i].selected) {
            genres_value.push(genres.options[i].value);
        }
    }

    for (let i: number = 0; i < films.length; i++) {
        let count: number = 0;
        for (let j: number = 0; j < films[i].genres.length; j++) {
            for (let k: number = 0; k < genres_value.length; k++) {
                if (films[i].genres[j] == genres_value[k]) {
                    // console.log("Фильтрация : " + films[i].genres[j]);
                    count++;
                }
            }
        }
        if (count != genres_value.length) {
            films[i].checked = false;
        }
    }

    // --------------------------------------------------- РЭЙТИНГ -------------------------------------------------
    let age = <HTMLSelectElement>document.getElementById("3");
    let age_value: string[] = [];
    for (let i: number = 0; i < age.options.length; i++) {
        if (age.options[i].selected) {
            age_value.push(age.options[i].value);
        }
    }

    for (let i: number = 0; i < films.length; i++) {
        let count: number = 0;
        for (let k: number = 0; k < age_value.length; k++) {

            if ((String)(films[i].age) == age_value[k]) {
                count++;
            }
        }
        if (count == 0 && age_value.length != 0) {
            films[i].checked = false;
        }
    }



    // --------------------------------------------------- Страна -------------------------------------------------
    let country = <HTMLSelectElement>document.getElementById("4");
    let country_value: string[] = [];
    for (let i: number = 0; i < country.options.length; i++) {
        if (country.options[i].selected) {
            country_value.push(country.options[i].value);
        }
    }

    for (let i: number = 0; i < films.length; i++) {
        let count: number = 0;
        for (let k: number = 0; k < country_value.length; k++) {

            if ((String)(films[i].country) == country_value[k]) {
                count++;
            }
        }
        if (count == 0 && country_value.length != 0) {
            console.log("Страна: " + count);
            films[i].checked = false;
        }
    }

    // --------------------------------------------------- Год -------------------------------------------------
    let year = <HTMLSelectElement>document.getElementById("5");
    let year_value: string[] = [];
    for (let i: number = 0; i < year.options.length; i++) {
        if (year.options[i].selected) {
            year_value.push(year.options[i].value);
        }
    }

    for (let i: number = 0; i < films.length; i++) {
        let count: number = 0;
        for (let k: number = 0; k < year_value.length; k++) {
            
            if ((String)(films[i].release) == year_value[k]) {
                count++;
            }

            if ((Number)(films[i].release) < 2015) {
                if ((Number)(films[i].release) >= 2010 && year_value[k] == "2010") count++;
                else if((Number)(films[i].release) >= 2000 && year_value[k] == "2000") count++;
                else if((Number)(films[i].release) >= 1990 && year_value[k] == "1990") count++;
                else if((Number)(films[i].release) >= 1980 && year_value[k] == "1980") count++;
            }


        }
        if (count == 0 && year_value.length != 0) {
            console.log("Страна: " + count);
            films[i].checked = false;
        }
    }

     // ----------------------------------------------------------------------------------------------------

    for (let i: number = 0; i < films.length; i++) {
        if (films[i].checked == true) {
            checkFilms.push(films[i]);
        }
    }

    displayFilms(checkFilms);
}

function edit(text: string){
    let edit_text = text.replace(/[\s.,%]/g, '');
    let text_end = edit_text.toLowerCase();
    return text_end
}