import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Breadcrumb, Form, Modal } from "react-bootstrap";
import { Boxes, ChevronDown, ChevronUp, Gear, HouseDoorFill, ShieldCheck, StarFill, Truck } from "react-bootstrap-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../SCSS/Product.SCSS';
import NumberVND from "./Converter/NumberVND";
import ProductDescriptionComponent from "./ProductDescriptionComponent";
import ProductInfoComponent from "./ProductInfoConponent";
import { Context } from "./ulits/AppContext";import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";


function ProductComponent({ }) {
    const [thumbs, setThumbs] = useState(null);
    const [thumbsModal, setThumbsModal] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const [modalZoom, setModalZoom] = useState(false);
    const [MoreContent, setMoreContent] = useState('');

    const { nameGender, product, id } = useParams();
    const { productLocal, setProductLocal, data, setData, setUpdate } = useContext(Context)
    const navigate = useNavigate();
    // console.log(nameGender  , product, id);
    const handleAddCart = () => {
        const index = productLocal.findIndex((item) => item.name == data.name)
        if (index < 0) {
            data["quantity"] = 1;
            setProductLocal((current) => [...current, data])
        } else {
            productLocal[index].quantity += 1;
            setUpdate(true);
        }
        const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 1000));
        toast.promise(
            resolveAfter3Sec,
            {
                pending: 'Vui lòng đợi',
                success: 'Sản phẩm đã được thêm',
                error: 'Thêm sản phẩm thất bại',
            },
            {
                theme: "colored",
                transition: bounce
            }
        )
    }
    const bounce = cssTransition({
        enter: "animate__animated animate__bounceIn",
        exit: "animate__animated animate__bounceOut"
      });
    const fetchAPI = async () => {
        const result = await axios.get(`https://6587c11e90fa4d3dabf91879.mockapi.io/ItemProduct/${nameGender}`)
        const getAPIProduct = result.data.Product
        const Item = getAPIProduct.filter((value) => { return value.name == id })
        const resultInfo = await axios.get(`https://6587c11e90fa4d3dabf91879.mockapi.io/ItemProduct/${nameGender}/DesPorduct`)
        const getAPIInfo = resultInfo.data[0].Product
        const Info = getAPIInfo.filter((value) => { return value.name == id })
        const All = Object.assign({}, Item[0], Info[0])
        // console.log(All);
        setData(All)
    }
    useEffect(() => {
        fetchAPI()
    }, [id])
    const handleBuy = () => {
        navigate('/deloy-react-js/cart');
        handleAddCart();
    }

    // console.log(data.Evaluate == undefined);
    return (
        <div className="product">
            {
                data != "" && (
                    <>
                        <ToastContainer style={{ top: "80px", width: "275px" }} transition={Zoom} />
                        <div className="breadcrumb">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/"><HouseDoorFill /> Trang Chủ</Breadcrumb.Item>
                                <Breadcrumb.Item href={`/product/${nameGender}`}>
                                    {nameGender}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href={`/product/${nameGender}/${product}`}>
                                    {product}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>{id}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="header-product">
                            <div className="img-product">
                                <Swiper
                                    loop={true}
                                    watchSlidesProgress
                                    onClick={() => { setModalZoom(true) }}
                                    onRealIndexChange={(e) => setThumbsModal(e.realIndex)}
                                    thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    style={{
                                        '--swiper-navigation-color': '#2F80ED',
                                        '--swiper-pagination-color': '#2F80ED',
                                        "--swiper-navigation-size": "25px",
                                    }}
                                    modules={[Navigation, FreeMode, Thumbs]}
                                    className="ProdcutIMG"
                                >

                                    {
                                        data.imgProduct && (data.imgProduct).map((value, key) => (
                                            <SwiperSlide key={key}><img src={value} alt="" /></SwiperSlide>
                                        ))

                                    /* {
                                        (dataProduct.imgProduct).map((value, key) => (
                                            <SwiperSlide key={key}><img src={value} alt="" /></SwiperSlide>

                                        ))
                                    } */}
                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbs}
                                    loop={true}
                                    slidesPerView={3}
                                    spaceBetween={20}
                                    freeMode={true}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    style={{
                                        '--swiper-navigation-color': '#2F80ED',
                                        '--swiper-pagination-color': '#2F80ED',
                                        "--swiper-navigation-size": "25px",
                                        "width": "20rem"
                                    }}
                                    watchSlidesProgress={true}
                                    centerInsufficientSlides={true}
                                    slideToClickedSlide={true}
                                    modules={[Navigation, FreeMode, Thumbs]}
                                    className="ProductIMG2"
                                >
                                    {
                                        data.imgProduct && (data.imgProduct).map((value, key) => (
                                            <SwiperSlide key={key}><img src={value} alt="" style={{ width: "100%", display: "block" }} /></SwiperSlide>
                                        ))
                                    /* {
                                        (dataProduct.imgProduct).map((value, key) => (
                                            <SwiperSlide key={key}><img src={value} alt="" /></SwiperSlide>

                                        ))
                                    } */}
                                </Swiper>
                            </div>
                            <div className="content-product">
                                <h1 style={{ fontSize: "30px" }}>{data.name}</h1>
                                <div className="classify">
                                    <p> Thương hiệu: <Link to={`/product/${data.infoconfig[0].Name}`} > {data.infoconfig && data.infoconfig[0].Name}  </Link> </p>
                                    <p>Phân loại:<Link to='' > {data.Gender && data.Gender[2]} </Link> </p>
                                    <p>Bảo hành:<Link to='' > {data.infoconfig && data.infoconfig[1].Name}  </Link></p>
                                </div>
                                <div className="product-star">
                                    <span className="number">{data.Evaluate && (data.Evaluate[0].totalstar * 5 / (data.Evaluate[0].totalstar + data.Evaluate[1].totalstar + data.Evaluate[2].totalstar + data.Evaluate[3].totalstar + data.Evaluate[4].totalstar)).toFixed(1)}</span>
                                    <span className="icon"><StarFill /></span>
                                    <Link onClick={() => window.scrollTo(0, document.body.scrollHeight)} className="click-sroll">Xem đánh giá</Link>
                                </div>
                                <div className="product-price">
                                    <span className="pro-price"><NumberVND number={parseFloat(data.pricetoPay)} /></span>
                                    <del><NumberVND number={parseFloat(data.priceOrinal)} /></del>
                                    <span className="pro-sale">-{data.sale}%</span>
                                </div>
                                <div className="footer-buy">
                                    <button className="pay-now" onClick={handleBuy} >Mua Ngay <br /> <span>Giao hàng tận nơi hoặc nhận tại cửa hàng</span> </button>
                                    <button className="add-cart" onClick={handleAddCart} >Thêm Giỏ Hàng<br /> </button>
                                    <p>Gọi đặt mua <strong>1900.0001 (8:00 - 21:00)</strong> </p>
                                </div>
                            </div>
                            <div className="policy">
                                <div className="top">
                                    <h5>Chính sách bán hàng</h5>
                                    <div className="box-policy">

                                        <div className="context">
                                            <span><Truck /></span> Miễn phí giao hàng cho đơn hàng từ 5 triệu
                                        </div>
                                    </div>
                                    <div className="box-policy">

                                        <div className="context">
                                            <span><ShieldCheck /></span> Cam kết hàng chính hãng 100%
                                        </div>
                                    </div>
                                    <div className="box-policy">

                                        <div className="context">
                                            <span><Boxes /></span> Đổi trả trong vòng 10 ngày
                                        </div>
                                    </div>
                                </div>
                                <div className="bot">
                                    <h5>Dịch vụ khác</h5>
                                    <div className="context">
                                        <span><Gear /></span> Gói dịch vụ bảo hành/ Sửa chữa tận nơi
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="info-product">
                            <div className="left">
                                {
                                    data && data.content != undefined ?
                                        <div>
                                            <div className="header-info">
                                                <h2
                                                    style={{
                                                        fontSize: "30px",
                                                        fontWeight: "700",
                                                        textAlign: "center",
                                                        marginLeft: "0",
                                                    }}
                                                >Mô tả sản phẩm</h2>
                                            </div>
                                            <ProductDescriptionComponent active={MoreContent} />
                                            <div className="checkmore ">
                                                <Link className={`showContent ${MoreContent}`} onClick={() => setMoreContent("active")}>Xem thêm chi tiết <ChevronDown /> </Link>
                                                <Link className={`CloseContent ${MoreContent}`} onClick={() => setMoreContent("")}>Rút gọn chi tiết <ChevronUp /> </Link>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div
                                                style={{
                                                    fontSize: "40px",
                                                    fontWeight: "700",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    marginTop: "15%"
                                                }}
                                            >
                                                <span>Sản phẩm chưa có mô tả</span>
                                            </div>
                                        </div>
                                }
                            </div>
                            <div className="right">
                                <div className="header-info">
                                    <h2
                                        style={{
                                            fontSize: "30px",
                                            fontWeight: "700",
                                            textAlign: "center",
                                            marginLeft: "0",
                                        }}
                                    >Thông tin chi tiết</h2>
                                </div>
                                <ProductInfoComponent />
                                <div className="checkmore">
                                    <Link className="checkmore" onClick={() => setShowMore(true)}>Xem thêm chi tiết <ChevronDown /> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            {
                                data.Evaluate != undefined &&
                                <div className="evaluate">
                                    <h2>Đánh giá & Nhận xét về Laptop</h2>
                                    <div className="form-evaluate">
                                        <div className="star-evaluate">
                                            <span className="point">{(data.Evaluate[0].totalstar * 5 / (data.Evaluate[0].totalstar + data.Evaluate[1].totalstar + data.Evaluate[2].totalstar + data.Evaluate[3].totalstar + data.Evaluate[4].totalstar)).toFixed(1)}/5</span>
                                            <span className="star-point"> <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarFill /> </span>
                                            <span className="quatity-point"><strong>({data.Evaluate[0].totalstar + data.Evaluate[1].totalstar + data.Evaluate[2].totalstar + data.Evaluate[3].totalstar + data.Evaluate[4].totalstar})</strong> đánh giá & nhận xét</span>
                                        </div>
                                        <div className="point-evaluate">
                                            {
                                                data.Evaluate && (data.Evaluate).map((value, key) => (
                                                    // console.log(value),
                                                    <div className="item-point-evaluate" key={key} >
                                                        <span className="point-eval"> {value.id} <StarFill className="star" /></span>
                                                        <div className="load-point" style={{
                                                            backgroundImage: `linear-gradient(to right, #24B400 ${value.totalstar / parseFloat(data.Evaluate[0].totalstar + data.Evaluate[1].totalstar + data.Evaluate[2].totalstar + data.Evaluate[3].totalstar + data.Evaluate[4].totalstar) * 100}% ,#f2f2f2 0%, #f2f2f2 100%)`,
                                                            transition: "1.5s liner",
                                                        }} ></div>
                                                        <span className="eval-comment">{value.totalstar} đánh giá</span>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>
                                </div>
                            }

                        </div>
                    </>
                )
            }
            <Modal
                show={showMore}
                scrollable={true}
                animation={true}
                centered={true}
                keyboard={false}
                onHide={() => setShowMore(false)}
                className="scroll-Info"
            >
                <Modal.Body>
                    <ProductInfoComponent />
                </Modal.Body>
            </Modal>
            <Modal
                show={modalZoom}
                onHide={() => setModalZoom(false)}
                style={{ marginTop: "100px", display: "none" }}
                contentClassName="ProductIMG3-Modal"
            >
                <Modal.Header ></Modal.Header>
                <Form>
                    <Swiper
                        loop={true}
                        zoom={true}
                        navigation={true}
                        initialSlide={thumbsModal}
                        pagination={{
                            clickable: true,
                        }}
                        style={{
                            '--swiper-navigation-color': '#2F80ED',
                            '--swiper-pagination-color': '#2F80ED',
                            "--swiper-navigation-size": "25px",
                            "width": "35rem"
                        }}
                        modules={[Navigation, FreeMode, Thumbs, Zoom]}
                        className="ProductIMG3"
                    >
                        {
                            data.imgProduct && (data.imgProduct).map((value, key) => (
                                <SwiperSlide key={key}>
                                    <div className="swiper-zoom-container">
                                        <img src={value} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Form>
            </Modal>
        </div >
    );
}

export default ProductComponent;