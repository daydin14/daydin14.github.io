// Dependencies
import React from 'react';

// Dependencies
import "purecss/build/pure-min.css";

const PureCSSExample = () => {
    return (
        <div>
            <div className="pure-menu pure-menu-horizontal">
                <button className="pure-menu-heading pure-menu-link" onClick={() => { }}>My Site</button>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><button className="pure-menu-link" onClick={() => { }}>Home</button></li>
                    <li className="pure-menu-item"><button className="pure-menu-link" onClick={() => { }}>About</button></li>
                    <li className="pure-menu-item"><button className="pure-menu-link" onClick={() => { }}>Contact</button></li>
                </ul>
            </div>

            <div className="pure-g">
                <div className="pure-u-1">
                    <h1>Pure CSS Example</h1>
                </div>
                <div className="pure-u-1 pure-u-md-1-2">
                    <form className="pure-form pure-form-stacked">
                        <fieldset>
                            <legend>Contact Form</legend>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" placeholder="Your Name" />
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="Your Email" />
                            <button type="submit" className="pure-button pure-button-primary">Submit</button>
                        </fieldset>
                    </form>
                </div>
                <div className="pure-u-1 pure-u-md-1-2">
                    <table className="pure-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Apples</td>
                                <td>10</td>
                            </tr>
                            <tr className="pure-table-odd">
                                <td>2</td>
                                <td>Oranges</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Bananas</td>
                                <td>7</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="pure-g">
                <div className="pure-u-1 pure-u-md-1-3">
                    <div className="l-box">
                        <h3>Column 1</h3>
                        <p>This is some text in column 1.</p>
                    </div>
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                    <div className="l-box">
                        <h3>Column 2</h3>
                        <p>This is some text in column 2.</p>
                    </div>
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                    <div className="l-box">
                        <h3>Column 3</h3>
                        <p>This is some text in column 3.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PureCSSExample