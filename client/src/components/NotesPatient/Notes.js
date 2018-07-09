import React from "react";
import { Col, Input, InputGroup, InputGroupAddon, Button } from "reactstrap";
import "./Notes.css";

const Notes = ({children}) => {
    return (
        <Col md="7" className="InfoBoxRight list-overflow-container" id="noteList">
            <h2>Notes from your Dentist:</h2>
            <ul className="list-group">
                {children}
            </ul>
        </Col>      
    )
}

export default Notes;