// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

export class Contato {
    private nomes: string; 
    private email: string;
    private telefone: string;

    
    get nome() : string {
        return this.nomes;
    }

    get gmail() : string {
        return this.email;
    }

    get tele() : string {
        return this.telefone;
    }
    
    set nome(n: string) {
        this.nomes = n;
    }

    set gmail(e: string) {
        this.email = e;
    }

    set tele(t: string) {
        this.telefone = t;
    }
}