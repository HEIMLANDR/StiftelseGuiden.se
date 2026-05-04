import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import { PageSchema } from "@/components/SeoSchema";
import { createPageMetadata } from "@/lib/seo";
import { absoluteImageUrl, getPosts } from "@/lib/networkr";

const TITLE = "Insikter";
const DESCRIPTION =
  "Insikter, analyser och praktiska guider om svenska stiftelser, fonder och bidrag — uppdaterat löpande av StiftelseGuiden.";

export const metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "stiftelseinsikter, stiftelseanalys, fondnyheter, bidragsanalys, stiftelseförvaltning, svensk filantropi",
  path: "/insikter/",
});

const SV_DATE = new Intl.DateTimeFormat("sv-SE", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function formatDate(value: string) {
  const date = new Date(value.replace(" ", "T"));
  if (Number.isNaN(date.getTime())) return value;
  return SV_DATE.format(date);
}

export default async function InsikterIndex() {
  const posts = await getPosts();
  const sorted = [...posts].sort(
    (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
  );

  return (
    <>
      <PageSchema
        title={TITLE}
        description={DESCRIPTION}
        path="/insikter/"
        pageType="CollectionPage"
        breadcrumbs={[{ label: "Insikter" }]}
        collectionItems={sorted.map((post) => ({
          name: post.title,
          url: `/insikter/${post.slug}/`,
          description: post.excerpt,
        }))}
      />

      <Hero
        title="Insikter"
        subtitle="Analyser, guider och praktisk vägledning om svenska stiftelser, fonder och bidrag."
        size="small"
        pattern="dots"
      />

      <Breadcrumb items={[{ label: "Insikter" }]} />

      <div className="container-padded">
        <div className="max-w-5xl mx-auto py-8 md:py-12">
          {sorted.length === 0 ? (
            <p className="text-lg">Inga artiklar publicerade ännu. Återkom snart.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {sorted.map((post) => {
                const cover = absoluteImageUrl(post.cover_image_url);
                return (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                  >
                    <Link href={`/insikter/${post.slug}/`} className="block">
                      {cover && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={cover}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-48 object-cover"
                        />
                      )}
                    </Link>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="text-xs uppercase tracking-wide text-primary-600 font-semibold mb-2">
                        {post.category || "Insikt"} · {post.reading_time} min
                      </div>
                      <h2 className="text-xl font-semibold mb-3">
                        <Link
                          href={`/insikter/${post.slug}/`}
                          className="hover:text-primary-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-sm mb-4 flex-grow">{post.excerpt}</p>
                      <div className="text-xs text-gray-500 mt-auto">
                        Publicerad {formatDate(post.published_at)} · {post.author.name}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
