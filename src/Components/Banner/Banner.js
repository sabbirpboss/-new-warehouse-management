import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{backgroundImage: 'url("bannerTwo.jpg")'}}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold text-accent">Discount 50% 
                        <br /> 1 Year Subscription</h1>
                        <p class="mb-5 text-base-100">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-accent">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;