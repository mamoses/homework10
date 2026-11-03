const pokemon = [
    { name: "Charmander", type: "fire", maxHp: 100, attack: 15 },
    { name: "Squirtle", type: "water", maxHp: 110, attack: 12 },
    { name: "Pikachu", type: "electric", maxHp: 95, attack: 18 },
    { name: "Bulbasaur", type: "grass", maxHp: 105, attack: 13 }
];

const filterDropdown = document.getElementById("pokemonType");
const container = document.getElementById("pokemonWrapper");

function renderPokemon(selectedType) {
    const filtered = selectedType === "all"
        ? pokemon
        : pokemon.filter(p => p.type === selectedType);

    container.innerHTML = filtered
        .map(p => `
      <div class="pokemon-card">
        <h3>${p.name} (${p.type}) - ${p.maxHp} HP</h3>
      </div>
    `)
        .join('');
}

const allStats = pokemon.reduce((answer, pokemon) => {
    if (pokemon.maxHp > answer.maxHP) {
        answer.maxHP = pokemon.maxHp;
    }

    answer.avgAttack += pokemon.attack;

    return answer;
}, { maxHP: 0, avgAttack: 0 });

const averageAttackSingle = allStats.avgAttack / pokemon.length;

console.log(`Max HP: ${allStats.maxHP}`);
console.log(`Average Attack: ${averageAttackSingle}`);


filterDropdown.addEventListener("change", (event) => {
    renderPokemon(event.target.value);
});

renderPokemon("all");

