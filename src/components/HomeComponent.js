import React, {Component} from 'react';
import homeimage from '../images/job-banner.jpg';

class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid no-padding">
                    <img id="" src={homeimage} alt="job search" width="100%" />
                    <div className="top-right image-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae diam non sapien commodo finibus. Suspendisse ac ornare ligula, sit amet euismod augue. Donec euismod elit ut bibendum pretium. Pellentesque luctus odio nec enim iaculis laoreet. Curabitur dictum dolor sit amet accumsan tincidunt. Etiam in nisl enim. Nam tristique maximus augue et consequat. Vestibulum ac urna libero. Vestibulum dignissim eget enim at gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;