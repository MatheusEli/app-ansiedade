import { Component, OnInit } from '@angular/core';
import { SearchArtistsResult } from './../types/searchArtistsResult';
import { MusicService } from './../../services/music.service';


@Component({
  selector: 'app-listmusic',
  templateUrl: './listmusic.page.html',
  styleUrls: ['./listmusic.page.scss'],
})
export class ListmusicPage implements OnInit {
  public search = '';
  public results: SearchArtistsResult = null;

  constructor(private musicService : MusicService) { }

  public async searchArtists(){
    this.results = await this.musicService.searchArtists(this.search);
  }

  ngOnInit() {
    
  }
}
