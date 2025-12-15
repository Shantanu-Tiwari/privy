import React from "react";

export async function Pager(params: type) {
  return (
    <div className="pager">
      <div className="pager__prev">
        <a href={params.prev}>Prev</a>
      </div>
      <div className="pager__next">
        <a href={params.next}>Next</a>
      </div>
    </div>
  );
}
