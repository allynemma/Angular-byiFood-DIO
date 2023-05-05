class Cardnews extends HTMLElement {
    //inicializa
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build()); //pendurar de outros métodos
        shadow.appendChild(this.styles());
    }

    //construir os elementos
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");
        
            const autor = document.createElement("span");
            autor.textContent = "By " + (this.getAttribute("author") || "Anonymous");
            
            const linkTitle = document.createElement("a");
            linkTitle.textContent = (this.getAttribute("title")||"Título da Notícia");
            linkTitle.href = this.getAttribute("link-news");

            const newsContent = document.createElement ("p");
            newsContent.textContent = (this.getAttribute("content")||"Conteúdo da manchete");


            cardLeft.appendChild(autor);
            cardLeft.appendChild(linkTitle);
            cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

            const newsImage = document.createElement("img");
            newsImage.src = (this.getAttribute("link-foto")||"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg");
            newsImage.alt= (this.getAttribute("alt")||"Foto da notícia não carregada");
            cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }
    styles(){
        const style = document.createElement("style");
        style.textContent=`*{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
        }
        
        .card{
         width: 80%;
         box-shadow: 9px 9px 27px 0px black;
         display: flex;
         flex-direction: row;
         justify-content: space-between;
        }
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        .card_left > span {
            font-weight: 500;
        }
        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card_left > p {
            color: rgb(70, 70, 70);
        }
        img{
          width: 320px;  
        }`;
        
        return style;
    }
}

customElements.define("card-news", Cardnews);