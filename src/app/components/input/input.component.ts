import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  valueItem!: string;
  constructor(private listaCompraService: ListaDeCompraService) {}

  ngOnInit(): void {}

  addItem() {
    this.listaCompraService.addItemList(this.valueItem);
    this.clearField;
  }

  private clearField() {
    this.valueItem = '';
  }
}
