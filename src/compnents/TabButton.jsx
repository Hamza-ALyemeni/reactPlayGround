// export default function TabButton(props) {
//     return <li><button>{props.children}</button></li>;
// }
export default function TabButton({children,onSelect}) {
    
    return (
    <li onClick={onSelect}>
        <button>{children}</button>
    </li>
    );
}