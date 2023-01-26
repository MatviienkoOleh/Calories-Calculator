import React from "react";
import "./ViewResult.css";

const ViewResult = (props) => {
  let { calories, KDJ } = props;
  return (
    <div className="view_Result">
      {calories ? (
        <span>
          {calories} <span className="view_result_info">ккал</span>
        </span>
      ) : (
        <span>
          0 <span className="view_result_info">ккал</span>
        </span>
      )}

      {KDJ ? (
        <span>
          {KDJ} <span className="view_result_info">кДж</span>
        </span>
      ) : (
        <span>
          0 <span className="view_result_info">кДж</span>
        </span>
      )}
    </div>
  );
};

export default ViewResult;
