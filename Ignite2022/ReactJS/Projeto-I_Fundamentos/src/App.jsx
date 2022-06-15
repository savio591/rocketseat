import { Post } from "./Post";

function App() {
  return (
    <>
      <Post
        author="Savio Castelo"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, veniam voluptatum fugit quasi inventore deserunt aspernatur ut assumenda doloremque rem voluptatibus at obcaecati explicabo maiores animi non dolore aliquam eaque!"
      />
      <Post author={"Pedro Álvaro"} content="Conteúdo né" />
    </>
  );
}

export default App;
