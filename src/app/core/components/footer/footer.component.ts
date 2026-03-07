import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year = new Date().getFullYear();

  members = [
    'García López, Ana Sofía',
    'Martínez Ruiz, Carlos Eduardo',
    'Hernández Vega, Daniela',
    'Torres Mendoza, Luis Miguel',
    'Ramírez Castro, Valeria',
  ];

  quickLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'El Problema', id: 'problema' },
    { label: 'Funciones', id: 'funciones' },
    { label: 'Cómo funciona', id: 'como-funciona' },
    { label: 'Beneficios', id: 'beneficios' },
    { label: 'Metodología', id: 'metodologia' },
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
