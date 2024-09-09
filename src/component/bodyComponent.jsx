import React from 'react';

import HeaderBody from './organisms/HeaderBody.jsx'
import FooterBody from './organisms/FooterBody.jsx';
import DescBody from './organisms/DescBody.jsx';

const BodyComponent = () => {
    return (
        <div className='container p-0 mt-4'>
            <HeaderBody/>

            <div className='mt-4'>
                <h4><b>Next Meetup</b></h4>
            </div>

            <div className='card border-0 shadow-sm bg-secondary-subtle mx-5'>
                <div className='p-4'>
                    <h6>Awesome meetup and event</h6>
                    <p className='text-muted'>
                        25 January 2019
                    </p>
                    <p>
                        Hello, JavaScript & Node.js Ninjas!
                    </p>
                    <p>
                        Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018! <br />
                        The meetup format will contain some short stories and technical talks. <br />
                        If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements. <br />
                        Remember to bring a photo ID to get through building <br />
                        - - - - - <br />
                        See you there! <br />
                        Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizer
                    </p>
                </div>
            </div>

            <div className='mt-4'>
                <h4><b>About Meetup</b></h4>
            </div>

            <div className='pt-2 mx-5'>
                <div>
                    <p>
                        Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.
                    </p>
                    <p>
                        Twitter: @JakartaJS and we use the hashtag #jakartajs
                    </p>
                </div>
            </div>

            <div className='mt-4'>
                <h4><b>Next Meetup</b></h4>
            </div>

            <div className='card border-0 shadow-sm bg-secondary-subtle mx-5'>
                <div className=''>
                    <div className='row g-0 d-flex align-items-center'>
                        <div className='col-md-3 col-lg-2 text-md-center p-2'>
                            <div className='text-center'>
                                <img src="/assets/images.jpg" className='img-fluid rounded-circle' width='100px' />
                            </div>
                        </div>

                        <div className='col-md-3 text-center text-md-start p-2 border-end'>
                            <h5 className='mt-3'><b>Organizers</b></h5>
                            <p className='text-muted'>Adhy Wiranata</p>
                        </div>
                    </div>
                </div>
            </div>

            <DescBody/>
            
            <FooterBody/>
        </div>
    );
}

export default BodyComponent;