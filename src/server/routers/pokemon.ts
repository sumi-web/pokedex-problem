import { z } from 'zod';
import pokemonService from '../services/pokemon.service';
import { procedure, router } from '../trpc';

const getAllPokemonZodObject = z.object({
  searchBy: z.string(),
  selectType: z.string(),
});

export type GetAllPokemonInputFilter = z.infer<typeof getAllPokemonZodObject>;

export const pokemonRouter = router({
  getPokemon: procedure
    .input(getAllPokemonZodObject)
    .query(async ({ input }) => {
      const allPokemons = await pokemonService.getAllPokemons(input);
      return {
        items: allPokemons,
      };
    }),
});
