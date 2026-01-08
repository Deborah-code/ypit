import Script from "next/script";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://substackapi.com/embeds/feed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main>
      <h1 className="pt-5 md:pt-1 text-3 md:text-2">TechTrailblazers</h1>
      <p className="max-w-[430px] m-auto pb-6 md:pb-4">
        Navigating the Future -{" "}
        <span className="text-purple-100">
          Insights, Stories, and Innovations
        </span>{" "}
        from Young Minds in Tech
      </p>
      <div data-supascribe-embed-id="707573068537" data-supascribe-feed></div>

      <script src="https://js.supascribe.com/v1/loader/e3384SFv6Lc9Jqy4xNEHpu7neuu2.js" async></script>
    </main>
  );
};

export default Blog;



// <!-- Supascribe Script -->
// 