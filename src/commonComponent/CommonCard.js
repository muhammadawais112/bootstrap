import React from 'react'
import Carousel1 from "../assets/Carousal1.jpg"
export default function CommonCard() {
    return (
        <div>

            <div className='container'>
                <div className='row mt-5'>
                    <div className='col col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                        <div class="card">
                            <img src={Carousel1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>


                    </div>

                    <div className='col col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                        <div class="card" >
                            <img src={Carousel1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>


                    </div>

                    <div className='col col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                        <div class="card">
                            <img src={Carousel1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



















        </div>
    )
}
