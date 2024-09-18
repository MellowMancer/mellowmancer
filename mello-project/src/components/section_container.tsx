import React from 'react';

interface SectionContainerProps {
    children: React.ReactNode;
    id?: string;
    first?: number;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, id="", first = 0}) => {
    return (
        <div id={id} className={`${first == 1 ? "":""} section h-screen flex justify-center items-center justify-items-center`}>
            {children}
        </div>
    );
};

export default SectionContainer;