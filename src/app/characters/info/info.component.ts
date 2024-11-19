import { Component, OnInit } from '@angular/core';
import { Info } from '../interface/info';
import { CharactersService } from '../service/characters.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent  implements OnInit {


  characters:Info[] =[]

  constructor(private characterService:CharactersService){}


  ngOnInit(): void {
    this.cargarPersonajes()
    console.log(this.characters);
    
      
  }


  cargarPersonajes():void{
    this.characterService.getInfo().subscribe(personaje =>{
      this.characters = personaje;
    })
  }


}
