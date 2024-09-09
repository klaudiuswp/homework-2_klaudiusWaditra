import React from 'react';

import BiodataTitle from '../atoms/BiodataTitle.jsx';
import BiodataDesc from '../atoms/BiodataDesc.jsx';

const CardBody = () => {
    return (
        <>
            <div class="row">
                <BiodataTitle title='Location'/>
                <BiodataDesc desc='Jakarta, Indonesia'/>
            </div>
            <div class="row">
                <BiodataTitle title='Members'/>
                <BiodataDesc desc='1,078'/>
            </div>
            <div class="row">
                <BiodataTitle title='Organizers'/>
                <BiodataDesc desc='Adhy Wiranata'/>
            </div>
        </>
    )
}

export default CardBody;