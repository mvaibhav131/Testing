

export const Button=({variant,colorScheme,children,onClick})=>{
    return (
    <button 
    data-testid="customButton"
    onClick={onClick}
    className={`btn ${colorScheme || "red"} ${variant || "ghost"}`}>{children}</button>
    );
};