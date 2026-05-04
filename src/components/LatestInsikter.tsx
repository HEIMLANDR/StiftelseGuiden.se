import Link from "next/link";
import { absoluteImageUrl, getPosts } from "@/lib/networkr";

type Props = {
  limit?: number;
  heading?: string;
  subheading?: string;
};

const SV_DATE = new Intl.DateTimeFormat("sv-SE", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function formatDate(value: string) {
  const date = new Date(value.replace(" ", "T"));
  return Number.isNaN(date.getTime()) ? value : SV_DATE.format(date);
}

export default async function LatestInsikter({
  limit = 3,
  heading = "Senaste insikter",
  subheading = "Aktuella analyser och guider om stiftelser, fonder och bidrag.",
}: Props) {
  let posts;
  try {
    posts = await getPosts();
  } catch {
    return null;
  }

  if (!posts.length) return null;

  const sorted = [...posts]
    .sort(
      (a, b) =>
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
    )
    .slice(0, limit);

  return (
    <section className="bg-gray-50 border-y border-gray-200 py-12 md:py-16">
      <div className="container-padded">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="mb-2">{heading}</h2>
              <p className="text-base text-gray-600 max-w-2xl">{subheading}</p>
            </div>
            <Link
              href="/insikter/"
              className="btn btn-primary inline-flex items-center justify-center whitespace-nowrap"
            >
              Alla insikter →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {sorted.map((post) => {
              const cover = absoluteImageUrl(post.cover_image_url);
              return (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                >
                  <Link href={`/insikter/${post.slug}/`} className="block">
                    {cover && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={cover}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-40 object-cover"
                      />
                    )}
                  </Link>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="text-xs uppercase tracking-wide text-primary-600 font-semibold mb-2">
                      {post.category || "Insikt"} · {post.reading_time} min
                    </div>
                    <h3 className="text-lg font-semibold mb-2 leading-snug">
                      <Link
                        href={`/insikter/${post.slug}/`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-700 mb-3 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="text-xs text-gray-500 mt-auto">
                      {formatDate(post.published_at)}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
