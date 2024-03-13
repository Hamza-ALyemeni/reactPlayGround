// export default function TabButton(props) {
//     return <li><button>{props.children}</button></li>;
// }
export default function TabButton({children,onSelect, isSelected}) {
    
    return (
    <li onClick={onSelect}>
        <button className = { isSelected ? 'active' : undefined }>{children}</button>
    </li>
    );
}