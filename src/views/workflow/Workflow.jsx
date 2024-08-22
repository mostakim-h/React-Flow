import "reactflow/dist/style.css";
import ReactFlow, { addEdge, Background, Controls, MiniMap, useEdgesState, useNodesState } from "reactflow";
import { useCallback } from "react";
import { initEdges, initNodes } from "../../data/workflow.constants";
import { PaymentInit } from "./customComponents/PaymentInit";
import { PaymentCountry } from "./customComponents/PaymentCountry";
import { PaymentProvider } from "./customComponents/PaymentProvider";
import { PaymentProviderSelect } from "./customComponents/PaymentProviderSelect";
import { CustomEdge } from "./customComponents/CustomEdge";
import { generateUID } from "../../utils/uidGeneratore";

const nodeTypes = {
  'paymentInit': PaymentInit,
  'paymentCountry': PaymentCountry,
  'paymentProvider': PaymentProvider,
  'paymentProviderSelect': PaymentProviderSelect
}

const edgeTypes = {
  "customEdge" : CustomEdge
}

export const WorkFlow = () => {

  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges)

  const onConnect = useCallback((connection) => {
    const UID = generateUID(10)
    const edge = {...connection, animated: true, id: UID, type: "customEdge"}
    setEdges(prev => addEdge(edge, prev))
  }, [])


  return (
    <div style={{ height: "93vh", width: "100%", border: "1px solid black" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      >
        <Background/>
        <Controls />
        <MiniMap/>
      </ReactFlow>
    </div>
  );
};
