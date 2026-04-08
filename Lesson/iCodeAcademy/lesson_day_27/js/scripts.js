console.log('Lesson Day 27 - JS JSON Object and JSON String');

(() => {
    console.log('JSON Object');
    // Object human гэдэг төрлийн object
    // name, age, gender гэдэг property-нуудыг агуулсан
    const human = {
        name: "Tuguldur",
        age: 29,
        gender: "male"
    }
    console.log(human);
    console.log(typeof human);

    // JSON - Javascript Object Notation
    const humanString = JSON.stringify(human);
    console.log(humanString);
    console.log(typeof humanString);


    const pokemonData = `{
            "count": 1302,
            "next": "https://pokeapi.co/api/v2/pokemon?offset=40&limit=20",
            "previous": "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
            "results": [
            {
            "name": "spearow",
            "url": "https://pokeapi.co/api/v2/pokemon/21/"
            },
            {
            "name": "fearow",
            "url": "https://pokeapi.co/api/v2/pokemon/22/"
            },
            {
            "name": "ekans",
            "url": "https://pokeapi.co/api/v2/pokemon/23/"
            },
            {
            "name": "arbok",
            "url": "https://pokeapi.co/api/v2/pokemon/24/"
            },
            {
            "name": "pikachu",
            "url": "https://pokeapi.co/api/v2/pokemon/25/"
            },
            {
            "name": "raichu",
            "url": "https://pokeapi.co/api/v2/pokemon/26/"
            },
            {
            "name": "sandshrew",
            "url": "https://pokeapi.co/api/v2/pokemon/27/"
            },
            {
            "name": "sandslash",
            "url": "https://pokeapi.co/api/v2/pokemon/28/"
            },
            {
            "name": "nidoran-f",
            "url": "https://pokeapi.co/api/v2/pokemon/29/"
            },
            {
            "name": "nidorina",
            "url": "https://pokeapi.co/api/v2/pokemon/30/"
            },
            {
            "name": "nidoqueen",
            "url": "https://pokeapi.co/api/v2/pokemon/31/"
            },
            {
            "name": "nidoran-m",
            "url": "https://pokeapi.co/api/v2/pokemon/32/"
            },
            {
            "name": "nidorino",
            "url": "https://pokeapi.co/api/v2/pokemon/33/"
            },
            {
            "name": "nidoking",
            "url": "https://pokeapi.co/api/v2/pokemon/34/"
            },
            {
            "name": "clefairy",
            "url": "https://pokeapi.co/api/v2/pokemon/35/"
            },
            {
            "name": "clefable",
            "url": "https://pokeapi.co/api/v2/pokemon/36/"
            },
            {
            "name": "vulpix",
            "url": "https://pokeapi.co/api/v2/pokemon/37/"
            },
            {
            "name": "ninetales",
            "url": "https://pokeapi.co/api/v2/pokemon/38/"
            },
            {
            "name": "jigglypuff",
            "url": "https://pokeapi.co/api/v2/pokemon/39/"
            },
            {
            "name": "wigglytuff",
            "url": "https://pokeapi.co/api/v2/pokemon/40/"
            }
            ]
}`;
    console.log(typeof pokemonData);

    const pokemonObject = JSON.parse(pokemonData);
    console.log(pokemonObject);
    console.log(typeof pokemonObject);

    // EX01
    // https://pokeapi.co/api/v2/pokemon/34/ Энэ URL дээр байгаа датаг аваад түүнийгээ JS object болгоод
    // хэвлээрэй. Тэгээд object дотроосоо sprite хэсгээс зурагтай линкийг нь сонгож хэвлээрэй.


    // EX02
    // student гэдэг object үүсгээд түүндээ тухайн оюутны нэр, сургууль, бас оюутны дугаар гэж оруулаад 
    // түүнийгээ string болгоорой.

    

})();