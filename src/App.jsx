import ComponentsImage from "./assets/Components.png"
import { CORE_CONCEPTS } from "./data";
import Header from "./compnents/Header/Header.jsx";
import  { CoreConcept }  from "./compnents/CoreConcept";

// function CorConcept(props) {
//   return(
//     <li>
//       <img src ={props.image} alt={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description = {CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            <CoreConcept title={CORE_CONCEPTS[1].title} description = {CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
