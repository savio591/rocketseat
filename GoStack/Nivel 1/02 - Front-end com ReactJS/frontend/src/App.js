import React, {useState} from "react";

import Header from "./components/header";

function App() {

const [projects, setProjects] = useState(["Desenvolvimento de app", "Front-End Web"])

function handleAddProject() {

  setProjects([...projects, 'Novo Projecto']);
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
              function project(projects) {
                return (<li key={projects}>{projects}</li>)
              })}
          </ul>

          <button type="button" onClick={handleAddProject}>Add one more time</button>

    </>
  );
}

export default App;
