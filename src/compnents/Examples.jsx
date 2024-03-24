import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data-with-examples";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples(){
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

    return(
        <Section id="examples" className="">
          <h2>Examples</h2>
          <Tabs 
          ButtonsComponent ="menu"
          buttons={<>
              <TabButton isSelected = {selectedTopic === 'components'} onSelect = {() => selectHandler("components")}>Components</TabButton>
              <TabButton isSelected = {selectedTopic === 'jsx'} onSelect = {() => selectHandler("jsx")}>Jsx</TabButton>
              <TabButton isSelected = {selectedTopic === 'props'} onSelect = {() => selectHandler("props")}>Props</TabButton>
              <TabButton isSelected = {selectedTopic === 'state'} onSelect = {() => selectHandler("state")}>State</TabButton>
          </>}>{tabContent}</Tabs>
        </Section>
    );
}   