import { DynamicModule, Global, Module } from '@nestjs/common';
import { SpotifyService } from './spotify.service';
import { HttpModule } from '@nestjs/axios';
import { SpotifyModuleAsyncOptions, SpotifyOptions, SpotifyOptionSymbol } from './interfaces/spotify.option.interface';


@Module({})
export class SpotifyModule {
  static forRoot(options: SpotifyOptions): DynamicModule {
    return {
      module: SpotifyModule,
      imports: [HttpModule],
      providers: [{
        provide: SpotifyOptionSymbol,
        useValue: options,
      }, SpotifyService],
      exports: [SpotifyService],
      global: true,
    }
  }

  static forRootAsync(options: SpotifyModuleAsyncOptions): DynamicModule {
    return {
      module: SpotifyModule,
      imports: [HttpModule, ...(options.imports || [])],
      providers: [{
        provide: SpotifyOptionSymbol,
        useFactory: options.useFactory,
        inject: options.inject ?? [],
      }
      , SpotifyService],
      exports: [SpotifyService],
      global: true,
    }
  }
}
