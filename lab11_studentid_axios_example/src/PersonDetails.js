import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

export default function PersonDetails(props) {
	return (
		// props.person.name
		<div>
			<Card>
				<Card.Header as="h5">
					{props.person.name.first} {props.person.name.last} = 
					 {props.person.login.uuid}
				</Card.Header>
				<Card.Body>
					<Card.Text>
						<Col xs={6} md={4}>
							<Image src={props.person.picture.large} roundedCircle />
						</Col>
						Username: {props.person.login.username}
						<br />
						Gender: {props.person.gender}
						<br />
						Time Zone Description: {props.person.location.timezone.description}
						<br />
						Address: {props.person.location.street.number}{" "}
						{props.person.location.street.name},{props.person.location.city},{" "}
						{props.person.location.country} - {props.person.location.postcode}
						<br />
						Email: {props.person.email}
						<br />
						Birth Date and Age: {props.person.dob.date} ({props.person.dob.age})
						<br />
						Register Date: {props.person.registered.date}
						<br />
						Phone#: {props.person.phone}
						<br />
						Cell#: {props.person.cell}
						<br />
					</Card.Text>
					<Button variant="primary">Details</Button>
				</Card.Body>
			</Card>
		</div>
	);
}
