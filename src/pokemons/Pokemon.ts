import React from "react";

export interface Pokemon {
    id?: string;
    name?: Name ;
    type?: string[]; 
    base?: Base;
}

export interface Name {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
}

export interface Base {
    HP: string;
    Attack: string;
    Defense: string;
    "Sp. Attack": string;
    "Sp. Defense": string;
    Speed?: string;
}

export let TYPES = {
    "Grass": 'green',
    "Poison": 'purple',
}