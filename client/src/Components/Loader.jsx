import React from 'react'
import { BeatLoader } from 'react-spinners';

const Loader = (props) => {
    return (
        <div>
            <BeatLoader
                color="#000"
                loading={true}
                className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-50 overflow-hidden bg-black bg-opacity-75 transition-opacity !flex !flex-row items-center justify-center" />
        </div>
    )
}

export default Loader