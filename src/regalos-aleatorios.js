import { LitElement, html, css } from 'lit';
import './add-homework';

export class RegalosAleatorios extends LitElement {

    static get properties() {
        return {
            personas: {
                type: Array
            }
        };
    }
    constructor() {
        super();
        this.personas = [{
            Nombre: String,
            ID: Number
        }];
    }
    render() {
        return html `
        <h2>SOY LA APP DE INTERCAMBIOS</h2>
        <add-homework .bandera=${false}></add-homework>

        `;
    }
}
customElements.define('regalos-aleatorios', RegalosAleatorios);