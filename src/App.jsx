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
  FileText,
  Search
} from 'lucide-react';

/**
 * Custom SVG for Spotify
 */
const SpotifyIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.31c-.218.358-.683.473-1.037.254-2.85-1.742-6.44-2.134-10.665-1.17-.41.093-.815-.164-.908-.574-.093-.41.164-.815.574-.908 4.62-1.057 8.583-.61 11.775 1.343.354.22.467.683.25 1.036-.001.001-.001.001-.001.001l.012-.022zm1.47-3.255c-.274.444-.853.585-1.3.31-3.26-2.004-8.23-2.587-12.086-1.417-.5.152-1.025-.13-1.177-.63-.152-.5.13-1.026.63-1.177 4.407-1.336 9.89-.684 13.623 1.61.447.275.587.854.31 1.304zM19.1 10.6c-3.91-2.322-10.36-2.537-14.13-1.392-.6.182-1.23-.16-1.412-.76-.182-.6.16-1.23.76-1.412 4.316-1.31 11.444-1.05 15.962 1.63.54.32.716 1.018.396 1.558-.32.54-1.018.715-1.558.395l-.018-.019z"/>
  </svg>
);

/**
 * Custom SVG for Apple Music
 */
const AppleMusicIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm4.5-3V6.5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-.5.5h-2v5a3 3 0 1 1-3.5-2.95V14a.5.5 0 0 1 .5.5z"/>
  </svg>
);

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
      textShadow: `${sx * 0.5}px ${sy * 0.5}px 1px rgba(0,0,0,${opacity}), ${sx * 1.5}px ${sy * 1.5}px 3px rgba(0,0,0,${opacity * 0.8}), ${sx * 3}px ${sy * 3}px 6px rgba(0,0,0,${opacity * 0.6}), ${sx * 6}px ${sy * 6}px 12px rgba(0,0,0,${opacity * 0.4})`,
      transform: `translate(${sx * -0.1}px, ${sy * -0.1}px)`
    });
  }, [mousePos, text]);

  return (
    <span ref={textRef} style={{ ...style, ...shadowStyle }} className={`${className} transition-all duration-75 inline-block ${isLowercase ? 'lowercase' : ''}`}>
      {text}
    </span>
  );
};

