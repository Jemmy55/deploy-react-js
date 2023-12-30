import { useContext, useEffect, useState } from "react";
import { BagCheck, Link } from "react-bootstrap-icons";
import { Context } from "./ulits/AppContext";
import NumberVND from "./Converter/NumberVND";
import '../SCSS/BillCart.SCSS'

function BillCartComponent() {
    const { customerLocal, productLocal } = useContext(Context)
    const [total ,setTotal] = useState(customerLocal)
    const [totalPrice, setTotalPrice] = useState(0)
    const [data, setData] = useState(productLocal)
    const {setHisCart, setProductLocal, setCustomerLocal} = useContext(Context)
    useEffect(() => {
        setTotalPrice(total.customerLocal.total)
    },[total])
    const handleClick = () => {
        setProductLocal([])
        setCustomerLocal([])
        setHisCart(false);
    }
    console.log(total.customerLocal.total);
    return (
        <>
            <div className="bill">
                <div className="top">
                    <h4> <BagCheck />  Đặt hàng thành công</h4>
                </div>
                <div className="info">
                    <h4>Thông tin khách hàng</h4>
                    <p>Người nhận: <span>{total&& total.customerLocal.Fullname}</span> </p>
                    <p>Số điện thoại:  <span>{total && total.customerLocal.Phone}</span></p>
                    <p>Địa chỉ nhận hàng: <span> {total && total.customerLocal.Address}</span> </p>
                    <p>Phướng thức thanh toán: <span>{total && total.customerLocal.pay}</span></p>
                    <p>Phí vận chuyển: <span>{total && total.customerLocal.ship}</span></p>
                    <p>Tổng tiền: <span className="total"><NumberVND number={totalPrice} /></span></p>
                </div>
                <div className="showProduct">
                    <h4>Sản phẩm đã đặt</h4>
                    {
                        data && data.map((value, key) => (
                            <div className="cart" key={key}>
                                <div className="left">
                                    <div className="ontop">
                                        <h5>{value.name}</h5>
                                        <div className="price">
                                            <p>Tổng bán: <span>{<NumberVND number={parseFloat(value.pricetoPay)} />}</span></p>
                                            <p>Số lượng: <span>{value.quantity}</span></p>
                                            <p>Tổng tiền: <span>{<NumberVND number={parseFloat(value.pricetoPay * value.quantity)} />}</span> </p>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <ul>
                                            <li>{value.config.cpu}</li>
                                            <li>{value.config.ram}</li>
                                            <li>{value.config.vga}</li>
                                            <li>{value.config.ssd}</li>
                                            <li>{value.config.display}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={value.imgViewer} alt="" />
                                </div>
                            </div>
                        ))
                    }
                    <div className="BacktoShop" onClick={handleClick}>
                        <span>Tiếp tục mua hàng</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BillCartComponent;