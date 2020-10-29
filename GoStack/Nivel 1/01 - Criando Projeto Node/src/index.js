/* importar express - criação de rotas e listening */
const { request, response } = require("express");
const express = require("express");

/* importar uuid - gerador aleatório de uma id */
const { uuid } = require("uuidv4");

/* abreviar express */
const app = express();
app.use(express.json());
/* Armazenando dados */
const projects = [];

app.get("/projects", (request, response) => {
	const { title } = request.query;
	const results = title
	? projects.filter(project => project.title.includes(title))
	: projects;


	return response.json(results);
});

app.post("/projects", (request, response) => {
	const { title, owner } = request.body;
	console.log(title);
	console.log(owner);

	const project = { id: uuid(), title, owner };

	projects.push(project);

	return response.json(projects);
});

app.put("/projects/:id", (request, response) => {
	const { id } = request.params;
	const { title, owner } = request.body;

	const projectIndex = projects.findIndex((project) => project.id == id);

	if (projectIndex < 0) {
		return response.status(400).json({ error: "Project not found" });
	}

	const project = {
		id,
		title,
		owner,
	};

	projects[projectIndex] = project;

	return response.json(project);
});

app.delete("/projects/:id", (request, response) => {
	const { id } = request.params;

	const projectIndex = projects.findIndex((project) => project.id == id)

	if (projectIndex > 0) {
		response.status(404).send("Project Not found")
	}

	projects.splice(projectIndex, 1)

	return response.status(204).send("user " + id + "removed")
})

/* Ouvir em protocolo http */
app.listen(3333, () => {
	console.log("Listening on 3333");
});
