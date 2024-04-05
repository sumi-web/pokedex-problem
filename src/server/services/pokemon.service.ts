import { prisma } from "../prisma";
import { GetAllPokemonInputFilter } from "../routers/pokemon";

class PokemonService {
  public async getAllPokemons(input:GetAllPokemonInputFilter) {
    return prisma.pokemon.findMany({
     where:{
      name:{
        contains:input.searchBy,
        mode:"insensitive"
      }
     }
    })
  }
}

const pokemonService =new PokemonService();

export default pokemonService;