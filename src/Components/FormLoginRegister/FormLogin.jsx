import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { Facebook, Google } from "react-bootstrap-icons";
import '../../SCSS/LoginRes.SCSS';
import { Context } from "../ulits/AppContext";

function FormLogin() {
    const { user, setUser  , setModalLog, setModalRes} = useContext(Context);
    const [check , setCheck] = useState(false);
    const [type , setType] = useState('password');
    const handleChange = () => {
        setModalLog(false);
        setModalRes(true);
    }
    const handleInput = (e) => {
        // console.log(e.target.value);
        setUser(e.target.value)
    }
    const handleCheck = () => {
        if(check){
            setCheck(false);
            setType('password')
        } else if(!check){
            setCheck(true);
            setType('text')
        }
    }
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title className="ModalTitle">ĐĂNG NHẬP</Modal.Title>
            </Modal.Header>
            <Modal.Body className="BodyForm">
                <div className="User">
                    <input placeholder=" " name="Username" type="text"
                    />
                    <label>Tên tài khoản</label>
                </div>
                <div className="Pass">
                    <input placeholder=" " name="Password" type={type} />
                    <label>Mật khẩu</label>
                </div>
                <div className="showPass">
                    <div className="checkPass">
                        <input placeholder=" " type="checkbox" onClick={handleCheck}/>
                        <span>Hiện mật khẩu</span>
                    </div>
                    <a href="">Quên mật khẩu?</a>
                </div>
                <div className="btnLog">
                    <div className="btnLogin">
                        <button>ĐĂNG NHẬP</button>
                    </div>
                    <div className="or">
                        <p>hoặc đăng nhập bằng</p>
                    </div>
                    <div className="google-facebook">
                        <button className="google"><span><Google /></span> Google</button>
                        <button className="facebook"><span><Facebook /></span> Facebook</button>
                    </div>
                    <div className="not-have-account">
                        <p>Bạn chưa có tài khoản? <span onClick={handleChange} >Đăng ký ngay!</span></p>
                    </div>
                </div>
            </Modal.Body>
        </>
    );
}

export default FormLogin;