import { useContext } from "react";
import { Modal } from "react-bootstrap";
import { Facebook, Google } from "react-bootstrap-icons";
import { Context } from "../ulits/AppContext";

function FormRegister() {
    const {setModalLog, setModalRes } = useContext(Context);
    const handleChange = () => {
        setModalLog(true);
        setModalRes(false);
    }
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title className="ModalTitle">ĐĂNG KÝ TÀI KHOẢN</Modal.Title>
            </Modal.Header>
            <Modal.Body className="BodyForm">
                <div className="Fullname">
                    <input placeholder=" " type="text" name="fullname" />
                    <label>Họ và Tên</label>
                </div>
                <div className="User">
                    <input placeholder=" " name="Username" type="text" />
                    <label>Tên tài khoản</label>
                </div>
                <div className="Pass">
                    <input placeholder=" " name="Password" type="password" />
                    <label>Mật khẩu</label>
                </div>
                <div className="btnLog">
                    <div className="btnLogin">
                        <button>Tạo tài khoản</button>
                    </div>
                    <div className="or">
                        <p>hoặc đăng nhập bằng</p>
                    </div>
                    <div className="google-facebook">
                        <button className="google"><span><Google /></span> Google</button>
                        <button className="facebook"><span><Facebook /></span> Facebook</button>
                    </div>
                    <div className="not-have-account">
                        <p>Bạn đã có tài khoản? <span onClick={handleChange} >Đăng nhập</span></p>
                    </div>
                </div>
            </Modal.Body>
        </>
    );
}

export default FormRegister;