import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";

const { Option } = Select;

class UpdateStudentModal extends React.Component {
  formRef = React.createRef();
  state = {
    visible: false,

  };

  onFinish = (values) => {
    console.log('responseid', values.id, values.roll_number);
    const url = "/mystudents/${e.id}";
    fetch(url, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => {
        console.log('responseupdate', values);
        if (data.ok) {
          this.handleCancel();
          console.log('responsedata', data.json);
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(() => {
        this.props.setState();
        this.props.reloadStudents();
      })
      .catch((err) => console.error("Error: " + err));
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
   componentDidMount(){
       // if item exists, populate the state with proper data
       if(this.props.item){
         const { id,roll_number, name, email, phone } = this.props.item
         this.setState({ id,roll_number, name, email, phone  })
       }
     }
  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Edit Student
        </Button>

        <Modal title="Edit Student ..." visible={this.state.visible} onCancel={this.handleCancel} footer={null}>
          <Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
            <Form.Item name="roll_number" label="Roll_Number" rules={[{ required: true, message: "Please input student's Roll_number" }]}>
              <Input type="number" placeholder="Input Roll_number" />
            </Form.Item>

            <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input Name" }]} >
              <Input placeholder="Input name" />
            </Form.Item>

            <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please input Email" }]}>
              <Input placeholder="Input Email ID" />
            </Form.Item>


            <Form.Item name="phone" label="Phone" rules={[{ required: true, message: "Please input the Phone" }]}>
              <Input placeholder="Enter Phone Number" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

export default UpdateStudentModal;