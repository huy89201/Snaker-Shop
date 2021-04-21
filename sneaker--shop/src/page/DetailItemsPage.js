import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSneakersByIdAsync } from "../store/sneakerActions";

function DetailItemsPage() {
  const dispatch = useDispatch();
  const sneaker = useLocation();

  const sneakerId = sneaker.pathname.slice(16, sneaker.pathname.length);

  useEffect(() => {
    dispatch(getSneakersByIdAsync(sneakerId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sneakerItem = useSelector((state) => state.sneakers.sneaker);

  // console.log(sneakerItem);

  return (
    <div className="detail-iem-page">
      <h1>{sneakerItem.name}</h1>
    </div>
  )
}

export default DetailItemsPage;
