import { useContext, useEffect, useState } from 'react';
import '../SCSS/BannerComponent.scss';
import BannerComponent from "./BannerComponent";
import ContentBannerComponent from "./ContentBannerComponent";
import BannerSaleComponent from "./Sale/BannerSaleComponent";
import { Context } from './ulits/AppContext';
function ContentComponent() {
    const { banner } = useContext(Context)
    return (
        <div className="content">
            <BannerComponent api={banner} className="BannerTop" />
            <ContentBannerComponent />
            <BannerSaleComponent />
        </div>
    );
}

export default ContentComponent;