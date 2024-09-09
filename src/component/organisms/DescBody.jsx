import React from 'react';

import Card from '../molecules/Card.jsx';

const DescBody = () => {
    return (
        <>
            <div className='mt-4'>
                <h4><b>Past Meetups</b></h4>
            </div>

            <div className='pt-2 mx-5 row g-0 d-flex justify-content-between'>
                <Card title='27 November 2017' desc='39 JakartaJS April Meetup with
                kumparan'/>
                <Card title='30 Desember 2018' desc='Dolor do sint voluptate et officia cillum mollit ex.'/>
                <Card title='01 Januari 2020' desc='Deskripsi Berita
                Sekian Berita'/>
            </div>
        </>
    )
}

export default DescBody;