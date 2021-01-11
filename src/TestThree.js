import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import classes from './TestThree.module.css';

const Profile = () => {
  return (
    <>
	<div className={'jumbotron'}>
    	<div className={'container'}>
			<div className={['row', classes.conpadd].join(' ')}>
				<div className={['col-md-6'].join(' ')}>
					<div className={'row'}>
						<div className={'col-md-4'}>
							<img className={['img-thumbnail', classes.imgsize].join(' ')} src="http://localhost:3000/formal.jpg"/>
						</div>
						<div className={[classes.cusborder, 'col-md-8'].join(' ')}>
							<h2>Moaref Billah</h2>

							<p>UX/UI Desing Team</p>
							<p>Web Application Developer</p>
							<h5>Employee Id: FT -0001</h5>
							<p>Date of Join : 20 January 2021</p>
							<button className={['btn', 'mt-5', classes.btngrad].join(' ')}>Send Massage</button>
						</div>
					</div>
				</div>
				<div className={['col-md-6', 'd-flex'].join(' ')}>
					<table className={['table', 'bg-white'].join(' ')}>
					  <tbody>
					  	<tr className={classes.bordernone}>
					  		<td>Phone:</td>
					  		<td>01856230550</td>
					  	</tr>
					  	<tr className={classes.bordernone}>
					  		<td>Email:</td>
					  		<td>minarkhan1995@gmail.com</td>
					  	</tr>
					  	<tr className={classes.bordernone}>
					  		<td>Birthday:</td>
					  		<td>24th July</td>
					  	</tr>
					  	<tr className={classes.bordernone}>
					  		<td>Adress:</td>
					  		<td>181 Bayonne ave, Manchester Tomma. Dhaka 1212</td>
					  	</tr>
					  	<tr className={classes.bordernone}>
					  		<td>Gender:</td>
					  		<td>Male</td>
					  	</tr>

					    <tr className={classes.bordernone}>
					      <td>Report to :</td>
					      <td>
							  <img style={{width: '30px'}} className={['img-thumbnail', classes.imgsize].join(' ')} src="http://localhost:3000/formal.jpg"/>
							  <a href="">Jeffery Lalor</a>
							  </td>
					    </tr>
					    <tr>
					    </tr>
					  </tbody>
					</table>
					
					
					<span  className={['ml-auto'].join(' ')} ><FontAwesomeIcon icon={faPencilAlt} /></span>
				</div>
			</div>
			<div className={'row'}>
				
					<div className={[classes.navborder, 'col-md-12' , 'bg-light'].join(' ')}>
						<ul className={'nav'}>
						  <li className={['nav-item', 'active', classes.activenav].join(' ')}>
						    <a className={['nav-link', 'active'].join(' ')} href="#!">Active</a>
						  </li>
						  <li className={'nav-item'}>
						    <a className={'nav-link'} href="#!">Link</a>
						  </li>
						  <li className={'nav-item'}>
						    <a className={['nav-link', 'disabled'].join(' ')} href="#!">Disabled</a>
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
     */}
    
    </>
  );
};

export default Profile;
