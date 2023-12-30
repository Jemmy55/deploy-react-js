import { useContext } from "react";
import { Modal } from "react-bootstrap";
import { Context } from "../ulits/AppContext";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import InfoComponet from "./InfoComponent";
import BillCartComponent from "../BillCartComponent";

function FormLoginRegister() {
    const { modalLog, modalRes, setModalLog, setModalRes, modalInfo, setInfo, hisCart, setHisCart, setProductLocal, setCustomerLocal } = useContext(Context);
    const handleClose = () => {
        setHisCart(false);
        setProductLocal([])
        setCustomerLocal([])
    }
    return (
        <>
            <Modal
                show={modalLog || modalRes}
                onHide={() => (setModalLog(false) || setModalRes(false))}
                className="mt-5"
            >
                {
                    !modalRes ? <FormLogin /> : <FormRegister />
                }
            </Modal>

            <Modal
                style={{
                    marginTop: "150px"
                }}
                show={modalInfo}
                onHide={() => setInfo(false)}
            >
                <InfoComponet />
            </Modal>

            <Modal
                show={hisCart}
                size="lg"
                centered={true}
                keyboard={false}
                onHide={handleClose}
                style={{
                    borderRadius: "15px"
                }}
            >
                <BillCartComponent />
            </Modal>

        </>
    );
}

export default FormLoginRegister;