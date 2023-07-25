import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const Bbdental = document.getElementById('bb-dental')!;
    const Bb = document.getElementById('bb')!;
    const Alelo = document.getElementById('alelo')!;
    const Diretoria = document.getElementById('diretoria')!;
    const Fabrica = document.getElementById('fabrica')!;


    Bbdental.addEventListener('click', (button) => {
      console.log("teste");
      this.router.navigate(['/sala'])
    });

    Bb.addEventListener('click', (button) => {
      console.log("teste");
    });
    Alelo.addEventListener('click', (button) => {
      console.log("teste");
    });

    Diretoria.addEventListener('click', (button) => {
      console.log("teste");
    });

    Fabrica.addEventListener('click', (button) => {
      console.log("teste");
    });



  }


}


