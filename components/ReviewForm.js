app.component("review-form", 
{
    template: 
    /*html*/
    `<from class="review-form">
    <h3>Laissez un avis</h3>
    <label for="name">Nom:</label>
    <input id="name" type="text" />

    <label for="review">Avis:</label>
    <input id="review" type="text" />

    <label for="rating">Note:</label>
    <select id="rating">
    <option >5</option>
    <option >4</option>
    <option >3</option>
    <option >2</option>
    <option >1</option>
    </select>

    <input type="submit" class="button" value="Envoyer"/>
    </from>`
}
)