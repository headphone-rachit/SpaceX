import React, { Component } from 'react';
import axios from 'axios';
import { CardBody, Card, CardTitle, CardText, Row, Col } from 'reactstrap';

class SecondPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            launch: null,
            loading: true
        }
    }


    componentDidMount() {
        const url = 'https://api.spacexdata.com/v4/launches/' + this.props.launchId;
        axios.get(url)
            .then(response => {
                this.setState({ launch: response.data, loading: false })
            })

            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                }
                else if (error.request) {
                    console.log(error.request);
                }
                else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });

    }

    render() {
        return (
            <div>
                {this.state.loading ? <div>loading.....</div> : <DisplayLaunch launch={this.state.launch}></DisplayLaunch>}
            </div>
        );
    }

}

function DisplayLaunch({ launch }) {
    return (
        <Row className="pt-3" >
            <Col key={launch.id} md={{ size: 4, offset: 4 }} >
                <Card style={{backgroundColor:"#89f5c8", color:"#000000"}} >
                    <h2 className="text-center mt-3">Launch</h2>
                    <CardBody className="m-3 mr-5 ">
                        <CardTitle className=" mb-4 roboto-font"><h3>Name : {launch.name}</h3></CardTitle>
                        <CardText className=" mb-5"><h5 className="roboto-font">Details</h5>
                            <ul className="font-link" >
                                <li>
                                <strong>Info :</strong> {launch.details==null?<span>No Details</span>:<span>{launch.details}</span>}
                                </li>

                                <li>
                                 <strong>Flight Number :</strong>{launch.flight_number}
                                </li>
                                
                            </ul>
                        </CardText>
                        <CardText><strong >Date : </strong> {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(launch.date_utc)))}</CardText>
                        <CardText><strong>Reused :</strong>{launch.cores[0].reused?<span>True</span>:<span>False</span>}</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default SecondPage;