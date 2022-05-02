import React, { Component } from 'react';
import "./styles/topics.css";
class Topics extends Component {
    state = {  } 
    render() { 
        return (
            <div className='m-3'>
                <div className="container d-flex flex-column align-items-center m-3">
                    <div className="row">
                        <div className="form-group">
                            <label className='mr-2' htmlFor="nameLabel">Name</label>
                            <input type="text" className='input' id='nameLabel' />
                        </div>
                    </div>
                    <div className="row">
                    <div className="form-group">
                            <label className='mr-2' htmlFor="category">Category</label>
                            <select style={{height: '2rem'}} name="" id="" className='input' placeholder='Select Category'>
                                <option value="Soccer">Soccer</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label className='mr-2' htmlFor="speakerLabel">Speaker</label>
                            <input type="text" className='input' id='speakerLabel' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label className='mr-2' htmlFor="dateLabel">Date</label>
                            <input type="date" className='input' id='dateLabel' />
                        </div>
                    </div>
                    <div className="row">
                    <div className="form-group">
                            <label className='mr-2' htmlFor="dateLabel">Date</label>
                            <input type="text" className='input' id='dateLabel' />
                        </div>
                    </div>
                    <div className="row">
                    <div className="form-group">
                            <label className='mr-2' htmlFor="imageLabel">Picture</label>
                            <input type="file" accept='image/jpeg' className='input' id='imageLabel' />
                        </div>
                    </div>
                    <div className="row">
                    <div className="form-group">
                            <label className='mr-2' htmlFor="descriptionLabel">Description</label>
                            <textarea name="" id="" cols="30" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn btn-primary submit-button">Add Topics</button>
                    </div>
                </div>
               
            </div>
        );
    }
}
 
export default Topics;