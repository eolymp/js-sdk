// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Enrollment = {
  id?: string;
  parentId?: string;
  displayName?: string;
  memberId?: string;
  groupId?: string;
  enrolledAt?: string;
  expiresAt?: string;
  assignments?: Enrollment_Assignment[];
}

export type Enrollment_Assignment = {
  moduleId?: string;
  startAfter?: string;
  completeBefore?: string;
  duration?: number;
}

