import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const Thanks = () => {


    const history = useHistory();
    const { name } = useParams();

    console.log(history);



    <React.Fragment>
        <div className= "thanks">
            <p> Thanks <strong>{name}!!</strong></p>
            <p>You Joined <strong>{history.location.state}</strong></p>

            <hr/>
            <p><strong>Disclaimer:</strong> asdasdkasldfj  asdfkl asd fasdfkasdfj asdlkfajlsdfjklasdfj asdklfaskldfjalsdf kla sdfklasdkf jasdklfasjdflas klasdfja askldf j   </p>

        </div>
        
    </React.Fragment>
}

export default Thanks;