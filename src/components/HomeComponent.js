import React, {Component} from 'react';
import homeimage from '../images/job-search.jpg';

class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <img src={homeimage} alt="job search image" width="100%"/>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae diam non sapien commodo finibus. Suspendisse ac ornare ligula, sit amet euismod augue. Donec euismod elit ut bibendum pretium. Pellentesque luctus odio nec enim iaculis laoreet. Curabitur dictum dolor sit amet accumsan tincidunt. Etiam in nisl enim. Nam tristique maximus augue et consequat. Vestibulum ac urna libero. Vestibulum dignissim eget enim at gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </React.Fragment>
        );
    }
}

export default Home;