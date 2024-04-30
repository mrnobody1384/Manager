import React, { useState } from "react";
import "./Items.css";

import Item from "../Item/Item";

function Items({ data, reload }) {
  return (
    <div>
      <table>
        {/* <thead> */}
        <tr>
          <th>ردیف</th>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>کد ملی </th>
          <th className="operation-th">عملیات</th>
        </tr>
        {
          // console.log(da)
          data?.length > 0
            ? data.map((item, index) => {
                return (
                  <Item data={item} index={index} reload={reload} key={index} />
                );
              })
            : null
        }
      </table>
    </div>
  );
}

export default Items;
