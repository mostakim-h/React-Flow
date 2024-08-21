import { Handle, Position } from "reactflow";

export const PaymentInit = ({ data }) => {
  return (
    <div style={{ background: "white", border: "1px solid #aa1fff", borderRadius: '8px', padding: "6px" }}>
      <div>
        <span style={{color: '#aa1fff', fontSize: '12px'}}>
          Payment Initialized
        </span>
        <br />
        <span>${data?.amount}</span>
      </div>
      <Handle type="source" position={Position.Right}/>
    </div>
  );
};
