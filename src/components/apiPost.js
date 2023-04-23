import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

 class API extends React.Component {
    state = {
        endpoint: "",
        headers: "",
        payload: "",
        response: "",
        request: "",
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

    handleChange4 = event => {
        this.setState({ request: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const endpoint = this.state.endpoint;
        const headers = this.state.headers;
        const payload = this.state.payload;
        const request = this.state.request;

        if (request === "urlencoded") {
            axios({
            method: 'post', //you can set what request you want to be
            url: endpoint,
            data: payload,
            headers: headers})
            .then(res => {
                console.log(res);
                console.log(res.data);
                let apiResponse = res.data
                apiResponse = JSON.stringify(apiResponse)
                this.setState({ response: apiResponse });
                return apiResponse
            })
        } else if (request === "JSON") {
            axios({
            method: 'post', //you can set what request you want to be
            url: endpoint,
            data: payload,
            headers: {"Content-Type" : "application/json",headers}})
            .then(res => {
                console.log(res);
                console.log(res.data);
                let apiResponse = res.data
                apiResponse = JSON.stringify(apiResponse)
                this.setState({ response: apiResponse });
                return apiResponse
            })
        } else {
            this.setState({ response: "Please select a request type" });
        }
    }

    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormControl fullWidth>
                        <InputLabel id="request">Method</InputLabel>
                        <Select
                            labelId="request"
                            id="request"
                            value={this.request}
                            label="JSON"
                            onChange={this.handleChange4}
                        >
                            <MenuItem value={"JSON"}>JSON</MenuItem>
                            <MenuItem value={"urlencoded"}>Form-Data</MenuItem>
                            </Select>
                    </FormControl>
                    
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
                        value={this.state.response}
            />
            </div>
        )
    }
}

export default API;
