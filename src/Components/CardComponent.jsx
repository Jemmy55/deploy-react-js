import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from "react";
import { Card, Form, Placeholder } from "react-bootstrap";
import { Cpu, Display, GpuCard, Hdd, Memory } from "react-bootstrap-icons";
import { useNavigate, useParams } from "react-router-dom";
import "../SCSS/CardComponenent.SCSS";
import NumberVND from "./Converter/NumberVND";
import { Context } from "./ulits/AppContext";
CardComponent.propTypes = {
    w: PropTypes.string,
    item: PropTypes.object,
    h: PropTypes.string,
}
CardComponent.defaultProps = {
    h: "500px"
}
function CardComponent({ w, item, h }) {
    const { nameGender, product } = useParams();
    const { setDataProduct , setKeyword} = useContext(Context)
    const navigate = useNavigate();
    const [holder, setHolder] = useState(true);
    useEffect(() => {
        const time = setTimeout(() => {
            setHolder(false)
        }, 400);
        return () => {
            clearTimeout(time);
        }
    }, [])
    // console.log(item);
    
    return (
        <>
            <Card className='card' style={{ width: (w), height: (h) }} onClick={() => {
                navigate(`/deloy-react-js/product/${item.Gender[0]}/${item.Gender[1]}/${item.name}`);
                window.scroll(0, 0)
                setDataProduct(item);
                setKeyword("")
            }}>
                {
                    holder ?
                        <div className="imgload">
                            <Placeholder as={Card} animation="wave">
                                <Placeholder lg={12} style={{ height: "10rem" }} />
                            </Placeholder>
                        </div> :
                        <Card.Img variant="top" src={item.imgViewer ? item.imgViewer : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} onError={(e) => e.target.src = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} height={242.24} />
                }
                {
                    holder ?
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder> :
                        <Card.Title style={{
                            fontSize: "15.5px",
                            fontWeight: "600"
                        }} >{item.name ? item.name : "Sản phẩm lỗi"}</Card.Title>
                }
                <Card.Body>
                    {
                        holder ?
                            <Placeholder as={Card.Text} animation="glow" >
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                            </Placeholder> :
                            <Form>
                                {item.config &&
                                    <div className="config" style={{ backgroundColor: "#ECECEC", borderRadius: "15px", padding: "7.5px 10px", position: "relative", height: "100%" }}>
                                        <span style={{ marginRight: "2.5px", fontSize: "12.5px", display: "block" }} ><Cpu style={{ marginBottom: "3.5px", marginRight: "6.5px" }} />{item.config.cpu}</span>
                                        <span style={{ marginRight: "2.5px", fontSize: "12.5px", display: "block" }} ><GpuCard style={{ marginBottom: "3.5px", marginRight: "6.5px" }} />{item.config.vga}</span>
                                        <span style={{ marginRight: "2.5px", fontSize: "12.5px", display: "block" }} ><Memory style={{ marginBottom: "3.5px", marginRight: "6.5px" }} />{item.config.ram}</span>
                                        <span style={{ marginRight: "2.5px", fontSize: "12.5px", display: "block" }} ><Hdd style={{ marginBottom: "3.5px", marginRight: "6.5px" }} />{item.config.ssd}</span>
                                        <span style={{ marginRight: "2.5px", fontSize: "12.5px", display: "block" }} ><Display style={{ marginBottom: "3.5px", marginRight: "6.5px" }} />{item.config.display}</span>
                                    </div>
                                }

                                <div className="price" style={{
                                    color: '#E30019',
                                    fontSize: '20px',
                                    fontWeight: '700'
                                }}>
                                    <NumberVND number={parseFloat(item.pricetoPay)} />
                                </div>
                                {
                                    item.priceOrinal && (
                                        <div className="sale-price"
                                            style={{
                                                color: '#6D6E72',
                                                fontSize: '15px',
                                                fontWeight: '500'
                                            }}
                                        >
                                            <del><NumberVND number={parseFloat(item.priceOrinal)} /></del>
                                        </div>
                                    )
                                }
                                {
                                    item.sale > 0 && item.sale != 0 ?
                                        <div className="sale"
                                            style={{
                                                position: "absolute",
                                                top: "10px",
                                                right: "10px",
                                                zIndex: "0",
                                                backgroundColor: "#fff",
                                                border: "2px solid #FF8A00",
                                                borderRadius: "5px",
                                                padding: "5px",
                                            }}
                                        >
                                            <p style={{
                                                margin: "0",
                                                color: "#FF8A00",
                                                fontSize: "14px",
                                                fontWeight: "700"
                                            }}>-{item.sale}%</p>
                                        </div> : ""
                                }
                            </Form>
                    }

                </Card.Body>
            </Card>
        </>
    );
}

export default CardComponent;