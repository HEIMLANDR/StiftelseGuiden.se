import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-gray-50 py-2 px-4 border-b border-gray-100">
      <div className="container mx-auto max-w-5xl">
        <nav aria-label="breadcrumb" className="text-sm text-secondary-600">
          <ol className="flex flex-wrap items-center space-x-2">
            <li className="inline-flex items-center">
              <Link href="/" className="hover:text-primary-600 transition-colors">
                Hem
              </Link>
            </li>
            
            {items.map((item, index) => (
              <li key={index} className="inline-flex items-center">
                <span className="mx-2 text-secondary-400">/</span>
                {index === items.length - 1 ? (
                  <span className="text-primary-800 font-[500]" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href || '#'} className="hover:text-primary-600 transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
