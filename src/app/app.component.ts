import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app-lista-de-compras';
  listDeCompras!: Array<Item>;

  constructor(private listaComprasService: ListaDeCompraService) {}

  ngOnInit(): void {
    this.listDeCompras = this.listaComprasService.getListaDeCompra();
    console.log(this.listDeCompras);
  }
}
