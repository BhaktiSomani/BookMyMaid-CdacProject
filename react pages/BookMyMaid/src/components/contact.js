import React, { Component } from 'react';
import contact from './Images/contact.jpg';

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(${contact})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <div >
                    <h1 style={{ text: "white" }}>CONTACT </h1><br />
                    <br />

                    <center>
                        <table border='4' className="table table-bordered table-solid" >

                            <tr >
                                &nbsp;<th>Name </th>  &nbsp;
                                <th>Email ID</th>&nbsp;
                                <th>Contact Number</th>&nbsp;&nbsp;


                            </tr>
                            <tr>
                                &nbsp; <td>Bhakti Somani</td>&nbsp;
                                <td>bhaktissomani@gmail.com</td>&nbsp;
                                <td>9423351131</td>&nbsp;&nbsp;
                            </tr>



                            <tr>
                                &nbsp; <td>Divyani Katekhaye</td>&nbsp;
                                <td>divyanikatekaye@gmail.com</td>&nbsp;
                                <td>9645861233</td>&nbsp;&nbsp;
                            </tr>

                        </table>
                    </center>
                </div>
            </div>


        )
    }
}

export default Contact;