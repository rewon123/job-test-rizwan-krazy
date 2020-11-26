import React, { useState } from 'react';
import Draggable from 'react-draggable';


const TShirt = props => {
    const [inputData, setInputData] = useState([]);
    console.log(inputData);

    const handleChange = e => {
        const data = e.target.value;
        setInputData(data)
    }


    const handleSave = field => newContent => {
        props.updateContent(field, newContent);
    };
    return (
        <div className='tshirt'>
            <button type="button" className="btn btn1 d-flex" data-toggle="modal" data-target="#basicExampleModal"> add text</button>
            <div className="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="exampleModalLabel">your cart<i id="icon" className="fa fa-shopping-basket fa-2x"></i> </h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {/* this part contains the data of the cart */}
                        <div className="modal-body">
                            <input onBlur={handleChange} className="box form-control" type="text" />
                            <br />
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='img d-flex justify-content-center'>
                <div className="">
                    <img src='https://www.buytshirtsonline.co.uk/images/fruit-of-the-loom-cheap-white-t-shirts-p526-160408_image.jpg' style={{ width: 320, height: 500 }} alt="" />
                    <Draggable bounds={{ top: -250, left: -50, right: 80, bottom: -10 }} >
                        <p style={{ marginTop: -200, marginLeft: '25%', fontSize: 50 }} >{inputData}</p>
                    </Draggable>
                </div>
            </div>
        </div>
    );
};

export default TShirt;