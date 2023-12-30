import { useContext, useState } from "react";
import { Dash, Plus, Trash } from "react-bootstrap-icons";
import NumberVND from "./Converter/NumberVND";
import { Context } from "./ulits/AppContext";

function CartCardItemComponent({ data, index , deleteShow }) {
    const [quantity, setQuantity] = useState(data && data.quantity != "" ? data.quantity : 1);
    const { productLocal, setProductLocal, setUpdate } = useContext(Context);
    const handleChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        if (e.target.value > 0) {
            data[index].quantity = parseFloat(e.target.value)
        } else {
            data[index].quantity = 1
        }
    }

    const deleteItem = () => {
        // console.log(e);
        const deleteValue = productLocal.filter((value, key) => key != index)
        // console.log(deleteValue);
        setProductLocal(deleteValue)
        deleteShow(true)
        
    }
    const handleQuantity = (e) => {
        const cart = [...productLocal]
        if (e == "minus") {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            }
        } else if (e == "plus") {
            cart[index].quantity += 1;
        }
        localStorage.setItem("product_cart", JSON.stringify(cart))
        setUpdate(true)
    }
    return (
        <div className="box-product">
            {
                data && (
                    <>
                        <div className="img">
                            <img src={data.imgViewer} alt="" />
                            <button className="delete" onClick={() => deleteItem(index)} > <Trash /> <span>Xóa</span></button>
                        </div>
                        <div className="product-info">
                            <span className="title-product">{data.name}</span>
                            <div className="content">
                                <span>Cấu hình:</span>
                                <ul>
                                    <li>{data.config.cpu}</li>
                                    <li>{data.config.vga}</li>
                                    <li>{data.config.ram}</li>
                                    <li>{data.config.ssd}</li>
                                    <li>{data.config.display}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-price">
                            <span className="price"><NumberVND number={parseFloat(data.pricetoPay)} /> </span>
                            <del><NumberVND number={parseFloat(data.priceOrinal)} /></del>
                            <div className="quantity">
                                <span className="minus" name="minus" onClick={() => handleQuantity("minus", index)} > < Dash /> </span>
                                <input className="data-quantity" type="text" value={data.quantity} onChange={(e) => handleChange(e)} />
                                <span className="plus" name="plus" onClick={() => handleQuantity("plus", index)} > <Plus /> </span>
                            </div>
                            <div className="total">
                                <div style={{
                                    fontWeight: "700"
                                }}>Tổng: <span
                                    style={{
                                        fontSize: "22px"
                                    }}>< NumberVND number={data && data.pricetoPay * data.quantity} /></span></div>
                            </div>
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default CartCardItemComponent;