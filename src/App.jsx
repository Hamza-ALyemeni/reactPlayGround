import { useState } from "react";
import ComponentsImage from "./assets/Components.png"
import { CORE_CONCEPTS } from "./data-with-examples";
import Header from "./compnents/Header/Header.jsx";
import  { CoreConcept }  from "./compnents/CoreConcept";
import TabButton from "./compnents/TabButton.jsx";
import { EXAMPLES } from "./data-with-examples";

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
  const [selectedTopic , setSelectedTopic] = useState();

  // this will not work because components run once
  // let tabContent = "Please click a button";

  function selectHandler(selectedButton)
    {
        // tabContent = selectedButton;
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>);
    }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept  title={CORE_CONCEPTS[0].title} description = {CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            <CoreConcept  title={CORE_CONCEPTS[1].title} description = {CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
            <CoreConcept  {...CORE_CONCEPTS[2]}/>
            <CoreConcept  {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
            <menu>
              <TabButton isSelected = {selectedTopic === 'components'} onSelect = {() => selectHandler("components")}>Components</TabButton>
              <TabButton isSelected = {selectedTopic === 'jsx'} onSelect = {() => selectHandler("jsx")}>Jsx</TabButton>
              <TabButton isSelected = {selectedTopic === 'props'} onSelect = {() => selectHandler("props")}>Props</TabButton>
              <TabButton isSelected = {selectedTopic === 'state'} onSelect = {() => selectHandler("state")}>State</TabButton>
            </menu>
            {tabContent}
          </section>
      </main>
    </div>
  );
}

export default App;
