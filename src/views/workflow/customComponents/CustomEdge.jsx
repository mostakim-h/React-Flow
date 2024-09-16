import { X } from "react-feather";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow";

export const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  sourcePosition,
  targetX,
  targetY,
  targetPosition,
  markerEnd,
  style = {},
}) => {
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            pointerEvents: "all",
            background: '#d0d1d0',
            cursor: "pointer",
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            padding: '2px'
          }}
        >
          <X size={12} onClick={() => setEdges(prev => prev.filter(x => x.id !== id))}/>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};
