/* eslint-disable no-unused-vars */
export const RequestStatus = [
  {
    key: "Submitted",
    value: 1,
    title: "Not yet received",
    color: "#F79A23"
  },
  {
    key: "Received",
    value: 2,
    title: "Received",
    color: "#70B654"
  },
  {
    key: "Approved",
    value: 3,
    title: "Approved",
    color: "#3F9C35"
  },
  {
    key: "Rejected",
    value: 4,
    title: "Rejected",
    color: "#D9001B"
  },
  {
    key: "Cancelled",
    value: 5,
    title: "Withdrawn",
    color: "#02A7F1"
  }
];

export const DNVGLRecipientEmail: { email: string; text: string } = {
  email: "dcs@dnvgl.com",
  text: "DNV GL"
};

export enum ApprovalStatusEnum {
  Submitted = 1,
  Received,
  Approved,
  Rejected,
  Cancelled
}

export enum DataStatusEnum {
  NotReady = 1,
  PartiallyReady = 2,
  Ready = 3
}

export const Status = [
  {
    key: "needVerification",
    title: "Need Verification",
    color: "#E98300"
  },
  {
    key: "rejected",
    title: "Rejected",
    color: "#C4262E"
  },
  {
    key: "verified",
    title: "Need Verification",
    color: "#3F9C35"
  },
  {
    key: "waitForDNVGL",
    title: "Wait for DNVGL",
    color: "#0F204B"
  }
];
