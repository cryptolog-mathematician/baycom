import { Card, CardColumns } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const Bycarddeck = () => {
    return (
        <div className="mt-4 pt-1">
            <h1 className="mt-4 w-75 pb-2" style={{borderBottom:'.3px solid black', margin: 'auto'}}>Unsere Dienstleistungen</h1>
            <CardColumns className="mt-4 pt-2 pl-4 pr-4">
                <Card text="white" className="card-text" style={{ background: 'rgba(0, 0, 0, .7)', fontFamily: 'Franklin Gothic Medium' }}>
                    <LinkContainer to="/webdesign">
                        <Card.Img variant="top" src="images/rd.jpeg" />
                    </LinkContainer>
                    <Card.Title className="mt-3">
                        Responsive Web Design
                </Card.Title>
                </Card>
                <Card text="white" className="card-text" style={{ background: 'rgba(0, 0, 0, .7)', fontFamily: 'Franklin Gothic Medium' }}>
                    <LinkContainer to="/datenbanken">
                        <Card.Img variant="top" src="images/db.png" />
                    </LinkContainer>
                    <Card.Title className="mt-3">Datenbank Lösungen</Card.Title>
                </Card>
                <Card text="white" className="card-text" style={{ background: 'rgba(0, 0, 0, .7)', fontFamily: 'Franklin Gothic Medium' }}>
                    <LinkContainer to="/hostingundwartungservices">
                        <Card.Img variant="top" src="images/tw.jpeg" />
                    </LinkContainer>
                    <Card.Title className="mt-3">Hosting- und Wartungservices</Card.Title>
                </Card>
            </CardColumns>
        </div>
    );
};

export default Bycarddeck;