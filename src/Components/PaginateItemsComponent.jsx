import CardComponent from "./CardComponent";

function PaginateItemsComponent({ currentItems }) {
    // console.log(currentItems);
    return (<>
        {  currentItems &&
            currentItems.map((item, key) => (
                    <div className="box-product" key={key}>
                        <CardComponent  item={item}/>
                    </div>
            ))}
    </>);
}

export default PaginateItemsComponent;