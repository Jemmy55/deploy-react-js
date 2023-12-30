import { Container } from 'react-bootstrap';
import '../SCSS/FooterComponent.SCSS'
function FooterComponent() {
    return (
        <>
            <div className="footer">
                <Container>
                    <div className="footer-top">
                        <div className="thumb">
                            <h5>VỀ GAMINGSHOP</h5>
                            <ul>
                                <li><a href="">Giới thiệu</a></li>
                                <li><a href="">Tuyển dụng</a></li>
                            </ul>
                        </div>
                        <div className="thumb">
                            <h5>CHÍNH SÁCH</h5>
                            <ul>
                                <li><a href="">Chính sách bảo hành</a></li>
                                <li><a href="">Chính sách thanh toán</a></li>
                                <li><a href="">Chính sách giao hàng</a></li>
                                <li><a href="">Chính sách bảo mật</a></li>
                            </ul>
                        </div>
                        <div className="thumb">
                            <h5>THÔNG TIN</h5>
                            <ul>
                                <li><a href="">Hệ thống cửa hàng</a></li>
                                <li><a href="">Trung tâm bảo hành</a></li>
                            </ul>
                        </div>
                        <div className="info">
                            <h5>TỔNG ĐÀI HỖ TRỢ (MIỄN PHÍ CUỘC GỌI)</h5>
                            <ul>
                                <li>Gọi mua: <a href="">1900.0001</a> (8:00 - 21:00)</li>
                                <li>CSKH: <a href="">1900.0002</a> (8:00 - 21:00)</li>
                                <li>Email: <a href="">cskh@gamingshop.com</a></li>
                                <li>Sale: <a href="">Sale ưu đãi</a></li>
                            </ul>
                        </div>
                        <div className="ship-pay">
                            <div className="ship">
                                <h5>ĐƠN VỊ VẬN CHUYỂN</h5>
                                <div className="img">
                                    <ul>
                                        <li>
                                            <img src="https://theme.hstatic.net/200000722513/1001090675/14/ship_1.png?v=2583" alt="" /></li>
                                        <li>
                                            <img src="https://theme.hstatic.net/200000722513/1001090675/14/ship_2.png?v=2583" alt="" />
                                        </li>
                                        <li>
                                            <img src="https://theme.hstatic.net/200000722513/1001090675/14/ship_3.png?v=2583" alt="" />
                                        </li>
                                        <li>
                                            <img src="https://theme.hstatic.net/200000722513/1001090675/14/ship_4.png?v=2583" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pay">
                                <h5>CÁCH THỨC THANH TOÁN</h5>
                                <div className="img">
                                    <ul>
                                        <li><img src="https://theme.hstatic.net/200000722513/1001090675/14/pay_1.png?v=2583" alt="" /></li>
                                        <li><img src="https://theme.hstatic.net/200000722513/1001090675/14/pay_2.png?v=2583" alt="" /></li>
                                        <li><img src="https://theme.hstatic.net/200000722513/1001090675/14/pay_3.png?v=2583" alt="" /></li>
                                        <li><img src="https://theme.hstatic.net/200000722513/1001090675/14/pay_4.png?v=2583" alt="" /></li>
                                        <li><img src="https://theme.hstatic.net/200000722513/1001090675/14/pay_5.png?v=2583" alt="" /></li>
                                        <li><img src="https://theme.hstatic.net/200000722513/1001090675/14/pay_6.png?v=2583" alt="" /></li>
                                        <li><img src="https://theme.hstatic.net/200000722513/1001090675/14/pay_7.png?v=2583" alt="" /></li>
                                        <li><img src="https://theme.hstatic.net/200000722513/1001090675/14/pay_8.png?v=2583" alt="" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="footer-bottom">
                    <div className="infoUs">
                        <h5>KẾT NỐI VỚI CHÚNG TÔI:</h5>
                        <ul>
                            <li><a href=""><img src="https://file.hstatic.net/200000636033/file/facebook_1_0e31d70174824ea184c759534430deec.png" alt="" /></a></li>
                            <li><a href=""><img src="https://file.hstatic.net/200000722513/file/tiktok-logo_fe1e020f470a4d679064cec31bc676e4.png" alt="" /></a></li>
                            <li><a href=""><img src="https://file.hstatic.net/200000636033/file/youtube_1_d8de1f41ca614424aca55aa0c2791684.png" alt="" /></a></li>
                            <li><a href=""><img src="https://file.hstatic.net/200000636033/file/group_1_54d23abd89b74ead806840aa9458661d.png" alt="" /></a></li>
                        </ul>
                    </div>
                    <div className="iconF">
                        <img src="https://theme.hstatic.net/200000722513/1001090675/14/logo-bct.png?v=2605" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterComponent;