import React from "react";
import pokemon from './MockPokemons';
import { Table, Tag } from 'antd';
import { Name, Base } from './Pokemon';

const TYPES: {[key: string] : string} = {
    'Normal': '#A8A77A',
    'Fire': '#EE8130',
    'Water': '#6390F0',
    'Electric': '#F7D02C',
    'Grass': '#7AC74C',
    'Ice': '#96D9D6',
    'Fighting': '#C22E28',
    'Poison': '#A33EA1',
    'Ground': '#E2BF65',
    'Flying': '#A98FF3',
    'Psychic': '#F95587',
    'Bug': '#A6B91A',
    'Rock': '#B6A136',
    'Ghost': '#735797',
    'Dragon': '#6F35FC',
    'Dark': '#705746',
    'Steel': '#B7B7CE',
    'Fairy': '#D685AD',
}

const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name: Name) => name.english,
    },
    {
      title: 'Types',
      dataIndex: 'type',
      key: 'type',
      render: (types: string[]) => types.map(type => {
        return (
            <Tag color={TYPES[type]} key={type}>
                {type.toUpperCase()}
            </Tag>
        );
      }), 
    },
    {
        title: 'HP',
        dataIndex: 'base',
        key: 'hp',
        render: (base: Base) => base.HP,
    },
    {
        title: 'Attack',
        dataIndex: 'base',
        key: 'attack',
        render: (base: Base) => base.Attack,
    },
    {
        title: 'Defense',
        dataIndex: 'base',
        key: 'defense',
        render: (base: Base) => base.Defense,
    },
    {
        title: 'Sp. Attack',
        dataIndex: 'base',
        key: 'specialAttack',
        render: (base: Base) => base["Sp. Attack"],
    },
    {
        title: 'Sp. Defense',
        dataIndex: 'base',
        key: 'specialDefense',
        render: (base: Base) => base["Sp. Defense"],
    },
    {
        title: 'Speed',
        dataIndex: 'base',
        key: 'speed',
        render: (base: Base) => base.Speed,
    },
  ];
function PokemonsPage() {
    return (
        <>        
            <h1>Pokemons</h1>
            {/* <PokemonList pokemons={pokemon} /> */}
            <Table dataSource={pokemon} columns={columns} rowKey="id"/>
        </>
    );
}

export default PokemonsPage;