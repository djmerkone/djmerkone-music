import React, { useState, useEffect, useRef } from 'react';
import { 
  Music, 
  ExternalLink, 
  Disc, 
  Play, 
  Volume2, 
  Mic2, 
  ChevronRight, 
  Instagram, 
  Facebook,
  Youtube,
  Globe,
  Waves,
  Activity,
  Zap,
  FastForward,
  Heart,
  Layers,
  Maximize2,
  Clock,
  X,
  ShieldCheck,
  FileText
} from 'lucide-react';

/**
 * Reusable component for text that casts dynamic shadows 
 * opposite the mouse pointer position.
 */
const DynamicShadowText = ({ text, className = "", mousePos, style = {}, isLowercase = false }) => {
  const textRef = useRef(null);
  const [shadowStyle, setShadowStyle] = useState({});

  useEffect(() => {
    if (!textRef.current) return;

    const rect = textRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = mousePos.x || window.innerWidth / 2;
    const y = mousePos.y || window.innerHeight / 2;

    const dx = centerX - x;
    const dy = centerY - y;
    
    const distance = Math.sqrt(dx * dx + dy * dy);
    const opacity = Math.max(0.1, 0.7 - (distance / 1200));
    
    const sx = dx / 45; 
    const sy = dy / 45;

    setShadowStyle({
      textShadow: `
        ${sx * 0.5}px ${sy * 0.5}px 1px rgba(0,0,0,${opacity}),
        ${sx * 1.5}px ${sy * 1.5}px 3px rgba(0,0,0,${opacity * 0.8}),
        ${sx * 3}px ${sy * 3}px 6px rgba(0,0,0,${opacity * 0.6}),
        ${sx * 6}px ${sy * 6}px 12px rgba(0,0,0,${opacity * 0.4})
      `,
      transform: `translate(${sx * -0.1}px, ${sy * -0.1}px)`
    });
  }, [mousePos]);

  return (
    <span 
      ref={textRef} 
      style={{ ...style, ...shadowStyle }} 
      className={`${className} transition-all duration-75 inline-block ${isLowercase ? 'lowercase' : ''}`}
    >
      {text}
    </span>
  );
};

