import React from 'react';
import Cards from './card';
import { Row } from "react-bootstrap"
function Cardlist({ users }) {
    return (
        <div className="mt-5">
            <Row className="justify-content-md-center">
                {users.map((user, i) => {
                    return <Cards key={users[i].id} name={users[i].name} email={users[i].email} />
                })}
            </Row>
        </div>
    );
}

export default Cardlist;
