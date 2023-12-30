import { useContext } from "react";
import { Table } from "react-bootstrap";
import { Context } from "./ulits/AppContext";

function ProductInfoComponent() {
    const { data } = useContext(Context);

    return (
        <>
            <div className="config-info">
                <Table striped bordered hover>
                    <tbody>
                        {
                            data.infoconfig && (data.infoconfig).map((value, key) => (
                                <tr key={key}>
                                    <td>{value.Lable}</td>
                                    <td>{value.Name}</td>
                                </tr>
                            ))
                        }

                        {/* <tr>
                            <td>Bảo hành</td>
                            <td>24 tháng</td>
                        </tr>
                        <tr>
                            <td>Hệ điều hành</td>
                            <td>Window 10 Home</td>
                        </tr>
                        <tr>
                            <td>CPU</td>
                            <td>Intel Core i3-1215U ( 1.2 GHz - 4.4GHz / 10MB / 6 nhân, 8 luồng )</td>
                        </tr>
                        <tr>
                            <td>Chip đồ họa</td>
                            <td>Onboard Intel UHD Graphics</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>2 x 4GB DDR4 2400MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )</td>
                        </tr>
                        <tr>
                            <td>Màn hình</td>
                            <td>15.6" ( 1920 x 1080 ) Full HD HD webcam</td>
                        </tr>
                        <tr>
                            <td>Lưu trữ</td>
                            <td>512GB SSD M.2 NVMe /</td>
                        </tr>
                        <tr>
                            <td>Webcam</td>
                            <td>720p HD camera With privacy shutter</td>
                        </tr>
                        <tr>
                            <td>Số cổng lưu trữ tối đa</td>
                            <td>1 x M.2 NVMe</td>
                        </tr>
                        <tr>
                            <td>Kiểu khe M.2 hỗ trợ</td>
                            <td>M.2 NVMe</td>
                        </tr>
                        <tr>
                            <td>Cổng xuất hình</td>
                            <td>1 x HDMI</td>
                        </tr>
                        <tr>
                            <td>Chuẩn WIFI</td>
                            <td>Wi-Fi 6(802.11ax) (Dual band) 2*2</td>
                        </tr>
                        <tr>
                            <td>Bluetooth</td>
                            <td>Bluetooth® 5.2 Wireless Card</td>
                        </tr>
                        <tr>
                            <td>Chuẩn LAN</td>
                            <td>100/1000M</td>
                        </tr>
                        <tr>
                            <td>Đèn LED trên máy</td>
                            <td>không đèn</td>
                        </tr>
                        <tr>
                            <td>Pin</td>
                            <td>42WHrs, 3S1P, 3-cell Li-ion</td>
                        </tr>
                        <tr>
                            <td>Trọng lượng</td>
                            <td>1.45 kg</td>
                        </tr>
                        <tr>
                            <td>Màu sắc</td>
                            <td>Black</td>
                        </tr>
                        <tr>
                            <td>Kích thước</td>
                            <td>32.34 x 21.56 x 1.92 ~ 1.92 cm</td>
                        </tr> */}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default ProductInfoComponent;