import Link from 'next/link';

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Brødkrumme" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-forest-500">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="font-medium text-forest-700" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="transition-colors hover:text-forest-800">
                    {item.name}
                  </Link>
                  <span aria-hidden className="text-forest-300">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
