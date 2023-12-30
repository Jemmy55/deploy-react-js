import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import '../../SCSS/BannerSlideComponent.scss';
import BannerFilterComponent from "./BannerFilterComponent";
import BannerSlideComponent from "./BannerSlideComponent";
import { Context } from "../ulits/AppContext";

function BannerSaleComponent() {
    const { dataProductSale } = useContext(Context)
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState([])
    const [screen, setScreen] = useState(5)
    useEffect(() => {
        const slice1 = dataProductSale.slice(0, 10)
        const slice2 = dataProductSale.slice(10, 20)
        const slice3 = dataProductSale.slice(20, 30)
        const slice4 = dataProductSale.slice(30, 40)
        setData1(slice1)
        setData2(slice2)
        setData3(slice3)
        setData4(slice4)
    }, [dataProductSale])

    return (
        <Container className="timegold">
            <Tabs
                defaultActiveKey="1"
                id="justify-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="1" title={
                    <div className="Title-Tabs">
                        <h5>Chương trình khuyến mãi</h5>
                        <p>( Sắp mở bán )</p>
                    </div>
                }>
                    <BannerSlideComponent rewind={true} navigation={true} slidesPerView={5} spaceBetween={15} data={data1 && data1} />
                </Tab>
                <Tab eventKey="profile" title={
                    <div className="Title-Tabs">
                        <h5>Giảm giá giờ vàng</h5>
                        <p>( Sắp mở bán )</p>
                    </div>
                }>
                    <div className="GoldTime">
                        <BannerSlideComponent rewind={true} navigation={true} slidesPerView={4} spaceBetween={20} data={data2 && data2} />
                    </div>
                </Tab>
                <Tab eventKey="longer-tab" title={
                    <div className="Title-Tabs">
                        <h5>Mua 1 tặng 1</h5>
                        <p>( Sắp mở bán )</p>
                    </div>
                }>
                    <BannerFilterComponent data={data3 && data3} />
                </Tab>
                <Tab eventKey="contact" title={
                    <div className="Title-Tabs">
                        <h5>Hàng thanh lý giảm 10%</h5>
                        <p>( Sắp mở bán )</p>
                    </div>
                }>
                    <BannerSlideComponent rewind={true} navigation={true} slidesPerView={4} spaceBetween={20} data={data4 && data4} />
                </Tab>
            </Tabs>
        </Container>
    );
}

export default BannerSaleComponent;