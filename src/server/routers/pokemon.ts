import { procedure, router } from '../trpc';

export const pokemonRouter = router({
  getPokemon: procedure.query(() => {}),
});
