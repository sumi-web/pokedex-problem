import { Pokemon, Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type PokemonWithoutTimestamps = Omit<Pokemon, "createdAt" |"updatedAt">

const pokemons: PokemonWithoutTimestamps[] = [
  {
    id: 1,
    name: 'Bulbasur',
    type: ['grass'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 2,
    name: 'Ivysaur',
    type: ['grass', 'poison'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  },
  {
    id: 3,
    name: 'Venusaur',
    type: ['grass', 'poison'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
  {
    id: 4,
    name: 'Charmander',
    type: ['fire'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    id: 5,
    name: 'Rattata',
    type: ['normal'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
  },
  {
    id: 6,
    name: 'Wartortle',
    type: ['water'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
  },
  {
    id: 7,
    name: 'Metapod',
    type: ['bug'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
  },
  {
    id: 8,
    name: 'Squirtle',
    type: ['water'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
  {
    id: 9,
    name: 'Kakuna',
    type: ['poison'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
  },
  {
    id: 10,
    name: 'Pidgeotto',
    type: ['flying'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
  },
];

async function main() {
 const result = await prisma.pokemon.createMany({ data: pokemons, skipDuplicates: true });
 console.log("seeded data:-", result)
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
