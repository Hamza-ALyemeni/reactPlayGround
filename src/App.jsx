import Header from "./compnents/Header/Header.jsx";
import CoreConcepts from "./compnents/CoreConcepts.jsx";
import Examples from "./compnents/Examples.jsx";

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
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </div>
  );
}

export default App;
