import { prisma } from '../prisma';
import { GetAllPokemonInputFilter } from '../routers/pokemon';

class PokemonService {
  public async getAllPokemons(input: GetAllPokemonInputFilter) {
    const { searchBy, selectType } = input;

    const typeFilter = selectType
      ? {
          type: {
            has: selectType,
          },
        }
      : {};

    return prisma.pokemon.findMany({
      where: {
        name: {
          contains: searchBy,
          mode: 'insensitive',
        },
        ...typeFilter,
      },
    });
  }
}

const pokemonService = new PokemonService();

export default pokemonService;
