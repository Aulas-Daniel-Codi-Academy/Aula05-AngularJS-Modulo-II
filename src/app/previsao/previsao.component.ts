import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-previsao',
  templateUrl: './previsao.component.html',
  styleUrls: ['./previsao.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class PrevisaoComponent {
  cidade: string = '';
  previsao: any;
  http = inject(HttpClient);

  buscarPrevisao() {
    if (!this.cidade.trim()) {
      alert('Por favor, insira o nome de uma cidade!');
      return;
    }

    // 🔍 API para converter o nome da cidade em latitude e longitude
    const geocodingUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      this.cidade
    )}&format=json&limit=1`;

    this.http.get(geocodingUrl).subscribe({
      next: (geoData: any) => {
        if (geoData.length === 0) {
          alert('Cidade não encontrada!');
          return;
        }

        const { lat, lon } = geoData[0];

        // 🔍 API Open-Meteo para buscar o clima com base nas coordenadas
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

        this.http.get(weatherUrl).subscribe({
          next: (dados: any) => {
            console.log('✅ Resposta da API:', dados);
            this.previsao = dados.current_weather;
          },
          error: (erro) => {
            console.error('❌ Erro ao buscar previsão:', erro);
            alert('Erro ao buscar previsão. Tente novamente.');
          },
        });
      },
      error: (erro) => {
        console.error('❌ Erro ao buscar coordenadas:', erro);
        alert('Erro ao buscar coordenadas. Tente novamente.');
      },
    });
  }
}
