import { Form, Input, Button, Checkbox } from 'antd';
import React,{Component} from 'react';
import { getConfirmLocale } from 'antd/lib/modal/locale';
import {connect} from 'dva';


const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

class Signup extends React.Component {

  constructor(){
      super();
      this.state = {
          name: '',
          email : '',
          age: '',
          gender: ''
      }
      
  }
  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success');
      }
    });
  };

  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked,
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true });
      },
    );
  };


getName = e => {
    this.setState({ name : e.target.value})
}


getAge = e => {
    this.setState({ age : e.target.value})
}



getEmail = e => {
    this.setState({ email : e.target.value})
}


getGender = e => {
    this.setState({ gender : e.target.value})
}

submitdata=(e)=>{
    const {dispatch,signup} = this.props;

    const {name,age,gender,email} = this.state;

e.preventDefault();

var userdata = {
name,
age,
gender,
email
  }
console.log(userdata);
if(userdata.name == "" || userdata.age == "" || userdata.gender == ""  || userdata.email == "" ){
  alert("fill the missing fields")
}
else
dispatch({
    type: 'signup/register',
    payload: userdata
})


}


  render() {
    const {dispatch,signup} = this.props;

console.log(signup);

    return (
      <div>
   
      
        <Form.Item {...formTailLayout}>
        <Input placeholder="Please input your name" onChange={this.getName.bind(this)}/>
        </Form.Item>
        <Form.Item {...formTailLayout}>
        <Input placeholder="Please input your email"onChange={this.getEmail.bind(this)} />
        </Form.Item>
        <Form.Item {...formTailLayout}>
        <Input placeholder="Please input your age" onChange={this.getAge.bind(this)}/>
        </Form.Item>
        <Form.Item {...formTailLayout}>
        <Input placeholder="Please input your gender" onChange={this.getGender.bind(this)}/>
        </Form.Item>
        <Button onClick={this.submitdata.bind(this)}> submit </Button> 
      </div>
    );
  }
}


export default connect(({signup})=>({
    signup
}))(Signup)

// const WrappedDynamicRule = Form.create({ name: 'dynamic_rule' })(DynamicRule);
// ReactDOM.render(<WrappedDynamicRule />, mountNode);