const ArtistCard = ({ artist, openModal, mousePos }) => {
  return (
    <div 
      onClick={() => openModal('artist', artist)}
      className={`group relative p-12 overflow-hidden transition-all duration-500 hover:bg-zinc-900/40 min-h-[320px] cursor-pointer ${artist.isMemorial ? 'bg-zinc-950 border-l-4 border-red-900/30' : 'bg-[#050505]'}`}
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {artist.isMemorial ? (
              <div className="flex items-center space-x-2 text-red-900 group-hover:text-red-600 transition-colors">
                <Heart size={16} fill="currentColor" />
                <span className="mono text-[9px] uppercase tracking-widest font-black">Legacy Member</span>
              </div>
            ) : (
              artist.role.map((r, ri) => <span key={ri} className="mono text-[8px] bg-white/5 text-zinc-400 px-2 py-1 rounded-sm uppercase tracking-widest">{r}</span>)
            )}
          </div>
          <div className="block">
            <DynamicShadowText 
              text={artist.name} 
              mousePos={mousePos}
              isLowercase={artist.name === 'djmerkone'}
              className={`text-6xl font-black uppercase tracking-tighter ${artist.isMemorial ? 'text-zinc-400 italic' : 'group-hover:text-red-500'}`}
            />
          </div>
          {artist.isMemorial && (
            <p className="mono text-[10px] text-zinc-600 uppercase tracking-widest mt-4 leading-loose max-w-xs italic">Carlos 'Charlie' Velasquez</p>
          )}
        </div>
        <div className="mt-12 flex justify-between items-end">
           <div className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-white transition-colors">
              {artist.isMemorial ? 'Memorial Profile' : 'View Profile'} <Maximize2 size={12} className="ml-2" />
            </div>
          <div className={`w-12 h-px transition-all duration-700 ${artist.isMemorial ? 'bg-red-900/20 group-hover:w-24 group-hover:bg-red-600/50' : 'bg-white/10 group-hover:w-24'}`} />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [modal, setModal] = useState({ isOpen: false, type: null, data: null });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const openModal = (type, data = null) => {
    setModal({ isOpen: true, type, data });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: null, data: null });
    document.body.style.overflow = 'auto';
  };

  const artists = [
    { 
      name: "djmerkone", 
      role: ["Writer", "Producer", "Engineer", "Artist"], 
      link: "https://djmerkone-site0.vercel.app",
      img: "dmobio.jpg",
      accent: "red",
      bio: "djmerkone // Sonic Architect & Multidisciplinary Engineer\ndjmerkone operates at the high-fidelity intersection of rhythm and precision. With a career spanning over three decades, he has established himself as a definitive architect of the Florida sound—a multidisciplinary engineer whose work bridges the gap between classic foundations and futuristic clarity.\n\nRooted in the high-energy pulse of the 1990s music scene, djmerkone’s evolution is a testament to technical mastery and creative fluidity. His catalog is a diverse registry of credits that move seamlessly between the gritty low-end of experimental hip-hop, the soulful textures of R&B, and the driving, percussive heart of Latin freestyle and house music.\n\nAs a producer and mastering engineer, djmerkone views sound as architecture. Whether he is building a track from the ground up or providing the final clinical polish to a global release, his philosophy remains the same: engineering is the science of emotion. His precision in the studio ensures that every frequency serves a purpose, allowing the artist's vision to cut through the digital noise with absolute authority.\n\nEntering 2026, djmerkone remains a sought-after collaborator for artists seeking a signature sonic identity. His recent works—including extensive production and engineering for Marilyn Torres' The EP and Jase David's Threads—showcase a continued dedication to pushing the boundaries of modern sound.\n\ndjmerkone is more than a technician; he is a curator of the sonic experience. He doesn't just record music—he engineers the future.",
      socials: { fb: "djmerkone", ig: "djmerkone", tt: "djmerkone", yt: "djmerkone" }
    },
    { 
      name: "Luis Marte", 
      role: ["Collaborator", "Artist", "Writer", "Producer", "Engineer"], 
      link: "https://luismartemusic.com",
      img: "luisbio.JPG",
      accent: "cyan",
      bio: "Luis Marté has been blessed with a long career in the music industry as an artist, songwriter, engineer and producer. He has opened for Chico Debarge on the Apollo stage, toured with pop sensation 98 Degrees, shared the Disney Channel spotlight with latin heart throb Enrique Iglesias and burned the airwaves of MTV TRL.\n\n“Those were exciting times in my life, here’s a kid from the Bronx, living out his dream on the biggest stage”\n\nFor most of his career as a performing artist, he rode the journey with three other guys. Strange Wayz was the name they went by, four childhood friends, four guys who took a chance on each other to chase a dream and boy did they ever. They signed to power house booking agency ICM: International Creative Management in early 2001 and were catapulted into the scene opening for major pop acts dominating the charts. Strange Wayz was able to fuse their latin roots with a Pop/R&B swag that propelled them to heights only dreamed about in streets of the Bronx.\n\n“They already have the talent, they already have the music…” ~ Enrique Iglesias\n\nStrange Wayz signed a Production Deal shortly after touring and the group took on a different look and feel, sign of the times?! Out with the pop boy band sound and in with the more mature R&B Dance. With a change in sound, so did a change come in the groups members. Luis was the last to remain of the original group and a new group formed around him; ForeKast.\n\n“We were in a different place then, now we were working with some heavyweights, alot was on the line”\n\nThe group was setup for success, working with producer/vocal arranger phenom’ Jim Beanz who they affectionately called “Jimba”, whose credits at the time included P Diddy, Danity Kane, Timberland, Day 26, and Justin Timberlake.\n\nFast forward to present day, Luis now finds himself back on the scene penning pop records, working behind the scenes developing fresh new talent and continuing to release his own music under his label LMM Recordings.\n\nStay tuned for future releases.",
      socials: { fb: "luismartemusic", ig: "luismarte", tt: "luismarte", yt: "luismarte" }
    },
    { 
      name: "Marilyn Torres", 
      role: ["Artist", "Writer", "Producer"], 
      link: "https://marilyn-site.vercel.app/",
      img: "maribio.jpg",
      accent: "emerald",
      bio: "Marilyn Torres: The Evolution of a Freestyle Icon\nFrom the sun-drenched streets of Ponce, Puerto Rico, to the rhythmic pulse of New Jersey, Marilyn Torres has spent over two decades carving a unique path through the music industry. Known for her powerhouse vocals and a fearless ability to pivot between genres, she has evolved from a digital pioneer to a cornerstone of the modern Latin Freestyle movement.\n\nThe Foundations (2005–2013)\nMarilyn’s journey began in 2005 with the groundbreaking digital debut of \"Callin' For Love.\" This early embrace of digital distribution set the stage for a prolific run that showcased her versatility:\n\nThe Freestyle Era: She solidified her voice with \"No Puedo Amarte\" (2006), \"Why\" (2007), and \"My Cry\" (2008).\n\nGenre Defiance: In 2009, she showcased her range with the reggaeton track \"Yo No Fui\" and dominated the Latin Hip-Hop scene with a series of sharp battle and diss tracks through 2013.\n\nKey Collaborations: Her career is marked by deep musical partnerships, including work with Apocalypsis and her brother Gerry (Jeriel). She also famously collaborated with L’amour on \"Yesterday\" in 2012—a track that took on new meaning when it was featured again on his posthumous final album as a tribute to their shared artistry.\n\nThe Return and Contemporary Success\nAfter a brief hiatus, Marilyn returned to the spotlight with the massive hit \"In Exchange For What,\" signaling a new chapter of official digital releases that have dominated the dance charts. Her recent work continues to push the genre forward while honoring its roots:\n\n\"In Time\": A standout collaboration with Joe Magic and Howie Wienman.\n\nChart-Toppers: Recent staples like \"Torn\" and the upcoming \"Don't Let Me\" continue to resonate with a global audience of DJs and freestyle enthusiasts.\n\nWhether she is delivering a heartfelt ballad or a high-energy dance anthem, Marilyn Torres remains a resilient force in the industry—a Jersey-raised talent with a Puerto Rican heart, bridging the gap between the underground and the international stage.",
      socials: { fb: "marilyntorresmusic", ig: "marilyntorres", tt: "marilyntorres", yt: "marilyntorres" }
    },
    { 
      name: "Ricardo Vazquez", 
      role: ["Writer", "Artist"],
      img: "ricbio.JPG",
      accent: "orange",
      bio: "Ricardo Vazquez, widely known in the freestyle and dance music circuits as Ricky Vaz, is a veteran force who emerged from the Rochester, NY scene in the late 90s. His career is characterized by a high-output discography and a relentless dedication to the Latin Freestyle and House music genres.\n\nRicardo’s journey began as a defining voice in the Rochester scene, quickly expanding into national prominence through numerous solo releases and high-fidelity collaborations. His major studio projects, such as the expansive compilations 'A Piece of Me' and 'A Class of Our Own,' as well as the project 'Abandoned,' serve as timestamps for his sonic evolution. Throughout the early 2000s, hits like 'See My Tears,' 'Moment of Love,' and 'Goodbye' had a profound impact on the freestyle landscape, blending street-level authenticity with professional studio polish.\n\nA prolific collaborator, Ricardo has worked alongside legendary figures and vocalists, including standout tracks with Andrea Martin ('That’s What It’s All About') and Marilyn Sanchez ('Love Will See Us Through'). His work under the monikers 'Ricky Vaz' and 'Ricardo Vazquez' (notably on the track 'Now That I') showcased a fearless ability to pivot between classic freestyle energy and mature R&B/House textures.\n\nToday, Ricardo remains a cornerstone of the djmerkone MUSIC collective. Operating as a lead artist, backup vocalist, and elite songwriter, his decades of experience and clinical understanding of hit-making hooks make him an essential pillar of the studio's creative infrastructure.",
      socials: { ig: "ricardovazquez" }
    },
    { 
      name: "Dengel", 
      role: ["Writer", "Artist"],
      img: "dengbio.jpg",
      accent: "rose",
      bio: "Dengel (William D. Cortes) is a versatile titan of the Latin Urban and Freestyle genres, with a career rooted in the raw energy of the early scene. He first made his mark as 'Willie D' in the burgeoning Latin Hip-Hop movement with the track 'Mi Abuela,' proving early on his ability to capture a rhythmic vibe.\n\nTransitioning into the late 90s, Dengel joined the powerhouse High Power Records under the moniker 'Nadamas.' Alongside his partner, he debuted the 1997 hit 'Dat Hoochie,' a track that became a staple of the era's club rotation. His creative chemistry extended into deep collaborations with the late Carlos 'Charlie' Velasquez (L'amour), co-authoring and performing on the freestyle classics 'I Wanna Be Loved' and 'Don't Look Back.'\n\nThe dawn of the 2000s saw Dengel expand his influence by partnering with djmerkone to establish Wik-It Records. This alliance launched a series of high-impact releases that defined the 'New School' sound, including the hits 'Sexual Vibe' and 'She Left Me.' These tracks didn't just top charts; they reshaped the Latin Freestyle landscape for a new generation.\n\nDengel remains an essential pillar of djmerkone MUSIC today. As an artist, elite songwriter, and backup vocalist, his decades of expertise and clinical ear for hooks ensure the collective's output maintains its legendary sonic precision.",
      socials: { ig: "dengelmusic" }
    },
    { 
      name: "L'amour", 
      role: ["Producer", "Writer", "Artist"],
      img: "lambio.jpg",
      accent: "zinc",
      isMemorial: true,
      bio: "L'amour (Carlos 'Charlie' Velasquez) was a visionary producer, writer, and artist whose influence spanned the golden eras of freestyle and contemporary electronic music. Operating under various monikers including la-mour, l'amour, Carlos Velasquez, and Charlie Velasquez, he was a key figure in the High Power Records era, where his sharp songwriting and vocal contributions helped define a generation of sound.\n\nHis legacy is rooted in his work with la-mour productions, High Power Records, and his deep creative bond with djmerkone MUSIC. A prolific creator, Charlie was responsible for writing numerous hits for High Power and providing standout vocal performances that combined raw emotion with technical precision. Notable works include his hauntingly beautiful collaboration with Marilyn Torres on 'Yesterday,' a track that remains a cornerstone of his posthumous catalog.\n\nOn December 16, 2019, the music world lost a true sonic architect. Carlos was 45 years old, a beloved resident of Pennsylvania, whose passion for his craft left an indelible mark on the music industry. Though he is no longer in the studio, his frequencies continue to resonate through every project he touched.",
      note: "Carlos 'Charlie' Velasquez (August 17, 1974 – December 16, 2019)",
      link: "https://www.dillonfuneralhomeinc.com/obituary/CarlosCharlie-Velasquez",
      socials: { yt: "djmerkone" }
    }
  ];

  const releases = [
    { title: "Don't Let Me", artist: "Marilyn Torres", type: "EP (8 Tracks)", year: "2024" },
    { title: "Mi Viejo", artist: "Marilyn Torres", type: "Single", year: "2024" },
    { title: "The EP", artist: "Marilyn Torres", type: "EP (15 Tracks)", year: "2024" },
    { title: "latnem flex", artist: "djmerkone", type: "Single", year: "2023" },
    { title: "wrong", artist: "djmerkone", type: "Single", year: "2023" },
    { title: "anomaly", artist: "djmerkone", type: "Single", year: "2023" },
    { title: "chasmitha", artist: "djmerkone", type: "Single", year: "2023" },
    { title: "Take A Chance", artist: "Ricardo Vazquez", type: "EP (7 Tracks)", year: "2023" },
    { title: "Yesterday", artist: "L'AMOUR", type: "Album (22 Tracks)", year: "Legacy" },
    { title: "Torn (The Remixes)", artist: "Marilyn Torres", type: "EP (5 Tracks)", year: "2023" },
    { title: "Now That I (The Remixes)", artist: "Ricardo Vazquez", type: "EP (8 Tracks)", year: "2023" },
    { title: "Torn", artist: "Marilyn Torres", type: "EP (4 Tracks)", year: "2022" },
    { title: "In Exchange For What", artist: "Marilyn Torres", type: "Single", year: "2022" },
    { title: "100 mph", artist: "Luis Marte", type: "Split Release", year: "2022" }
  ];

  const services = [
    { title: "Mixing & Mastering", category: "ENGINEERING", detail: "Analog warmth meets digital precision for Hip-hop, Latin & EDM." },
    { title: "Vocal Production", category: "RECORDING", detail: "Specialized tracking and tuning for R&B, Soul, and Latin artists." },
    { title: "Writing & Arrangement", category: "CREATIVE", detail: "Developing hooks, lyrics, and structures from the ground up." },
    { title: "Demo Services", category: "PROTOTYPE", detail: "Prototyping high-fidelity concepts for professional pitch." }
  ];

  const TikTokIcon = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01V14.5c.01 1.62-.2 3.29-1.02 4.71-.82 1.44-2.14 2.62-3.72 3.19-1.58.57-3.34.62-4.96.14-1.62-.48-3.05-1.57-3.95-3.01-.9-1.44-1.2-3.21-.86-4.87.34-1.66 1.32-3.15 2.69-4.14 1.37-.99 3.09-1.48 4.77-1.39 1.05.05 2.08.35 3 .86V3.89c-.1-.01-.2-.01-.3-.02-.15-.02-.3-.02-.45-.02-2.54.02-4.85-.92-6.52-2.5-.15-.14-.29-.29-.43-.44.13-.01.26-.02.4-.02h.01Z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-red-500/30 overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@300;500;800&display=swap');
          body { font-family: 'Syne', sans-serif; cursor: none; }
          .mono { font-family: 'JetBrains Mono', monospace; }
          .schmear-bg {
            background-image: linear-gradient(to bottom, rgba(3,3,3,1) 0%, rgba(3,3,3,0.8) 50%, rgba(3,3,3,1) 100%), url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M10 10h80v80H10z' fill='%23ffffff' fill-opacity='0.01'/%3E%3C/svg%3E");
            background-attachment: fixed;
          }
          .hero-text { font-size: clamp(4rem, 15vw, 18rem); line-height: 0.8; font-weight: 800; letter-spacing: -0.04em; }
          .vertical-marquee { writing-mode: vertical-rl; animation: slideUp 20s linear infinite; }
          @keyframes slideUp { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
          .noise { position: fixed; inset: -50%; background-image: url("https://grainy-gradients.vercel.app/noise.svg"); opacity: 0.12; pointer-events: none; z-index: 999; }
          .cursor-glow { width: 400px; height: 400px; background: radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%); border-radius: 50%; position: fixed; pointer-events: none; z-index: 1; filter: blur(40px); transition: transform 0.1s ease-out; }
          .animate-spin-slow { animation: spin 8s linear infinite; }
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); }
          .backdrop-blur-ultra { backdrop-filter: blur(50px) saturate(180%); }
          .hub-bg {
            background-image: linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 100%), url("loumerk.jpg");
            background-size: cover;
            background-position: center;
          }
          .text-stroke { -webkit-text-stroke: 1px rgba(255,255,255,0.2); color: transparent; }
        `}
      </style>

      <div className="noise" />
      <div className="cursor-glow hidden md:block" style={{ transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)` }} />
      <div className="fixed w-4 h-4 bg-white rounded-full z-[1000] pointer-events-none mix-blend-difference hidden md:block" style={{ left: mousePos.x - 8, top: mousePos.y - 8 }} />

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-16 border-r border-white/5 z-[60] bg-black hidden lg:flex flex-col items-center justify-between py-10 overflow-hidden">
        <div className="w-8 h-8 bg-white flex items-center justify-center text-black"><Music size={16} /></div>
        <div className="vertical-marquee flex flex-col space-y-12">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mono text-[10px] tracking-[0.4em] uppercase text-zinc-700 whitespace-nowrap">djmerkone MUSIC • SONIC_PRECISION • EST_2019 •</span>
          ))}
        </div>
        <div className="flex flex-col space-y-6 text-zinc-500">
          <a href="https://facebook.com/djmerkone" target="_blank" className="hover:text-white transition-colors"><Facebook size={14} /></a>
          <a href="https://instagram.com/djmerkone" target="_blank" className="hover:text-white transition-colors"><Instagram size={14} /></a>
          <a href="https://tiktok.com/@djmerkone" target="_blank" className="hover:text-white transition-colors"><TikTokIcon size={14} /></a>
        </div>
      </aside>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-[70] px-8 md:px-24 py-8 flex justify-between items-center mix-blend-difference pointer-events-none">
        <div className="pointer-events-auto group">
          <div className="flex flex-col">
            <span className="text-2xl font-black italic tracking-tighter leading-none lowercase transition-all group-hover:text-red-500">djmerkone</span>
            <span className="text-zinc-400 text-[10px] mono tracking-[0.5em] mt-1 uppercase font-bold">MUSIC</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-12 pointer-events-auto">
          {['Production', 'Roster', 'Studio', 'Work'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-red-500 transition-colors">{item}</a>
          ))}
          <button className="bg-white text-black px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">Inquire</button>
        </div>
      </header>

      {/* Hero */}
      <section id="production" className="relative h-screen flex items-center justify-center px-10 schmear-bg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.03]" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
          <span className="hero-text lowercase italic text-stroke opacity-10">djmerkone</span>
        </div>
        <div className="relative z-10 text-center max-w-7xl">
          <div className="mono text-[10px] tracking-[0.8em] text-red-500 mb-8 animate-pulse uppercase">[ IN_HOUSE_PRODUCTION_LAB ]</div>
          <h1 className="hero-text uppercase mb-12 text-white">
            <DynamicShadowText text="SONIC" mousePos={mousePos} /> <br /> 
            <DynamicShadowText text="PRECISION." className="text-stroke italic" mousePos={mousePos} />
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-20">
            <div className="flex -space-x-4">
              {['H', 'L', 'E', 'R', 'S', 'B'].map((l, i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[10px] font-black mono hover:bg-red-600 hover:border-red-600 transition-all cursor-default">{l}</div>
              ))}
            </div>
            <p className="max-w-md text-sm font-medium uppercase tracking-[0.2em] leading-loose text-zinc-100 text-left border-l border-white/10 pl-8 italic">Established 2019. We fuse the raw energy of <span className="text-white">Hip-hop & Latin</span> with the refined clarity of <span className="text-white">EDM, Soul & Blues</span>.</p>
          </div>
        </div>
      </section>

      {/* Core Associates Section */}
      <section id="roster" className="py-40 px-8 md:pl-40 md:pr-24 relative">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 border-b border-white/5 pb-12">
          <div className="max-w-xl">
            <h2 className="text-[10vw] md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-white">
              <DynamicShadowText text="THE" mousePos={mousePos} /> <span className="text-red-600 italic text-stroke"><DynamicShadowText text="CORE" mousePos={mousePos} /></span>
            </h2>
            <p className="mono text-xs text-zinc-500 uppercase tracking-widest italic">The architects behind djmerkone MUSIC projects.</p>
          </div>
          <Activity className="text-red-500 hidden lg:block mb-4 animate-pulse" size={48} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-white/5 border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          {artists.map((artist, i) => (
            <ArtistCard 
              key={i} 
              artist={artist} 
              openModal={openModal} 
              mousePos={mousePos} 
            />
          ))}
        </div>
      </section>

      {/* Studio Section (The Hub) - Uses loumerk.jpg */}
      <section id="studio" className="py-40 px-8 md:pl-40 md:pr-24 hub-bg relative border-y border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
           <div className="lg:col-span-5 p-16 border border-white/10 bg-black/70 backdrop-blur-xl rounded-[3rem] h-full flex flex-col justify-between hover:border-red-500/30 transition-all group">
              <Zap className="text-red-600" size={48} />
              <div>
                <h3 className="text-6xl font-black uppercase italic mb-10 tracking-tighter text-white">
                   <DynamicShadowText text="THE" mousePos={mousePos} /> <br /> <DynamicShadowText text="HUB." mousePos={mousePos} />
                </h3>
                <p className="text-zinc-200 text-sm font-bold leading-relaxed uppercase tracking-widest italic border-l border-white/20 pl-6">Engineering multi-genre fidelity since 2019.</p>
              </div>
           </div>
           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <div key={i} className="p-10 border border-white/10 bg-black/85 backdrop-blur-md rounded-[2rem] hover:bg-zinc-900/60 transition-all group flex flex-col justify-between">
                <span className="mono text-[10px] text-zinc-400 group-hover:text-red-500 transition-colors uppercase font-bold tracking-widest">[{service.category}]</span>
                <div>
                  <h4 className="text-2xl font-bold uppercase tracking-tight mb-4 text-white">
                    <DynamicShadowText text={service.title} mousePos={mousePos} className="group-hover:text-red-500" />
                  </h4>
                  <p className="text-zinc-300 text-xs font-medium tracking-widest leading-relaxed">{service.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="work" className="py-40 px-8 md:pl-40 md:pr-24 border-t border-white/5 bg-[#030303]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="sticky top-32">
             <div className="absolute -top-20 -left-10 text-[15rem] font-black text-white/[0.02] select-none uppercase pointer-events-none lowercase opacity-10">djmerkone</div>
             <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10 italic text-white">
               <DynamicShadowText text="IN-HOUSE" mousePos={mousePos} /> <br /> 
               <span className="text-stroke italic"><DynamicShadowText text="CATALOG." mousePos={mousePos} /></span>
             </h2>
          </div>
          <div className="space-y-4 max-h-[80vh] overflow-y-auto pr-4 custom-scrollbar">
             {releases.map((track, i) => (
               <div key={i} className="group flex items-center p-8 border border-white/5 bg-zinc-950/50 hover:bg-white/5 transition-all">
                  <Disc className="text-zinc-800 group-hover:text-red-500 mr-8 animate-spin-slow" size={28} />
                  <div className="flex-grow">
                    <h5 className="text-xl font-bold uppercase group-hover:text-red-500 tracking-tight text-white">
                      <DynamicShadowText text={track.title} mousePos={mousePos} />
                    </h5>
                    <p className="mono text-[9px] text-zinc-400 uppercase italic lowercase">{track.artist}</p>
                  </div>
                  <div className="mono text-[8px] text-zinc-700 font-bold">{track.year}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-40 px-8 md:pl-40 md:pr-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center select-none pointer-events-none">
           <span className="hero-text uppercase italic text-white/5 scale-150 lowercase">djmerkone</span>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="max-w-md text-white">
            <div className="flex flex-col mb-10 group">
              <span className="text-4xl font-black italic tracking-tighter lowercase transition-all group-hover:text-red-500">djmerkone</span>
              <span className="text-red-600 text-[10px] mono tracking-[0.5em] mt-1 font-bold uppercase">MUSIC</span>
            </div>
            <p className="text-zinc-500 text-xs font-black leading-loose uppercase tracking-[0.3em] italic">Engineering the intersection of urban energy and cinematic fidelity since 2019.</p>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h6 className="mono text-[10px] text-zinc-600 tracking-[0.5em] uppercase mb-10 font-bold underline underline-offset-8">Network</h6>
              <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-zinc-400 italic">
                <li><a href="https://luismartemusic.com" target="_blank" className="hover:text-red-500 flex items-center transition-colors text-white">Luis Marte <ExternalLink size={12} className="ml-2" /></a></li>
                <li><a href="https://marilyn-site.vercel.app/" target="_blank" className="hover:text-red-500 flex items-center transition-colors text-white">Marilyn Torres <ExternalLink size={12} className="ml-2" /></a></li>
                <li><a href="https://djmerkone-site0.vercel.app" target="_blank" className="hover:text-red-500 flex items-center transition-colors text-white lowercase italic">djmerkone <ExternalLink size={12} className="ml-2" /></a></li>
              </ul>
            </div>
            <div>
              <h6 className="mono text-[10px] text-zinc-600 tracking-[0.5em] uppercase mb-10 font-bold underline underline-offset-8">Social</h6>
              <div className="flex space-x-6 text-zinc-500">
                <a href="https://facebook.com/djmerkone" target="_blank" className="hover:text-white transition-all"><Facebook size={20} /></a>
                <a href="https://instagram.com/djmerkone" target="_blank" className="hover:text-white transition-all"><Instagram size={20} /></a>
                <a href="https://tiktok.com/@djmerkone" target="_blank" className="hover:text-white transition-all"><TikTokIcon size={20} /></a>
                <a href="https://youtube.com/@djmerkone" target="_blank" className="hover:text-white transition-all"><Youtube size={20} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 pt-40 flex flex-col md:flex-row justify-between items-center text-zinc-700 mono text-[9px] uppercase tracking-widest font-black">
          <p>© 2019 – {new Date().getFullYear()} djmerkone MUSIC // ALL_RIGHT_RESERVED</p>
          <div className="flex space-x-12 mt-8 md:mt-0 pointer-events-auto">
             <button onClick={() => openModal('privacy')} className="hover:text-white transition-colors cursor-pointer">Privacy_Desk</button>
             <button onClick={() => openModal('terms')} className="hover:text-white transition-colors cursor-pointer">Terms_Of_Sound</button>
          </div>
        </div>
      </footer>

      {/* Modals System */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12 transition-all duration-500">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-ultra" onClick={closeModal} />
          
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-[3rem] overflow-hidden flex flex-col shadow-2xl shadow-black animate-in fade-in zoom-in duration-300">
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center text-black">
                  <Music size={18} />
                </div>
                <div className="mono text-[10px] tracking-[0.4em] uppercase text-zinc-500">
                  djmerkone MUSIC // {modal.type === 'artist' ? (modal.data.isMemorial ? 'Memorial_Memorandum' : 'Artist_Profile') : 'Information_Hub'}
                </div>
              </div>
              <button onClick={closeModal} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-10 custom-scrollbar">
              {modal.type === 'artist' ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden rounded-[2rem]">
                    <img src={modal.data.img} alt={modal.data.name} className={`w-full h-full object-cover transition-all duration-700 ${modal.data.isMemorial ? 'sepia-[0.5] opacity-80 grayscale-[0.5]' : 'grayscale hover:grayscale-0'}`} />
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                      <h3 className={`text-6xl font-black uppercase tracking-tighter italic text-white ${modal.data.name === 'djmerkone' ? 'lowercase' : ''}`}>{modal.data.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-4 opacity-70">
                        {modal.data.role.map((r, i) => <span key={i} className={`mono text-[8px] px-2 py-1 rounded-sm uppercase tracking-widest ${modal.data.isMemorial ? 'bg-red-900 text-white' : 'bg-white text-black'}`}>{r}</span>)}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-12">
                    <div className="prose prose-invert max-w-none">
                      {modal.data.isMemorial && (
                        <div className="mb-10 p-6 bg-red-900/10 border-l-4 border-red-900 rounded-r-2xl">
                          <p className="mono text-[10px] text-red-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                             <Heart size={12} fill="currentColor" /> Legacy Memorandum
                          </p>
                          <p className="text-zinc-300 font-black tracking-tighter text-xl italic">{modal.data.note}</p>
                        </div>
                      )}
                      <p className="mono text-[11px] leading-relaxed tracking-widest uppercase text-zinc-400 italic whitespace-pre-line">
                        {modal.data.bio}
                      </p>
                    </div>
                    
                    <div className="pt-12 border-t border-white/5">
                      <h4 className="mono text-[10px] tracking-[0.4em] uppercase text-red-500 mb-8 font-bold italic">Official_Connectivity</h4>
                      <div className="grid grid-cols-1 gap-6">
                        {modal.data.link && (
                          <a href={modal.data.link} target="_blank" className="flex items-center space-x-6 group">
                            <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                              <Globe size={16} className="text-white" />
                            </div>
                            <span className="text-sm font-black uppercase tracking-widest italic underline decoration-zinc-800 group-hover:decoration-white transition-all underline-offset-8 text-white">
                               {modal.data.isMemorial ? 'Memorial Obituary' : 'Official Website'}
                            </span>
                          </a>
                        )}
                        {modal.data.socials && (
                          <div className="flex flex-wrap gap-6 pt-4">
                            {modal.data.socials.fb && (
                              <a href={`https://facebook.com/${modal.data.socials.fb}`} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                                <Facebook size={20} />
                              </a>
                            )}
                            {modal.data.socials.ig && (
                              <a href={`https://instagram.com/${modal.data.socials.ig}`} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                                <Instagram size={20} />
                              </a>
                            )}
                            {modal.data.socials.tt && (
                              <a href={`https://tiktok.com/@${modal.data.socials.tt}`} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                                <TikTokIcon size={20} />
                              </a>
                            )}
                            {modal.data.socials.yt && (
                              <a href={`https://youtube.com/@${modal.data.socials.yt}`} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                                <Youtube size={20} />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center py-20">
                  <div className="prose prose-invert max-w-none mono text-xl leading-relaxed tracking-widest uppercase text-zinc-400 italic">
                    Info coming soon...
                  </div>
                </div>
              )}
            </div>

            <div className="p-8 bg-zinc-900/50 border-t border-white/5 text-center">
              <p className="mono text-[8px] text-zinc-600 uppercase font-black tracking-widest">djmerkone MUSIC // Ver. 2026.04</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;