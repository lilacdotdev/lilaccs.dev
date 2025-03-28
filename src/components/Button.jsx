// NOTE: This is my first React component, so I'm taking this time to break down the creation of a react component.

// Create a const called Button wherein button takes params after, and is an arrow function creating the button.
/* Params
    - className
    - href
    - onClick
    - children */
const Button = ({className, href, onClick, children}) => {
    const classes = `button relative ${className || ""}`

    const renderButton = () => (
        <button className={classes}>
            <span>{children}</span>
        </button>
    );
  
    return renderButton();
};

// Components are exported at the end to be called in another place.
export default Button;