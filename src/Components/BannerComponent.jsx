import PropTypes from 'prop-types';
import { Carousel } from "react-bootstrap";
BannerComponent.propTypes = {
    api: PropTypes.array,
    className: PropTypes.string,
    indicators: PropTypes.bool,
    controls: PropTypes.bool,
    classIMG: PropTypes.string,
}
BannerComponent.defaultProps = {
    indicators: false,
    controls: false,
}

function BannerComponent({ api, className, indicators, controls, classIMG }) {
    return (
            <div>
                <Carousel className={className} indicators={indicators} controls={controls}>
                    {
                        api && api.map((value, key) => (
                            <Carousel.Item key={key}>
                                <img src={value.img} className={classIMG} alt="" />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
    );
}

export default BannerComponent;