import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  data: any = [
  {
    label: 'Agregar productos',
    icon: 'add'
  },
  {
    label: 'Editar productos',
    icon: 'edit',
  },
  {
    label: 'Eliminar productos',
    icon: 'delete'
  },
  {
    label: 'Buscar productos',
    icon: 'search'
  }
]
  constructor() {}

  ngOnInit() {}
}
