import React, { Component } from 'react'
import { Table, message, Popconfirm } from "antd";
//import axios from 'axios'
import AddStudentModal from "./AddStudentModal";
import UpdateStudentModal from "./UpdateStudentModal";

class MyStudentContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }
    columns = [
      {
        title: "Roll_Number",
        dataIndex: "roll_number",
        key: "roll_number",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "",
        key: "action",
        render: (_text, record) => (
          <Popconfirm title="Are you sure to delete this student?" onConfirm={() => this.deleteStudent(record.id)} okText="Yes" cancelText="No">
            <a href="#" type="danger">
              Delete{" "}
            </a>
          </Popconfirm>
        ),
      },
      {
          title: "",
          key: "action",
          render: (_text, record) => (
            <UpdateStudentModal reloadStudents={this.reloadStudents} />
          ),
        },
    ];

   getstudents() {
    const url = "mystudents";
      fetch(url)
        .then((data) => {
          if (data.ok) {
            return data.json();
          }
          throw new Error("Network error.");
        })
        .then((data) => {
          console.log('respdata', data) ;
          data.map((student) => {
            const student_data = {
              key: student.id,
              id: student.id,
              roll_number: student.roll_number,
              name: student.name,
              email: student.email,
              phone: student.phone,
            };
          console.log('responsenewel', student_data, student);
 //         this.setState({students: [student]})

            this.setState((prevState) => ({
              students: [...prevState.students, student_data],
            }));
          });
        })
        //.catch((err) => message.error("Error: " + err));
  }

  componentDidMount() {
    this.getstudents();
    console.log('response') ;
  }
  reloadStudents = () => {
      this.setState({ students: [] });
      this.getstudents();
    };
 deleteStudent = (id) => {
     const url = `/mystudents/${id}`;

     fetch(url, {
       method: "delete",
     })
       .then((data) => {
         if (data.ok) {
           this.reloadStudents();
           return data.json();
         }
         throw new Error("Network error.");
       })
       .catch((err) => message.error("Error: " + err));
   };
  render() {
    return (
      <div>

        <Table className="table-striped-rows" dataSource={this.state.students} columns={this.columns} pagination={{ pageSize: 10 }} />
        <AddStudentModal reloadStudents={this.reloadStudents} />
      </div>
    )
  }
}

export default MyStudentContainer