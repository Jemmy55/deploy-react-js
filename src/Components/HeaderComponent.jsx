import { useContext, useEffect, useState } from "react";
import { Container, Modal, ModalBody } from "react-bootstrap";
import { Cart3, Clipboard2Pulse, GeoAlt, Headset, Link, List, PersonFillLock, Search } from 'react-bootstrap-icons';
import { useNavigate, useParams } from "react-router-dom";
import '../SCSS/HeaderComponent.scss';
import '../SCSS/ContentBannerComponent.scss'
import FormLoginRegister from "./FormLoginRegister/FormLoginRegister";
import { Context } from "./ulits/AppContext";
import ContentBannerComponent from "./ContentBannerComponent";
import { RemoveScroll } from "react-remove-scroll";
import SearchBoxComoponent from "./SeachBoxComponent";
function HeaderComponent() {


    const { setModalLog, setModalRes, modalContext, setContext, productLocal, setKeyword, keyword, showSeach, setShowSeach } = useContext(Context);
    const navigate = useNavigate();
    const { allproduct, product, id } = useParams();

    const handleChange = (e) => {
        // console.log((e.target.value));
        setKeyword(e.target.value)
    }
    const handleClickLog = () => {
        // console.log("a");
        setModalLog(true);
        setModalRes(false);
    }
    const handleClickRes = () => {
        // console.log("b");
        setModalRes(true);
        setModalLog(false);
    }
    const hanldeOnClick = (e) => {
        if (allproduct == "product") {
            setKeyword("");
        } else {
            navigate("/deloy-react-js/product")
        }
    }
    useEffect(() => {
        if (allproduct == "product") {
            if (product != undefined && id != undefined && keyword.length > 0) {
                setShowSeach(true)
            } else {
                setShowSeach(false)
            }
        }
    }, [keyword])
    const [openMenu, setOpenMenu] = useState("")
    const handleMenu = () => {
        if(openMenu === ""){
            setOpenMenu("active")
        } else {
            setOpenMenu("")
        }
    }
    return (
        <>
            <div className="HeaderPage">
                <Container className=" header d-flex align-items-center justify-content-around">
                    <div className="logo d-flex" onClick={() => {
                        navigate('/deloy-react-js/');
                        window.scrollTo(0, 0);
                    }}>
                        <img src="" alt="" />
                        <h2>GAMINGSHOP</h2>
                    </div>
                    <div className={`mid-menu`}>
                        <div className="box category" onClick={() => modalContext == "active" ? setContext('') : setContext('active')}>
                            <div className="icon">
                                <List />
                            </div>
                            <div className="title">Danh Mục</div>
                        </div>
                        <div className="searchProduct">
                            <input value={keyword} type="text" name="SearchProduct" onClick={hanldeOnClick}
                                onChange={handleChange
                                } />
                            <div className="icon"><Search /></div>
                            {
                                showSeach &&
                                <div className={`showSeachBox`}>
                                    <SearchBoxComoponent />
                                </div>
                            }
                        </div>
                    </div>
                    <div className="menu">
                        <div className="box">
                            <div className="icon"><Headset /></div>
                            <div className="content">Hotline 1900.0001</div>
                        </div>
                        <div className="box" onClick={() => { window.location.href = "https://www.google.com/maps/place/B%C3%ACnh+H%C6%B0ng,+B%C3%ACnh+Ch%C3%A1nh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7371659,106.6812802,17z/data=!3m1!4b1!4m6!3m5!1s0x31752fae416de1ed:0xf06c799691c85e83!8m2!3d10.7371659!4d106.6838551!16s%2Fg%2F11f5gwrmgs?hl=vi-VN&entry=ttu" }} >
                            <div className="icon"><GeoAlt /></div>
                            <div className="content" >Hệ thống Showroom</div>
                        </div>
                        {/* <div className="box" onClick={handleClickLog}>
                            <div className="icon"><Clipboard2Pulse /></div>
                            <div className="content">Tra cứu đơn hàng</div>
                        </div> */}
                        <div className="box shop" onClick={() => {
                            navigate('/deloy-react-js/cart');
                            window.scrollTo(0, 0);
                        }} >
                            <div className="icon"><Cart3 />
                                <div className="quantity"><span>{productLocal.length}</span></div>
                            </div>
                            <div className="content">Giỏ hàng</div>
                        </div>
                        <div className="box login" style={{ display: "none" }}>
                            <div className="icon"><PersonFillLock /></div>
                            <div className="title">Đăng nhập</div>
                            <div className="fixedLogin">
                                <h4>Đăng nhập</h4>
                                <div className="btn-div">
                                    <div onClick={handleClickLog} className="btn-login">Đăng Nhập</div>
                                    <div onClick={handleClickRes} className="btn-register">Đăng ký</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-bar">
                        <div className="bars" onClick={handleMenu}></div>
                    </div>
                </Container>
                <FormLoginRegister />
            </div>

            <div className={`content-catory  ${modalContext}`} onClick={() => setContext('')} >
                {
                    modalContext != "" ? <RemoveScroll></RemoveScroll> : ""
                }
                <div className="content">
                    <ContentBannerComponent offbanner={true} />
                </div>
            </div>
            <div className={`menufixed ${openMenu}`}>
                <div className={`mid-menu`}>
                    {/* <div className="box category" onClick={() => modalContext == "active" ? setContext('') : setContext('active')}>
                        <div className="icon">
                            <List />
                        </div>
                        <div className="title">Danh Mục</div>
                    </div> */}
                    <div className="searchProduct">
                        <input value={keyword} type="text" name="SearchProduct" onClick={hanldeOnClick}
                            onChange={handleChange
                            } />
                        <div className="icon"><Search /></div>
                        {
                            showSeach &&
                            <div className={`showSeachBox`}>
                                <SearchBoxComoponent />
                            </div>
                        }
                    </div>
                </div>
                <div className="menu">
                    <div className="box">
                        <div className="icon"><Headset /></div>
                        <div className="content">Hotline 1900.0001</div>
                    </div>
                    <div className="box" onClick={() => { window.location.href = "https://www.google.com/maps/place/B%C3%ACnh+H%C6%B0ng,+B%C3%ACnh+Ch%C3%A1nh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7371659,106.6812802,17z/data=!3m1!4b1!4m6!3m5!1s0x31752fae416de1ed:0xf06c799691c85e83!8m2!3d10.7371659!4d106.6838551!16s%2Fg%2F11f5gwrmgs?hl=vi-VN&entry=ttu" }} >
                        <div className="icon"><GeoAlt /></div>
                        <div className="content" >Hệ thống Showroom</div>
                    </div>
                    {/* <div className="box" onClick={handleClickLog}>
                        <div className="icon"><Clipboard2Pulse /></div>
                        <div className="content">Tra cứu đơn hàng</div>
                    </div> */}
                    <div className="box shop" onClick={() => {
                        navigate('/deloy-react-js/cart');
                        window.scrollTo(0, 0);
                    }} >
                        <div className="icon"><Cart3 />
                            <div className="quantity"><span>{productLocal.length}</span></div>
                        </div>
                        <div className="content">Giỏ hàng</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderComponent;