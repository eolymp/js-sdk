// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Student = {
  id?: string;
  url?: string;
  memberId?: string;
  inactive?: boolean;
  assignAll?: boolean;
  overallProgress?: number;
  overallGrade?: number;
  grades?: Student_Grade[];
  assignments?: Student_Assignment[];
  updatedAt?: string;
  gradedAt?: string;
}

export type Student_Grade = {
  entryId?: string;
  progress?: number;
  grade?: number;
}

export type Student_Assignment = {
  moduleId?: string;
  status?: string;
  overallProgress?: number;
  overallGrade?: number;
  assignedAt?: string;
  startedAt?: string;
  completedAt?: string;
  startAfter?: string;
  completeBefore?: string;
  duration?: number;
  grades?: Student_Grade[];
}

