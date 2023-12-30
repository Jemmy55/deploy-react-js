import { useContext } from 'react';
import '../../SCSS/LoginRes.SCSS';
import { Context } from '../ulits/AppContext';

function InfoComponet() {
    const { setCustomerLocal, setInfo ,formCustomer, setFormCustomer } = useContext(Context)

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormCustomer((prevFormData) => (
            { ...prevFormData, [name]: value }
        ))
    }
    const update = () => {
        setInfo(false)
        setCustomerLocal(formCustomer)
    }
    return (
        <>
            <div className="info" >
                <span className="label">Thông tin khách hàng</span>
                <div className="input">
                    <div className="fullname">
                        <input placeholder=" " name="Fullname" value={formCustomer.Fullname} type="text" onChange={handleOnChange}
                        />
                        <label>Họ và tên</label>
                    </div>
                    <div className="phone">
                        <input placeholder=" " name="Phone" type="number" value={formCustomer.Phone} onChange={handleOnChange}
                        />
                        <label>Số điện thoại</label>
                    </div>
                    <div className="address">
                        <input placeholder=" " name="Address" type="text" value={formCustomer.Address} onChange={handleOnChange}
                        />
                        <label>Địa chỉ giao hàng</label>
                    </div>
                </div>
                <button onClick={update} >Nhập thông tin</button>
            </div>
        </>
    );
}

export default InfoComponet;