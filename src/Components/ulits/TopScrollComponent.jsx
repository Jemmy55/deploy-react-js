import { ChevronUp } from "react-bootstrap-icons";
import PropTypes from 'prop-types';
TopScrollComponent.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
}
TopScrollComponent.defaultProps = {
    x:0,
    y:0,
}

function TopScrollComponent({x,y}) {
    return (
        <div className="top-scroll" onClick={() => window.scrollTo(x,y)} style={{
            position: "fixed",
            right: "2%",
            bottom: "2%",
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: "2",
            }}>
            <ChevronUp style={{
                color: "#E30019",
                fontWeight: 700,
                fontSize: "30px",
            }} />
        </div>
    );
}

export default TopScrollComponent;