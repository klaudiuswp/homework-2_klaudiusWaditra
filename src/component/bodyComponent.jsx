import React from 'react';

const BodyComponent = () => {
    return (
        <div className='container p-0 mt-4'>
            <div className='card border-0 shadow-sm bg-secondary-subtle'>
                <div className='row g-0 d-flex align-items-center'>
                    <div className='col-md-3 col-lg-2 text-md-center p-2'>
                        <div className='text-center'>
                            <img src="/assets/images.jpg" className='img-fluid' width='100px' />
                        </div>
                    </div>

                    <div className='col-md-5 text-center text-md-start p-2 border-end'>
                        <h5 className='mt-3'><b>Hackativ8 Meetup</b></h5>
                        <div class="row">
                            <div class="col-4 col-md-5">
                                <p>Location </p>
                            </div>
                            <div class="col-8 col-md-7">
                                <p> Jakarta, Indonesia</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 col-md-5">
                                <p>Members </p>
                            </div>
                            <div class="col-8 col-md-7">
                                <p> 1,078</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 col-md-5">
                                <p>Organizers </p>
                            </div>
                            <div class="col-8 col-md-7">
                                <p> Adhy Wiranata</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

            <div className='mt-4'>
                <h4><b>Past Meetups</b></h4>
            </div>

            <div className='pt-2 mx-5 row g-0 d-flex justify-content-between'>
                <div className='col-md-4 px-2'>
                    <div className="card">
                        <div className="card-header">
                            27 November 2017
                        </div>
                        <div className="card-body">
                            <p className="card-text">39 JakartaJS April Meetup with <br />kumparan</p>
                            <p><b>139</b> went View</p>
                            <a href="#" className="btn btn-secondary">View</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 px-2'>
                    <div className="card">
                        <div className="card-header">
                            27 November 2017
                        </div>
                        <div className="card-body">
                            <p className="card-text">39 JakartaJS April Meetup with <br />kumparan</p>
                            <p><b>139</b> went View</p>
                            <a href="#" className="btn btn-secondary">View</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 px-2'>
                    <div className="card">
                        <div className="card-header">
                            27 November 2017
                        </div>
                        <div className="card-body">
                            <p className="card-text">39 JakartaJS April Meetup with <br />kumparan</p>
                            <p><b>139</b> went View</p>
                            <a href="#" className="btn btn-secondary">View</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <footer className="pt-3 mt-4">
                    <p className="text-center text-body-secondary">Copyright Hackativ8 2018</p>
                </footer>
            </div>
        </div>
    );
}

export default BodyComponent;