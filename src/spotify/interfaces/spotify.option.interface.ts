import { FactoryProvider, ModuleMetadata } from "@nestjs/common";
import Module from "module";

export const SpotifyOptionSymbol = Symbol('SPOTIFY_OPTIONS');

export type SpotifyOptions = {
    clientId: string;
    clientSecret: string;
}

export type SpotifyModuleAsyncOptions = Pick<ModuleMetadata, 'imports'> & Pick<FactoryProvider<SpotifyOptions>, 'useFactory' | 'inject'>;