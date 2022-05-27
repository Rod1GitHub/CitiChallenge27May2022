// HTML and Javascript

document
  .querySelector("#buttonPokeNumber")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // 1. HTML Input Capture
    let captureId = document.getElementById("idInput").value;

    // 2. URL Construction
    let pokeId = captureId;
    let pokeUrlPokemon = "https://pokeapi.co/api/v2/pokemon/" + pokeId;
    let pokeUrlCharacteristic =
      "https://pokeapi.co/api/v2/characteristic/" + pokeId;
    console.log(pokeUrlPokemon);
    console.log(pokeUrlCharacteristic);

    // 3.1 Api Connectivity
    const fetchDataFromPokeApi1 = async (URL) => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log("Id = " + data.id);
        console.log("Name = " + data.name);
        console.log("Type = " + data.types[0].type.name);
      } catch (error) {
        console.log("There was an error, please read the message displayed");
      }
    };
    fetchDataFromPokeApi1(pokeUrlPokemon);
    //3.2 Api Connectivity
    const fetchDataFromPokeApi2 = async (URL) => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log("Description = " + data.descriptions[5].description);
      } catch (error) {
        console.log("There was an error, please read the message displayed");
      }
    };

    fetchDataFromPokeApi2(pokeUrlCharacteristic);
  });
