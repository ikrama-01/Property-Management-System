import React, { Component } from 'react';
import { editProperty, repairNeeded } from '../actions/properties';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class EditProperty extends Component {


   editProperty = (values) => {
    console.log('form values', values)
    this.props.editProperty(values);
    this.props.history.push('/dash');
  }

  render () {
    const { handleSubmit } = this.props
    console.log('props in edit', );

    return (
     <div className='editProp'>
        <Form onSubmit={handleSubmit(this.editProperty)} style={{margin: 20}}>
          <div>
            <h3>PROPERTY ADDRESS</h3>
              <Row >
                <Col sm='4'>
                  <label htmlFor="address">Address</label>
                </Col>
                <Col sm='4'>
                  <label htmlFor="unit">Unit</label>
                </Col>
                <Col sm='4'>
                  <label htmlFor="city">City</label>
                </Col>
              </Row>
              <Row >
                 <Col sm='4'>
                  <Field name="address" component="input" type="text" />
                 </Col>
                 <Col sm='4'>
                  <Field name="unit" component="input" type="text" />
                 </Col>
                 <Col sm='4'>
                  <Field name="city" component="input" type="text" />
                 </Col>
              </Row>
              <Row>
                <Col sm='4'>
                  <label htmlFor="state">State</label>
                </Col>
                <Col sm='4'>
                  <label htmlFor="zipcode">Zipcode</label>
                </Col>
             </Row>
             <Row >
               <Col sm='4'>
                <Field name="state" component="input" type="text" />
               </Col>
               <Col sm='4'>
                <Field name="zipcode" component="input" type="text" />
               </Col>
           </Row>
          </div>
          <div>
            <h3>TENANT NAME</h3>
               <Row>
                 <Col sm='4'>
                   <label htmlFor="fname">First</label>
                 </Col>
                 <Col sm='4'>
                   <label htmlFor="lname">Last</label>
                 </Col>
                </Row>
                <Row>
                <Col sm='4'>
                 <Field name="fname" component="input" type="text" />
                </Col>
                <Col sm='4'>
                 <Field name="lname" component="input" type="text" />
                </Col>
              </Row>
          </div>
          <div>
          <h3>MONTHLY FINACIALS</h3>
             <Row >
               <Col sm='4'>
                 <label htmlFor="mortgage">Mortgage</label>
               </Col>
               <Col sm='4'>
                 <label htmlFor="property_tax">Tax</label>
               </Col>
               <Col sm='4'>
                 <label htmlFor="property_insurance">Insurance</label>
               </Col>
            </Row>
            <Row>
              <Col sm='4'>
               <Field name="mortgage" component="input" type="text" />
              </Col>
              <Col sm='4'>
               <Field name="property_tax" component="input" type="text" />
              </Col>
              <Col sm='4'>
               <Field name="property_insurance" component="input" type="text" />
              </Col>
            </Row>
            <Row >
              <Col sm='1'>
                <label htmlFor="rent_amount">Rent</label>
              </Col>
           </Row>
           <Row  >
             <Col sm='2'>
              <Field name="rent_amount" component="input" type="text" />
             </Col>
            </Row>
          </div>
          <div>
          <h3>LEASE</h3>
             <Row >
               <Col sm='4'>
                 <label htmlFor="lease_start_date">Start</label>
               </Col>
               <Col sm='4'>
                 <label htmlFor="lease_end_date">Start</label>
               </Col>
              </Row>
              <Row >
                <Col sm='4'>
                 <Field name="lease_start_date" component="input" type="date" />
                </Col>
                <Col sm='4'>
                 <Field name="lease_end_date" component="input" type="date" />
                </Col>
              </Row>
          </div>
          <div>
          <h3>REPAIRS</h3>
            <Row >
              <Col sm='1'>
                  <label><Field name="repairs" component="input" type="radio" value="true"/> Yes</label>
                </Col>
               <Col sm='1'>
                  <label><Field name="repairs" component="input" type="radio" value="false"/> No</label>
              </Col>
            </Row>
            <Row >
               <Col sm='4'>
                 <label htmlFor="repair_amount">Cost</label>
               </Col>
                 <Col sm='4'>
                 <label htmlFor="repair_description">Description</label>
               </Col>
            </Row>
            <Row>
                <Col sm='4'>
                 <Field name="repair_amount" component="input" type="text" />
                </Col>
                <Col sm='6'>
                 <Field name="repair_description" component="textarea" type="text" />
                </Col>
            </Row>
          </div>
          <div>
          <Row>
           <Col sm='6'>
             <Button
                 style={{backgroundColor: 'white'}}
                 size="sm"
                 outline
                 color="success"
                 type="submit">Submit
             </Button>
           </Col>
          </Row>
          </div>     
        </Form>
      </div>
    )
  }
}

EditProperty = reduxForm({
  // a unique name for the form
  form: 'property_edit'
})(EditProperty)

function mapStateToProps(state, props) {
  //console.log('statetetetetetetet', state.properties[0]);
   return {
     initialValues: state.properties.filter(property => property.id == props.match.params.id)[0],

     blah: state.form.property_edit
   }
}

function mapDispatchToProps(dispatch) {
    return {

       editProperty: bindActionCreators(editProperty, dispatch),
       repairNeeded: bindActionCreators(repairNeeded, dispatch)
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps) (EditProperty);
