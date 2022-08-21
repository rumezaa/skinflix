import React, { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";
import HorizontalProductCard from "../products/HorizontalProductCard";
import axios from "axios";
import MultipleSelectChip from "../shared/dropdown";


const HomePage = () => {
  const gridStyles = "md:grid grid-cols-3 lg:grid-cols-4 gap-10 justify-self-center";
  const flexStyles = "flex flex-col lg:w-5/6 md:w-full";
  const [ screenSize, setScreenSize ] = useState(window.innerWidth)
  const [currentSort, setCurrentSort] = useState(flexStyles);
  const [products, setProducts] = useState();
  const [productType, setProductType] = useState([]);

  const GridIcon = ({active}) => {
    return (
      <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={active || "grey"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
    );
  }

  const RowIcon = ({active}) => {
    return (
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5897 8.97442C21.7949 8.25647 22 7.23083 22 6.41032C22 5.5898 21.7949 4.56416 21.5897 3.84621C21.4872 3.0257 20.7692 2.51288 20.0513 2.41032C18.5128 2.30775 14.6154 2.00006 11.9487 2.00006C9.28205 2.00006 5.38461 2.30775 3.84615 2.41032C3.02564 2.51288 2.41026 3.0257 2.30769 3.74365C2.10256 4.4616 2 5.48724 2 6.30775C2 7.12826 2.20513 8.15391 2.30769 8.87185C2.51282 9.5898 3.1282 10.2052 3.84615 10.2052C5.38461 10.3078 9.28205 10.6154 11.9487 10.6154C14.6154 10.6154 18.5128 10.3078 20.0513 10.2052C20.7692 10.3078 21.4872 9.79493 21.5897 8.97442Z" fill={active || "grey"}/>
<path d="M20.0512 21.6923C20.8717 21.5898 21.4871 21.077 21.5896 20.359C21.7948 19.6411 21.8973 18.6154 21.8973 17.7949C21.8973 16.9744 21.7948 15.8462 21.5896 15.1282C21.3845 14.4103 20.7691 13.7949 20.0512 13.7949C18.5127 13.6923 14.6153 13.3847 11.9486 13.3847C9.28195 13.3847 5.38451 13.6923 3.84605 13.7949C3.02554 13.8975 2.41015 14.4103 2.30759 15.1282C2.10246 15.8462 1.9999 16.8718 1.9999 17.6923C1.9999 18.5129 2.20503 19.5385 2.30759 20.2564C2.51272 20.9744 3.1281 21.5898 3.84605 21.5898C5.38451 21.6923 9.28195 22 11.9486 22C14.6153 22 18.5127 21.7949 20.0512 21.6923Z" fill={active || "grey"}/>
</svg>
    )
  }

  useEffect(() => {
    axios({
      method: "get",
      url: `/products.json`,
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize( window.innerWidth );
    });
  }, []);

  const SortView = ({ product }) => {
        if (screenSize < 768) {setCurrentSort(gridStyles)}
    return (
      (currentSort == flexStyles && (
        <HorizontalProductCard product={product} />
      )) || <ProductCard product={product} />
    );
  };

  const Sort = () => {
 
    return (
      <div className="hidden md:flex flex-col gap-5 mr-10 items-center" >
        <button class="flex flex-row items-center" onClick={() => setCurrentSort(gridStyles)}><GridIcon active={currentSort == gridStyles && "#5D3762"} /></button>
        <button class="flex flex-row items-center" onClick={() => setCurrentSort(flexStyles)}><RowIcon active={currentSort == flexStyles && "#5D3762"} /></button>
      </div>
    );
  };


  return (
    <div className={`flex flex-col justify-center items-center`}>
      <div className="flex flex-row-reverse w-full px-5 pt-10 md:px-20 md:pt-16 justify-between">
        <MultipleSelectChip
          productType={productType}
          setProductType={setProductType}
        />
        <Sort className="hidden md:block"/>
      </div>
      <div className={`${currentSort} pb-20 `}>
        {products?.map(
          (product) =>
            (!!productType.length &&
              productType.map(
                (p) =>
                  product.product_type == p && <SortView product={product} />
              )) || <SortView product={product} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
