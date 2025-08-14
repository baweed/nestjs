import { Controller, Get, Param, Version } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller('api')
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get('artist/:id')
    async getArtist(@Param('id') artistId: string) {
        return this.appService.getArtist(artistId);
    }

    @Version('2')
    @Get('album/:id')
    async getAlbum(@Param('id') albumId: string) {
        return this.appService.getAlbum(albumId);
    }
}