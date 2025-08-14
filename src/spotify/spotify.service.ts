import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { first, firstValueFrom } from 'rxjs';
import { AuthResponse } from './interfaces/auth-response.interface';
import { ArtistResponse } from './interfaces/artist.interface';
import { SpotifyOptions, SpotifyOptionSymbol } from './interfaces/spotify.option.interface';

@Injectable()
export class SpotifyService {
    private accessToken: string;
    private tokenExpiry: number = 0;


    constructor(
        @Inject(SpotifyOptionSymbol) private options: SpotifyOptions,
        private readonly httpService: HttpService) {

    }

    public async getArtist(artistId: string): Promise<ArtistResponse> {
        await this.authenticate();

        const response = await firstValueFrom(this.httpService.get<ArtistResponse>(
            `https://api.spotify.com/v1/artists/${artistId}`,
            {
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            },
        ));

        return response.data;
    }

    public async getAlbum(albumId: string): Promise<any> {
        await this.authenticate();

        const response = await firstValueFrom(this.httpService.get(
            `https://api.spotify.com/v1/albums/${albumId}`,
            {
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            },
        ));

        return response.data;
    }


    private async authenticate(): Promise<void> {
        if (this.accessToken && this.tokenExpiry > Date.now()) {
            return;
        }

        const creds = Buffer.from(`${this.options.clientId}:${this.options.clientSecret}`).toString('base64');

        const response = await firstValueFrom(this.httpService.post<AuthResponse>(
            'https://accounts.spotify.com/api/token',
            'grant_type=client_credentials',
            {
                headers: {
                    Authorization: `Basic ${creds}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            },
        ));

        this.accessToken = response.data.access_token;
        this.tokenExpiry = Date.now() + response.data.expires_in * 1000;
    }
}
