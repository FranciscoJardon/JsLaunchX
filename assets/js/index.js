const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("assets/img/fond.svg");
            cambiarPokeName.textContent = "??????";
            cambiarPokeTipo.textContent = "??????";
            cambiarPokeMov1.textContent = "??????";
            cambiarPokeMov2.textContent = "??????";
            cambiarPokeMov3.textContent = "??????";
            cambiarPokeMov4.textContent = "??????";
            cambiarPokeMov5.textContent = "??????";
            cambiarPokeSkill1.textContent = "??????";
            cambiarPokeSkill2.textContent = "??????";
            cambiarPokeSkill3.textContent = "??????";
            cambiarPokeSkill4.textContent = "??????";
            cambiarPokeSkill5.textContent = "??????";
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            
            let pokeImg = data.sprites.other.dream_world.front_default;
            let cambiarPokeName = data.name;
            let cambiarPokeTipo = data.abilities[0].ability.name;
            let cambiarPokeSkill1 = data.stats[0].base_stat;
            let cambiarPokeSkill2 = data.stats[1].base_stat;
            let cambiarPokeSkill3 = data.stats[2].base_stat;
            let cambiarPokeSkill4 = data.stats[3].base_stat;
            let cambiarPokeSkill5 = data.stats[4].base_stat;
          

            let cambiarPokeMov1 = data.moves[0].move.name;
            let cambiarPokeMov2 = data.moves[1].move.name;
            let cambiarPokeMov3 = data.moves[2].move.name;
            let cambiarPokeMov4 = data.moves[3].move.name;
            let cambiarPokeMov5 = data.moves[4].move.name;

            pokeImage(pokeImg);
            console.log(pokeImg);

            cambiarPN(cambiarPokeName);
            console.log(cambiarPokeName);

            cambiarPT(cambiarPokeTipo);
            console.log(cambiarPokeTipo);

            cambiarSK1(cambiarPokeSkill1);
            console.log(cambiarPokeSkill1);
            
            cambiarSK2(cambiarPokeSkill2);
            console.log(cambiarPokeSkill2);

            cambiarSK3(cambiarPokeSkill3);
            console.log(cambiarPokeSkill3);

            cambiarSK4(cambiarPokeSkill4);
            console.log(cambiarPokeSkill4);

            cambiarSK5(cambiarPokeSkill5);
            console.log(cambiarPokeSkill5);

         

            cambiarMV1(cambiarPokeMov1);
            console.log(cambiarPokeMov1);

            cambiarMV2(cambiarPokeMov2);
            console.log(cambiarPokeMov2);

            cambiarMV3(cambiarPokeMov3);
            console.log(cambiarPokeMov3);

            cambiarMV4(cambiarPokeMov4);
            console.log(cambiarPokeMov4);
            cambiarMV5(cambiarPokeMov5);
            console.log(cambiarPokeMov5);


           
        }
    });
}

const pokeImage = (url) => {
    const pokeP = document.getElementById("pokeImg");
    pokeP.src = url;
}

const cambiarPN = (url) => {
    const pokeN = document.getElementById("cambiarPokeName");
    pokeN.textContent= url;
}
const cambiarPT = (url) => {
    const pokeT = document.getElementById("cambiarPokeTipo");
    pokeT.textContent= url;
}
const cambiarSK1 = (url) => {
    const pokeS1 = document.getElementById("cambiarPokeSkill1");
    pokeS1.textContent=  url ;


}

const cambiarSK2 = (url) => {
    const pokeS2 = document.getElementById("cambiarPokeSkill2");
    pokeS2.textContent=  url ;
}


const cambiarSK3 = (url) => {
    const pokeS3 = document.getElementById("cambiarPokeSkill3");
    pokeS3.textContent=  url ;
}


const cambiarSK4 = (url) => {
    const pokeS4 = document.getElementById("cambiarPokeSkill4");
    pokeS4.textContent=  url ;
}
const cambiarSK5 = (url) => {
    const pokeS5 = document.getElementById("cambiarPokeSkill5");
    pokeS5.textContent=  url ;
}


const cambiarMV1 = (url) => {
    const pokeM1 = document.getElementById("cambiarPokeMov1");
    pokeM1.textContent=  url ;
}

const cambiarMV2 = (url) => {
    const pokeM2 = document.getElementById("cambiarPokeMov2");
    pokeM2.textContent=  url ;
}
const cambiarMV3 = (url) => {
    const pokeM3 = document.getElementById("cambiarPokeMov3");
    pokeM3.textContent=  url ;
}
const cambiarMV4 = (url) => {
    const pokeM4 = document.getElementById("cambiarPokeMov4");
    pokeM4.textContent=  url ;
}
const cambiarMV5 = (url) => {
    const pokeM5 = document.getElementById("cambiarPokeMov5");
    pokeM5.textContent=  url ;
}