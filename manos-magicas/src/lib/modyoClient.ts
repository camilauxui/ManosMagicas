import modyo from "../data/modyo.mock.json";

export type Tutorial = (typeof modyo.tutorials)[number];

export function getCampaign() {
  return modyo.campaign;
}

export function getLegal() {
  return modyo.legal;
}

export function getTutorials(): Tutorial[] {
  return modyo.tutorials;
}

export function getTutorialById(id: string): Tutorial | undefined {
  return modyo.tutorials.find((t) => t.id === id);
}

export function getTutorialBySku(sku: string): Tutorial | undefined {
  return modyo.tutorials.find((t) => t.relatedSku === sku);
}
