document.getElementById("search-button").addEventListener("click", async () => {
    const pokemonName = document.getElementById("pokemon-name").value.trim().toLowerCase();
    
    if (!pokemonName) {
        alert("Digite o nome de um Pokémon!");
        return;
    }

    try {
        const response = await fetch(`/pokemon/${pokemonName}`);
        const data = await response.json();

        if (data.error) {
            alert("Pokémon não encontrado!");
            return;
        }

        document.getElementById("pokemon-image").src = data.sprites.front_default;
        document.getElementById("pokemon-title").textContent = data.name.toUpperCase();
        document.getElementById("pokemon-id").textContent = data.id;
        document.getElementById("pokemon-type").textContent = data.types.map(t => t.type.name).join(", ");
        document.getElementById("pokemon-ability").textContent = data.abilities.map(a => a.ability.name).join(", ");
        document.getElementById("pokemon-card").classList.remove("hidden");

    } catch (error) {
        console.error("Erro ao buscar Pokémon:", error);
        alert("Erro ao buscar dados. Tente novamente.");
    }
});
