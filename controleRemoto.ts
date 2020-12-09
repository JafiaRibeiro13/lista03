// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

import { Televisao } from "./televisao";

export class ControleRemoto {
    private televisao : Televisao;

    constructor(t: Televisao) {
        this.televisao = t;
    }

    volumeAlto() : void {
        let vol : number = this.televisao.volume;
        if(vol < 100){
           vol++;
           this.televisao.volume = vol;
        }else{
            console.log("Máximo");
        } 
    }
        
    volumeminimo() : void {
        let vol : number = this.televisao.volume;
        if(vol > 0){
           vol--;
           this.televisao.volume = vol;
        }else{
            console.log("está no minimo");
        } 
    }

    canalMaximo() : void {
        let canais : number = this.televisao.canal;
        if(canais < 700){
           canais++;
           this.televisao.canal = canais;
        }else{
            console.log("Máximo");
        } 
    }
        
    canalminimo() : void {
        let canais : number = this.televisao.canal;
        if(canais > 0){
           canais--;
           this.televisao.canal = canais;
        }else{
            console.log("canal minimo");
        } 
    }
    
    outroCanal(c : number) : void {
        if(c < 0 || c > 700) {
            console.log("Não existe o canal:"+ c);
        } else {
            this.televisao.canal = c;
        }
    }
    
    get vol() : number {
        return this.televisao.volume;
    }

    get canais() : number {
        return this.televisao.canal;
    }
}