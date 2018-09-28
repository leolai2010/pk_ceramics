import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCeramics } from '../actions';
import _ from 'lodash';

class CeramicForm extends Component{
    renderField(field){
        const { meta: {touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-danger':'' }`;
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">{touched ? error:''}</div>
            </div>
        );
    }
    onSubmit(values){
        console.log(values);
        this.props.createCeramics(values, ()=>{
            this.props.history.push('/');
        });
    }
    render() {
        const{ handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="ImageURL"
                    name="imageurl"
                    component={this.renderField}
                />
                <Field
                    label="Name"
                    name="name"
                    component={this.renderField}
                />
                <Field
                    label="Type"
                    name="type"
                    component={this.renderField}
                />
                <Field
                    label="Price"
                    name="price"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/home" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values){
    const errors = {};
    if(!values.imageurl){
        errors.imageurl = "Enter a Valid URL";
    }
    if(!values.name){
        errors.name = "Enter a Name for the Workpiece";
    }
    if(!values.type){
        errors.type = "Input a Valid Type"
    }
    if(!values.price){
        errors.price = "Input a Valid Price"
    }
}

export default reduxForm({
    validate,
    form: 'NewCeramicForm'
})(
    connect(null, {createCeramics})(CeramicForm)
);