import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from './../../services/music.service';
import { getAlbumsResult } from './../types/getAlbumsResult';

@Component({
  selector: 'app-detalhes-musicas',
  templateUrl: './detalhes-musicas.page.html',
  styleUrls: ['./detalhes-musicas.page.scss'],
})
export class DetalhesMusicasPage implements OnInit {
  public results: getAlbumsResult = null;

  constructor(private musicService: MusicService, private route: ActivatedRoute) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.results = await this.musicService.getAlbums(id);
  }

}
