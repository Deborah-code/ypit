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
      <div
        id="substack-feed-embed"
        className="text-start md:max-w-[70%] m-auto"
        data-testid="substack-feed-embed"
      ></div>
      <Script id="substack-feed-script" data-testid="substack-feed-script">
        {`
                    window.SubstackFeedWidget = {
                        substackUrl: "someoneintech.substack.com",
                        posts: 10,
                        layout: "center",
                        colors: {
                            primary: "#404040",
                            secondary: "#808080",
                            background: "#FFFFFF",
                        }
                    };
                `}
      </Script>
    </main>
  );
};

export default Blog;
