import { LitElement, html, css } from 'lit-element';
import { dropdownStyles } from '../../../custom-styles';

export class LADropdown extends LitElement {
    selectedItem = '';
    id = '';
    
    static get properties() {
        return {
            label: { type: String },
            options: { type: Object },
            additionalClasses: { type: String }
        }

    }

    static get styles() {
        return [
            dropdownStyles,
            css`
                .la-dd {
                    min-width: 160px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    padding: 12px 16px;
                    margin-bottom: 50px;
                }
            `
        ]
    }

    generateOptions = () => {
        return this.options.map(option => {
            return html`<option value="${option}">${option}</option>`
        });
    }

    onItemChange(event) {
        this.selectedItem = event.target.value;
    };

    render() {
        return html`
            <div class="la-dd ${this.additionalClasses}">
                <label>${this.label}</label>
                <select id=la-select-${this.id} onchange="${this.onItemChange}">
                    ${this.generateOptions()}
                </select>
            </div>
        `
    }
}