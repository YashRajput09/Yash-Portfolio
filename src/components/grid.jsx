import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bentoGrid';
import gridItems from '../../data/index';

function Grid() {
    return (
        <>
        <div className="">
            <BentoGrid >
                {
                gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
                    <BentoGridItem 
                    id = {id}
                    key = {id}
                    title= {title}
                    description = {description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                    />

                ))}
            </BentoGrid>
        </div>
        </>
    )
}

export default Grid;