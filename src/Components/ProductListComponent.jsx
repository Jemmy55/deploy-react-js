import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import { Funnel, HouseDoorFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import '../SCSS/Product.SCSS';
import BannerComponent from "./BannerComponent";
import PaginateComponent from "./PaginateComponent";
import PaginateItemsComponent from "./PaginateItemsComponent";
import SliderComponent from "./SliderComponent";
import { Context } from "./ulits/AppContext";

function ProductListComponent({ banner }) {
    const [lastPage, setLastPage] = useState(20);
    const { allproduct, nameGender, product, id } = useParams();
    const [openFilter, setOpenFilter] = useState("");
    const { currentItems, wordseach, DataAPI, setDataAPI, dataProducts, setDataProducts } = useContext(Context);

    // const fetch = async () => {
    //     let data = [];
    //     if (product) {
    //         const result = await axios.get(`https://657bddb7394ca9e4af14e3c2.mockapi.io/Gender/${nameGender}/Product/${product}`)
    //         // console.log(result.data);
    //         const Data = result.data.Product
    //         data = Data.filter((value) => (value.id))
    //     } else if (nameGender) {
    //         const result = await axios.get(`https://657bddb7394ca9e4af14e3c2.mockapi.io/Gender/${nameGender}/Product`)
    //         // console.log(result.data);
    //         const Data = result.data;
    //         const filter = Data.flatMap((val) => { return val.Product })
    //         data = filter.filter((value) => { return value.id && value.id != "" })
    //         // console.log(datafilter);
    //     } else {
    //         const result = await axios.get(`https://657bddb7394ca9e4af14e3c2.mockapi.io/Gender/`).catch((error) => console.log(error))
    //         const ID = result.data.slice(0, 9)
    //         const flatData = ID.flatMap((value) => `https://657bddb7394ca9e4af14e3c2.mockapi.io/Gender/${value.id}/Product`)
    //         setID(flatData)
    //         // const filterID = data.flatMap((value) => `https://657bddb7394ca9e4af14e3c2.mockapi.io/Gender/${value.id}/Product`)
    //         // console.log(filterID);
    //         // setID(filterID)
    //         // console.log(filterID);
    //     }
    //     console.log(data);
    //     setDataProducts(data);
    // }


    // async function getAllData(getID) {
    //     await axios.all(getID.map((endpoint) => axios.get(endpoint))).then((data) => {
    //         const haveData = data;
    //         const flatData = haveData.flatMap((value) => { return value.data })
    //         const dataProduct = flatData.map((val) => { return val.Product })
    //         const dataFilter = dataProduct.flatMap((item) => { return item })
    //         const filterAll = dataFilter.filter((cards) => { return cards })
    //         const fillterNaN = filterAll.filter((card) => { return card.id })
    //         setCards(fillterNaN)
    //         // const getdata = haveData.flatMap((value) => value.data);
    //         // const datafilter = getdata.map((value) => value.Product)
    //         // console.log(datafilter);
    //         // setDataProducts(datafilter.flatMap((value) => { return value }));
    //     })
    // }

    // useEffect(() => {
    //     getAllData(getID)
    // }, [getID])
    // useEffect(() => {

    //     const Item = [...Cards]
    //     let card = []
    //     if (wordseach != "") {
    //         const filterSeach = Item.filter((value) => { return value.name.includes(wordseach) })
    //         card = filterSeach
    //     } else {
    //         card = Item
    //     }
    //     setDataProducts(card)
    // }, [Cards, wordseach])

    const fetch = async () => {
        let result = [];
        if (product) {
            const getdata = await axios.get(`https://6587c11e90fa4d3dabf91879.mockapi.io/ItemProduct/${nameGender}`)
            const dataAPI = getdata.data.Product;
            const filterData = dataAPI.filter((value) => value.id != "")
            if (product.toLowerCase() == "dưới 10tr") {
                const filterProduction = filterData.filter((value) => value.pricetoPay < 10000)
                result = filterProduction;
            } else if (product.toLowerCase() == "từ 10tr đến 20tr") {
                const filterProduction = filterData.filter((value) => 10000 < value.pricetoPay && value.pricetoPay < 20000)
                result = filterProduction;
            } else if (product.toLowerCase() == "trên 20tr") {
                const filterProduction = filterData.filter((value) => value.pricetoPay < 20000)
                result = filterProduction;
            } else {
                const filterProduction = filterData.filter((value) => value.Gender.toString().toLowerCase().includes(product.toLowerCase()))
                result = filterProduction
            }
        } else if (nameGender) {
            const getdata = await axios.get(`https://6587c11e90fa4d3dabf91879.mockapi.io/ItemProduct/${nameGender}`)
            const dataAPI = getdata.data.Product;
            const filterData = dataAPI.filter((value) => value.id != "")
            result = filterData
        } else {
            const getdata = await axios.get(`https://6587c11e90fa4d3dabf91879.mockapi.io/ItemProduct`)
            const dataAPI = getdata.data;
            const AllProduct = dataAPI.flatMap((value) => value.Product)
            const filterData = AllProduct.filter((value) => value.id != "")
            // console.log(filterData);
            result = filterData
        }
        setDataAPI(result);
    }

    useEffect(() => {
        const Cards = [...DataAPI]
        let item = []
        if (wordseach != "") {
            const filterdata = Cards.filter((value) => { return value.name.toLowerCase().includes(wordseach.toLowerCase()) })
            item = filterdata
        } else {
            item = Cards
        }
        // console.log(item);
        setDataProducts(item)
    }, [DataAPI, wordseach])
    useEffect(() => {
        fetch()
    }, [])

    const handleClick = () => {
        if (openFilter == "active") {
            setOpenFilter("")
        } else {
            setOpenFilter("active")
        }
    }
    // console.log(dataProducts.length);
    return (
        <>
            <div className="list-product">
                <div className="breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/"><HouseDoorFill /> Trang Chủ</Breadcrumb.Item>
                        {
                            nameGender &&
                            <Breadcrumb.Item href={`/product/${nameGender}`}>
                                {nameGender}
                            </Breadcrumb.Item>
                        }
                        <Breadcrumb.Item active>{product}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                {/* // filter product */}
                <div className="banner">
                    <BannerComponent api={banner}
                        className="BannerListProduct"
                    />
                </div>
                {
                    dataProducts &&
                    <div className={`filter ${openFilter}`}

                    >
                        <div className={openFilter == "" ? `openfilter` : `closefilter` }
                            onClick={
                                () => handleClick()
                            }
                        >
                            <Funnel />
                        </div>
                        <SliderComponent />
                    </div>
                }
                {
                    dataProducts.length > 0 ?
                        <>
                            <div className="product-show">
                                <PaginateItemsComponent currentItems={currentItems} />
                            </div>
                            <PaginateComponent itemsPerPage={15} data={dataProducts} />
                        </>
                        :
                        <div style={{
                            margin: "20px",
                            textAlign: "center",
                        }}>
                            <span style={{
                                fontWeight: "700",
                                fontSize: "26px",
                            }}>Không tìm thấy sản phẩm</span>
                        </div>
                }
            </div>
        </>
    );
}
export default ProductListComponent;