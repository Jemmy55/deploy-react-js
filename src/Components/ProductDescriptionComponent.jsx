import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Context } from './ulits/AppContext';
ProductDescriptionComponent.propTypes = {
    active: PropTypes.string,
}
ProductDescriptionComponent.defaultProps = {
    active: "",
}
function ProductDescriptionComponent({ active }) {
    const { data } = useContext(Context)
    // console.log(data);
    return (
        <>
            <div className={`description ${active}`}>
                {
                    data.content && (data.content).map((value, key) => (
                        <div key={key}>
                            <h3>{value.h3}</h3>
                            <p style={{margin: "0"}}>{value.contect}</p>
                            <img src={value.img} alt="" />
                        </div>
                    ))
                }
                {/* <h3>Đánh giá chi tiết Laptop Asus ExpertBook B1400CEAE BV3186W</h3>
                <p></p>
                <img src="https://file.hstatic.net/200000722513/file/gearvn-laptop-asus-expertbook-b1400ceae-bv3186w-__7__b94cac66c62e40129111213cda2b1969_1024x1024.jpg" alt="" />
                <h3>Hiệu suất tiêu chuẩn trên Asus Expert Book B1400CEAE BV3186W</h3>
                <p>Asus Expert Book B1400CEAE BV3186W được trang bị bộ vi xử lý Intel Core i3-1115G4 Processor 3.0 GHz, cấu trúc 2 nhân 4 luồng cơ bản cho phép người dùng xử lý nhanh chóng các tác vụ học tập, ứng dụng văn phòng từ cơ bản đến phức tạp. Laptop cũng được đi kèm với dung lượng RAM 12GB chuẩn DDR4 (4GB có sẵn và 8GB được tặng khi mua laptop tại GEARVN) giúp bạn thực hiện mọi tác vụ nặng một cách dễ dàng và trơn tru.</p>
                <img src="https://file.hstatic.net/200000722513/file/gearvn-laptop-asus-expertbook-b1400ceae-bv3186w-__5__d7617807e85947bc9b194ed52362344b_1024x1024.jpg" alt="" />
                <h3></h3>
                <p>Thêm vào đó, việc sử dụng ổ cứng 256GB M.2 NVMe PCIe 3.0 SSD không những giúp việc lưu trữ các loại tài liệu trở nên thoải mái hơn, không lo hết bộ nhớ nhanh chóng mà nó còn giúp bạn khởi động thiết bị của bạn hoặc mở ứng dụng và phần mềm nhanh hơn với thời gian tải nhanh hơn.</p>
                <img src="" alt="" />
                <h3></h3>
                <p>Asus Expert Book B1400CEAE BV3186W khoác lên mình chiếc áo màu đen mạnh mẽ và hiện đại. Các cạnh được cắt xén vuông vức tạo cảm giác sang trọng và gọn gàng. Không những sở hữu thiết kế hiện đại, thu hút và tiện lợi, Asus Expert Book B1400CEAE BV3186W còn có khả năng gập mở 180 độ để bạn có thể dễ dàng sử dụng với bất cứ mục đích nào.</p>
                <img src="https://file.hstatic.net/200000722513/file/gearvn-laptop-asus-expertbook-b1400ceae-bv3186w-__6__822fa6502b7747e99a859d9ec7a4deb7_1024x1024.jpg" alt="" />
                <h3></h3>
                <p>Nhắm đến đối tượng học sinh, sinh viên, nhân viên văn phòng nên laptop đề cao tính tiện lợi và di động cao. Do đó, trọng lượng của máy được tối ưu tối đa, chỉ còn khoảng 1,45 kg. Người dùng có thể dễ dàng bỏ vào balo và mang đến bất cứ đâu.</p>
                <img src="https://file.hstatic.net/200000722513/file/gearvn-laptop-asus-expertbook-b1400ceae-bv3186w_3088468d6b344ad5958c02c2fe031dbb_1024x1024.jpg" alt="" />
                <h3></h3>
                <p>Asus Expert Book B1400CEAE BV3186W sở hữu kích thước màn hình 14 inch, độ phân giải HD. Tỷ lệ màn hình hiển thị so với khung máy lên đến 84%. Nếu bạn chỉ yêu cầu một màn hình với khả năng hiển thị ổn định để thực hiện những tác vụ nhẹ thì độ phân giải này trên Asus Expert Book B1400CEAE BV3186W hoàn toàn có thể chấp nhận được.</p>
                <img src="https://file.hstatic.net/200000722513/file/gearvn-laptop-asus-expertbook-b1400ceae-bv3186w-__4__cf130cb25e2e4203833e03d726dc3ab6_1024x1024.jpg" alt="" />
                <h3></h3>
                <p>Là một chiếc laptop văn phòng nên webcam cũng là một yếu tố quan trọng không thể thiếu. Bạn có thể kết nối với các ứng dụng thông dụng nhất hiện nay như Zoom, Zalo,... để thực hiện video HD phục vụ nhu cầu làm việc và học tập. Hơn nữa, webcam trên Asus Expert Book B1400CEAE BV3186W còn được trang bị webcam shutter, giúp bảo vệ quyền riêng tư của bạn một cách tuyệt đối.</p>
                <img src="https://file.hstatic.net/200000722513/file/gearvn-laptop-asus-expertbook-b1400ceae-bv3186w_106a65f801274be1b0173caf53d38edc_1024x1024.jpg" alt="" />
                <h3>Bàn phím tiêu chuẩn và bảo mật cao</h3>
                <p>Asus đã trang bị cho Expert Book B1400CEAE một bàn phím tiêu chuẩn nhất để tương thích với laptop siêu nhỏ, gọn và tiện lợi này. Bố cục phím bấm tiêu chuẩn, diện tích các phím lớn với khoảng cách hợp lý, kết hợp với độ phản hồi tốt, tạo nên trải nghiệm gõ phím tuyệt vời cho người dùng.</p>
                <img src="https://file.hstatic.net/200000722513/file/gearvn-laptop-asus-expertbook-b1400ceae-bv3186w-__2__3d6adb79b9624974b31c1b8e62c1e7f5_1024x1024.jpg" alt="" />
                <h3></h3>
                <p>Chưa dừng lại ở đó, hãng còn tích hợp thêm công nghệ bảo mật hàng đầu, công nghệ bảo mật bằng vân tay, cho người dùng để nâng cao khả năng bảo mật cho laptop cá nhân, đảm bảo an toàn tuyệt đối cho những dữ liệu quan trọng bên trong máy. Phần cảm biến vân tay được tích hợp chung với phím nguồn, mang đến sự tiện lợi trong việc thao tác cho người dùng.</p>
                <img src="https://file.hstatic.net/200000722513/file/gearvn-laptop-asus-expertbook-b1400ceae-bv3186w-__3__ab7dc01c1059483791faf8d426b4d66e_1024x1024.jpg" alt="" />
                <h3>Cổng kết nối đa dạng và pin trâu</h3>
                <p>Đặc thù công việc và nhu cầu là di chuyển nhiều nên một chiếc laptop có pin khỏe là một điểm cộng đặc biệt lớn. Với viên pin 3Cell-42WHr, người dùng sẽ có thể thoải mái sử dụng Asus Expert Book B1400CEAE BV3186W mà không cần lo lắng về vấn đề sạc pin. </p>
                <img src="https://file.hstatic.net/200000722513/file/gearvn-laptop-asus-expertbook-b1400ceae-bv3186w-__1__900167c7695d40bc89b647f58c8667bd_1024x1024.jpg" alt="" />
                <h3></h3>
                <p>Về cổng kết nối, dọc hai bên thân laptop sẽ là các cổng kết nối thông dụng nhất hiện nay như USB, VGA, HDMI và RJ45 giúp bạn dễ dàng kết nối các thiết bị ngoại vi khác và xuất hình ảnh ra các thiết bị khác một cách nhanh chóng.</p>
                <img src="" alt="" /> */}

            </div>
        </>
    );
}

export default ProductDescriptionComponent;