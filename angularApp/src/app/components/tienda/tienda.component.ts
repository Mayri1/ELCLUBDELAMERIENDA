import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [],
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  constructor(){}
  @ViewChild('mostrador') mostrador!: ElementRef<HTMLDivElement>; // Type assertion for clarity
  @ViewChild('seleccion') seleccion!: ElementRef<HTMLDivElement>; // Type assertion
  @ViewChild('img') imgSeleccionada!: ElementRef<HTMLImageElement>; // Type assertion
  @ViewChild('modelo') modeloSeleccionado!: ElementRef<HTMLParagraphElement>; // Type assertion
  @ViewChild('descripcion') descripSeleccionada!: ElementRef<HTMLParagraphElement>; // Type assertion
  @ViewChild('precio') precioSeleccionado!: ElementRef<HTMLSpanElement>; // Type assertion

  cargar(item: any) {
    this.quitarBordes();

    this.mostrador.nativeElement.style.width = '60%';
    this.seleccion.nativeElement.style.width = '40%';
    this.seleccion.nativeElement.style.opacity = '1';
    item.style.border = '2px solid red';

    const itemImage = item.getElementsByTagName('img')[0];
    if (itemImage) {
      this.imgSeleccionada.nativeElement.src = itemImage.src;
    }

    const itemModel = item.getElementsByTagName('p')[0];
    if (itemModel) {
      this.modeloSeleccionado.nativeElement.innerHTML = itemModel.innerHTML;
    }

    this.descripSeleccionada.nativeElement.innerHTML = 'Descripción del modelo ';

    const itemPrice = item.getElementsByTagName('span')[0];
    if (itemPrice) {
      this.precioSeleccionado.nativeElement.innerHTML = itemPrice.innerHTML;
    }
  }

  cerrar() {
    this.mostrador.nativeElement.style.width = '100%';
    this.seleccion.nativeElement.style.width = '0%';
    this.seleccion.nativeElement.style.opacity = '0';
    this.quitarBordes();
  }

  quitarBordes() {
    const items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
      (items[i] as HTMLElement).style.border = 'none';    }
  }
}
