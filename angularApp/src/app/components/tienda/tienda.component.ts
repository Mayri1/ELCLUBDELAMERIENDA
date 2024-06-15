import { Component, ViewChild, ElementRef } from '@angular/core';
<<<<<<< HEAD
import { NavigationComponent } from '../../shared/navigation/navigation.component';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [NavigationComponent],
=======
import { Router } from '@angular/router'; // Asegúrate de importar Router desde '@angular/router'

@Component({
  selector: 'app-tienda',
>>>>>>> 2b64acf2217ed0b0a9e71a39b407ac3cb541cb91
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
<<<<<<< HEAD
  constructor(){}
  @ViewChild('mostrador') mostrador!: ElementRef<HTMLDivElement>; // Type assertion for clarity
  @ViewChild('seleccion') seleccion!: ElementRef<HTMLDivElement>; // Type assertion
  @ViewChild('img') imgSeleccionada!: ElementRef<HTMLImageElement>; // Type assertion
  @ViewChild('modelo') modeloSeleccionado!: ElementRef<HTMLParagraphElement>; // Type assertion
  @ViewChild('descripcion') descripSeleccionada!: ElementRef<HTMLParagraphElement>; // Type assertion
  @ViewChild('precio') precioSeleccionado!: ElementRef<HTMLSpanElement>; // Type assertion
=======
  constructor(private router: Router) {}

  @ViewChild('mostrador') mostrador!: ElementRef<HTMLDivElement>;
  @ViewChild('seleccion') seleccion!: ElementRef<HTMLDivElement>;
  @ViewChild('img') imgSeleccionada!: ElementRef<HTMLImageElement>;
  @ViewChild('modelo') modeloSeleccionado!: ElementRef<HTMLParagraphElement>;
  @ViewChild('descripcion') descripSeleccionada!: ElementRef<HTMLParagraphElement>;
  @ViewChild('precio') precioSeleccionado!: ElementRef<HTMLSpanElement>;
>>>>>>> 2b64acf2217ed0b0a9e71a39b407ac3cb541cb91

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
<<<<<<< HEAD
      (items[i] as HTMLElement).style.border = 'none';    }
=======
      (items[i] as HTMLElement).style.border = 'none';
    }
  }

  // Función para navegar a la página de servicios
  navegarAServicios() {
    this.router.navigateByUrl('/servicios');
>>>>>>> 2b64acf2217ed0b0a9e71a39b407ac3cb541cb91
  }
}
