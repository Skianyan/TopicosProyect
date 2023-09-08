export default function Card({
	image: { url, description },
	cardtitle,
	carddescription,
}) {
	const card = document.createElement("div");
	card.classList = "cardgrid";
	card.innerHTML = `
        <img src='${url}' alt='${description}'></img>
        <h3 class='cardtitle'>${cardtitle}</h3>
        <h4 class='carddescription'>${carddescription}</h4>
        <button class='cardbutton'>Show</button>
    `;
	return card;
}
