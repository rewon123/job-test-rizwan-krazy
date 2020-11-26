import React, { useState } from 'react';
import { Form } from 'react-bootstrap';



const FormWithImage = () => {
    const [files, setFile] = useState([]);
    console.log(files);
    const fileHandler = event => {
        let reader = new FileReader();
        reader.onload = function (e) {
            let content = (e.target.result);
            let mainContent = [...files, content];
            setFile(mainContent);
        };
        reader.readAsDataURL(event.target.files[0]);
    };

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
                            <div class="card mb-3">
                                <div class="row no-gutters">
                                    <div class="col-md-8">
                                        <img src={file} class="card-image" style={{ width: '100%' }} alt="..." />
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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