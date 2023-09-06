import React, { useState } from 'react';

function ApiConsumptionComponent() {
    const [userResult, setUserResult] = useState(null);
    const [jobResult, setJobResult] = useState(null);
    const [pokemonResult, setPokemonResult] = useState(null);

    const fetchUser = () => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => {
                setUserResult(JSON.stringify(data));
            });
    };

    const fetchJob = () => {
        fetch('https://reqres.in/api/users/1')
            .then(response => response.json())
            .then(data => {
                setJobResult(JSON.stringify(data));
            });
    };

    const fetchPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/1')
            .then(response => response.json())
            .then(data => {
                setPokemonResult(JSON.stringify(data));
            });
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Consultas de API</h1>

            <button className="btn btn-primary me-3" onClick={fetchUser}>Obter Usuário</button>
            <button className="btn btn-success me-3" onClick={fetchJob}>Obter Emprego</button>
            <button className="btn btn-info" onClick={fetchPokemon}>Obter Pokémon</button>

            {userResult && (
                <div id="userResult" className="mt-4">
                    <h2>Resultado do Usuário</h2>
                    <pre className="bg-light p-3">{userResult}</pre>
                </div>
            )}
            
            {jobResult && (
                <div id="jobResult" className="mt-4">
                    <h2>Resultado do Emprego</h2>
                    <pre className="bg-light p-3">{jobResult}</pre>
                </div>
            )}
            
            {pokemonResult && (
                <div id="pokemonResult" className="mt-4">
                    <h2>Resultado do Pokémon</h2>
                    <pre className="bg-light p-3">{pokemonResult}</pre>
                </div>
            )}
        </div>
    );
}

export default ApiConsumptionComponent;
