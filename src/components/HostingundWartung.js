import { Card } from "react-bootstrap";

const HostingundWartung = () => {
    return (
        <div className="row mt-4 d-flex justify-content-center pt-4 pb-4">
            <div className="col-8 col-md-6 pt-4 pb-4" style={{ letterSpacing: '2px', background: 'rgba(211, 211, 211, 0.4)' }}>
                <h1 className="pb-2" style={{ borderBottom: '.3px solid black' }}>Hosting- und Wartungservices</h1>
                <p className="pt-3 pb-4 text-left">
                    Wir entwickeln individuelle Datenbank Lösungen für Ihr Business.
                    Die Möglichkeiten sind nahezu unbegrenzt, von einer einfachen Adressverwaltung
                    bis zur kompletten ERP Lösungen. Unsere Lösungen können als Einzelplatz Lösungen
                    auf einzelnen Rechnern installiert oder für Mehrbenutzer Umgebungen auf lokalen Servern
                    oder in der Cloud gehostet werden.
                    Mögliche Einsatzgebiete:
                    
                    <ul>
                        <li>Adressverwaltung</li>
                        <li>Projektmanagement</li>
                        <li>Verkauf mit Lagerverwaltung</li>
                        <li>Zeiterfassung</li>
                        <li>ERP Lösungen</li>
                        <li>Dokumenten Verwaltung</li>
                        <li>Produktkataloge</li>
                        <li>Anbindung an Shopsysteme</li>
                        <li>und weitere</li>
                    </ul>

                    Nehmen Sie mit uns Kontakt auf, wir beraten Sie gerne...
                </p>
            </div>
        </div>
    );
};

export default HostingundWartung;