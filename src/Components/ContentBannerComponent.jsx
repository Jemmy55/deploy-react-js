import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import '../SCSS/ContentBannerComponent.scss';
import BannerComponent from "./BannerComponent";
import { Context } from "./ulits/AppContext";

function ContentBannerComponent({ offbanner }) {
    const navigate = useNavigate();

    const { modalContext ,banner } = useContext(Context)
    const [genderdata, setGenderData] = useState([]);
    const [genderId, setGenderId] = useState('Laptop');

    const fetchGender = async () => {
        const result = await axios.get(`https://6561f5c2dcd355c0832466be.mockapi.io/api/Gender/${genderId}`)
        const data = (result.data)
        // console.log(data.Gender)
        setGenderData(data.Gender)
    }
    useEffect(() => {
        const time = setTimeout(() => {
            fetchGender()
        }, 100);
        return () => {
            clearTimeout(time)
        }
    }, [genderId])

    const handleGet = (e) => {
        // console.log(e.target.getAttribute("name"));
        setGenderId(e.target.getAttribute("name"));
    }
    const handleClick = (e) => {
        navigate(`/deloy-react-js/product/${e.target.getAttribute("name")}`)
        if (modalContext) {
            location.reload()
        }
    }
    return (
        <Container className="mt-3">
            <div className="context-menu">
                <Row>
                    <Col lg={3}>
                        <div className="sub-menu">
                            <ul>
                                <li name="Laptop" onMouseOver={(e) => handleGet(e)} onClick={(e) => handleClick(e)} >Laptop <ChevronRight className="icon-arow-menu" /></li>
                                <li name="LaptopGaming" onMouseOver={(e) => handleGet(e)} onClick={(e) => handleClick(e)} >Laptop Gaming <ChevronRight className="icon-arow-menu" /> </li>
                                <li name="PCGaming" onMouseOver={(e) => handleGet(e)} onClick={(e) => handleClick(e)} >PC Gaming <ChevronRight className="icon-arow-menu" /> </li>
                                <li name="PCOffice" onMouseOver={(e) => handleGet(e)} onClick={(e) => handleClick(e)} >PC Office <ChevronRight className="icon-arow-menu" /> </li>
                            </ul>
                            <div className="data-menu">
                                <div className="data-box"
                                    style={{
                                        display: "flex"
                                    }}
                                >
                                    {
                                        genderdata &&
                                        genderdata.map((value, key) => (
                                            <div className="child-menu" key={key}>
                                                <h4>{value.Label}</h4>
                                                <ul>
                                                    {
                                                        (value.Tag).map((item, key) => (
                                                            <li key={key}> <Link reloadDocument={true} to={`/product/${genderId}/${item}`} >{item}</Link> </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        ))
                                    }
                                    {/* <h4>{setGenderData.Label}</h4>
                                             <ul>
                                                 {
                                                     genderdata.map((value, key) => (
                                                     <li key={key}><Link reloadDocument={true} to={`/product/${setGenderData.nameGender}/${value.name}`} >{value.name}</Link></li>
                                                    ))
                                                }
                                           </ul> */}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        {
                            !offbanner ?
                                <BannerComponent api={banner} className="Carousel-Menu" classIMG="banner-menu" /> : !offbanner
                        }
                    </Col>
                </Row>
            </div>

        </Container>
    );
}

export default ContentBannerComponent;