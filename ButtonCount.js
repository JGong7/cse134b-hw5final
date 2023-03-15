class ButtonCount extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.but = document.createElement("button");
        this.shadowRoot.appendChild(this.but);
        this.count = 0;
        this.but.innerHTML = `Times Clicked: ${this.count}`;
        this.but.addEventListener('click', this.addCount.bind(this));
    }
    addCount(){
        this.count = this.count + 1;
        this.but.innerHTML = `Times Clicked: ${this.count}`;
    }
}
customElements.define("button-count", ButtonCount);