import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CardBody, Card, CardTitle, CardText, Row, Col } from 'reactstrap'


class FetchLaunchPads extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            launchpads: null
        }
    }

    componentDidMount() {
        const url = 'https://api.spacexdata.com/v4/launchpads';
        axios.get(url)
            .then(response => {
                this.setState({ launchpads: response.data, loading: false })
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
                {this.state.loading ? <div>loading.....</div> : <LaunchPadsDisplay launchpads={this.state.launchpads}></LaunchPadsDisplay>}
            </div>
        );
    }
}


function LaunchPadsDisplay({ launchpads }) {


    return (
        <div className="container"><h1 className="text-center pb-5 pt-5">LaunchPads</h1>
            <Row>
                {launchpads.map((launchpad) => {
                    return (
                        <Col key={launchpad.id} md={3} className="col-12 col-md-4" >
                            <Card className="mb-4" style={{backgroundColor:"#ffe666"}}>
                                <CardBody>
                                    <CardTitle><h3 className="text-center mb-3">{launchpad.name}</h3></CardTitle>
                                    <CardText><h5>Details</h5>
                                        <ul>
                                            <li>
                                                <strong>Region</strong>: {launchpad.region}
                                            </li>
                                            <li>
                                                <strong>Timezone</strong>: {launchpad.timezone}
                                            </li>
                                            <li>
                                                <strong>Locality</strong>: {launchpad.locality}
                                            </li>
                                            <li>
                                                <strong>Latitude</strong>: {launchpad.latitude}
                                            </li>
                                            <li>
                                                <strong>Longitude</strong>: {launchpad.longitude}
                                            </li>
                                            <li>
                                                <strong>Launch_attempts</strong>: {launchpad.launch_attempts}
                                            </li>
                                            <li>
                                                <strong>Launch_successes</strong>: {launchpad.launch_successes}
                                            </li>
                                        </ul>
                                    </CardText>
                                    <CardText><strong>Status:</strong> {launchpad.status}</CardText>

                                    <CardText><strong>Launches</strong>
                                        <ul>
                                            {launchpad.launches.length == 0 ? <li>No Launches Available</li> : <span>{launchpad.launches.slice(0, 3).map((launch) => {

                                                return (
                                                    <li>
                                                        <Link to={`/launchpads/${launch}`}>
                                                            Click for more Details
                                                        </Link>
                                                    </li>
                                                )
                                                
                                            })}</span>}

                                        </ul>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );

}


export default FetchLaunchPads