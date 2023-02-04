export interface Skill {
  _id: string;
  name: string;
  content: SkillContent[];
}

export interface SkillContent {
  _id: string;
  type: "image" | "icon";
  description: string;
  asset: string;
}
