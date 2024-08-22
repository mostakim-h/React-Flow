import ReactCountryFlag from "react-country-flag";
import { Position } from "reactflow";
import { CustomHandle } from "./CustomHandle";

export const PaymentCountry = ({ data }) => {
  const { currency, country, countryCode } = data;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        background: "white",
        border: "1px solid #bbbdbf",
        padding: "6px",
        gap: "6px",
        width: "155px",
      }}
    >
      <div>
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          aria-label={country}
          style={{ fontSize: "2em", lineHeight: "2em" }}
        />
      </div>
      <div style={{ fontSize: "12px" }}>
        <span>{country}</span>
        <br />
        <span>{currency}</span>
      </div>
      <CustomHandle type="target" position={Position.Left} />
      <CustomHandle type="source" position={Position.Right} />
    </div>
  );
};
