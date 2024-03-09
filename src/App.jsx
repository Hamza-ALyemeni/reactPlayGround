import { useState } from "react";
import ComponentsImage from "./assets/Components.png"
import { CORE_CONCEPTS } from "./data";
import Header from "./compnents/Header/Header.jsx";
import  { CoreConcept }  from "./compnents/CoreConcept";
import TabButton from "./compnents/TabButton.jsx";

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
  const [selectedTopic , setSelectedTopic] = useState("please click a button");

  // this will not work because components run once
  // let tabContent = "Please click a button";

  function selectHandler(selectedButton)
    {
        // tabContent = selectedButton;
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }
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
        <section id="examples">
          <h2>Examples</h2>
            <menu>
              <TabButton onSelect = {() => selectHandler("Components")}>Components</TabButton>
              <TabButton onSelect = {() => selectHandler("Jsx")}>Jsx</TabButton>
              <TabButton onSelect = {() => selectHandler("Props")}>Props</TabButton>
              <TabButton onSelect = {() => selectHandler("State")}>State</TabButton>
            </menu>
            {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
