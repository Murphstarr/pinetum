import * as data from './treeData.json';

export function readGenus() {
    //gets a list of all genus
    var genusSet = new Set()
    var dataLength = Object.keys(data).length;
    for (let i=0; i< dataLength-1;i++){
        genusSet.add(data[i].Genus)
    }
    console.log(genusSet)
}

export function getSpecies(genus){
    //given a genus gets all species for that genus
    var speciesSet = new Set()
    var dataLength = Object.keys(data).length;
    for (let i=0; i< dataLength-1;i++){
        if (data[i].Genus == genus){
            speciesSet.add(data[i].Species)
        }
    }
    console.log(speciesSet)
}

export function getVariation(species){
    //given a species gets all variations for that species
    var variationSet = new Set()
    var dataLength = Object.keys(data).length;
    for (let i=0; i< dataLength-1;i++){
        if (data[i].Species == species){
            variationSet.add(data[i].Variation)
        }
    }
    console.log(variationSet)
}