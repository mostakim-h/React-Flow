import { Handle } from "reactflow";

export const CustomHandle = (props) => {
  return (
    <Handle
      style={{
        width: "7px",
        height: "7px",
        border: "1px solid black",
        background: 'white'
      }}
      {...props}
    />
  );
};
