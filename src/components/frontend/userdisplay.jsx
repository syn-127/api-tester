import React from "react";
import Card from '@mui/material/Card';
import API from '../apiPost.js'

const Display = () => {
    return (
            <Card variant="outlined" id="Card">
                <div id="title">
                    <h2 id="title">Post API JSON Tester</h2>
                </div>
                <div>
                <API />
                </div>
        </Card>
    );
}

export default Display;