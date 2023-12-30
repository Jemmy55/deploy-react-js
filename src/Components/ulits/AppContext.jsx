import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
export const Context = createContext();

AppContext.propTypes = {
    children: PropTypes.node,
};

function AppContext({ children }) {
    const [modalLog, setModalLog] = useState(false);
    const [modalRes, setModalRes] = useState(false);
    const [update, setUpdate] = useState(false);
    const [modalInfo, setInfo] = useState(false);
    const [modalContext, setContext] = useState('');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [fullName, setFullName] = useState('');
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [totalSum, setTotalSum] = useState(0);
    const [content, setContent] = useState([]);
    const [dataProduct, setDataProduct,] = useState([]);
    const [dataProducts, setDataProducts] = useState([]);
    const [data, setData] = useState([]);
    const [DataAPI, setDataAPI] = useState([])
    const [dataSelect, setSataSelect] = useState([])
    const [wordseach, setWordSeach] = useState("")
    const [keyword, setKeyword] = useState("");
    const [showSeach, setShowSeach] = useState(false);
    const [hisCart, setHisCart] = useState(false);
    const [productLocal, setProductLocal] = useState(localStorage.getItem('product_cart') ? JSON.parse(localStorage.getItem('product_cart')) : []);
    const [customerLocal, setCustomerLocal] = useState(localStorage.getItem('customer_cart') ? JSON.parse(localStorage.getItem('customer_cart')) : []);
    const [formCustomer, setFormCustomer] = useState({})
    const [banner ,setBanner] = useState([])
    const [dataProductSale ,setDataProductSale] = useState([])

    const FetchProductSale = async () => {
        const getdata = await axios.get(`https://6587c11e90fa4d3dabf91879.mockapi.io/ItemProduct`)
        const dataAPI = getdata.data;
        const AllProduct = dataAPI.flatMap((value) => value.Product)
        const filterData = AllProduct.filter((value) => value.id != "")
        setDataProductSale(filterData)
    }
    const FetchBanner = async () => {
        const result = await axios.get("https://6561f5c2dcd355c0832466be.mockapi.io/api/Gender/Banner")
        setBanner(result.data.data);
    }
    useEffect(() => {
        FetchBanner()
        FetchProductSale()
    },[])
    useEffect(() => {
        setFormCustomer(customerLocal ? customerLocal : {
            Fullname: "",
            Phone: "",
            Address: "",
            pay: "",
            ship: ""
        })
    }, [customerLocal])
    useEffect(() => {
        localStorage.setItem("customer_cart", JSON.stringify(customerLocal))
    }, [customerLocal])
    useEffect(() => {
        let total = 0;
        productLocal.map((val) => {
            total += val.quantity * val.pricetoPay
        })
        setTotalSum(total)
        localStorage.setItem("product_cart", JSON.stringify(productLocal));
        return () => {
            setUpdate(false)
        }
    }, [productLocal, update]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setWordSeach(keyword);
        }, 200);
        return () => {
            clearTimeout(timer);
        }
    }, [keyword])
    useEffect(() => {

    }, [dataProduct])
    const [loading, setLoading] = useState(false);
    return <Context.Provider value={{
        modalLog, setModalLog,
        modalRes, setModalRes,
        user, setUser,
        pass, setPass,
        fullName, setFullName,
        modalContext, setContext,
        currentItems, setCurrentItems,
        loading, setLoading,
        pageCount, setPageCount,
        itemOffset, setItemOffset,
        totalSum, setTotalSum,
        modalInfo, setInfo,
        content, setContent,
        dataProducts, setDataProducts,
        dataProduct, setDataProduct,
        productLocal, setProductLocal,
        data, setData,
        update, setUpdate,
        wordseach, setWordSeach,
        keyword, setKeyword,
        dataSelect, setSataSelect,
        customerLocal, setCustomerLocal,
        showSeach, setShowSeach,
        hisCart, setHisCart,
        formCustomer, setFormCustomer,
        DataAPI, setDataAPI,
        banner ,setBanner,
        dataProductSale ,setDataProductSale,
    }} >{children}</Context.Provider>
}

export default AppContext;