let Experience = document.createElement("div");
let ExperienceTextbox = document.createElement("p");
let ExperienceText = document.createTextNode("Experience");
let ExperienceverticalLine = document.createElement("div");

Experience.className = "Experience";
ExperienceTextbox.className = "ExperienceTextbox";
ExperienceverticalLine.className = "ExperienceverticalLine";

ExperienceTextbox.appendChild(ExperienceText);
Experience.appendChild(ExperienceverticalLine);

for (let i = 0; i < 5; i++) {
    let component = document.createElement("div");
    let title = document.createElement("h1");
    let date = document.createElement("p");
    let description = document.createElement("p");
    let ExperienceIcon = document.createElement("i");

    component.className = "component";
    title.className = "title";
    date.className = "date";
    description.className = "description";
    ExperienceIcon.className = "ExperienceIcon";

    if (i % 2 !== 0) {
        component.style.justifyItems = "start";
        component.style.width = "44%";
        component.style.marginLeft = "54%";
        component.style.paddingLeft = "20px";
        component.style.paddingRight = "0";
        ExperienceIcon.style.left = "-11%";
    }

    let titleText = document.createTextNode(` title ${i + 1}`);
    let dateText = document.createTextNode(` date ${i + 1}`);
    let descriptionText = document.createTextNode(` desc ${i + 1}`);

    title.appendChild(titleText);
    date.appendChild(dateText);
    description.appendChild(descriptionText);

    component.appendChild(title);
    component.appendChild(date);
    component.appendChild(description);
    component.appendChild(ExperienceIcon);

    Experience.prepend(component);
}

Experience.prepend(ExperienceTextbox);

document.body.prepend(Experience);

// ----------------------------------------------------------------------

let Education = document.createElement("div");
let EducationTextbox = document.createElement("p");
let EducationText = document.createTextNode("Education");
let verticalLine = document.createElement("div");

Education.className = "Education";
EducationTextbox.className = "EducationTextbox";
verticalLine.className = "verticalLine";

EducationTextbox.appendChild(EducationText);
Education.appendChild(verticalLine);

for (let i = 0; i < 5; i++) {
    let component = document.createElement("div");
    let title = document.createElement("h1");
    let date = document.createElement("p");
    let description = document.createElement("p");
    let educationIcon = document.createElement("i");

    component.className = "component";
    title.className = "title";
    date.className = "date";
    description.className = "description";
    educationIcon.className = "educationIcon";

    if (i % 2 !== 0) {
        component.style.justifyItems = "start";
        component.style.width = "44%";
        component.style.marginLeft = "54%";
        component.style.paddingLeft = "20px";
        component.style.paddingRight = "0";
        educationIcon.style.left = "-11%";
    }

    let titleText = document.createTextNode(` title ${i + 1}`);
    let dateText = document.createTextNode(` date ${i + 1}`);
    let descriptionText = document.createTextNode(` desc ${i + 1}`);

    title.appendChild(titleText);
    date.appendChild(dateText);
    description.appendChild(descriptionText);

    component.appendChild(title);
    component.appendChild(date);
    component.appendChild(description);
    component.appendChild(educationIcon);

    Education.prepend(component);
}

Education.prepend(EducationTextbox);

document.body.prepend(Education);

// ---------------------------------------------------
let skills = document.querySelector(".skills");

for (let i = 0; i < 4; i++) {
    let progressCircle = document.createElement("div");
    let innerCircle = document.createElement("div");
    let percentage = document.createElement("span");
    let skillTitle = document.createElement("span");

    let percentageText = document.createTextNode("0%");
    let skillTitleText = document.createTextNode("skill");

    progressCircle.className = "progressCircle";
    innerCircle.className = "innerCircle";
    percentage.className = "percentage";
    skillTitle.className = "skillTitle";

    let progressStartValue = 0,
        progressEndValue = 90,
        speed = 100;

    let progress = setInterval(() => {
        progressStartValue++;

        percentageText.textContent = `${progressStartValue}%`;
        innerCircle.style.background = `conic-gradient(#ff9000 ${progressStartValue * 3.6}deg, #eee 0deg)`;

        if (progressStartValue === progressEndValue) {
            clearInterval(progress);
        }
        // console.log(progressStartValue);
    }, speed);

    percentage.appendChild(percentageText);
    skillTitle.appendChild(skillTitleText);
    progressCircle.appendChild(skillTitle);
    progressCircle.appendChild(percentage);
    progressCircle.appendChild(innerCircle);
    skills.appendChild(progressCircle);
}
