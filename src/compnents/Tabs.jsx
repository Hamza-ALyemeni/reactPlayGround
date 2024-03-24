export default function Tabs({children,buttons,ButtonsComponent}) {
    return(
        <>
            <ButtonsComponent>{buttons}</ButtonsComponent>
            {children}
        </>
    );
}