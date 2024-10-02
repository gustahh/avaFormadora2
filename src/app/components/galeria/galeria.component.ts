import { Component, OnInit } from '@angular/core';
import { PexelsService } from 'src/app/services/pexels.service';
import { IonInfiniteScroll } from '@ionic/angular'; // Importa o IonInfiniteScroll

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {
  images: any[] = [];
  page: number = 1; // Contador de páginas

  constructor(private pexelsService: PexelsService) {}

  ngOnInit() {
    this.loadImages(); // Carrega imagens
  }

  loadImages(infiniteScroll?: IonInfiniteScroll) {
    this.pexelsService.fetchImages(this.page).subscribe((data) => {
      this.images = this.images.concat(data.photos); // Concatena as novas imagens
      if (infiniteScroll) {
        infiniteScroll.complete(); // Finaliza o carregamento do scroll infinito
      }
    });
  }

  loadData(event: CustomEvent) {
    this.page++; // Incrementa o contador de páginas
    const infiniteScroll = event.target as unknown as IonInfiniteScroll; // Converte para unknown antes de converter para IonInfiniteScroll
    this.loadImages(infiniteScroll);
  }
}
