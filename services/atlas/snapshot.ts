// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Attachment } from "./attachment"
import { Template } from "./code_template"
import { Editorial } from "./editorial"
import { Problem } from "./problem"
import { Script } from "./script"
import { Solution } from "./solution"
import { Statement } from "./statement"
import { Checker } from "./testing_checker"
import { TestingConfig } from "./testing_config"
import { Interactor } from "./testing_interactor"
import { Test } from "./testing_test"
import { Testset } from "./testing_testset"

export type Snapshot = {
  problem?: Problem;
  testing?: TestingConfig;
  checker?: Checker;
  interactor?: Interactor;
  statements?: Statement[];
  templates?: Template[];
  attachments?: Attachment[];
  testsets?: Testset[];
  tests?: Test[];
  editorials?: Editorial[];
  solutions?: Solution[];
  scripts?: Script[];
}

