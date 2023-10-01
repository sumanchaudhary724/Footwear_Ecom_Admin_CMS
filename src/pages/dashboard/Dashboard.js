import React, { useCallback, useEffect, useState } from "react";
import { PieChart, Pie } from "recharts";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { RenderActiveShape } from "../../components/DashboardComponent/RenderActiveShape";
import { getAdminDisplayAction } from "../signin-signup/adminAction";
import { getCatsAction } from "../category/categoryAction";
import { getProductsAction } from "../product/productAction";

const data = [
  { name: "Darwin", value: 400 },
  { name: "Brisbane", value: 100 },
  { name: "Sydney", value: 200 },
  { name: "Melbroune", value: 300 },
  { name: "Tasmania", value: 250 },
  { name: "Parth", value: 600 },
  { name: "Adelaide", value: 150 },
];

export const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdminDisplayAction());
    dispatch(getCatsAction());
    dispatch(getProductsAction());
  }, [dispatch]);

  const { adminList } = useSelector((state) => state.adminInfo);
  const { cats } = useSelector((state) => state.catInfo);
  const { products } = useSelector((state) => state.productInfo);
  console.log("From Dashboard: ", adminList, cats);

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <AdminLayout title="Dashboard">
      <main className="gap-2 d-grid">
        <div className="topGraphInfo d-flex gap-3">
          <div className="border shadow-lg p-3 rounded">
            <p>{adminList.length} Admin found</p>
          </div>
          <div className="border shadow-lg p-3 rounded">
            <p>{products.length} Product found</p>
          </div>
          <div className="border shadow-lg p-3 rounded">
            <p>{cats.length} Category found</p>
          </div>
        </div>
        <div className="mainGraphInfo">
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={activeIndex}
              activeShape={<RenderActiveShape />}
              data={data}
              cx={200}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
            ></Pie>
          </PieChart>
        </div>
      </main>
    </AdminLayout>
  );
};
