import React from "react";
import ParticlesBg from 'particles-bg';

const MainBkgd = () => {
    return (
        <div className="particles">
            <ParticlesBg num={200} type="cobweb" bg={true} />
        </div>
    )
}

export default MainBkgd;