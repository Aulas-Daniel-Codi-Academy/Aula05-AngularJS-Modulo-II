# 🌦️ Módulo 2: Aplicativo de Previsão do Tempo com Angular

## 📘 1. O que é este aplicativo?

Este é um **aplicativo de previsão do tempo** desenvolvido com **Angular**. Ele permite que os usuários insiram o nome de uma cidade e visualizem a previsão do tempo em tempo real, utilizando uma API de meteorologia.

### 🆚 Diferença entre Angular e outras tecnologias

| Tecnologia  | Característica Principal                                           |
| ----------- | ------------------------------------------------------------------ |
| **Angular** | Framework completo com TypeScript, ideal para projetos escaláveis. |
| **React**   | Biblioteca focada apenas na interface do usuário, utiliza JSX.     |
| **Vue.js**  | Framework leve e progressivo, fácil de aprender.                   |

---

## 🛠️ 2. Instalando Angular e Configurando o Projeto

### 🔄 Passo 1: Instalar o Node.js

Baixe e instale o [Node.js](https://nodejs.org/).  
Verifique a versão instalada:

```bash
node -v
npm -v
```

### 🔄 Passo 2: Instalar o Angular CLI

```bash
npm install -g @angular/cli
```

Verifique a instalação:

```bash
ng version
```

---

## 🌐 3. Criando um Projeto Angular

Crie um novo projeto:

```bash
ng new previsao-tempo
cd previsao-tempo
ng serve
```

Acesse no navegador: **http://localhost:4200/**.

---

## 🌟 4. Estrutura do Projeto

```bash
previsao-tempo/
│── src/
│   │── app/
│   │   │── app.component.ts    # Componente principal
│   │   │── app.module.ts       # Módulo raiz
│   │── index.html              # HTML principal
```

---

## 🛠️ 5. Criando o Componente de Previsão do Tempo

```bash
ng generate component previsao
```

Inclua no `app.component.html`:

```html
<app-previsao></app-previsao>
```

---

## 🌦️ 6. Criando a Interface

Edite `previsao.component.html`:

```html
<h2>Previsão do Tempo</h2>
<input type="text" [(ngModel)]="cidade" placeholder="Digite uma cidade" />
<button (click)="buscarPrevisao()">Buscar</button>
<h3 *ngIf="previsao">Cidade: {{ previsao.name }}</h3>
<p *ngIf="previsao">Temperatura: {{ previsao.main.temp }}°C</p>
<p *ngIf="previsao">Condição: {{ previsao.weather[0].description }}</p>
```

---

## 🌍 7. Criando a Lógica

Edite `previsao.component.ts`:

```typescript
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-previsao",
  templateUrl: "./previsao.component.html",
  styleUrls: ["./previsao.component.css"],
})
export class PrevisaoComponent {
  cidade: string = "";
  previsao: any;
  apiKey: string = "SUA_API_KEY";

  constructor(private http: HttpClient) {}

  buscarPrevisao() {
    if (this.cidade.trim() !== "") {
      this.http
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.cidade}&appid=${this.apiKey}&units=metric&lang=pt_br`
        )
        .subscribe((dados) => (this.previsao = dados));
    }
  }
}
```

---

## 🎨 8. Melhorando a Estilização

Edite `previsao.component.css`:

```css
input,
button {
  margin: 5px;
  padding: 10px;
  font-size: 16px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

h3,
p {
  font-size: 18px;
  margin: 5px 0;
}
```

---

## 🌍 9. Publicando no GitHub Pages

1. **Gerar o build**:

```bash
ng build --base-href "/previsao-tempo/"
```

2. **Instalar pacote de deploy**:

```bash
npm install -g angular-cli-ghpages
```

3. **Publicar**:

```bash
ngh --dir=dist/previsao-tempo
```

Acesse seu repositório no **GitHub Pages**! 🚀

---

## 🚀 Conclusão

✔ Criamos um projeto Angular do zero.  
✔ Entendemos **componentes, diretivas e data binding**.  
✔ Criamos um **Aplicativo de Previsão do Tempo**.  
✔ Publicamos no **GitHub Pages**.

Agora você está pronto para continuar aprendendo Angular! 🚀
