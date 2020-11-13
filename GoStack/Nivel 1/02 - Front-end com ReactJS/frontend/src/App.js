import React, {useState, useEffect} from "react";
import api from './services/api.js'
import Header from "./components/header";

function App() {

//const [projects, setProjects] = useState(["Desenvolvimento de app", "Front-End Web"])
const [projects, setProjects] = useState([])

useEffect(() => {
  api.get('./projects').then(response => {
    setProjects(response.data)
  })
}, [])

async function handleAddProject() {

  //setProjects([...projects, 'Novo Projecto']);
  const response = await api.post('projects', {
    "title": "Projeto novo added lá no backend"
  });
  const project = response.data;
  console.log(response.data)
  setProjects([...projects, project])
}

  return (
      //cria um bloco sem criar div
    <>
      <Header title="Homepeig">
      {/* Uso de children */}
          <ul>
              <li>Aapo1</li>
              <li>Aapo2</li>
              <li>Aapo3</li>
          </ul>
      </Header>

      {/* Uso de states */}
      <Header title="Projequetz" />
          <ul className="listaProjetos">
            {projects.map(
              function project(project) {
                //return (<li key={projects}>{projects}</li>)
                return (<li key={project.id}>{project.title}</li>)
              })}
          </ul>

          <button type="button" onClick={handleAddProject}>Add one more time</button>

    </>
  );
}

export default App;
