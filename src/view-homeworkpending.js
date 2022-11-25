import { LitElement, html, css } from "lit";
import './add-homework';

export class ViewHomeworkpending extends LitElement {
    static get styles() {
        return css `
      .card-falso {
        background-color: white;
        width: 350px;
        height: 90px;
        margin: 10px;
      }

      .card-verdadero {
        background-color: green;
       margin-right: -150px; 
        width: 350px;
        height: 90px;
        margin: 10px;
      }
    `;
    }

    static get properties() {
        return {
            tareas: {
                type: Array,
            },
            tareasCompleate: [{

            }],
            arrayNumero: {
                type: Array
            }

        };
    }
    constructor() {
        super();
        this.tareasCompleate = [];
        this.tareas = [{
                numero: 1,
                descripcion: "Terminar la AppToDo",
                fecha: "23/11/22",
                estatus: false,
            },
            {
                numero: 2,
                descripcion: "Terminar la AppToDo dos",
                fecha: "23/11/22",
                estatus: true,
            },
        ];
        this.requestUpdate();
    }
    render() {
            return html `
            <add-homework @guardarTarea="${this.guardar}"></add-homework>
      <h3>Soy el visualizador de tareas pendientes</h3>
      ${this.tareas.map(
        (item) => html`
           <div class="card-falso">
                <p name="identificador"id="identificador">${item.numero}</p>
                  <p>${item.descripcion}</p>
                  <label id="labele">
                    <input
                      type="checkbox" 
                      @change=${(e) =>{
                    e=item
                        this.completado(e)
                      
                      }}
                    />
                    ${item.numero}
                  </label>
                </div>
        `
      )}
        ${this.tareasCompleate.map(
            (item) => html `
            <div class="card-verdadero">
                <p name="identificador"id="identificador">${item.numero}</p>
                  <p>${item.descripcion}</p>
                </div>
            `
        )}
    `;
  }
  completado(a) {
   
   this.tareas = this.tareas.filter(item => item.numero !== a.numero)
    this.tareasCompleate.push(a);   
    this.requestUpdate();
  }

  guardar(event){
    console.log(event.detail)
    this.tareas.push(event.detail);
    this.requestUpdate();
  }
}
customElements.define("view-homeworkpending", ViewHomeworkpending);