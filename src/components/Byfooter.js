const Byfooter = () => {
    return (
        <div className="mt-4 pt-4 pb-4 bg-dark text-white" style={{minHeight: '200px', position:'relative', bottom:'0', width: '100%'}}>
            <div className="row mt-3">
                <div className="col-12">
                    <h3>BayCom IT-Services</h3>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <h4>Ruopigenhöhe 7a</h4>
                    <h4>6015 Luzern</h4>
                </div>
            </div>
            <div className="row mt-3  d-flex justify-content-center">
                <div className="col-12 col-sm-5">
                    <h4>+41 79 330 83 54</h4>
                </div>
                <div className="col-12 col-sm-5">
                    <h4>info@baycom.ch</h4>
                </div>
            </div>
        </div>
    );
};

export default Byfooter;