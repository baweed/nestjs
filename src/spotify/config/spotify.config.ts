import { ConfigService } from "@nestjs/config";
import { SpotifyOptions } from "../interfaces/spotify.option.interface";

export function getSpotifyConfig(configService: ConfigService): SpotifyOptions {
    return {
        clientId: configService.getOrThrow<string>('SPOTIFY_CLIENT_ID'),
        clientSecret: configService.getOrThrow<string>('SPOTIFY_CLIENT_SECRET'),
    };
}