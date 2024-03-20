import React, {HTMLAttributes} from 'react';

interface H1TextProps extends HTMLAttributes<HTMLHeadingElement> {}
const H1Text: React.FC<H1TextProps> = (props) => {
    return (
        <h1 {...props}>
            {props.children}
        </h1>
    );
};

export default H1Text;