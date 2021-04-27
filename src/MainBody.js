import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
// import StreamingTable from "./StreamingTable";
import VirtualizedRows from "./VirtualizedRows";
// import ColumnReorderTable from "./ColumnReorderTable";
// import SortingTable from "./SortingTable";
// import StickyTable from "./StickyTable";
// import ResizerTable from "./ResizerTable";

const MainBody = () => {
  return (
    <MainBodyContainer>
      <Banner />
      {/* <ColumnReorderTable /> */}
      {/* <StickyTable /> */}
      {/* <SortingTable /> */}
      {/* <ResizerTable /> */}
      {/* <StreamingTable /> */}
      <VirtualizedRows />
    </MainBodyContainer>
  );
};

export default MainBody;

const MainBodyContainer = styled.div`
  grid-column: 2 / 3;
`;
