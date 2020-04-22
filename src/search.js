import React from 'react';
import { Form } from 'react-bootstrap';

function Search({ searchChange }) {
    return (
        <div>
            <Form className="mb-3 mr-3">
                <input type="search" placeholder="Search" className="mr-sm-2" onChange={searchChange} />
            </Form>
        </div>
    );
}

export default Search;