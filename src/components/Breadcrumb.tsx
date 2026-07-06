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
    <div className="border-y border-gray-100 bg-white py-3 px-4">
      <div className="container mx-auto max-w-5xl">
        <nav aria-label="breadcrumb" className="text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-x-2">
            <li className="inline-flex items-center">
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Hem
              </Link>
            </li>

            {items.map((item, index) => (
              <li key={index} className="inline-flex items-center gap-x-2">
                <span className="text-gray-300" aria-hidden="true">/</span>
                {index === items.length - 1 ? (
                  <span className="font-medium text-gray-900" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href || "#"} className="hover:text-gray-900 transition-colors">
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
