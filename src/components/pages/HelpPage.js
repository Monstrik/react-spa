import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'



class HelpPage extends Component {


    render() {
        const numbers = [10, 20, 30, 40, 50];
        const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
        const todoItems = numbers.map((number, index) =>
            // Only do this if items have no stable IDs
            <li key={index}>{number}</li>
        );


        return (
            <div>
                <h2>Help</h2>
                <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
                <hr/>

                <ul>{listItems}</ul>
                <ul>{todoItems}</ul>
                <ul>
                    {numbers.map((number) =>
                        <li key={number.toString()}>{number}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default HelpPage;