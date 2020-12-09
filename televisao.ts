// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

export class Televisao {
    private vol : number = 0;
    private canais : number = 0;

    get volume() : number {
        return this.vol;
    }

    get canal() : number {
        return this.canais;
    }

    set volume(v: number) {
        this.vol = v;
    }

    set canal(c: number) {
        this.canais = c;
    }
}