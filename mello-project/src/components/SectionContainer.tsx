import React from 'react';

interface SectionContainerProps {
    children: React.ReactNode;
    id?: string;
    first?: number;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, id="", first = 0}) => {
    return (
        <section id={id} className={`${first == 1 ? "":""} section min-h-screen flex justify-center items-center justify-items-center overflow-y-hidden`}>
            <div className='section-child w-0 h-[1px]'></div>
            {children}
        </section>
    );
};

export default SectionContainer;