// Dependencies
import React from 'react';

const BootstrapExample = () => {
    return (
        <div className="container">
            <h1 className="text-primary">Bootstrap Example</h1>
            <button className="btn btn-primary">Bootstrap Button</button>

            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card Title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                            <button className="btn btn-primary" onClick={() => alert('Go somewhere')}>Go somewhere</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><button className="page-link" onClick={() => alert('Previous')}>Previous</button></li>
                            <li className="page-item"><button className="page-link" onClick={() => alert('1')}>1</button></li>
                            <li className="page-item"><button className="page-link" onClick={() => alert('2')}>2</button></li>
                            <li className="page-item"><button className="page-link" onClick={() => alert('3')}>3</button></li>
                            <li className="page-item"><button className="page-link" onClick={() => alert('Next')}>Next</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default BootstrapExample;