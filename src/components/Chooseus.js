const Chooseus = () => {
    return (
        <div className="mt-4 pt-1">
            <h1 className="mt-4 w-75 pb-2" style={{borderBottom:'.3px solid black', margin: 'auto'}}>Warum wir</h1>
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-10 col-md-5 m-1 pt-4 pb-4" style={{ background: 'rgba(255,165,0, 0.6)' }}>
                    <h3>flexibel & agil</h3>
                    <p>
                        Wir sind flexibel und arbeiten mit agilen Projektmanagement Methoden
                    </p>
                </div>
                <div className="col-10 col-md-5 m-1 pt-4 pb-4" style={{ background: 'rgba(0,206,209, 0.6)' }}>
                    <h3>pünktlich</h3>
                    <p>
                        Wir halten uns an die Deadlines bei unseren Projekten
                    </p>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-sm-3">
                <div className="col-10 col-md-5 m-1 pt-4 pb-4" style={{ background: 'rgba(0,206,209, 0.6)' }}>
                    <h3>hochwertig</h3>
                    <p>
                        Wir machen keine Kompromisse bei der Qualität
                    </p>
                </div>
                <div className="col-10 col-md-5 m-1 pt-1" style={{ background: 'rgba(255,165,0, 0.6)' }}>
                    <h3>kompetent</h3>
                    <p>
                        Wir arbeiten mit einer breiten Spektrum von Technologien, damit können 
                        wir Ihnen optimale Lösungen für Ihre Bedürfnisse anbieten
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Chooseus;