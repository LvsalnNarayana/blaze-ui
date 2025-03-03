import { UserButton } from "@clerk/clerk-react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const Docs = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          padding: "20px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <UserButton />
      </div>
      <SwaggerUI url="/custom-endpoints.json" withCredentials />
    </>
  );
};

export default Docs;
