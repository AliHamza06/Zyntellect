import { Button } from '@mui/material';
import React from 'react'
import Form from 'react-bootstrap/Form';
export default function StartConversationForm() {
    return (
        <div className='marginSet'>
            <div className='formSection'>
                <Form>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <Form.Group className="mb-md-4 mb-3">
                                <Form.Control type="text" className='formInput' required placeholder="Name*" />
                            </Form.Group>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <Form.Group className="mb-md-4 mb-3">
                                <Form.Control type="tel" className='formInput' required placeholder="Phone" />
                            </Form.Group>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <Form.Group className="mb-md-4 mb-3">
                                <Form.Control type="text" className='formInput' required placeholder="Company" />
                            </Form.Group>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <Form.Group className="mb-md-4 mb-3">
                                <Form.Control type="email" className='formInput' required placeholder="Email*" />
                            </Form.Group>
                        </div>
                        <div className="col-12">
                            <Form.Group className="mb-md-4 mb-3">
                                <Form.Control as='textarea' rows={7} className='formInput' required placeholder="Tell us about your project*" />
                            </Form.Group>
                        </div>
                    </div>
                    <Form.Group className="mb-md-4 mb-3 checkBoxGroup" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Send me the signed Non-Disclosure Agreement (NDA)" />
                    </Form.Group>
                    <Button type='submit' variant='contained' className='learnMoreBtn2 startConvBtn'>
                        Start a conversation
                    </Button>
                </Form>
            </div>
        </div>
    )
}
