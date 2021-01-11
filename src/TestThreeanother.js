import React from "react";
import classes from './TestThree.module.css';

const Profile = () => {
  return (
    <>
    <div className={'container'}>
		<div className={'jumbotron'}>
			<div className={'row'+ ' ' + classes.conpadd}>
				<div className={[classes.cusborder, 'col-md-6'].join(' ')}>
					<div className={'row'}>
						<div className={'col-md-4'}>
							<img className={'img-thumbnail'} src="http://localhost:3000/formal.jpg"/>
						</div>
						<div className={'col-md-8'}>
							<h2>Moaref Billah</h2>

							<p>UX/UI Desing Team</p>
							<p>Web Application Developer</p>
							<h5>Employee Id: FT -0001</h5>
							<p>Date of Join : 20 January 2021</p>
							<button className={'btn', 'btn-primary', 'mt-5'}>Send Massage</button>
						</div>
					</div>
				</div>
				<div className={'col-md-6', 'd-flex'}>
					<table className={'table'}>
					  <tbody>
					  	<tr className={'table-light'}>
					  		<td>Phone:</td>
					  		<td>01856230550</td>
					  	</tr>
					  	<tr className={'table-light'}>
					  		<td>Email:</td>
					  		<td>minarkhan1995@gmail.com</td>
					  	</tr>
					  	<tr className={'table-light'}>
					  		<td>Birthday:</td>
					  		<td>24th July</td>
					  	</tr>
					  	<tr className={'table-light'}>
					  		<td>Adress:</td>
					  		<td>181 Bayonne ave, Manchester Tomma. Dhaka 1212</td>
					  	</tr>
					  	<tr className={'table-light'}>
					  		<td>Gender:</td>
					  		<td>Male</td>
					  	</tr>
					    <tr className={'table-light'}>
					      <td>Report to :</td>
					      <td>
                  <img style={{width: '30px'}} className={'img-thumbnail'} src="http://localhost:3000/formal.jpg"/><a href="">Jeffery Lalor</a> 
                </td>
					    </tr>
					    <tr>
					    </tr>
					  </tbody>
					</table>
					<span><i className={'fas', 'fa-pencil-alt'}></i></span>
				</div>
			</div>
			<div className={'row'}>
				
					<div className={'col-md-12' , 'bg-light'}>
						<ul className={'nav'}>
						  <li className={'nav-item', 'active'}>
						    <a className={'nav-link', 'active'} href="#!">Active</a>
						  </li>
						  <li className={'nav-item'}>
						    <a className={'nav-link'} href="#!">Link</a>
						  </li>
						  <li className={'nav-item'}>
						    <a className={'nav-link', 'disabled'} href="#!">Disabled</a>
						  </li>
						</ul>
					</div>
				
			</div>
		</div>
	</div>
    {/* <Row justify="center">
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
        <Content style={{ width: 100, float:'left' }} ><h1>Mianrkhan</h1>this is content</Content>
        </Card>
      </Col>
    </Row> */}
    
    </>
  );
};

export default Profile;
