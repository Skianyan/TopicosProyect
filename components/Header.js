export default function Header({ title, subtitle }) {
	const header = document.createElement("header");
	header.classList = "header";
	header.innerHTML = `
        <h1 class='header-title','headertext'>${title}</h1>
        <h3 class='header-subtitle','headertext'>${subtitle}</h3>
    `;
	return header;
}
