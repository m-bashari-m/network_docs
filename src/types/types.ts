export type LevelTag = "Hard" | "Medium" | "Easy";

export type ConceptTag = "Security" | "General";

export type Tag = LevelTag | ConceptTag;

export type DocConfig = {
  filePath: string;
  title: string;
  description?: string;
  image?: string;
  tags?: Tag[];
};
