import React from 'react';

const Constructor = ({constructor}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
        {
            constructor.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${constructor.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://cryptic-lake-39562.herokuapp.com/${constructor.img}`} alt=""/>
        }
            <h4>{constructor.name}</h4>
            {/* <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> */}
            <p>{constructor.email}</p>
        </div>
    );
};

export default Constructor;