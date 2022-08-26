import React, { useEffect, useState } from "react";
import {   Form  } from "antd";
import personAPI from "../../api/person";
import { StyledButton, StyledContainer, StyledForm, StyledInput, StyledLable, StyledTable } from "./styled";
 const Person = () => {
  const [form] = Form.useForm();
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);

  const handleSearch = (values) => {
     setName(values.name);
  };

  useEffect(() => {
    personAPI.getPersonList({ search: name ? name : "" }).then((data)=>{
       setData(data?.data?.data)
    });
    form.resetFields();
    setVisible(false)
  }, [name]);


  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "50%",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      width: "50%",
    },
  ];
  return (
    <StyledContainer>
      <StyledForm form={form} onFinish={(e) => handleSearch(e)}>
        <StyledLable>Name</StyledLable>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please Input Name!" }]}
        >
          <StyledInput placeholder="name" onChange={() => setVisible(true)} />
        </Form.Item>
        <Form.Item>
          <StyledButton
            type="primary"
            htmlType="submit"
            disabled={visible ? false : true}
          >
            Submit
          </StyledButton>
        </Form.Item>
      </StyledForm>
      <StyledTable columns={columns} dataSource={data} pagination={false} />
    </StyledContainer>
  );
};

export default Person;
