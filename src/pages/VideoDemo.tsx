import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const VideoDemo = () => {
  const navigate = useNavigate();
  const location = useLocation() as { state?: { title?: string; url?: string } };
  const title = location.state?.title ?? "Demo";
  const url = location.state?.url ?? "";

  return (
    <section className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <div className="flex justify-end mb-3">
          <Button
            size="icon"
            className="bg-background border border-border text-foreground hover:bg-muted"
            onClick={() => navigate(-1)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border bg-card">
          <div className="relative aspect-video">
            {url ? (
              <iframe
                src={url}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No video URL provided.
              </div>
            )}
          </div>
          <div className="p-4 border-t border-border text-center">
            <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;


