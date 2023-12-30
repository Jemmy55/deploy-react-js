import { PencilSquare } from "react-bootstrap-icons";
import "../SCSS/ShowInfoCustomer.SCSS"
import { useContext, useEffect, useState } from "react";
import { Context } from "./ulits/AppContext";
function ShowInfoCustomer() {
    const { customerLocal, setInfo } = useContext(Context)
    const [show, setShow] = useState("none")
    useEffect(() => {
        if(customerLocal != ""){
            if (customerLocal.Fullname != "" || customerLocal.Phone != "" || customerLocal.Address != "") {
                setShow("block")
            } else {
                setShow("none")
            }
        } else {
            setShow("none")
        }
    }, [customerLocal])
    return (
        <div className="InfoCustomer">
            <div className="top">
                <h5>Thông tin người mua:</h5>
                <PencilSquare style={{
                    cursor: "pointer",
                    display: `${show}`
                }} onClick={() => setInfo(true)} />
            </div>
            <div className="Customer">
                <p>Họ và Tên: <span>{customerLocal.Fullname}</span> </p>
                <p>Số điện thoại:  <span>{customerLocal.Phone}</span>  </p>
                <p>Địa chỉ nhận hàng:  <span>{customerLocal.Address}</span> </p>
            </div>
        </div>
    );
}

export default ShowInfoCustomer