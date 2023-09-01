import { Component } from '@angular/core';

interface CardPositivo {
  text: string;
  upvotes: number;
}

interface CardNegativo {
  text: string;
  upvotes: number;
}

interface CardMelhoria {
  text: string;
  upvotes: number;
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
        upvotes: 0
      };
      this.cardsPositivos.push(newCard);
      this.cardPositivoText = '';
    }
  }
  createCardN() {
    if (this.cardNegativoText.trim() !== '') {
      const newCard: CardNegativo = {
        text: this.cardNegativoText,
        upvotes: 0
      };
      this.cardsNegativos.push(newCard);
      this.cardNegativoText = '';
    }
  }
  createCardM() {
    if (this.cardMelhoriaText.trim() !== '') {
      const newCard: CardMelhoria = {
        text: this.cardMelhoriaText,
        upvotes: 0
      };
      this.cardsMelhorias.push(newCard);
      this.cardMelhoriaText = '';
    }
  }

  upvoteP(cardP: CardPositivo,) {
    cardP.upvotes++;
    console.log(cardP.upvotes);
  }

  // CardPositivo: SalaDentalComponent[] = [];
  // CardNegativo: SalaDentalComponent[] = [];
  // CardMelhoria: SalaDentalComponent[] = [];

  // createCardPositivo() {
  //   this.CardPositivo.push(new SalaDentalComponent());
  // }

  // createCardNegativo() {
  //   this.CardNegativo.push(new SalaDentalComponent());
  // }

  // createCardMelhoria() {
  //   this.CardMelhoria.push(new SalaDentalComponent());
  // }

  // ngOnInit() {
  //   const upVote = document.getElementById('upvote') as HTMLButtonElement
  //   const teste = document.getElementById('fazalgo') as HTMLButtonElement
  //   const Votes = document.getElementById('calcvotos') as HTMLSpanElement

  //   let clicks = 0;

  //   upVote.addEventListener('click', () => {
  //     clicks++;

  //     if (clicks >= 1) {
  //       console.log('Item já votado!');
  //       return;
  //     }

  //     console.log(clicks);
  //     upVote.textContent = clicks.toString();

  //   })
  // }
}
