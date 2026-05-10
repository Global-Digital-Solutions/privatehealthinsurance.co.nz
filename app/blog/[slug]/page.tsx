import Link from "next/link";
import { BLOG_POSTS } from "../../../data/blog";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import QuoteForm from "../../components/QuoteForm";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  return {
    title: `${post?.title} | PrivateHealthInsurance.co.nz`,
    description: post?.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return <div className="text-center py-20">Post not found</div>;
  }

  // Simple content renderer — converts markdown-like content to HTML
  const renderContent = (content: string) => {
    return content.split("\n\n").map((paragraph, idx) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-4">
            {paragraph.replace("## ", "")}
          </h2>
        );
      }
      if (paragraph.startsWith("**") || paragraph.includes("**")) {
        const parts = paragraph.split(/\*\*(.+?)\*\*/g);
        return (
          <p key={idx} className="text-gray-300 leading-relaxed mb-4">
            {parts.map((part, i) => (i % 2 === 0 ? part : <strong key={i} className="font-semibold text-white">{part}</strong>))}
          </p>
        );
      }
      if (paragraph.startsWith("| ")) {
        // Simple table
        const rows = paragraph.split("\n").filter((row) => row.trim());
        return (
          <div key={idx} className="overflow-x-auto mb-6 border border-gray-700 rounded-lg">
            <table className="w-full text-sm">
              <tbody>
                {rows.map((row, rIdx) => {
                  if (row.includes("---|")) return null;
                  const cells = row.split("|").slice(1, -1);
                  return (
                    <tr key={rIdx} className={rIdx === 0 ? "bg-gray-800 border-b border-gray-700" : "border-b border-gray-700 hover:bg-gray-800"}>
                      {cells.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-3 text-gray-300">
                          {cell.trim()}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
      if (paragraph.startsWith("- ")) {
        const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
        return (
          <ul key={idx} className="list-disc list-inside space-y-2 text-gray-300 mb-4 ml-2">
            {items.map((item, iIdx) => (
              <li key={iIdx}>{item.replace("- ", "")}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={idx} className="text-gray-300 leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  const relatedPosts = BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gray-900 border-b border-gray-800 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="px-3 py-1 bg-sky-500 text-white text-xs font-semibold rounded-full">{post.category}</span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{post.title}</h1>
          <p className="text-lg text-gray-400 mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{new Date(post.date).toLocaleDateString("en-NZ", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-invert max-w-none">{renderContent(post.content)}</article>
          </div>

          {/* Sidebar */}
          <aside>
            {/* Quote Form */}
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-8 sticky top-4">
              <h3 className="text-xl font-bold text-white mb-4">Get a Quote</h3>
              <p className="text-gray-400 text-sm mb-6">Compare health insurance quotes from all major NZ providers.</p>
              <QuoteForm />
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relPost) => (
                    <Link key={relPost.slug} href={`/blog/${relPost.slug}`}>
                      <div className="group cursor-pointer">
                        <h4 className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors line-clamp-2 mb-1">{relPost.title}</h4>
                        <p className="text-xs text-gray-500">{relPost.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-gray-800 border-t border-gray-700 py-12 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BLOG_POSTS[Math.max(0, BLOG_POSTS.findIndex((p) => p.slug === post.slug) - 1)]?.slug && (
              <Link href={`/blog/${BLOG_POSTS[Math.max(0, BLOG_POSTS.findIndex((p) => p.slug === post.slug) - 1)].slug}`}>
                <div className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer">
                  <p className="text-gray-400 text-sm mb-1">← Previous</p>
                  <p className="text-white font-semibold">{BLOG_POSTS[Math.max(0, BLOG_POSTS.findIndex((p) => p.slug === post.slug) - 1)].title}</p>
                </div>
              </Link>
            )}
            {BLOG_POSTS[Math.min(BLOG_POSTS.length - 1, BLOG_POSTS.findIndex((p) => p.slug === post.slug) + 1)]?.slug && BLOG_POSTS[BLOG_POSTS.findIndex((p) => p.slug === post.slug) + 1]?.slug !== post.slug && (
              <Link href={`/blog/${BLOG_POSTS[Math.min(BLOG_POSTS.length - 1, BLOG_POSTS.findIndex((p) => p.slug === post.slug) + 1)].slug}`}>
                <div className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer text-right">
                  <p className="text-gray-400 text-sm mb-1">Next →</p>
                  <p className="text-white font-semibold">{BLOG_POSTS[Math.min(BLOG_POSTS.length - 1, BLOG_POSTS.findIndex((p) => p.slug === post.slug) + 1)].title}</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
