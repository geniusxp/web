import * as xlsx from "xlsx";
import fs from "node:fs";
import path from "node:path";
import type { Project } from "@/models/Project";

export function getProjectsSpreadsheet() {
  const file = fs
    .readFileSync(
      path.join(
        process.cwd(),
        "src/lib/ia/event-recommendations",
        "geniusxp-database-next-projects.xlsx"
      )
    )
    .toString("binary");

  const workbook = xlsx.read(file, { type: "binary" });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  return xlsx.utils.sheet_to_json<Project>(sheet);
}

declare const globalThis: {
  spreadsheetGlobal: ReturnType<typeof getProjectsSpreadsheet>;
} & typeof global;

const projectsSpreadsheet =
  globalThis.spreadsheetGlobal ?? getProjectsSpreadsheet();

export default projectsSpreadsheet;

if (process.env.NODE_ENV !== "production")
  globalThis.spreadsheetGlobal = projectsSpreadsheet;
