import { useRef, useState } from "react";
import {
  ReactFlow,
  Background,
  useReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";

const users = Array.from({ length: 20 }, (_, i) => ({
  id: `user-${i + 1}`,
  name: `User ${i + 1}`,
}));

const levels = [
  [users[0]], // Root User
  users.slice(1, 6), // Level 1
  users.slice(6, 20), // Level 2
];

const nodeWidth = 150;
const nodeHeight = 60;
const spacingX = 200;
const spacingY = 150;

const nodes = levels.flatMap((level, i) =>
  level.map((user, j) => ({
    id: user.id,
    position: {
      x: j * spacingX - (level.length * spacingX) / 2,
      y: i * spacingY,
    },
    data: { label: user.name },
    draggable: false,
    deletable: false,
    handles: [],
    style: {
      width: nodeWidth,
      height: nodeHeight,
      textAlign: "center",
      fontSize: "16px",
      backgroundColor: "#cbc",
      fontFamily: "Lexend",
      fontWeight: "300",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
      border: "1px solid #ccc",
      padding: "10px",
      cursor: "pointer",
    },
  }))
);

const edges = levels.slice(1).flatMap((level, i) =>
  level.map((user) => ({
    id: `edge-${user.id}`,
    source: levels[i][0].id,
    target: user.id,
    type: "smoothstep",
    animated: false,
    selectable: false,
  }))
);

const ReferralsChild = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  // const reactFlow = useReactFlow();
  const stackRef = useRef(null);
  const handleNodeClick = (_, node) => {
    setSelectedNode(node.id);
  };

  return (
    <Stack ref={stackRef} flexGrow={1} width={"100%"} position={"relative"}>
      <Dialog
        onBackdropClick={() => setSelectedNode(null)}
        open={!!selectedNode}
        disablePortal
        disableAutoFocus
        container={stackRef.current}
        PaperProps={{
          elevation: 0,
          sx: {
            width: "30%",
            height: "50%",
            backgroundColor: "#fff",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: "Lexend",
            fontWeight: "300",
            fontSize: "20px",
            color: "#000",
          }}
        >
          {selectedNode &&
            nodes.find((node) => node.id === selectedNode)?.data.label}
        </DialogTitle>
        <DialogContent>
          <Stack width={"100%"} gap={2}>
            <Stack direction={"row"} width={"100%"}>
              <Typography
                flexShrink={0}
                width={"50%"}
                variant="body1"
                fontSize={14}
              >
                Date Joined
              </Typography>
              <Typography variant="body1" fontSize={14}>
                2023-10-10
              </Typography>
            </Stack>
            <Stack direction={"row"} width={"100%"}>
              <Typography
                flexShrink={0}
                width={"50%"}
                variant="body1"
                fontSize={14}
              >
                Total Earnings
              </Typography>
              <Typography variant="body1" fontSize={14}>
                $4500
              </Typography>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
      <Stack direction={"row"} width={"100%"} justifyContent={"center"}>
        <Typography variant="body1" fontSize={18}>Your referral code is CGSTRJH</Typography>
      </Stack>
      <div style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
        <ReactFlow
          // panOnDrag={false}
          onClickCapture={() => setSelectedNode(null)}
          proOptions={{ hideAttribution: true }}
          nodes={nodes.map((node) => ({
            ...node,
            style: {
              ...node.style,
              backgroundColor: selectedNode === node.id ? "#1058DF" : "#ccc",
              color: selectedNode === node.id ? "#fff" : "#000",
            },
          }))}
          edges={edges}
          onNodeClick={handleNodeClick}
          fitView
          nodesDraggable={false}
          minZoom={0.3}
          maxZoom={0.8}
          fitViewOptions={{ minZoom: 0.3, maxZoom: 0.3 }}
        >
          <Background size={3} gap={50} color="#bbb" />
        </ReactFlow>
      </div>
    </Stack>
  );
};

const Referrals = () => (
  <ReactFlowProvider>
    <ReferralsChild />
  </ReactFlowProvider>
);

export default Referrals;
