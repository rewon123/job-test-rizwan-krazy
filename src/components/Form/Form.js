import React, { useState } from 'react';
import { Form } from 'react-bootstrap';



const FormWithImage = () => {
    const [files, setFile] = useState([]);
    const fileHandler = event => {
        let reader = new FileReader();
        reader.onload = function (e) {
            let content = (e.target.result);
            let mainContent = [...files, content];
            setFile(mainContent);
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    const deleteImg = elem => {
        const index = files.indexOf(elem);
        files.splice(index, 1);
        console.log(index);
        alert('your item has removed form the list upload a another image and it will be gone : )')
    }

    return (
        <div>
            <div className="d-flex">
                <div className="col-md-6">
                    <Form className="row px-4 p-4" >
                        <div className="col-md-6">
                            <label htmlFor="" className="form-label-title">Service Title : </label>
                            <Form.Control type="text" placeholder="Enter title" name="serviceTitle" required />
                            <label htmlFor="" className="form-label-title">Location : </label>
                            <Form.Control type="text" placeholder="Enter location" name="location" required />

                            <label htmlFor="" className="form-label-title">No.Of Bathroom : </label>
                            <Form.Control type="text" name="bathroomNum" placeholder="Number / only accept numbers" required pattern="[0-9]+" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="" className="form-label-title">Price : </label>
                            <Form.Control type="text" placeholder="Price / only accept numbers" name="price" required pattern="[0-9]+" />
                            <label htmlFor="" className="form-label-title">No.Of Bedroom : </label>
                            <Form.Control type="text" placeholder="bedroomNum / only accept numbers" name="bedroomNum" required pattern="[0-9]+" />
                            <div className="">
                                <div className="">
                                    <label htmlFor="" className="form-label-title">Thumbnail: </label>
                                    <br />
                                    <Form.File placeholder="Name" name="image" onChange={fileHandler} required accept="image/*" id="actual-btn" className="file-input" />
                                    <label htmlFor="actual-btn" className="btn btn-outline-success responsive-mobile-width">
                                        Upload <span className="responsive-file"> Image</span>
                                    </label>
                                    <span id="file-chosen"></span>
                                </div>
                            </div>
                            <br />
                        </div>
                    </Form>
                </div>
                <div className="col-md-6">
                    {
                        files.map(file =>
                            <div  key={file} className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-8">
                                        <img src={file} className="card-image" style={{ width: '100%' }} alt="..." />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button onClick={() => deleteImg(file)} className='btn btn-danger'> Delete </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default FormWithImage;