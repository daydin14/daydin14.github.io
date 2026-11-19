import { useEffect, useId, useRef, useState } from 'react';

function chipClass(selected) {
  return `btn btn-sm ${selected ? 'btn-primary' : 'btn-outline'}`;
}

function TechChips({ techOptions, techSlugs, onTechToggle, onTechClear }) {
  const selected = new Set(techSlugs);
  return (
    <div className="hidden flex-wrap gap-2 md:flex" role="group" aria-label="Filter by technology">
      <button
        type="button"
        className={chipClass(techSlugs.length === 0)}
        aria-pressed={techSlugs.length === 0}
        onClick={onTechClear}
      >
        All
      </button>
      {techOptions.map((option) => {
        const isSelected = selected.has(option.slug);
        return (
          <button
            key={option.slug}
            type="button"
            className={chipClass(isSelected)}
            aria-pressed={isSelected}
            onClick={() => onTechToggle(option.slug)}
          >
            {`${option.label} (${option.count})`}
          </button>
        );
      })}
    </div>
  );
}

function TechMenu({ techOptions, techSlugs, onTechToggle, onTechClear }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const panelId = useId();
  const selected = new Set(techSlugs);
  const labels = techSlugs.map((slug) => techOptions.find((option) => option.slug === slug)?.label || slug);
  let summary = 'All technologies';
  if (labels.length === 1 || labels.length === 2) summary = labels.join(', ');
  if (labels.length > 2) summary = `${labels.slice(0, 2).join(', ')} +${labels.length - 2}`;

  useEffect(() => {
    if (!open) return undefined;
    function onPointerDown(event) {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    }
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className="relative md:hidden" ref={containerRef}>
      <button
        ref={buttonRef}
        type="button"
        className="btn btn-outline w-full justify-between"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`Technologies, ${summary}`}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="truncate">Tech: {summary}</span>
        <span aria-hidden="true">{open ? '▴' : '▾'}</span>
      </button>
      {open && (
        <div
          id={panelId}
          role="group"
          aria-label="Filter by technology"
          className="absolute left-0 right-0 z-30 mt-2 max-h-72 overflow-y-auto rounded-box bg-base-200 p-2 shadow-lg"
        >
          <button
            type="button"
            className={`${chipClass(techSlugs.length === 0)} mb-1 w-full justify-between`}
            aria-pressed={techSlugs.length === 0}
            onClick={onTechClear}
          >
            All
          </button>
          {techOptions.map((option) => {
            const isSelected = selected.has(option.slug);
            return (
              <button
                key={option.slug}
                type="button"
                className={`${chipClass(isSelected)} mb-1 w-full justify-between`}
                aria-pressed={isSelected}
                onClick={() => onTechToggle(option.slug)}
              >
                <span>{option.label}</span>
                <span>{` (${option.count})`}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function ProjectFilters({
  categories,
  category,
  techOptions,
  techSlugs,
  sort,
  onCategoryChange,
  onTechToggle,
  onTechClear,
  onSortChange,
}) {
  return (
    <div className="mb-8 flex flex-col gap-4">
      <div role="tablist" className="tabs tabs-box w-full flex-nowrap overflow-x-auto" aria-label="Project categories">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            className={`tab ${category === item ? 'tab-active' : ''}`}
            aria-selected={category === item}
            onClick={() => onCategoryChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0 flex-1">
          <TechMenu
            techOptions={techOptions}
            techSlugs={techSlugs}
            onTechToggle={onTechToggle}
            onTechClear={onTechClear}
          />
          <TechChips
            techOptions={techOptions}
            techSlugs={techSlugs}
            onTechToggle={onTechToggle}
            onTechClear={onTechClear}
          />
        </div>
        <label htmlFor="project-sort" className="flex shrink-0 items-center gap-2 text-sm font-medium">
          Sort
          <select
            id="project-sort"
            className="select select-bordered select-sm"
            value={sort}
            onChange={(event) => onSortChange(event.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
          </select>
        </label>
      </div>
    </div>
  );
}
