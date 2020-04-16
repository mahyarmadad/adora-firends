import React from 'react';
import { Form } from 'react-bootstrap';

function search({ searchChange }) {
    return (
        <div>
            <Form className="mb-3 mr-3">
                <input type="search" placeholder="Search" className="mr-sm-2" onChange={searchChange} />
            </Form>
        </div>
    );
}

export default search;