import { LitElement, html, css, nothing } from 'lit';


export class AddHomework extends LitElement {

    static get styles() {
        return css `

.card{
    width: 400px;
    height: 190px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.content{
    width: 100%;
    height: 50px;
   display: grid;
   justify-content: space-around;
   padding: 5px;
}

input {
    width: 300px;
    height: 30px;

}

.myButton {
    width: 250px;
    margin-left: 35px;
	background-color:#44c767;
	border-radius:28px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
}
.myButton:hover {
	background-color:#5cbf2a;
}
.myButton:active {
	position:relative;
	top:1px;
}

`
    }

    static get properties() {
        return {
            descripcion: {
                type: String
            },
            nombres: {
                type: String
            },
            bandera: {
                type: Boolean
            }
        };
    }
    constructor() {
        super();
        this.bandera = true;
    }

    render() {
            return html `
            
            <div class="card">
                
                    <div class="content">
                        <div class="title"> 
                            ${this.bandera ? html `
                            <h3>Mis Tareas</h3> 
                        </div>
                        <input type="text" name="" id="descripcion" placeholder="Agrega un registro ">
                        <br>
                       <button class="myButton" @click=${this.guardar}>Agregar</button> 
                            `: html`
                            <h3>Regalos</h3> 
                        </div>
                        <input type="text" name="" id="nombre" placeholder="Agrega una persona ">
                        <br>
                       <button class="myButton" @click=${this.guardarPersonas}>Agregar</button> 
                            
                            `}
                           
                    </div>
            
               
            </div>
           
           
           `;
    }
    guardar() {

        this.descripcion = this.shadowRoot.querySelector("#descripcion").value;
        const idRandom = 1 + Math.floor(Math.random() * 100);
        this.dispatchEvent(new CustomEvent('guardarTarea', {
            bubbles: true,
            composed: true,
            detail: {
                numero: idRandom,
                descripcion: this.descripcion
            }

        }));

    }

    guardarPersonas() {
        
    }

}

customElements.define('add-homework', AddHomework);