const ArtistCard = ({ artist, openModal, mousePos }) => {
  return (
    <div onClick={() => openModal('artist', artist)} className={`group relative p-12 overflow-hidden transition-all duration-500 hover:bg-zinc-900/40 min-h-[320px] cursor-pointer ${artist.isMemorial ? 'bg-zinc-950 border-l-4 border-red-900/30' : 'bg-[#050505]'}`}>
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
            <DynamicShadowText text={artist.name} mousePos={mousePos} isLowercase={artist.name === 'djmerkone'} className={`text-6xl font-black uppercase tracking-tighter ${artist.isMemorial ? 'text-zinc-400 italic' : 'text-white group-hover:text-red-500'}`} />
          </div>
          {artist.isMemorial && <p className="mono text-[10px] text-zinc-600 uppercase tracking-widest mt-4 leading-loose max-w-xs italic text-white">Carlos 'Charlie' Velasquez</p>}
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
  const [discographyFilter, setDiscographyFilter] = useState("");
  const audioRef = useRef(new Audio());

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

  const handlePreviewStart = (url) => {
    if (!url) return;
    audioRef.current.src = url;
    audioRef.current.volume = 0.5;
    audioRef.current.play().catch(() => {});
  };

  const handlePreviewStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const artists = [
    { name: "djmerkone", role: ["Writer", "Producer", "Engineer", "Artist"], link: "https://djmerkone-site0.vercel.app", img: "dmobio.jpg", accent: "red", bio: "djmerkone // Sonic Architect & Multidisciplinary Engineer\ndjmerkone operates at the high-fidelity intersection of rhythm and precision. With a career spanning over three decades, he has established himself as a definitive architect of the Florida sound—a multidisciplinary engineer whose work bridges the gap between classic foundations and futuristic clarity.\n\nRooted in the high-energy pulse of the 1990s music scene, djmerkone’s evolution is a testament to technical mastery and creative fluidity. His catalog is a diverse registry of credits that move seamlessly between the gritty low-end of experimental hip-hop, the soulful textures of R&B, and the driving, percussive heart of Latin freestyle and house music.\n\nAs a producer and mastering engineer, djmerkone views sound as architecture. Whether he is building a track from the ground up or providing the final clinical polish to a global release, his philosophy remains the same: engineering is the science of emotion. His precision in the studio ensures that every frequency serves a purpose, allowing the artist's vision to cut through the digital noise with absolute authority.\n\nEntering 2026, djmerkone remains a sought-after collaborator for artists seeking a signature sonic identity. His recent works—including extensive production and engineering for Marilyn Torres' The EP and Jase David's Threads—showcase a continued dedication to pushing the boundaries of modern sound.\n\ndjmerkone is more than a technician; he is a curator of the sonic experience. He doesn't just record music—he engineers the future.", socials: { fb: "djmerkone", ig: "djmerkone", tt: "djmerkone", yt: "djmerkone" } },
    { name: "Luis Marte", role: ["Collaborator", "Artist", "Writer", "Producer", "Engineer"], link: "https://luismartemusic.com", img: "luisbio.JPG", accent: "cyan", bio: "Luis Marté has been blessed with a long career in the music industry as an artist, songwriter, engineer and producer. He has opened for Chico Debarge on the Apollo stage, toured with pop sensation 98 Degrees, shared the Disney Channel spotlight with latin heart throb Enrique Iglesias and burned the airwaves of MTV TRL.\n\n“Those were exciting times in my life, here’s a kid from the Bronx, living out his dream on the biggest stage”\n\nFor most of his career as a performing artist, he rode the journey with three other guys. Strange Wayz was the name they went by, four childhood friends, four guys who took a chance on each other to chase a dream and boy did they ever. They signed to power house booking agency ICM: International Creative Management in early 2001 and were catapulted into the scene opening for major pop acts dominating the charts. Strange Wayz was able to fuse their latin roots with a Pop/R&B swag that propelled them to heights only dreamed about in streets of the Bronx.\n\n“They already have the talent, they already have the music…” ~ Enrique Iglesias\n\nStrange Wayz signed a Production Deal shortly after touring and the group took on a different look and feel, sign of the times?! Out with the pop boy band sound and in with the more mature R&B Dance. With a change in sound, so did a change come in the groups members. Luis was the last to remain of the original group and a new group formed around him; ForeKast.\n\n“We were in a different place then, now we were working with some heavyweights, alot was on the line”\n\nThe group was setup for success, working with producer/vocal arranger phenom’ Jim Beanz who they affectionately called “Jimba”, whose credits at the time included P Diddy, Danity Kane, Timberland, Day 26, and Justin Timberlake.\n\nFast forward to present day, Luis now finds himself back on the scene penning pop records, working behind the scenes developing fresh new talent and continuing to release his own music under his label LMM Recordings.\n\nStay tuned for future releases.", socials: { fb: "luismartemusic", ig: "luismarte", tt: "luismarte", yt: "luismarte" } },
    { name: "Marilyn Torres", role: ["Artist", "Writer", "Producer"], link: "https://marilyn-site.vercel.app/", img: "maribio.jpg", accent: "emerald", bio: "Marilyn Torres: The Evolution of a Freestyle Icon\nFrom the sun-drenched streets of Ponce, Puerto Rico, to the rhythmic pulse of New Jersey, Marilyn Torres has spent over two decades carving a unique path through the music industry. Known for her powerhouse vocals and a fearless ability to pivot between genres, she has evolved from a digital pioneer to a cornerstone of the modern Latin Freestyle movement.\n\nThe Foundations (2005–2013)\nMarilyn’s journey began in 2005 with the groundbreaking digital debut of \"Callin' For Love.\" This early embrace of digital distribution set the stage for a prolific run that showcased her versatility:\n\nThe Freestyle Era: She solidified her voice with \"No Puedo Amarte\" (2006), \"Why\" (2007), and \"My Cry\" (2008).\n\nGenre Defiance: In 2009, she showcased her range with the reggaeton track \"Yo No Fui\" and dominated the Latin Hip-Hop scene with a series of sharp battle and diss tracks through 2013.\n\nKey Collaborations: Her career is marked by deep musical partnerships, including work with Apocalypsis and her brother Gerry (Jeriel). She also famously collaborated with L’amour on \"Yesterday\" in 2012—a track that took on new meaning when it was featured again on his posthumous final album as a tribute to their shared artistry.\n\nThe Return and Contemporary Success\nAfter a brief hiatus, Marilyn returned to the spotlight with the massive hit \"In Exchange For What,\" signaling a new chapter of official digital releases that have dominated the dance charts. Her recent work continues to push the genre forward while honoring its roots:\n\n\"In Time\": A standout collaboration with Joe Magic and Howie Wienman.\n\nChart-Toppers: Recent staples like \"Torn\" and the upcoming \"Don't Let Me\" continue to resonate with a global audience of DJs and freestyle enthusiasts.\n\nWhether she is delivering a heartfelt ballad or a high-energy dance anthem, Marilyn Torres remains a resilient force in the industry—a Jersey-raised talent with a Puerto Rican heart, bridging the gap between the underground and the international stage.", socials: { fb: "marilyntorresmusic", ig: "marilyntorres", tt: "marilyntorres", yt: "marilyntorres" } },
    { name: "Ricardo Vazquez", role: ["Writer", "Artist"], img: "ricbio.JPG", accent: "orange", bio: "Ricardo Vazquez, widely known in the freestyle and dance music circuits as Ricky Vaz, is a veteran force who emerged from the Rochester, NY scene in the late 90s. His career is characterized by a high-output discography and a relentless dedication to the Latin Freestyle and House music genres.\n\nRicardo’s journey began as a defining voice in the Rochester scene, quickly expanding into national prominence through numerous solo releases and high-fidelity collaborations. His major studio projects, such as the expansive compilations 'A Piece of Me' and 'A Class of Our Own,' as well as the project 'Abandoned,' serve as timestamps for his sonic evolution. Throughout the early 2000s, hits like 'See My Tears,' 'Moment of Love,' and 'Goodbye' had a profound impact on the freestyle landscape, blending street-level authenticity with professional studio polish.\n\nA prolific collaborator, Ricardo has worked alongside legendary figures and vocalists, including standout tracks with Andrea Martin ('That’s What It’s All About') and Marilyn Sanchez ('Love Will See Us Through'). His work under the monikers 'Ricky Vaz' and 'Ricardo Vazquez' (notably on the track 'Now That I') showcased a fearless ability to pivot between classic freestyle energy and mature R&B/House textures.\n\nToday, Ricardo remains a cornerstone of the djmerkone MUSIC collective. Operating as a lead artist, backup vocalist, and elite songwriter, his decades of experience and clinical understanding of hit-making hooks make him an essential pillar of the studio's creative infrastructure.", socials: { ig: "ricardovazquez" } },
    { name: "Dengel", role: ["Writer", "Artist"], img: "dengbio.jpg", accent: "rose", bio: "Dengel (William D. Cortes) is a versatile titan of the Latin Urban and Freestyle genres, with a career rooted in the raw energy of the early scene. He first made his mark as 'Willie D' in the burgeoning Latin Hip-Hop movement with the track 'Mi Abuela,' proving early on his ability to capture a rhythmic vibe.\n\nTransitioning into the late 90s, Dengel joined the powerhouse High Power Records under the moniker 'Nadamas.' Alongside his partner, he debuted the 1997 hit 'Dat Hoochie,' a track that became a staple of the era's club rotation. His creative chemistry extended into deep collaborations with the late Carlos 'Charlie' Velasquez (L'amour), co-authoring and performing on the freestyle classics 'I Wanna Be Loved' and 'Don't Look Back.'\n\nThe dawn of the 2000s saw Dengel expand his influence by partnering with djmerkone to establish Wik-It Records. This alliance launched a series of high-impact releases that defined the 'New School' sound, including the hits 'Sexual Vibe' and 'She Left Me.' These tracks didn't just top charts; they reshaped the Latin Freestyle landscape for a new generation.\n\nDengel remains an essential pillar of djmerkone MUSIC today. As an artist, elite songwriter, and backup vocalist, his decades of expertise and clinical ear for hooks ensure the collective's output maintains its legendary sonic precision.", socials: { ig: "dengelmusic" } },
    { name: "L'amour", role: ["Producer", "Writer", "Artist"], img: "lambio.jpg", accent: "zinc", isMemorial: true, bio: "L'amour (Carlos 'Charlie' Velasquez) was a visionary producer, writer, and artist whose influence spanned the golden eras of freestyle and contemporary electronic music. Operating under various monikers including la-mour, l'amour, Carlos Velasquez, and Charlie Velasquez, he was a key figure in the High Power Records era, where his sharp songwriting and vocal contributions helped define a generation of sound.\n\nHis legacy is rooted in his work with la-mour productions, High Power Records, and his deep creative bond with djmerkone MUSIC. A prolific creator, Charlie was responsible for writing numerous hits for High Power and providing standout vocal performances that combined raw emotion with technical precision. Notable works include his hauntingly beautiful collaboration with Marilyn Torres on 'Yesterday,' a track that remains a cornerstone of his posthumous catalog.\n\nOn December 16, 2019, the music world lost a true sonic architect. Carlos was 45 years old, a beloved resident of Pennsylvania, whose passion for his craft left an indelible mark on the music industry. Though he is no longer in the studio, his frequencies continue to resonate through every project he touched.", note: "Carlos 'Charlie' Velasquez (August 17, 1974 – December 16, 2019)", link: "https://www.dillonfuneralhomeinc.com/obituary/CarlosCharlie-Velasquez", socials: { yt: "djmerkone" } }
  ];

  const services = [
    { title: "Mixing & Mastering", category: "ENGINEERING", detail: "Analog warmth meets digital precision for Hip-hop, Latin & EDM." },
    { title: "Vocal Production", category: "RECORDING", detail: "Specialized tracking and tuning for R&B, Soul, and Latin artists." },
    { title: "Writing & Arrangement", category: "CREATIVE", detail: "Developing hooks, lyrics, and structures from the ground up." },
    { title: "Demo Services", category: "PROTOTYPE", detail: "Prototyping high-fidelity concepts for professional pitch." }
  ];

  const featuredRelease = { 
    title: "Don't Let Me", 
    artist: "Marilyn Torres", 
    type: "EP (8 Tracks)", 
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_l6vs4GPW_kLZl21rvPS02g5c8kFhUBSiY&si=R-d8ehWM21kkcBAA",
    spotify: "https://prf.hn/click/camref:1101ljvYv/pubref:albumuuid%3DB8ED0DAA-5C77-4DA4-B7B3CEDB5EA4BBFB/destination:https://open.spotify.com/album/0SJf7QCpc3VD1AaMh6dPRx",
    apple: "https://music.apple.com/us/album/dont-let-me/1870639799?uo=4",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_92815263_3939F1655E75E4A6DE8FD52430E93689.mp3",
    art: "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F2439182--B8ED0DAA-5C77-4DA4-B7B3CEDB5EA4BBFB--0--17901464--DONTLETMECOVERFRONT.png?fm=jpg&q=75&w=800&s=dab38261a5741cf0a98ff6ea6c153afb"
  };

  const discography = [
    { artist: "A'LISA B", tracks: ["sunshine (dj merkone house mix)", "sunshine (dj merkone extended house mix)", "sunshine (dj merkone extended sexy mix)", "sunshine (dj merkone sexy mix)"] },
    { artist: "ABY CRUZ", tracks: ["it won't be long (extended mix)", "it won't be long (radio mix)", "it won't be long (drumapella mix)", "it won't be long (instrumental mix)", "you didn't love me (radio mix) (feat. aktual)", "you didn't love me (extended mix) (feat. aktual)", "you didn't love me (synthapella) (feat. aktual)", "you didn't love me (drumapella) (feat. aktual)", "you didn't love me (feat. aktual)", "you didn't love me (willie valentin extended mix) (feat. aktual)", "no reason (hans crazy editz)", "no reason"] },
    { artist: "AKTUAL", tracks: ["don't forsake me (extended mix)", "don't forsake me (radio edit)", "don't forsake me (bonus beats dubb mix)", "don't forsake me (drumapella)"] },
    { artist: "ALEX OF LATIN NATION", tracks: ["better than me (merkone radio remix)", "everything (merkone radio remix)", "everything (merkone extended remix)", "everything (synthapella)", "better than me (synthapella)", "better than me (merkone's remix)"] },
    { artist: "APOCALYPSIS", tracks: ["bailalo (ft. la raza)", "tu cuerpo (ft. jeriel & marilyn torres)"] },
    { artist: "CHEREE", tracks: ["tell me boy"] },
    { artist: "CORO", tracks: ["mona lisa (merkone's platinum room mix)"] },
    { artist: "DENGEL", tracks: ["she left me (planet hype mix)", "look what your love did to me", "she left me", "i always wished", "your love isn't real-[planet mix]", "she left me (official video hd)", "my baby girl (official hd hq video)", "i call for love (official hd hq video)", "your love inst real", "more than love", "she left me (dj daniel mix)", "your love still remains", "sexual vibes freestyle music"] },
    { artist: "DEPECHE MODE", tracks: ["precious (dmo freestyle remix)"] },
    { artist: "DJ SOUL POSADA", tracks: ["moving on (remix 2 dub)", "moving on (dj merkone remix)"] },
    { artist: "DJMERKONE MUSIC", tracks: ["the anomaly", "wrong", "latnem flex", "the mixshow medley"] },
    { artist: "DMO", tracks: ["bow legged joe ft. apocalypsis"] },
    { artist: "E'DEE", tracks: ["sunrise (dj merkone house mix)", "sunrise (redemption remix)", "sunrise (merk one's '87 remix)", "sunrise (redemption drumapella mix)", "sunrise (merk one '87 synthpella)", "dance the night away (miami rice radio remix)", "dance the night away (miami rice extended remix)", "follow me (mixshow edit)", "follow me (synth-apella)", "follow me (dance mix)", "follow me (drum-apella)", "follow me (instrumental)", "follow me", "follow me (bonus beats)"] },
    { artist: "ERIC CRUZ", tracks: ["past my pain (mellow merk mix)"] },
    { artist: "FERDINAN MARCO", tracks: ["in the name of love"] },
    { artist: "HITMAN", tracks: ["stronger", "stronger (dj merkone's percussion remix)", "stronger (dubapella)", "stronger (instrumental)"] },
    { artist: "JL MADSKILLZ", tracks: ["mysterious mambo"] },
    { artist: "JOE ZANGIE", tracks: ["love you like wow (mixshow edit)", "love you like wow (radio edit)", "love you like wow (lp edit)", "love you like wow (radio instrumental)"] },
    { artist: "JOSEPH STAUB", tracks: ["let me be the one (club mix)", "let me be the one", "let me be the one (radio mix)", "let me be the one (drumapella)", "let me be the one (synthapella)", "alive again (adriano tg radio remix)", "alive again (dj merkone extended version)", "alive again (dj merkone radio version)", "alive again (dj merkone synthapeela)", "alive again (adriano tg synthapella)", "alive again (studio acapella)"] },
    { artist: "KC", tracks: ["sin tu amor (club remix)", "all night long (midnight remix)", "sin tu amor (feat. sito)", "devious"] },
    { artist: "L'AMOUR", tracks: ["why did you", "i need you", "please tell me", "dj modify's tribute mix", "keep it moving (djmerkone's remix)", "love again", "tell me why (demo)", "i wanna be loved (feat. dengel)", "tell me (djmerkone's demo)", "don't look back (feat. dengel)", "yesterday (original demo)", "something's wrong (studio demo)", "ever since", "keep it moving", "trust me", "what is this (remix)", "stephanie", "yesterday (feat. marilyn torres)", "easy does it", "yesterday (2013 demo)", "we must say goodbye", "you said you cared"] },
    { artist: "LUIS MARTE", tracks: ["apology i.o.u.", "apology i.o.u. (mixshow edit)", "apology i.o.u. (extended mix)", "apology i.o.u. (instrumental mix)", "apology i.o.u. (synthapella)", "apology i.o.u. (the merkone 1987 remix)", "100 mph (original mix)", "swag on 100", "freestyle on i4 (remix)", "club mix", "1987 (remix)", "radio mix", "dance mix", "sunrise mix", "the chase", "fallin'", "broken hearted days", "i don't want to dream", "so easy", "before you go"] },
    { artist: "MARILYN TORRES", tracks: ["callin' for love (official hd)", "why (remix)", "no puedo amarte", "my cry", "in exchange for what", "in exchange for what (radio)", "in exchange for what (mixshow)", "in exchange for what (synthapella)", "in exchange for what (the dmike remix)", "in exchange for what (djmerkone's bootleg)", "in exchange for what (djmerkone's 1987 remix)", "in exchange for what (joe magic's anthem)", "in exchange for what (the disk-o-naut remix)", "in exchange for what (xkhronaka's acoustic remix)", "in exchange for what (the disk-o-naut instrumental)", "in exchange for what (the freestyle diaries supermix)", "in exchange for what (maninho dj full pressure remix)", "in time (miami rice remix)", "in time (dark taboo remix)", "in time (radio mix)", "in time", "in time (howie w after hours mix)", "in time (joe magic's soulful house mix)", "in time (miami rice radio)", "torn", "torn (mixshow)", "torn (instrumental)", "torn (radio)", "torn (joe magic's tribal remix)", "torn (borinquen plaza club mix)", "torn (joe magic's quiet storm)", "torn (borinquen plaza remix)", "torn (deeper remix)"] },
    { artist: "MIA MARTINA", tracks: ["latin mood (dmo's freestyle remix)"] },
    { artist: "MIGUEL REYES", tracks: ["thanking you (ballad)", "thanking you (club mix)", "thanking you (drumapella)", "thanking musician (radio edit)"] },
    { artist: "MIKAYLA ROSE", tracks: ["seasons (dj merkone sterling gull remix)"] },
    { artist: "REBEKKA", tracks: ["enough", "enough (mixshow mix)", "enough (synthapella)", "enough (instrumental)", "enough (radio mix)"] },
    { artist: "RICARDO VAZQUEZ", tracks: ["goodbye (redeux)", "goodbye (synthapella)", "goodbye (radio edit)", "goodbye (mixshow edit)", "now that i (mixshow edit)", "now that i", "now that i (synthapella)", "now that i (radio edit)", "now that i (disk-o-nut remix)", "now that i (runtime error remix)", "now that i (acoustic version)", "now that i (soggy timbers remix)", "now that i (theeper doughts remix)", "now that i (disk-o-nut club edit)", "now that i (i4 club mix)", "now that i (i4 remix)", "take a chance", "take a chance (pinkavelli remix)", "take a chance (club mix)", "take a chance (dj tg's remix)", "take a chance (instrumental)", "take a chance (acapella)", "take a chance (drum-apella)"] },
    { artist: "RICARDO VAZQUEZ & JOSEPH STAUB", tracks: ["you'll be ok (side b extended mix)", "you'll be ok (side a radio mix)", "you'll be ok (side b radio mix)", "you'll be ok (extended side a mix)"] },
    { artist: "SELECTA ICEMAN", tracks: ["ella baila sola (ft. apocalypsis & mista jun jun)"] }
  ];

  const filteredDiscography = discography.filter(item => 
    item.artist.toLowerCase().includes(discographyFilter.toLowerCase()) ||
    item.tracks.some(t => t.toLowerCase().includes(discographyFilter.toLowerCase()))
  );

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
          body { font-family: 'Syne', sans-serif; cursor: crosshair; background-color: #030303; color: #f4f4f5; }
          .mono { font-family: 'JetBrains Mono', monospace; }
          .schmear-bg { background-image: linear-gradient(to bottom, rgba(3,3,3,1) 0%, rgba(3,3,3,0.8) 50%, rgba(3,3,3,1) 100%), url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M10 10h80v80H10z' fill='%23ffffff' fill-opacity='0.01'/%3E%3C/svg%3E"); background-attachment: fixed; }
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
            background-image: linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 100%), url("/loumerk.png"); 
            background-size: cover; 
            background-position: right center; 
          }
          .text-stroke { -webkit-text-stroke: 2px rgba(255,255,255,0.4); color: transparent; }
        `}
      </style>

      <div className="noise" />
      <div className="cursor-glow hidden md:block" style={{ transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)` }} />
      <div className="fixed w-4 h-4 bg-white rounded-full z-[1000] pointer-events-none mix-blend-difference hidden md:block" style={{ left: mousePos.x - 8, top: mousePos.y - 8 }} />

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-16 border-r border-white/5 z-[60] bg-black hidden lg:flex flex-col items-center justify-between py-10 overflow-hidden text-zinc-500 text-zinc-500">
        <div className="w-8 h-8 bg-white flex items-center justify-center text-black"><Music size={16} /></div>
        <div className="vertical-marquee flex flex-col space-y-12">
          {[...Array(4)].map((_, i) => <span key={i} className="mono text-[10px] tracking-[0.4em] uppercase text-zinc-700 whitespace-nowrap">djmerkone MUSIC • SONIC_PRECISION • EST_2019 •</span>)}
        </div>
        <div className="flex flex-col space-y-6">
          <a href="https://facebook.com/djmerkone" target="_blank" className="hover:text-white transition-colors"><Facebook size={14} /></a>
          <a href="https://instagram.com/djmerkone" target="_blank" className="hover:text-white transition-colors"><Instagram size={14} /></a>
          <a href="https://tiktok.com/@djmerkone" target="_blank" className="hover:text-white transition-colors"><TikTokIcon size={14} /></a>
        </div>
      </aside>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-[70] px-8 md:px-24 py-8 flex justify-between items-center mix-blend-difference pointer-events-none text-white text-white text-white text-white">
        <div className="pointer-events-auto group">
          <div className="flex flex-col text-white">
            <span className="text-2xl font-black italic tracking-tighter leading-none lowercase transition-all group-hover:text-red-500 text-white text-white text-white text-white text-white">djmerkone</span>
            <span className="text-zinc-400 text-[10px] mono tracking-[0.5em] mt-1 uppercase font-bold text-white text-white text-white">MUSIC</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-12 pointer-events-auto text-white">
          {['Production', 'Roster', 'Studio', 'Work'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-red-500 transition-colors text-white text-white text-white">{item}</a>
          ))}
          <button className="bg-white text-black px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">Inquire</button>
        </div>
      </header>

      {/* Hero */}
      <section id="production" className="relative h-screen flex items-center justify-center px-10 schmear-bg overflow-hidden text-white">
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.03]" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
          <span className="hero-text lowercase italic text-stroke opacity-10">djmerkone</span>
        </div>
        <div className="relative z-10 text-center max-w-7xl">
          <div className="mono text-[10px] tracking-[0.8em] text-red-500 mb-8 animate-pulse uppercase">[ IN_HOUSE_PRODUCTION_LAB ]</div>
          <h1 className="hero-text uppercase mb-12 text-white text-white text-white text-white">
            <DynamicShadowText text="SONIC" mousePos={mousePos} /> <br /> 
            <DynamicShadowText text="PRECISION." className="text-stroke italic" mousePos={mousePos} />
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-20">
            <div className="flex -space-x-4 text-white text-white">
              {['H', 'L', 'E', 'R', 'S', 'B'].map((l, i) => <div key={i} className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[10px] font-black mono hover:bg-red-600 hover:border-red-600 transition-all cursor-default text-white text-white text-white">{l}</div>)}
            </div>
            <p className="max-w-md text-sm font-medium uppercase tracking-[0.2em] leading-loose text-zinc-100 text-left border-l border-white/10 pl-8 italic text-white text-white">Established 2019. We fuse the raw energy of <span className="text-white text-white text-white text-white">Hip-hop & Latin</span> with the refined clarity of <span className="text-white text-white text-white text-white">EDM, Soul & Blues</span>.</p>
          </div>
        </div>
      </section>

      {/* Core Associates Section */}
      <section id="roster" className="py-40 px-8 md:pl-40 md:pr-24 relative text-white">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 border-b border-white/5 pb-12 text-white text-white text-white text-white text-white">
          <div className="max-w-xl text-white text-white">
            <h2 className="text-[10vw] md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-white text-white text-white text-white text-white text-white">
              <DynamicShadowText text="THE" mousePos={mousePos} /> <span className="text-red-600 italic text-stroke text-white text-white text-white text-white"><DynamicShadowText text="CORE" mousePos={mousePos} /></span>
            </h2>
            <p className="mono text-xs text-zinc-500 uppercase tracking-widest italic text-white text-white text-white text-white text-white">The architects behind djmerkone MUSIC projects.</p>
          </div>
          <Activity className="text-red-500 hidden lg:block mb-4 animate-pulse" size={48} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-white/5 border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)] text-white text-white">
          {artists.map((artist, i) => <ArtistCard key={i} artist={artist} openModal={openModal} mousePos={mousePos} />)}
        </div>
      </section>

      {/* Studio (Rearranged for Visibility) */}
      <section id="studio" className="py-40 px-8 md:pl-40 md:pr-24 hub-bg relative border-y border-white/5 text-white min-h-[85vh] flex items-center">
        <div className="max-w-6xl w-full relative z-10 mr-auto lg:pr-20 text-white text-white text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-white text-white">
             <div className="lg:col-span-5 p-16 border border-white/10 bg-black/70 backdrop-blur-xl rounded-[3rem] h-full flex flex-col justify-between hover:border-red-500/30 transition-all group text-white text-white text-white text-white">
                <Zap className="text-red-600" size={48} />
                <div>
                  <h3 className="text-6xl font-black uppercase italic mb-10 tracking-tighter text-white text-white text-white text-white text-white text-white text-white">
                     <DynamicShadowText text="THE" mousePos={mousePos} /> <br /> <DynamicShadowText text="HUB." mousePos={mousePos} />
                  </h3>
                  <p className="text-zinc-200 text-sm font-bold leading-relaxed uppercase tracking-widest italic border-l border-white/20 pl-6 text-white text-white text-white text-white text-white text-white text-white">Engineering multi-genre fidelity since 2019.</p>
                </div>
             </div>
             <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white text-white text-white">
              {services.map((service, i) => (
                <div key={i} className="p-10 border border-white/10 bg-black/85 backdrop-blur-md rounded-[2rem] hover:bg-zinc-900/60 transition-all group flex flex-col justify-between text-white text-white text-white">
                  <span className="mono text-[10px] text-zinc-400 group-hover:text-red-500 transition-colors uppercase font-bold tracking-widest text-white text-white text-white">[{service.category}]</span>
                  <div>
                    <h4 className="text-2xl font-bold uppercase tracking-tight mb-4 text-white text-white text-white text-white text-white text-white text-white text-white">
                      <DynamicShadowText text={service.title} mousePos={mousePos} className="group-hover:text-red-500" />
                    </h4>
                    <p className="text-zinc-300 text-xs font-medium tracking-widest leading-relaxed text-white text-white text-white text-white text-white text-white text-white">{service.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog (Featured Release Only) */}
      <section id="work" className="py-40 px-8 md:pl-40 md:pr-24 border-t border-white/5 bg-[#030303] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 text-white">
          <div className="sticky top-32 text-white text-white text-white text-white">
             <div className="absolute -top-20 -left-10 text-[15rem] font-black text-white/[0.02] select-none uppercase pointer-events-none lowercase opacity-10 text-white text-white text-white text-white text-white text-white">djmerkone</div>
             <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10 italic text-white text-white text-white text-white text-white text-white text-white">
               <DynamicShadowText text="THE" mousePos={mousePos} /> <br /> 
               <span className="text-stroke italic text-white text-white text-white text-white text-white"><DynamicShadowText text="CATALOG." mousePos={mousePos} /></span>
             </h2>
             <p className="mono text-xs text-zinc-500 uppercase tracking-widest italic leading-loose max-w-sm text-white text-white text-white text-white text-white text-white text-white">Featured Clinical Release. Explore the full djmerkone MUSIC archives via the discography station.</p>
          </div>
          
          <div className="flex flex-col space-y-12 text-white text-white">
            {/* Featured Track Card */}
            <div className="group relative flex flex-col md:flex-row items-center p-12 border border-white/10 bg-zinc-950 shadow-2xl transition-all text-white rounded-[2.5rem]">
              <div className="w-full md:w-48 aspect-square mb-10 md:mb-0 md:mr-12 bg-zinc-900 rounded-3xl overflow-hidden flex-shrink-0 border border-white/10 shadow-2xl text-white">
                <img src={featuredRelease.art} alt={featuredRelease.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="flex-grow text-white">
                <h5 className="text-4xl font-black uppercase group-hover:text-red-500 tracking-tighter text-white text-white text-white text-white text-white text-white text-white">
                  <DynamicShadowText text={featuredRelease.title} mousePos={mousePos} />
                </h5>
                <div className="flex items-center space-x-4 mt-4 text-white">
                  <p className="mono text-xl text-zinc-400 uppercase italic font-bold text-white text-white text-white text-white text-white text-white text-white">{featuredRelease.artist}</p>
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                  <p className="mono text-xs text-zinc-500 uppercase tracking-[0.2em] font-medium text-white text-white text-white text-white text-white text-white text-white">{featuredRelease.type}</p>
                </div>
                
                {/* Platform Buttons */}
                <div className="mt-10">
                   <p className="mono text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-black mb-4 italic">STREAM / PURCHASE</p>
                   <div className="flex flex-wrap gap-3">
                    <a href={featuredRelease.spotify} target="_blank" rel="noopener noreferrer" className="bg-zinc-900 border border-white/5 hover:bg-white hover:text-black px-6 py-3 rounded-full text-[10px] font-black tracking-widest transition-all duration-300">SPOTIFY</a>
                    <a href={featuredRelease.apple} target="_blank" rel="noopener noreferrer" className="bg-zinc-900 border border-white/5 hover:bg-white hover:text-black px-6 py-3 rounded-full text-[10px] font-black tracking-widest transition-all duration-300">APPLE MUSIC</a>
                    <a href={featuredRelease.yt} target="_blank" rel="noopener noreferrer" className="bg-zinc-900 border border-white/5 hover:bg-white hover:text-black px-6 py-3 rounded-full text-[10px] font-black tracking-widest transition-all duration-300">YT MUSIC</a>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-10 right-10 flex items-center text-white text-white text-white text-white">
                <div 
                  onMouseEnter={() => handlePreviewStart(featuredRelease.preview)}
                  onMouseLeave={handlePreviewStop}
                  className="w-20 h-20 border-2 border-white/10 flex items-center justify-center rounded-full group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all cursor-pointer text-white text-white text-white text-white"
                >
                  <Play size={32} fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Discography Button */}
            <button 
              onClick={() => openModal('discography')}
              className="w-full p-12 border border-white/5 bg-zinc-950/40 hover:bg-zinc-900 transition-all rounded-[2.5rem] flex items-center justify-between group shadow-xl"
            >
              <div className="flex items-center space-x-10">
                <Disc className="text-zinc-800 group-hover:text-red-500 animate-spin-slow" size={40} />
                <span className="text-2xl font-black uppercase tracking-[0.4em] text-zinc-500 group-hover:text-white transition-colors">Full Discography</span>
              </div>
              <ChevronRight className="text-zinc-800 group-hover:text-white transform group-hover:translate-x-3 transition-all" size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-40 px-8 md:pl-40 md:pr-24 border-t border-white/5 relative overflow-hidden text-white text-white text-white text-white text-white text-white text-white text-white">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center select-none pointer-events-none text-white text-white text-white text-white text-white text-white text-white text-white">
           <span className="hero-text uppercase italic text-white/5 scale-150 lowercase text-white text-white text-white text-white text-white text-white text-white text-white">djmerkone</span>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-20 text-white text-white text-white text-white">
          <div className="max-w-md text-white">
            <div className="flex flex-col mb-10 group text-white text-white text-white text-white text-white">
              <span className="text-4xl font-black italic tracking-tighter lowercase transition-all group-hover:text-red-500 text-white text-white text-white text-white text-white text-white text-white text-white">djmerkone</span>
              <span className="text-red-600 text-[10px] mono tracking-[0.5em] mt-1 font-bold uppercase text-white text-white text-white text-white text-white text-white text-white text-white">MUSIC</span>
            </div>
            <p className="text-zinc-500 text-xs font-black leading-loose uppercase tracking-[0.3em] italic text-white text-white text-white text-white text-white text-white text-white text-white text-white">Engineering the intersection of urban energy and cinematic fidelity since 2019.</p>
          </div>
          <div className="grid grid-cols-2 gap-20 text-white text-white text-white text-white">
            <div className="text-white text-white text-white text-white text-white">
              <h6 className="mono text-[10px] text-zinc-600 tracking-[0.5em] uppercase mb-10 font-bold underline underline-offset-8 text-white text-white text-white text-white text-white text-white text-white text-white">Network</h6>
              <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-zinc-400 italic text-white text-white text-white text-white text-white text-white text-white text-white text-white">
                <li><a href="https://luismartemusic.com" target="_blank" className="hover:text-red-500 flex items-center transition-colors text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">Luis Marte <ExternalLink size={12} className="ml-2" /></a></li>
                <li><a href="https://marilyn-site.vercel.app/" target="_blank" className="hover:text-red-500 flex items-center transition-colors text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">Marilyn Torres <ExternalLink size={12} className="ml-2" /></a></li>
                <li><a href="https://djmerkone-site0.vercel.app" target="_blank" className="hover:text-red-500 flex items-center transition-colors text-white text-white text-white text-white text-white text-white text-white text-white lowercase italic text-white text-white text-white text-white text-white text-white text-white text-white text-white">djmerkone <ExternalLink size={12} className="ml-2" /></a></li>
              </ul>
            </div>
            <div className="text-white text-white text-white text-white text-white">
              <h6 className="mono text-[10px] text-zinc-600 tracking-[0.5em] uppercase mb-10 font-bold underline underline-offset-8 text-white text-white text-white text-white text-white text-white text-white text-white">Social</h6>
              <div className="flex space-x-6 text-zinc-500 text-white text-white text-white text-white text-white text-white text-white text-white">
                <a href="https://facebook.com/djmerkone" target="_blank" className="hover:text-white transition-all text-white text-white text-white text-white text-white text-white text-white text-white"><Facebook size={20} /></a>
                <a href="https://instagram.com/djmerkone" target="_blank" className="hover:text-white transition-all text-white text-white text-white text-white text-white text-white text-white text-white"><Instagram size={20} /></a>
                <a href="https://tiktok.com/@djmerkone" target="_blank" className="hover:text-white transition-all text-white text-white text-white text-white text-white text-white text-white text-white"><TikTokIcon size={20} /></a>
                <a href="https://youtube.com/@djmerkone" target="_blank" className="hover:text-white transition-all text-white text-white text-white text-white text-white text-white text-white text-white"><Youtube size={20} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 pt-40 flex flex-col md:flex-row justify-between items-center text-zinc-700 mono text-[9px] uppercase tracking-widest font-black text-white text-white text-white text-white text-white text-white text-white text-white text-white">
          <p>© 2019 – {new Date().getFullYear()} djmerkone MUSIC // ALL_RIGHT_RESERVED</p>
          <div className="flex space-x-12 mt-8 md:mt-0 pointer-events-auto text-white text-white text-white text-white text-white text-white text-white text-white">
             <button onClick={() => openModal('privacy')} className="hover:text-white transition-colors cursor-pointer text-white text-white text-white text-white text-white text-white text-white text-white text-white">Privacy_Desk</button>
             <button onClick={() => openModal('terms')} className="hover:text-white transition-colors cursor-pointer text-white text-white text-white text-white text-white text-white text-white text-white text-white">Terms_Of_Sound</button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12 transition-all duration-500 text-white text-white text-white text-white">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={closeModal} />
          <div className={`relative w-full ${modal.type === 'discography' ? 'max-w-7xl h-[90vh]' : 'max-w-5xl max-h-[90vh]'} bg-zinc-950 border border-white/10 rounded-[3rem] overflow-hidden flex flex-col shadow-2xl shadow-black animate-in fade-in zoom-in duration-300 text-white text-white text-white text-white text-white text-white text-white text-white`}>
            <div className="p-8 border-b border-white/5 flex items-center justify-between text-white text-white text-white text-white text-white text-white">
              <div className="flex items-center space-x-4 text-white text-white text-white text-white text-white text-white text-white text-white">
                <div className="w-10 h-10 bg-white flex items-center justify-center text-black"><Music size={18} /></div>
                <div className="mono text-[10px] tracking-[0.4em] uppercase text-zinc-500 text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">
                  djmerkone MUSIC // {modal.type === 'artist' ? (modal.data.isMemorial ? 'Memorial_Memorandum' : 'Artist_Profile') : (modal.type === 'discography' ? 'Cinema_Discography_Station' : 'Information_Hub')}
                </div>
              </div>
              <button onClick={closeModal} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white text-white text-white text-white text-white text-white"><X size={20} /></button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-0 custom-scrollbar text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">
              {modal.type === 'artist' ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-white text-white text-white text-white text-white p-10 text-white text-white text-white text-white">
                  <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden rounded-[2rem] text-white text-white text-white text-white text-white text-white">
                    <img src={modal.data.img} alt={modal.data.name} className={`w-full h-full object-cover transition-all duration-700 ${modal.data.isMemorial ? 'sepia-[0.5] opacity-80 grayscale-[0.5]' : 'grayscale hover:grayscale-0'}`} />
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">
                      <h3 className={`text-6xl font-black uppercase tracking-tighter italic text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white ${modal.data.name === 'djmerkone' ? 'lowercase' : ''}`}>{modal.data.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-4 opacity-70 text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">
                        {modal.data.role.map((r, i) => <span key={i} className={`mono text-[8px] px-2 py-1 rounded-sm uppercase tracking-widest ${modal.data.isMemorial ? 'bg-red-900 text-white' : 'bg-white text-black'}`}>{r}</span>)}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-12 text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">
                    <div className="prose prose-invert max-w-none text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">
                      {modal.data.isMemorial && (
                        <div className="mb-10 p-6 bg-red-900/10 border-l-4 border-red-900 rounded-r-2xl text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">
                          <p className="mono text-[10px] text-red-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-2 text-white text-white text-white text-white text-white"><Heart size={12} fill="currentColor" /> Legacy Memorandum</p>
                          <p className="text-zinc-300 font-black tracking-tighter text-xl italic text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">{modal.data.note}</p>
                        </div>
                      )}
                      <p className="mono text-[11px] leading-relaxed tracking-widest uppercase text-zinc-400 italic whitespace-pre-line text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">{modal.data.bio}</p>
                    </div>
                    <div className="pt-12 border-t border-white/5 text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">
                      <h4 className="mono text-[10px] tracking-[0.4em] uppercase text-red-500 mb-8 font-bold italic text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">Official_Connectivity</h4>
                      <div className="grid grid-cols-1 gap-6 text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">
                        {modal.data.link && (
                          <a href={modal.data.link} target="_blank" className="flex items-center space-x-6 group text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">
                            <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white"><Globe size={16} className="text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white" /></div>
                            <span className="text-sm font-black uppercase tracking-widest italic underline decoration-zinc-800 group-hover:decoration-white transition-all underline-offset-8 text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">{modal.data.isMemorial ? 'Memorial Obituary' : 'Official Website'}</span>
                          </a>
                        )}
                        {modal.data.socials && (
                          <div className="flex flex-wrap gap-6 pt-4 text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">
                            {Object.entries(modal.data.socials).map(([key, val]) => (
                              <a key={key} href={`https://${key}.com/${val}`} target="_blank" className="text-zinc-500 hover:text-white transition-colors text-white text-white text-white text-white">
                                {key === 'fb' && <Facebook size={20} />}
                                {key === 'ig' && <Instagram size={20} />}
                                {key === 'yt' && <Youtube size={20} />}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (modal.type === 'discography' ? (
                <div className="p-10 lg:p-20 text-white text-white text-white text-white text-white text-white">
                  <div className="relative mb-20 text-center">
                     <h3 className="text-5xl font-black uppercase tracking-tighter mb-4 italic text-white text-white text-white text-white text-white text-white">THE ARCHIVES</h3>
                     <p className="mono text-xs text-zinc-500 uppercase tracking-widest mb-12 text-white text-white text-white text-white text-white">Complete registry of releases, remixes, and studio collaborations.</p>
                     <div className="relative max-w-2xl mx-auto text-white">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-700 text-white" size={20} />
                        <input 
                          type="text" 
                          placeholder="FILTER_BY_ARTIST_OR_TRACK..." 
                          className="w-full bg-white/5 border border-white/10 p-8 pl-16 rounded-full mono text-sm uppercase tracking-widest text-zinc-200 focus:outline-none focus:border-red-500/50 transition-all shadow-2xl text-white"
                          onChange={(e) => setDiscographyFilter(e.target.value)}
                        />
                     </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-white text-white text-white text-white text-white">
                    {filteredDiscography.map((group, idx) => (
                      <div key={idx} className="space-y-6 bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all text-white text-white text-white text-white">
                        <h4 className="text-xl font-black text-red-600 uppercase tracking-[0.2em] italic border-b border-red-900/30 pb-4 text-white text-white text-white text-white text-white">{group.artist}</h4>
                        <ul className="space-y-4 text-white text-white">
                          {group.tracks.map((track, tIdx) => (
                            <li key={tIdx} className="mono text-[11px] text-zinc-500 uppercase tracking-widest leading-relaxed hover:text-white transition-colors flex items-start text-white text-white text-white text-white text-white text-white text-white">
                              <span className="mr-4 text-zinc-800 font-black text-white">{(tIdx + 1).toString().padStart(2, '0')}</span>
                              {track}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : <div className="flex items-center justify-center py-20 text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white"><div className="prose prose-invert max-w-none mono text-xl leading-relaxed tracking-widest uppercase text-zinc-400 italic text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">Info coming soon...</div></div>)}
            </div>
            
            <div className="p-8 bg-zinc-900/50 border-t border-white/5 text-center text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white"><p className="mono text-[8px] text-zinc-600 uppercase font-black tracking-widest text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white text-white">djmerkone MUSIC // Ver. 2026.04</p></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;