import { Outlet } from "react-router-dom";
import FooterComponent from "../Components/FooterComponent";
import HeaderComponent from "../Components/HeaderComponent";
import '../SCSS/BannerComponent.scss';
import TopScrollComponent from "../Components/ulits/TopScrollComponent";
function HomePage() {
    return (
        <>
            <div className="headerFixed">
                <HeaderComponent />
            </div>
            <Outlet />
            <FooterComponent />
            <TopScrollComponent />
        </>
    );
}

export default HomePage;