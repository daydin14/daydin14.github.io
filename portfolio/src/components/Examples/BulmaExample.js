// Dependencies
import React from 'react';

// Styles
import "bulma/css/bulma.min.css";

const BulmaExample = () => {
    return (
        <div className="container">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        Bulma
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/home">
                            Home
                        </a>
                        <a className="navbar-item" href="/documentation">
                            Documentation
                        </a>
                    </div>
                </div>
            </nav>

            <div className="notification is-info">
                This is an info notification using Bulma.
            </div>

            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Primary hero
                    </p>
                    <p className="subtitle">
                        Primary subtitle
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="columns">
                    <div className="column is-half">
                        <div className="box">
                            <p className="title">Box 1</p>
                            <p className="subtitle">This is a box</p>
                        </div>
                    </div>
                    <div className="column is-half">
                        <div className="box">
                            <p className="title">Box 2</p>
                            <p className="subtitle">This is another box</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <button className="button is-primary">Primary Button</button>
                <button className="button is-link">Link Button</button>
            </section>

            <section className="section">
                <div className="columns">
                    <div className="column is-half">
                        <div className="box">
                            <p>This is a box inside a column.</p>
                        </div>
                    </div>
                    <div className="column is-half">
                        <div className="box">
                            <p>This is another box inside a column.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Enter your name" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Enter your message"></textarea>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            Card Header
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            This is a card content.
                        </div>
                    </div>
                    <footer className="card-footer">
                        <button className="card-footer-item button is-link">Save</button>
                        <button className="card-footer-item button is-link">Edit</button>
                        <button className="card-footer-item button is-link">Delete</button>
                    </footer>
                </div>
            </section>

            <section className="section">
                <article className="message is-warning">
                    <div className="message-header">
                        <p>Warning</p>
                        <button className="delete" aria-label="delete"></button>
                    </div>
                    <div className="message-body">
                        This is a warning message.
                    </div>
                </article>
            </section>

            <section className="section">
                <progress className="progress is-primary" value="50" max="100">50%</progress>
            </section>
        </div>
    );
};

export default BulmaExample;