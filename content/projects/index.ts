import type { ComponentType } from "react"

import TestProjectContent from "./testProject"
import PolygonAiContent from "./polygonAi"
import ChessAiContent from "./chessAi"
import MidiManiContent from "./midiMani"
import NomenatorContent from "./nomenator"
import TrellisContent from "./trellis"

export type ProjectContentProps = { tags: string[] }

export const projectContent: Record<string, ComponentType<ProjectContentProps>> = {
  testProject: TestProjectContent,
  polygonAi: PolygonAiContent,
  chessAi: ChessAiContent,
  midiMani: MidiManiContent,
  nomenator: NomenatorContent,
  trellis: TrellisContent,
}
