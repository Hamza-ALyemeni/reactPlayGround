import ImgObj from "./assets/react-core-concepts.png"
import ComponentsImage from "./assets/Components.png"
import { CORE_CONCEPTS } from "./data";
const reactDescription = ["Core", "Fundemental","Crucial"];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header(){
  const description = reactDescription[getRandomInt(2)];
  return(
    <header>
        <img src={ImgObj} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}
// function CorConcept(props) {
//   return(
//     <li>
//       <img src ={props.image} alt={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }
function CorConcept({title,description,image}) {
  return(
    <li>
      <img src ={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <ul>
            <CorConcept title={CORE_CONCEPTS[0].title} description = {CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            <CorConcept title={CORE_CONCEPTS[1].title} description = {CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
            <CorConcept {...CORE_CONCEPTS[2]}/>
            <CorConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
