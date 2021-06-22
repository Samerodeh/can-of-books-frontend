import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export class UpdateBookForm extends Component {
    render() {
        return (
            <div>
                 
                  <Form  onSubmit={(e)=>this.props.updateBookForm}>
            
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Book Nane:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Book Name"   onChange={(e)=>{this.props.updatBookName(e.target.value)}} />
                  <Form.Label>Discription:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Discription"   onChange={(e)=>{this.props.updatdescription(e.target.value)}} />
                  <Form.Label>status:</Form.Label>
                  <Form.Control type="text" placeholder="Enter status"  onChange={(e)=>{this.props.statusBook(e.target.value)}} />
                </Form.Group>
              
         
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </Form>


            </div>
        )
    }
}

export default UpdateBookForm
