import React from 'react';

const Policy = (param) => {
    return (
        <>
        <div className="border-2 border-white rounded-2xl w-80 mx-auto mt-5 p-3 px-4 xl:hidden">
            <h2 className="pb-5 text-2xl mt-5">{param.title}</h2>
            <p>
                {param.text}
            </p>
        </div>
        <div className="border-2 border-white rounded-2xl mx-auto mb-6">
            <h2 className="pb-3 text-3xl">{param.title}</h2>
            <p>
                {param.text}
            </p>
        </div></>
    );
};

export default Policy;
