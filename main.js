// Name - specialty - image - phone - email - address - aboutMe

let ExperienceCounter = 3, // &    titleText - dateText - descriptionText
    EducationCounter = 3, // &    titleText - dateText - descriptionText
    SkillsCounter = 3, // &     progressEndValue - skillTitleText
    ProjectsCounter = 3; // &    projectName - Description - Link

let Experience = document.querySelector(".Experiences");
let Education = document.querySelector(".Educations");
let skills = document.querySelector(".skills");
let project = document.querySelector(".project");
let image = document.querySelector(".center img");
let userName = document.querySelector(".box h1");
let specialty = document.querySelector(".box .text");
let Sname = document.querySelector("Sname");
let Sphone = document.querySelector("Sphone");
let Semail = document.querySelector("Semail");
let Saddress = document.querySelector("Saddress");
let aboutMe = document.querySelector("aboutMe");

userName.innerHTML = "Menna Mohamed";
specialty.innerHTML = "Web developer";
// image.src = "image.jpg";

// Experience
for (let i = 0; i < ExperienceCounter; i++) {
    let component = document.createElement("div");
    let title = document.createElement("h1");
    let date = document.createElement("p");
    let description = document.createElement("p");
    let ExperienceIcon = document.createElement("i");

    component.className = "component textAnimationUP";
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
        component.classList.add("responsive");
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
// Education
for (let i = 0; i < EducationCounter; i++) {
    let component = document.createElement("div");
    let title = document.createElement("h1");
    let date = document.createElement("p");
    let description = document.createElement("p");
    let educationIcon = document.createElement("i");

    component.className = "component textAnimationUP";
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
// Skills
for (let i = 0; i < SkillsCounter; i++) {
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
        progressEndValue = 50,
        speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;

        percentageText.textContent = `${progressStartValue}%`;
        innerCircle.style.background = `conic-gradient(#ff9000 ${progressStartValue * 3.6}deg, #eee 0deg)`;

        if (progressStartValue === progressEndValue) {
            clearInterval(progress);
        }
    }, speed);

    percentage.appendChild(percentageText);
    skillTitle.appendChild(skillTitleText);
    progressCircle.appendChild(skillTitle);
    progressCircle.appendChild(percentage);
    progressCircle.appendChild(innerCircle);
    skills.appendChild(progressCircle);
}
// Projects
for (let i = 0; i < ProjectsCounter; i++) {
    let work = document.createElement("div");
    let firstBlock = document.createElement("div");
    let secondBlock = document.createElement("div");
    let projectName = document.createElement("div");
    let projectNameValue = document.createElement("div");
    let Description = document.createElement("div");
    let DescraptionValue = document.createElement("div");
    let Link = document.createElement("div");
    let LinkValue = document.createElement("div");

    work.className = "work textAnimationUP";
    firstBlock.className = "firstBlock";
    secondBlock.className = "secondBlock";
    projectName.className = "projectName";
    projectNameValue.className = "projectNameValue";
    Description.className = "Description";
    DescraptionValue.className = "DescraptionValue";
    Link.className = "Link";
    LinkValue.className = "LinkValue";

    let projectNameText = document.createTextNode(`${i + 1} - Project Name : `);
    let DescriptionText = document.createTextNode("Description : ");
    let LinkText = document.createTextNode("Link : ");

    projectName.appendChild(projectNameText);
    Description.appendChild(DescriptionText);
    Link.appendChild(LinkText);

    firstBlock.appendChild(projectName);
    firstBlock.appendChild(Description);
    firstBlock.appendChild(Link);
    secondBlock.appendChild(projectNameValue);
    secondBlock.appendChild(DescraptionValue);
    secondBlock.appendChild(LinkValue);
    work.appendChild(firstBlock);
    work.appendChild(secondBlock);
    project.appendChild(work);
}

// Scroll Animation
let textAnimationUP = document.querySelectorAll(".textAnimationUP");
window.addEventListener("scroll", () => {
    let triggerBottom = (window.innerHeight / 5) * 4;

    textAnimationUP.forEach((e) => {
        let textAnimationTop = e.getBoundingClientRect().top;
        if (textAnimationTop < triggerBottom) {
            e.classList.add("textAnimationUPShow");
        } else {
            e.classList.remove("textAnimationUPShow");
        }
    });
});

// Nav Bar in responsive
let bar = document.querySelector(".bar");
let nav = document.querySelector("nav");

bar.addEventListener("click", () => {
    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
    } else {
        nav.classList.add("show");
    }
});
