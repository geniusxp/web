import projectsSpreadsheet from "./projects-spreadsheet";

export function getSimilarity(interests: string[], segments: string[]): number {
  const interestsSet = new Set(interests);
  const segmentsSet = new Set(segments);

  const intersection = [...interestsSet].filter((x) => segmentsSet.has(x));
  const union = new Set([...interestsSet, ...segmentsSet]);

  return intersection.length / union.size;
}

export function getEventRecommendations(event: string, interests: string[]) {
  return projectsSpreadsheet
    .map((project) => {
      const segmentsArray = (project.segmentos as string)
        .split(";")
        .map((seg) => seg.trim());

      return {
        ...project,
        segmentos: segmentsArray,
        similaridade: getSimilarity(interests, segmentsArray),
      };
    })
    .sort((a, b) => (b.similaridade ?? 0) - (a.similaridade ?? 0))
    .filter((projeto) => (projeto.similaridade ?? 0) > 0)
    .slice(0, 5);
}
