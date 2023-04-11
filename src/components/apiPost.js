import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

 class API extends React.Component {
    state = {
        endpoint: "",
        headers: "",
        payload: "",
        response: "",
    }

    handleChange = event => {
        this.setState({ endpoint: event.target.value });
    }

    handleChange2 = event => {
        this.setState({ headers: event.target.value });
    }

    handleChange3 = event => {
        this.setState({ payload: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const endpoint = this.state.endpoint;
        const headers = this.state.headers;
        const payload = this.state.payload;

        axios.post(endpoint, { headers, payload })
            .then(res => {
                console.log(res);
                console.log(res.data);
                const apiResponse = res.data
                return apiResponse
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Endpoint:
                        <TextField id="Endpoint" label="Endpoint" varient="outlined" name="endpoint" onChange={this.handleChange} />
                    </label>
                    <label>
                        Headers:
                        <TextField id="Headers" label="Headers" varient="outlined" name="headers" onChange={this.handleChange2} />
                    </label>
                    <label>
                        Payload:
                        <TextField id="Payload" label="Payload" varient="outlined" name="payload" onChange={this.handleChange3} />
                    </label>
                    <Button variant="contained" id="submit" type="submit">Submit</Button>
                </form>
                <label htmlFor= "Response">Response:</label>
                    <TextareaAutosize
                        aria-label="Response"
                        placeholder="Empty"
                        style={{ width: 400, height: 50 }}
                        value={this.apiResponse}
            />
            </div>
        )
    }
}

export default API;

