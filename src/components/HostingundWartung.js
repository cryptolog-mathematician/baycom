import { Card } from "react-bootstrap";

const HostingundWartung = () => {
    return (
        <div className="row mt-4 d-flex justify-content-center pt-4 pb-4">
            <div className="col-8 col-md-6 pt-4 pb-4" style={{ letterSpacing: '2px', background: 'rgba(211, 211, 211, 0.4)' }}>
                <h1 className="pb-2" style={{ borderBottom: '.3px solid black' }}>Wartungservices</h1>
                <p className="pt-3 pb-4 text-left">
                    Wir begleiten Sie auch nach der Fertigstellung Ihres Webauftritts. 
                    Mit einem Wartungsvertrag profitieren Sie von attraktiven Konditionen 
                    und stellen die Aktualität Ihrer Website sicher.
                </p>

                <h1 className="pb-2" style={{ borderBottom: '.3px solid black' }}>Hostingservices</h1>
                <p className="pt-3 pb-4 text-left">
                    Ob Sie die Website Ihrer Firma oder Ihre private Webpräsenz hosten möchten. 
                    Wir bieten Ihnen auf Ihre Bedürfnisse abgestimmte Hosting Lösung auf unseren 
                    schweizer Servern. <br/><br/>
                    
                    Webhosting
                    <ul>
                        <li>Serverstandort CH</li>
                        <li>Malware-Scan</li>
                        <li>Managed backup/Restore</li>
                        <li>Multi-Domain fähig</li>
                        <li>FreeSSL mit Let's Encrypt</li>
                        <li>Preisgekröntes Admin-Tool Plesk</li>
                        <li>CMS-Ready</li>
                        <li>99.9 % Netzwerkverfügbarkeit</li>
                    </ul>


                    E-Mail
                    <ul>
                        <li>Unbegrenzte E-Mail Adressen</li>
                        <li>Unbegrenzt E-Mail-Aliase/Weiterleitungen</li>
                        <li>Automatische E-Mail-Beantwortunge</li>
                        <li>Webmail-Zugang via Browser</li>
                        <li>Ausgezeichneter Spam-Schutz</li>
                        <li>Sicherer E-Mail-Verkehr</li>
                    </ul>

                    Datenbanken
                    <ul>
                        <li>Unbegrenzte mySQL Datenbanken</li>
                    </ul>

                    Nehmen Sie mit uns Kontakt auf, wir beraten Sie gerne...
                </p>
            </div>
        </div>
    );
};

export default HostingundWartung;