////////////////////////1\\\\\\\\\\\\\\\\\\\\\\

const rootDiv = document.querySelector('#root');


const baseUrl = 'https://pokeapi.co/api/v2';

const statsCreator = (statsList) => {
        return statsList.reduce((result, {stat, base_stat}) => {

                const {name} = stat;

                result[name] = base_stat

                return result
        }, {})
}


const getPokemonByName = async(pokeName) => {
        try{
                const pokeUrl = `${baseUrl}/pokemon/${pokeName}`;

                const {id, name, stats} = await fetch(pokeUrl).then(response => response.json());

                
                return {
                        id,
                        name,
                        stats: statsCreator(stats)
                }
        }
        catch {

        }
}
getPokemonByName('ditto').then(data => console.log(data));

const createPokemon = async(pokemon) => {
        try {
        const {id, name, stats} = await getPokemonByName(pokemon);

        const container = document.createElement('div');

        const titleName = document.createElement('h1');
        titleName.innerText = (`${name}(${id})`);

        const statList = document.createElement('ul');

        const statsEntries = Object.entries(stats);
        
        statsEntries.forEach(([stat,value]) =>{

                const li = document.createElement('li');

                li.innerText = (`${stat}:${value}`);

                statList.append(li)
        })

        container.append(titleName, statList);

        rootDiv.append(container);

        }
        catch {

        }
}

createPokemon('ditto')

/////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\





///////////////////////////////2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Array.prototype.myMap = function (callback) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
                const updatedElement = callback(this[i], i, this);
                result.push(updatedElement)
        };
        return result
}

/////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\





///////////////////////////////3\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Array.prototype.myMFilter = function (callback) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
                const isElementValid = callback(this[i], i, this);

                if(isElementValid) {
                        result.push(this[i])
                }
                result.push(isElementValid)
        };
        return result
}

/////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\





///////////////////////////////4\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const arr = [12,53,45,34];

for (let i = 0; i < arr.length; i++) {
        setTimeout(function(){
                console.log(arr[i]);
        }, 2000)
}

/////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\