import _ from "lodash";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNavbarData, fetchAllData } from "../store/action/dataSlice.action";

const useLanding = () => {
  const { allData, navbar } = useSelector((state) => state.data);

  //   console.log(navbar, "*********");

  const dispatch = useDispatch();

  useEffect(() => {
    setNavbarData();
  }, [allData]);

  const setNavbarData = () => {
    if (_.size(allData) > 0) {
      if (allData.navbar && _.size(navbar) === 0) {
        const data = allData.navbar.map((item) => item.fields);
        console.log(data);
        dispatch(addNavbarData(data));
      }
    }
  };

  const fetchData = () => {
    dispatch(fetchAllData());
  };

  return { fetchData };
};

export default useLanding;
