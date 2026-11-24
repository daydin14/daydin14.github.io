import { resolveTechTag, TECH_CATALOG } from '../data/techTags';

export const PROJECT_CATEGORIES = ['Recent', 'All', 'Udemy', 'GA', 'SJU'];

export function parseCategory(value) {
  if (!value) return 'All';
  const match = PROJECT_CATEGORIES.find(
    (category) => category.toLowerCase() === String(value).trim().toLowerCase(),
  );
  return match || 'All';
}

export function parseSort(value) {
  return String(value || '').trim().toLowerCase() === 'newest' ? 'newest' : 'featured';
}

export function parseTechParam(value) {
  if (!value) return [];
  const slugs = [];
  const seen = new Set();
  String(value).split(',').forEach((part) => {
    const resolved = resolveTechTag(part);
    if (!resolved || seen.has(resolved.slug)) return;
    seen.add(resolved.slug);
    slugs.push(resolved.slug);
  });
  return slugs;
}

export function projectTechSlugs(project) {
  const slugs = [];
  const seen = new Set();
  (project.tags || []).forEach((tag) => {
    const resolved = resolveTechTag(tag);
    if (!resolved || seen.has(resolved.slug)) return;
    seen.add(resolved.slug);
    slugs.push(resolved.slug);
  });
  return slugs;
}

export function filterProjects(projects, { category = 'All', techSlugs = [] } = {}) {
  const selected = new Set(techSlugs);
  return projects.filter((project) => {
    const categoryMatches = category === 'All' || project.category === category;
    if (!categoryMatches) return false;
    if (selected.size === 0) return true;
    return projectTechSlugs(project).some((slug) => selected.has(slug));
  });
}

export function getTechOptions(projects, extraSlugs = []) {
  const counts = new Map();
  projects.forEach((project) => {
    projectTechSlugs(project).forEach((slug) => {
      counts.set(slug, (counts.get(slug) || 0) + 1);
    });
  });
  extraSlugs.forEach((slug) => {
    if (!counts.has(slug)) counts.set(slug, 0);
  });

  return TECH_CATALOG
    .filter((tag) => counts.has(tag.slug))
    .map((tag) => ({
      slug: tag.slug,
      label: tag.label,
      count: counts.get(tag.slug),
    }));
}

export function sortProjects(projects, sort, featuredOrder) {
  if (sort !== 'newest') return projects;
  return [...projects].sort((left, right) => {
    const byDate = String(right.date || '').localeCompare(String(left.date || ''));
    if (byDate !== 0) return byDate;
    return (featuredOrder.get(left.title) ?? 0) - (featuredOrder.get(right.title) ?? 0);
  });
}
