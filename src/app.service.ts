import { Injectable } from "@nestjs/common";
import { SpotifyService } from "./spotify/spotify.service";

@Injectable()

export class AppService {
    constructor(private readonly spotifyService: SpotifyService) { }

    async getArtist(artistId: string) {
        try {
            const artist = await this.spotifyService.getArtist(artistId);
            return artist;
        } catch (error) {
            console.error('Error fetching artist:', error);
            throw new Error('Failed to fetch artist information');
        }
    }

    async getAlbum(albumId: string) {
        try {
            const album = await this.spotifyService.getAlbum(albumId);
            return {
                id: album.id,
                name: album.name,
                release_date: album.release_date,
                total_tracks: album.total_tracks,
                artists: album.artists.map(artist => ({
                    id: artist.id,
                    name: artist.name,
                })),
                image: album.images[0]?.url,
                tracks: album.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    
                })),
            };
        } catch (error) {
            console.error('Error fetching album:', error);
            throw new Error('Failed to fetch album information');
        }
    }
}