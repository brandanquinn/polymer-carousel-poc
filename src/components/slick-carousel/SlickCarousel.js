import { LitElement, html, css } from 'lit-element';

export class SlickCarousel extends LitElement {
    static get properties() {
        return {
            images: { type: Object },
            imageSelected: { type: Number }
        }
    };

    static get styles() {
        return css`
            .slider-image {
                height: 300px;
                width: 300px;
            }
        `
    }

    constructor() {
        super();
        this.imageSelected = 0;
    }

    handleClick() {
        this.imageSelected >= this.images.length-1 ? this.imageSelected = 0 : this.imageSelected++;
    }

    render() {
        return html`
            <div id="imgContainer">
                <img @click="${this.handleClick}" class="slider-image" src="${this.images[this.imageSelected]}"></img>
            </div>
        `;
    }
}