import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/dataserverSlice";

export default function DataServer() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataserver);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {data.isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h1>Data from API Server</h1>
          {(data.data || []).map((item) => (
            <div key={item.id}>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
