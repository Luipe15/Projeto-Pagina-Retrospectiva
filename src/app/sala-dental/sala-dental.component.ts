import { Component } from '@angular/core';

interface CardPositivo {
  text: string;
  upvotes: number;
  voted: boolean;
}

interface CardNegativo {
  text: string;
  upvotes: number;
  voted: boolean;
}

interface CardMelhoria {
  text: string;
  upvotes: number;
  voted: boolean;
}

@Component({
  selector: 'sala-bbdental',
  templateUrl: './sala-dental.component.html',
  styleUrls: ['./sala-dental.component.css']
})
export class SalaDentalComponent {

  cardPositivoText: string = '';
  cardNegativoText: string = '';
  cardMelhoriaText: string = '';
  cardsPositivos: CardPositivo[] = [];
  cardsNegativos: CardNegativo[] = [];
  cardsMelhorias: CardMelhoria[] = [];

  createCardP() {
    if (this.cardPositivoText.trim() !== '') {
      const newCard: CardPositivo = {
        text: this.cardPositivoText,
        upvotes: 0,
        voted: false,
      };
      this.cardsPositivos.push(newCard);
      this.cardPositivoText = '';
    }
  }

  createCardN() {
    if (this.cardNegativoText.trim() !== '') {
      const newCard: CardNegativo = {
        text: this.cardNegativoText,
        upvotes: 0,
        voted: false,
      };
      this.cardsNegativos.push(newCard);
      this.cardNegativoText = '';
    }
  }

  createCardM() {
    if (this.cardMelhoriaText.trim() !== '') {
      const newCard: CardMelhoria = {
        text: this.cardMelhoriaText,
        upvotes: 0,
        voted: false
      };
      this.cardsMelhorias.push(newCard);
      this.cardMelhoriaText = '';
    }
  }

  upvoteP(cardP: CardPositivo,) {

    if (!cardP.voted) {
      cardP.upvotes++;
      cardP.voted = true;
    }
  }
}
