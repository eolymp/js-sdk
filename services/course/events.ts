// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Assignment } from "./assignment"
import { Material } from "./material"
import { Module } from "./module"
import { Student } from "./student"

export type ModuleChangedEvent = {
  courseId?: string;
  before?: Module;
  after?: Module;
}

export type MaterialChangedEvent = {
  courseId?: string;
  before?: Material;
  after?: Material;
}

export type StudentChangedEvent = {
  courseId?: string;
  before?: Student;
  after?: Student;
}

export type AssignmentChangedEvent = {
  courseId?: string;
  moduleId?: string;
  before?: Assignment;
  after?: Assignment;
}

