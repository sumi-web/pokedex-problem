import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const pokemons = [
  {
    id: 1,
    name: 'Bulbasur',
    type: ['grass'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 2,
    name: 'Venusaur',
    type: ['grass', 'poison'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
];

async function main() {
  const upsertManyPokemons = pokemons.map(async (pokemon) => {
    return await prisma.pokemon.upsert({
      where: {
        id: pokemon.id,
      },
      create: {
        name: pokemon.name,
        type: pokemon.type,
        sprite: pokemon.sprite,
      },
      update: {},
    });
  });

  Promise.all(upsertManyPokemons);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
