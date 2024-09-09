import React from 'react';

import CardImg from '../molecules/CardImg.jsx';
import CardBody from '../molecules/CardBody.jsx';
import CardTitle from '../molecules/CardTitle.jsx';

const HeaderBody = () => {
    return (
        <>
            <div className='card border-0 shadow-sm bg-secondary-subtle'>
                <div className='row g-0 d-flex align-items-center'>
                    <CardImg/>

                    <div className='col-md-5 text-center text-md-start p-2 border-end'>
                        <CardTitle/>
                        <CardBody/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeaderBody;