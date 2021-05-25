const Kontakt = () => {
    return (
        <div className="row mt-4 d-flex justify-content-center pt-4 pb-4">
            <div className="col-8 col-md-6 pb-4 pt-4" style={{ letterSpacing: '2px', background: 'rgba(211, 211, 211, 0.4)' }}>
                <h1 className="pb-2" style={{ borderBottom: '.3px solid black' }}>Kontakt</h1>

                <div className="row d-flex justify-content-center pb-4">
                    <div className="col-10" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                        <h2>BayCom IT-Services</h2>
                    </div>
                </div>

                <div className="row d-flex justify-content-center pb-4">
                    <div className="col-10" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                        <h2>Ruopigenhöhe 7a</h2>
                        <h2>6015 Luzern </h2>
                    </div>
                </div>

                <div className="row d-flex justify-content-center pb-4">
                    <div className="col-10" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                        <h2>+41 79 330 83 54</h2>
                    </div>
                </div>

                <div className="row d-flex justify-content-center pb-4">
                    <div className="col-10" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                        <h2>info@baycom.ch</h2>
                    </div>
                </div>

                Nehmen Sie mit uns Kontakt auf, wir beraten Sie gerne...
            </div>
        </div>
    );
};

export default Kontakt;