const shortBio = document.querySelector(".intro>p");
const projectList = document.querySelector(".project-list");
import projects from "./projects.js";

window.addEventListener("load", () => {
	shortBio.style.opacity = 1;
});

projects.forEach((project) => {
	const projectDiv = document.createElement("div");
	projectDiv.classList.add("project-div");
	projectDiv.classList.add(project.className);
	const projectContent = document.createElement("div");
	projectContent.classList.add("project-content");

	const projectName = document.createElement("h3");
	projectName.classList.add("project-name");
	projectName.textContent = project.name;
	projectContent.appendChild(projectName);

	const projectDesc = document.createElement("p");
	projectDesc.classList.add("project-desc");
	projectDesc.textContent = project.desc;
	projectContent.appendChild(projectDesc);

	const linkDiv = document.createElement("div");
	linkDiv.classList.add("link-div");

	const githubLink = document.createElement("a");
	const githubDiv = document.createElement("div");
	githubDiv.classList.add("github-div");
	githubLink.classList.add("github-link");
	githubLink.setAttribute("title", "Github Repo");
	githubLink.setAttribute("href", project.ghLink);
	githubLink.setAttribute("target", "_blank");

	githubLink.appendChild(githubDiv);

	if (project.demoLink) {
		const demoLink = document.createElement("a");
		const demoDiv = document.createElement("div");
		demoDiv.classList.add("demo-div");
		demoLink.classList.add("demo-link");
		demoLink.setAttribute("href", project.demoLink);
		demoLink.setAttribute("title", "Live Demo");
		demoLink.setAttribute("target", "_blank");
		demoLink.appendChild(demoDiv);
		linkDiv.appendChild(demoLink);
	}

	linkDiv.appendChild(githubLink);

	projectDiv.appendChild(projectContent);
	projectContent.appendChild(linkDiv);
	projectList.appendChild(projectDiv);
});
