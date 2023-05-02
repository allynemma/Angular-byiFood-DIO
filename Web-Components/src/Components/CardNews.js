class CardNews extends HTMLElement {
    constructor () {
        super ();

        const shadow = this.attachShadow ({mode: "open"}) //anexando uma shadow
        //open = outros js conseguem influenciar
        shadow.innerHTML = `
        <h1>Hello Allyne<h1> 
        `
    } 
}

customElements.define('card-news', CardNews) //criando um elemento customizado; nome, classe