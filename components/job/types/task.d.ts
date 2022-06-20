import { TrackTypeBasic } from "./track";

type NodeType = "START_NODE" | "END_NODE" | "INTERMEDIATE_NODE";
type TaskStatus = "SUCCESS" | "PENDING";

export interface TaskTypeBasic {
  id: string;
  name: string;
  displayOrder: number;
  timestamp: number;
  nodeType: NodeType;
  status: TaskStatus;
}

export interface TaskType extends TaskTypeBasic {
  isActive: boolean;
  track: TrackTypeBasic;
  taskPrev: TaskTypeBasic[];
  taskPrevStatus: TaskStatus[];
}
