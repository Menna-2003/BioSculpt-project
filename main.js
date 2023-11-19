for (let i = 0; i < 5; i++) {
    let component = document.createElement("div");
    let title = document.createElement("h1");
    let date = document.createElement("p");
    let description = document.createElement("p");

    component.className = "component";
    title.className = "title";
    date.className = "date";
    description.className = "description";

    let titleText = document.createTextNode(` title ${i + 1}`);

    title.appendChild(titleText);

    component.appendChild(title);
    component.appendChild(date);
    component.appendChild(description);

    document.body.prepend(component);
}
