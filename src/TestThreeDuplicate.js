import { Card, Col, Image, Row } from 'antd';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import React from "react";

const Profile = () => {
  return (
    <>
    <Row justify="center">
      <Col span={20}>
        <Image
          width={1000}
          src="http://localhost:3000/HR_employee.png"
        />
        
      </Col>
    </Row>
    <Layout>
      <Header>Hte</Header>
      <Content>conter</Content>
      <Footer>footer</Footer>
    </Layout>
    <Row justify="center">
      <Col span={20}>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 1000 }}>
        <Image
          width={50}
          src="http://localhost:3000/formal.jpg"
        />
      <p>Card content</p>
      <p>Card content</p>
        </Card>
      <Content><h1>Mianrkhan</h1>this is content</Content>
        <Image
          width={50}
          src="http://localhost:3000/formal.jpg"
        />

      </Col>
    

    </Row>
    
    </>
  );
};

export default Profile;
