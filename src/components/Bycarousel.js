import { Carousel } from "react-bootstrap";

const Bycarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/rd.jpeg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/tw.jpeg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/db.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Bycarousel;