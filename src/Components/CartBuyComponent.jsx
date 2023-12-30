import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CaretLeftFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { ToastContainer, cssTransition, toast } from "react-toastify";
import { Context } from "../Components/ulits/AppContext";
import '../SCSS/CartBuyComponent.SCSS';
import CartCardItemComponent from "./CartCardItemComponent";
import NumberVND from "./Converter/NumberVND";
import ShowInfoCustomer from "./ShowInfoCustomer";

function CardBuyComponent() {
    const { modalInfo, setInfo, productLocal, totalSum, customerLocal, setCustomerLocal, setHisCart  } = useContext(Context);
    const [pushAPI, setPushAPI] = useState([])
    const [error, setError] = useState("")
    const [update, setUpdate] = useState(false)
    console.log(customerLocal);
    const handleBuy = () => {
        if (customerLocal != "") {
            if(customerLocal.pay != "" && customerLocal.ship != ""){
                if (customerLocal.Fullname != undefined && customerLocal.Phone != undefined && customerLocal.Address != undefined &&customerLocal.Fullname != "" && customerLocal.Phone != "" && customerLocal.Address != "" ) {
                    customerLocal["total"] = totalSum
                    const CustomerBuy = { customerLocal, productLocal }
                    console.log(CustomerBuy);
                    setPushAPI(CustomerBuy)
                    setCustomerLocal(CustomerBuy)
                    setTimeout(() => {
                        setUpdate(true)
                    }, 200);
                } else {
                    setInfo(true)
                }
            } else {
                setError("Bạn chưa chọn hình thức thanh toán")
                setTimeout(() => {
                    setError("")
                }, 6000);
            }
        } else {
            setInfo(true)
        }
    }
    const postData = async () => {
        await axios.post("https://6561f5c2dcd355c0832466be.mockapi.io/api/CustomerUser", pushAPI)
    }
    useEffect(() => {
        if (update == true) {
            postData()
            setHisCart(true)
        }
        return () => {
            setUpdate(false)
        }
    }, [update])
    useEffect(() => {
        if (modalInfo == false) {
        }
    }, [modalInfo])
    const bounce = cssTransition({
        enter: "animate__animated animate__bounceIn",
        exit: "animate__animated animate__bounceOut"
    });
    function Del() {
        const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 1000));
        toast.promise(
            resolveAfter3Sec,
            {
                pending: 'Vui lòng đợi',
                success: 'Sản phẩm đã được xóa',
            },
            {
                theme: "colored",
                transition: bounce
            }
        )
    }
    const deleteShow = (e) => {
        if (e) {
            Del()
        }
    }
    const handleCheck = (e) => {
        const {name ,value} = e.target
        setCustomerLocal((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    return (
        <>
            {
                productLocal.length > 0 ? (
                    <div className="cart">
                        <ToastContainer style={{ top: "800px", width: "275px" }} className="toatstify" />
                        <div className="box-cart-buy"  >
                            <Link to='/product' style={{ textDecoration: 'none', justifyContent: 'center', alignItems: 'center' }} > <CaretLeftFill className="icon" /> Mua thêm sản phẩm khác</Link>
                            <div className="cart-main">
                                <div className="cart-product">
                                    {
                                        productLocal && productLocal.map((value, key) => (
                                            <CartCardItemComponent key={key} data={value} index={key} deleteShow={deleteShow} />
                                        ))
                                    }
                                </div>
                                <div className="section-total-price">
                                    <div className="shipping">
                                        <span className="title-ship">Phí vận chuyển:</span>
                                        <div className="radiocheck">
                                            <label htmlFor="">Miễn phí</label>
                                            <input type="radio" className="price-ship" name="ship" onChange={(e) => handleCheck(e)} value="Miễn phí" />
                                        </div>
                                    </div>
                                    <div className="shipping">
                                        <span className="title-ship">Hình thức thanh toán:</span>
                                        <div className="radiocheck">
                                            <label htmlFor="">Thanh toán khi nhận hàng</label>
                                            <input type="radio" className="price-ship" name="pay" onChange={(e) => handleCheck(e)} value="Thanh toán khi nhận hàng" />
                                        </div>
                                    </div>
                                    <div className="total">
                                        <span className="title">Tổng tiền:</span>
                                        <span className="total-price"><NumberVND number={totalSum} /></span>
                                    </div>
                                    <ShowInfoCustomer />
                                    <div className="error" style={{fontSize: "17px" , color:"red" ,textAlign:"center" ,fontWeight: "500"}}>{error}</div>
                                    <button onClick={handleBuy} style={{ fontSize: "18px" }} >{customerLocal.Fullname && customerLocal.Phone && customerLocal.Address ? "Đặt Hàng Ngay" : "Nhập Thông Tin"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="notHaveCart" style={{
                        width: "50%",
                        margin: "140px auto 100px",
                        backgroundColor: "#fff",
                        textAlign: "center",
                        height: "200px",
                        borderRadius: "15px",
                        padding: "55px",

                    }}>
                        <ToastContainer style={{ top: "80px", width: "275px" }} className="toatstify" />
                        <span style={{
                            display: "block",
                            fontSize: "30px",
                            marginBottom: "15px",
                        }}>Giỏ hàng của bạn đang trống</span>
                        <Link to='/product' style={{ textDecoration: 'none', fontSize: "24px", border: "1px solid", padding: "5px 10px", borderRadius: "5px" }} > Tiếp tục mua hàng</Link>
                    </div>
                )
            }
        </>
    );
}

export default CardBuyComponent;
