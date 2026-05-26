import { Link } from "react-router-dom";
import { Section } from "../../components/section";
import { VideoPlayer } from "../../components/video-player";

const workVideos = [
  {
    title: "Shell You Be Mine?",
    label: "Short Film",
    desc: "A creative short film showcasing artistry, mood, and character in motion.",
    src: "https://www.youtube.com/embed/yinRrmEpfr4",
    highlight: "+28% audience recall",
  },
  {
    title: "Lightwarp Studios Capabilities Reel",
    label: "Studio Project",
    desc: "An immersive brand visual crafted with detail and atmosphere",
    src: "https://player.vimeo.com/video/1153379831",
  },
  {
    title: "The jab",
    label: "Short Flim ",
    desc: "A short case film highlighting our scene creation, lighting, and atmosphere work in a polished edit.",
    src: "https://www.youtube.com/embed/4d27i10x2wI?t=3s",
  },
  {
    title: "Cyberia 2084 - Blender EEVEE 3D Animated Short Film",
    label: "Animation",
    desc: "A character-centric demo reel showcasing emotion, gesture, and performance animation.",
    src: "https://www.youtube.com/embed/pTmzrHqdS_4",
  },
];

export function HomePanelWork() {
  return (
    <Section
      eyebrow="Our Work"
      title={<>Studio <span className="text-gradient">Videos</span></>}
      subtitle="Every card is a video produced by our team — no placeholder case study card, just real work in motion."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {workVideos.map((video) => (
          <article
            key={video.title}
            className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/[0.03] border border-gradient p-2 hover:shadow-[0_0_40px_rgba(255,77,205,0.4)] transition-transform hover:-translate-y-1"
          >
            <div className="aspect-video w-full rounded-2xl overflow-hidden">
              <VideoPlayer src={video.src} title={video.title} />
            </div>
            <div className="p-6">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {video.label}
              </div>
              <h4 className="text-xl font-semibold text-gradient">{video.title}</h4>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{video.desc}</p>
              {video.highlight && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/80">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-brand" />
                  {video.highlight}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/projects"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand transition-transform hover:scale-[1.03]"
        >
          <span className="relative z-10">See More Videos</span>
          <span className="relative z-10">→</span>
          <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
        </Link>
      </div>
    </Section>
  );
}
