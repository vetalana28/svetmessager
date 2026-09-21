export type ContextMenuItem =
  | { type: "item"; icon?: string; text: string; onClick: () => void }
  | { type: "separator" };