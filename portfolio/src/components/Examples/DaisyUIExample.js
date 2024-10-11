// Dependencies
import React from 'react';

const DaisyUIExample = () => {
    return (
        <div className="container mx-auto p-4">
            <nav className="navbar mb-4 bg-base-100 shadow-lg">
                <div className="flex-1">
                    <button className="btn btn-ghost normal-case text-xl">DaisyUI</button>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </button>
                </div>
            </nav>

            <h1 className="text-3xl font-bold text-center mb-4">Daisy UI Example</h1>
            <button className="btn btn-primary mb-4">Daisy UI Button</button>

            <div className="card w-96 bg-base-100 shadow-xl mb-4">
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>Card content goes here.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary">Action</button>
                    </div>
                </div>
            </div>

            <div className="form-control mb-4">
                <label className="label">
                    <span className="label-text">Input Label</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered" />
            </div>

            <div className="alert alert-info mb-4">
                <div>
                    <span>Info alert message.</span>
                </div>
            </div>

            <div className="form-control mb-4">
                <label className="label cursor-pointer">
                    <span className="label-text">Checkbox</span>
                    <input type="checkbox" className="checkbox" />
                </label>
            </div>

            <div className="form-control mb-4">
                <label className="label">
                    <span className="label-text">Select</span>
                </label>
                <select className="select select-bordered">
                    <option disabled selected>Pick one</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>

            <footer className="footer p-4 bg-base-100 text-base-content footer-center">
                <div>
                    <p>© 2023 DaisyUI Example. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default DaisyUIExample