import React from 'react';

import Img from '../atoms/Img.jsx';

const CardImg = () => {
    return (
        <>
            <div className='col-md-3 col-lg-2 text-md-center p-2'>
                <Img src='/assets/images.jpg' width='100px'/>
            </div>
        </>
    )
}

export default CardImg;