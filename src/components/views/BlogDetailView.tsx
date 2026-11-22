import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  HelpCircle,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { BlogPost } from "@/data/blogs";
import InquiryForm from "@/components/InquiryForm";

interface BlogDetailViewProps {
  post: BlogPost;
}

function renderFormattedInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function BlogDetailView({ post }: BlogDetailViewProps) {
  const whatsappUrl = `https://wa.me/919990648881?text=Hello,%20I%20read%20your%20article%20"${encodeURIComponent(
    post.title
  )}"%20and%20would%20like%20a%20quote.`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDesc,
    image: `https://autistaprivatoindia.it${post.image}`,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Private Driver India",
      logo: {
        "@type": "ImageObject",
        url: "https://autistaprivatoindia.it/images/tour/jaipur.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://autistaprivatoindia.it/${post.legacyUrl}`,
    },
  };

  const faqSchema =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }
      : null;

  return (
    <div>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Header */}
      <section className="bg-gradient-to-b from-amber-50/70 via-white to-amber-50/30 text-slate-900 py-16 sm:py-20 border-b border-amber-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <nav className="text-xs text-slate-500 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Guides &amp; Blog</span>
            <span>/</span>
            <span className="text-amber-800 font-semibold truncate">{post.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 mb-4 font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-600" />
              <span>{post.datePublished}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>{post.readTime}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-amber-600" />
              <span>{post.author}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {post.subtitle}
          </p>
        </div>
      </section>

      {/* Main Article Body */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article 8 Cols */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden mb-8 bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Formatted Text Content - Luxury Editorial Layout */}
              <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-slate-800 text-sm sm:text-base font-medium leading-relaxed mb-8 shadow-2xs">
                  {post.excerpt}
                </div>

                {post.content
                  .replace(/\r\n/g, "\n")
                  .replace(/^(### [^\n]+)/gm, "\n\n$1\n\n")
                  .replace(/^(---)/gm, "\n\n$1\n\n")
                  .split(/\n{2,}/)
                  .map((block, idx) => {
                    const trimmed = block.trim();
                    if (!trimmed) return null;

                    if (trimmed.startsWith("### ")) {
                      return (
                        <div key={idx} className="pt-6 pb-2">
                          <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 border-l-4 border-amber-600 pl-4 leading-snug">
                            {trimmed.replace("### ", "")}
                          </h3>
                        </div>
                      );
                    }

                  if (trimmed.startsWith("---")) {
                    return <hr key={idx} className="my-8 border-amber-200/60" />;
                  }

                  const lines = trimmed.split("\n");
                  const hasBulletsInside = lines.some((l) => l.trim().startsWith("- ") || l.trim().startsWith("* "));
                  if (hasBulletsInside) {
                    return (
                      <div key={idx} className="space-y-3.5 my-4">
                        {lines.map((line, lIdx) => {
                          const lTrim = line.trim();
                          if (lTrim.startsWith("- ") || lTrim.startsWith("* ")) {
                            return (
                              <div key={lIdx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed pl-3">
                                <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
                                <div>{renderFormattedInline(lTrim.replace(/^[-*]\s+/, ""))}</div>
                              </div>
                            );
                          }
                          if (lTrim.length === 0) return null;
                          return (
                            <p key={lIdx} className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                              {renderFormattedInline(lTrim)}
                            </p>
                          );
                        })}
                      </div>
                    );
                  }

                  return (
                    <p key={idx} className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                      {renderFormattedInline(trimmed)}
                    </p>
                  );
                })}
              </div>

              {/* FAQs in Blog */}
              {post.faqs.length > 0 && (
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-amber-500" />
                    <span>Frequently Asked Questions</span>
                  </h3>
                  <div className="space-y-4">
                    {post.faqs.map((f, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-bold text-sm text-slate-900 mb-1">{f.q}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right 4 Cols: Inquiry Box */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <InquiryForm defaultTourTitle={`Inquiry from ${post.title}`} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
