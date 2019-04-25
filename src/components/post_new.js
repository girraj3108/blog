



import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import { connect} from 'react-redux';
import { createPost} from '../actions';


class PostNew extends Component{
renderField(field){

const { meta: {touched,error}} = field;

const className= `form-group ${touched && error ? 'has-danger':''}`;
  return(
    <div className={className}>
    <label>{field.kuchBhiNaam}</label>
    <input
    className="form-control"
    type="text"
           {...field.input}
             />
             <div className='text-help'>
             {touched?error:''}
             </div>
              </div>
  );
}


onSubmit(values){
  this.props.createPost(values,() => {
    this.props.history.push('/');
  });
}

  render(){
    const { handleSubmit } = this.props;

    return(
       <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
           <Field
           kuchBhiNaam="title"
           name="title"
           component={this.renderField}
           />

           <Field
           kuchBhiNaam="categories"
           name="categories"
           component={this.renderField}
           />

         <Field
         kuchBhiNaam="post content"
         name="content"
         component={this.renderField}
         />

     <button type="submit" className="btn btn-primary">submit</button>
<Link to="/" className="btn btn-danger">Cancel</Link>
           </form>
    );
  }

}

function validate(values){
 
 const errors={};

 

if(!values.title){
  errors.title = " Enter a title";
}
  if(!values.categories){
    errors.categories = " Enter some categories";
}
    if(!values.content){
      errors.content = " Enter some conntent please";

}
 
 return errors;
}

export default reduxForm({
validate:validate, 
  form:'PostsNewForm'
})(
connect(null,{createPost})(PostNew)
);

