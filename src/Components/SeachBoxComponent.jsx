import axios from "axios";
import { useContext, useEffect, useState } from "react";
import '../SCSS/SeachBoxComponent.SCSS'
import NumberVND from "./Converter/NumberVND";
import { Context } from "./ulits/AppContext";
import { useNavigate } from "react-router-dom";

function SearchBoxComoponent() {
    const [All, setAll] = useState([])
    const { dataProducts , wordseach , setKeyword, setDataProducts , setDataProduct , setShowSeach}  = useContext(Context)
    const navigate = useNavigate()
    const fetch = async () => {
        const getdata = await axios.get(`https://6587c11e90fa4d3dabf91879.mockapi.io/ItemProduct`)
        const dataAPI = getdata.data;
        const AllProduct = dataAPI.flatMap((value) => value.Product)
        const filterData = AllProduct.filter((value) => value.id != "")
        // console.log(filterData);
        setAll(filterData)
    }
    useEffect(() => {
        if(wordseach != ""){
            fetch()
        }
    }, [wordseach])
    useEffect(() => {
        const Cards = [...All]
        let item = []
        if (wordseach != "") {
            const filterdata = Cards.filter((value) => { return value.name.toLowerCase().includes(wordseach.toLowerCase()) })
            item = filterdata
        } else {
            item = Cards
        }
        // console.log(item);
        setDataProducts(item)
    }, [All, wordseach])
    console.log(dataProducts.length);
    return (
        <>
            <div className="mainBox" style={dataProducts.length < 6 ? {height: `${dataProducts.length > 0 ? dataProducts.length * 98: 40}px`} : {height: "500px"}}>
                {
                    dataProducts.length >= 1 ? dataProducts.map((item ,key) => (
                        <div className="boxCard" key={key} onClick={() => {
                            navigate(`/deloy-react-js/product/${item.Gender[0]}/${item.Gender[1]}/${item.name}`);
                            window.scroll(0, 0)
                            setDataProduct(item);
                            setShowSeach(false)
                            setKeyword("")
                        }} >
                            <div className="left">
                                <h5>{item.name}</h5>
                                <div className="price">
                                    <p><NumberVND number={parseFloat(item.pricetoPay)} /></p>
                                    <del><NumberVND number={parseFloat(item.priceOrinal)} /></del>
                                </div>
                            </div>
                            <div className="right">
                                <img src={item.imgViewer} alt="" />
                            </div>
                        </div>
                    )) : (
                        <div className="notfind">
                            <h5>Không tìm thấy sản phẩm</h5>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default SearchBoxComoponent;