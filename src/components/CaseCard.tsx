import Link from 'next/link';
import { SceneImage } from './SceneImage';
import type { ProjectCase } from '@/data/cases';

export function CaseCard({ project, index = 0 }: { project: ProjectCase; index?: number }) {
  return (
    <Link
      href={`/cases/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-forest-100 bg-white shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 ease-premium group-hover:scale-105">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          ) : (
            <SceneImage tone={project.tone} variant="after" seed={index} className="h-full w-full object-cover" rounded={false} />
          )}
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-cream-50/95 px-3 py-1 text-xs font-semibold text-forest-800 shadow-soft backdrop-blur">
          {project.category}
        </span>
        {project.highlight && (
          <span className="absolute bottom-4 left-4 rounded-full bg-wood-500/95 px-3 py-1 text-xs font-semibold text-white shadow-soft">
            {project.highlight}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-medium text-forest-500">
          <MapPin />
          {project.location}
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold text-forest-900 group-hover:text-forest-700">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-600">{project.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-wood-600">
          Se projekt
          <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

function MapPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10Z" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}
