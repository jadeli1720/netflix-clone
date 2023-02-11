import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as ROUTES from "../../../constants/routes";
import { BsChevronRight } from "react-icons/bs";
import './optForm.scss';

function OptForm() {
	return (
		<div className="optFormSection">
			<p>
				Ready to watch? Enter your email to create or restart your
				membership.
			</p>
      <Form className="m-auto">
        <Row className="m-auto">
          <Col md={8}   className="p-0">
            <FloatingLabel className="p-0" controlId="floatingInput" label="Email Address">
                <Form.Control size="lg" type="email" placeholder="name@example.com"></Form.Control>
              </FloatingLabel>
          </Col>
          <Col md={4}  className="p-0">
            <Button href={ROUTES.SIGN_UP} size="lg" className="w-100 h-100  ">Get Started <BsChevronRight /></Button>
          </Col>
        </Row>
      </Form>
		</div>
	);
}

export default OptForm;
