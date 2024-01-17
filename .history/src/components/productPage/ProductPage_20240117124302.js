/** @format */

import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import AllProducts from "./AllProducts";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllBrands,
  getAllNutrition,
  getAllProducts,
  getProductType,
  getSkinCondition,
  getSkinType,
} from "../../Repository/Api";
import WithLoader from "../Wrapped/WithLoader";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [skinType, setSkinType] = useState([]);
  const [productType, setProductType] = useState([]);
  const [brands, setBrands] = useState([]);
  const [skinCondition, setSkinCondition] = useState([]);
  const [nutrition, setNutrition] = useState([]);
  const { type, id, name } = useParams();
  const [img, setImg] = useState("");
  const [load, setLoad] = useState(false);
  const [limit, setLimit] = useState(15);
  const [total, setTotal] = useState(0);

  const [search, setSearch] = useState("");

  const filterData = !search
    ? products
    : products?.filter((i) =>
        i?.name.toLowerCase().includes(search?.toLowerCase())
      );

  useEffect(() => {
    getSkinType(setSkinType);
    getProductType(setProductType);
    getAllBrands(setBrands);
    getSkinCondition(setSkinCondition);
    getAllNutrition(setNutrition);
  }, []);

  const url = `&${type}=${id}&limit=${limit}`;

  const productHandler = async () => {
    try {
      setLoad(true);
      await getAllProducts(setProducts, url, setTotal);
    } catch (e) {
      console.log(e);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [type]);

  useEffect(() => {
    productHandler();
  }, [url]);

  const navigate = useNavigate();

  useEffect(() => {
    if (products) {
      if (type === "skinTypeId") {
        setImg(products?.[0]?.skinTypeId?.image);
      } else if (type === "productTypeId") {
        setImg(products?.[0]?.productTypeId?.image);
      } else if (type === "brandId") {
        setImg(products?.[0]?.brandId?.image);
      } else if (type === "skinConditionId") {
        setImg(products?.[0]?.skinConditionId?.image);
      } else if (type === "nutritionId") {
        setImg(products?.[0]?.nutritionId?.image);
      } else {
        setImg("/Image/39.jpg");
      }
    } else {
      setImg("/Image/39.jpg");
    }
  }, [products, img]);

  const Component = () => {
    return (
      <AllProducts
        products={filterData}
        setLimit={setLimit}
        limit={limit}
        total={total}
      />
    );
  };

  return (
    <section>
      <div
        className="relative_product_container"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="content">
          <h1 className="text-6xl text-white text-center  z-50 font-light">
            {name}
          </h1>
        </div>
        <div className="Image">
          <img
            src="/asessts/back-button.svg"
            alt=""
            onClick={() => navigate(-1)}
          />
        </div>
      </div>

      <section className="Category_Product_Container">
        <div className="Main ">
          <h1 className="text-4xl text-center font-medium text-primary TItle_of">
            {name ? name : "All"} Products
          </h1>

          <div className=" flex gap-5 items-center text-xl border-b-2 pb-2   w-80 border-b-primary text-primary">
            <BiSearch className="text-3xl" />
            <input
              className="px-2 w-full"
              type="search"
              placeholder="Search Products...."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-shrink-0 justify-between items-start Item_Container ">
          <div className=" w-[30%] px-12 py-4 left_container">
            {skinType?.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-primary"> SKIN TYPE </h3>
                <div className="grid grid-flow-row gap-5 my-10">
                  {skinType?.map((item, index) => (
                    <label
                      key={`option${index}`}
                      className="flex items-center gap-4 text-xl break break-keep cursor-pointer"
                      htmlFor={item?.name}
                      onClick={() =>
                        navigate(
                          `/allproducts/skinTypeId/${item._id}/${item.name}`
                        )
                      }
                    >
                      {item?.name}
                    </label>
                  ))}
                  <hr className="bg-black h-1 my-5" />
                </div>
              </div>
            )}

            {productType?.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-primary">
                  {" "}
                  PRODUCT TYPE{" "}
                </h3>
                <div className="grid grid-flow-row gap-5 my-10">
                  {productType?.map((item, index) => (
                    <label
                      key={`option${index}`}
                      className="flex items-center gap-4 text-xl break break-keep cursor-pointer"
                      htmlFor={item?.name}
                      onClick={() =>
                        navigate(
                          `/allproducts/productTypeId/${item._id}/${item.name}`
                        )
                      }
                    >
                      {item?.name}
                    </label>
                  ))}
                  <hr className="bg-black h-1 my-5" />
                </div>
              </div>
            )}

            {brands?.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-primary">BRANDS</h3>
                <div className="grid grid-flow-row gap-5 my-10">
                  {brands?.map((item, index) => (
                    <label
                      key={`option${index}`}
                      className="flex items-center gap-4 text-xl break break-keep cursor-pointer"
                      htmlFor={item?.name}
                      onClick={() =>
                        navigate(
                          `/allproducts/brandId/${item._id}/${item.name}`
                        )
                      }
                    >
                      {item?.name}
                    </label>
                  ))}
                  <hr className="bg-black h-1 my-5" />
                </div>
              </div>
            )}

            {skinCondition?.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-primary">
                  SKIN CONDITIONS
                </h3>
                <div className="grid grid-flow-row gap-5 my-10">
                  {skinCondition?.map((item, index) => (
                    <label
                      key={`option${index}`}
                      className="flex items-center gap-4 text-xl break break-keep cursor-pointer"
                      htmlFor={item?.name}
                      onClick={() =>
                        navigate(
                          `/allproducts/skinConditionId/${item._id}/${item.name}`
                        )
                      }
                    >
                      {item?.name}
                    </label>
                  ))}
                  <hr className="bg-black h-1 my-5" />
                </div>
              </div>
            )}

            {nutrition?.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-primary">NUTRITION</h3>
                <div className="grid grid-flow-row gap-5 my-10">
                  {nutrition?.map((item, index) => (
                    <label
                      key={`option${index}`}
                      className="flex items-center gap-4 text-xl break break-keep cursor-pointer"
                      htmlFor={item?.name}
                      onClick={() =>
                        navigate(
                          `/allproducts/nutritionId/${item._id}/${item.name}`
                        )
                      }
                    >
                      {item?.name}
                    </label>
                  ))}
                  <hr className="bg-black h-1 my-5" />
                </div>
              </div>
            )}
          </div>
          <div className="w-full border-l-2 border-l-primary mb-20">
            <WithLoader Wrapped={Component} loading={load} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductPage;
