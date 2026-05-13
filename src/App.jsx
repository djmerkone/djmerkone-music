import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  Music, ExternalLink, Disc, Play, Pause, ChevronRight, ChevronLeft,
  Facebook, Youtube, Globe, Heart, X, Search, SlidersHorizontal,
  Mic2, PenTool, Headphones, ArrowUpRight, Send, CheckCircle2, AlertCircle,
  Volume2, Radio, Activity, PlayCircle, Sparkles, Cpu, Zap, Layers,
  MapPin, Mail, Menu
} from 'lucide-react';

/**
 * ==========================================
 * 1. DATA CONSTANTS (PRESERVED)
 * ==========================================
 */
const ARTISTS_DATA = [
  { name: "djmerkone", role: ["Writer", "Producer", "Engineer", "Artist", "DJ"], link: "http://me.djmerkone.com", img: "dmobio.jpg", accent: "fuchsia", bio: "djmerkone // Sonic Architect & Multidisciplinary Engineer\ndjmerkone operates at the high-fidelity intersection of rhythm and precision. With a career spanning over three decades, he has established himself as a definitive architect of the Florida sound—a multidisciplinary engineer whose work bridges the gap between classic foundations and futuristic clarity.\n\nRooted in the high-energy pulse of the 1990s music scene, djmerkone’s evolution is a testament to technical mastery and creative fluidity. His catalog is a diverse registry of credits that move seamlessly between the gritty low-end of experimental hip-hop, the soulful textures of R&B, and the driving, percussive heart of Latin freestyle and house music.\n\nAs a producer and mastering engineer, djmerkone views sound as architecture. Whether he is building a track from the ground up or providing the final clinical polish to a global release, his philosophy remains the same: engineering is the science of emotion. His precision in the studio ensures that every frequency serves a purpose, allowing the artist's vision to cut through the digital noise with absolute authority.\n\nEntering 2026, djmerkone remains a sought-after collaborator for artists seeking a signature sonic identity. His recent works—including extensive production and engineering for Marilyn Torres' The EP and Jase David's Threads—showcase a continued dedication to pushing the boundaries of modern sound.\n\ndjmerkone is more than a technician; he is a curator of the sonic experience. He doesn't just record music—he engineers the future.", socials: { fb: "djmerkone", ig: "djmerkone", tt: "djmerkone", yt: "djmerkone" } },
  { name: "Marilyn Torres", role: ["Artist", "Writer", "Producer"], link: "https://marilyn.djmerkone.com/", img: "maribio-1.jpg", accent: "emerald", bio: "Marilyn Torres: The Evolution of a Freestyle Icon\nFrom the sun-drenched streets of Ponce, Puerto Rico, to the rhythmic pulse of New Jersey, Marilyn Torres has spent over two decades carving a unique path through the music industry. Known for her powerhouse vocals and a fearless ability to pivot between genres, she has evolved from a digital pioneer to a cornerstone of the modern Latin Freestyle movement.\n\nThe Foundations (2005–2013)\nMarilyn’s journey began in 2005 with the groundbreaking digital debut of \"Callin' For Love.\" This early embrace of digital distribution set the stage for a prolific run that showcased her versatility:\n\nThe Freestyle Era: She solidified her voice with \"No Puedo Amarte\" (2006), \"Why\" (2007), and \"My Cry\" (2008).\n\nGenre Defiance: In 2009, she showcased her range with the reggaeton track \"Yo No Fui\" and dominated the Latin Hip-Hop scene with a series of sharp battle and diss tracks through 2013.\n\nKey Collaborations: Her career is marked by deep musical partnerships, including work with Apocalypsis and her brother Gerry (Jeriel). She also famously collaborated with L’amour on \"Yesterday\" in 2012—a track that took on new meaning when it was featured again on his posthumous final album as a tribute to their shared artistry.\n\nThe Return and Contemporary Success\nAfter a brief hiatus, Marilyn returned to the spotlight with the massive hit \"In Exchange For What,\" signaling a new chapter of official digital releases that have dominated the dance charts. Her recent work continues to push the genre forward while honoring its roots:\n\n\"In Time\": A standout collaboration with Joe Magic and Howie Wienman.\n\nChart-Toppers: Recent staples like \"Torn\" and the upcoming \"Don't Let Me\" continue to resonate with a global audience of DJs and freestyle enthusiasts.\n\nWhether she is delivering a heartfelt ballad or a high-energy dance anthem, Marilyn Torres remains a resilient force in the industry—a Jersey-raised talent with a Puerto Rican heart, bridging the gap between the underground and the international stage.", socials: { fb: "marilyntorresmusic", ig: "marilyntorres", tt: "marilyntorres", yt: "marilyntorres" } },
  { name: "Luis Marte", role: ["Collaborator", "Artist", "Writer", "Producer", "Engineer"], link: "https://luismartemusic.com", img: "luisbio.JPG", accent: "cyan", bio: "Luis Marté has been blessed with a long career in the music industry as an artist, songwriter, engineer and producer. He has opened for Chico Debarge on the Apollo stage, toured with pop sensation 98 Degrees, shared the Disney Channel spotlight with latin heart throb Enrique Iglesias and burned the airwaves of MTV TRL.\n\n“Those were exciting times in my life, here’s a kid from the Bronx, living out his dream on the biggest stage”\n\nFor most of his career as a performing artist, he rode the journey with three other guys. Strange Wayz was the name they went by, four childhood friends, four guys who took a chance on each other to chase a dream and boy did they ever. They signed to power house booking agency ICM: International Creative Management in early 2001 and were catapulted into the scene opening for major pop acts dominating the charts. Strange Wayz was able to fuse their latin roots with a Pop/R&B swag that propelled them to heights only dreamed about in streets of the Bronx.\n\n“They already have the talent, they already have the music…” ~ Enrique Iglesias\n\nStrange Wayz signed a Production Deal shortly after touring and the group took on a different look and feel, sign of the times?! Out with the pop boy band sound and in with the more mature R&B Dance. With a change in sound, so did a change come in the groups members. Luis was the last to remain of the original group and a new group formed around him; ForeKast.\n\n“We were in a different place then, now we were working with some heavyweights, alot was on the line”\n\nThe group was setup for success, working with producer/vocal arranger phenom’ Jim Beanz who they affectionately called “Jimba”, whose credits at the time included P Diddy, Danity Kane, Timberland, Day 26, and Justin Timberlake.\n\nFast forward to present day, Luis now finds himself back on the scene penning pop records, working behind the scenes developing fresh new talent and continuing to release his own music under his label LMM Recordings.\n\nStay tuned for future releases.", socials: { fb: "luismartemusic", ig: "luismarte", tt: "luismarte", yt: "luismarte" } },
  { name: "Ricardo Vazquez", role: ["Writer", "Artist"], img: "ricbio3.jpg", accent: "orange", bio: "Ricardo Vazquez, widely known in the freestyle and dance music circuits as Ricky Vaz, is a veteran force whose musical journey began in the auditoriums and theater productions of his Rochester, New York high school. Emerging onto the scene in the late ‘90s, his career has been defined by a high-output discography and a relentless dedication to Latin Freestyle, R&B, and House music.\n\nHis breakthrough arrived in 1999 with his debut single, \"Moment of Love,\" featured on Freestyle Mania Vol 2. This momentum propelled him into the early 2000s, landing the hit \"See My Tears\" on the legendary Micmac Records in 2005. These early successes proved his ability to blend street-level authenticity with professional studio polish, establishing him as a defining voice in both the Rochester scene and the national freestyle landscape.\n\nA prolific collaborator and dynamic performer, Ricardo has built an expansive discography working with legendary labels and imprints, including Artistik Records, Artie Productions, Str84ward Entertainment, Pitch Control Productions, and DMO Musik. His major studio projects—such as his 2014 full-length album A Piece of Me, Abandoned, and the In A Class of Our Own series (alongside NuStyle Records owner Alex Zuniga)—serve as powerful timestamps of his sonic evolution. Fearlessly pivoting between classic freestyle energy and mature R&B/House textures, he has delivered standout collaborations alongside Andrea Martin (\"That’s What It’s All About\"), Marilyn Sanchez (\"Love Will See Us Through\"), Hector “Sito” Santiago (\"On the Outside\"), and frequent collaborator Luis Marte.\n\nBeyond the vocal booth, Ricardo is a devoted mentor and industry leader. In 2005, he founded Menage3 Entertainment to help guide up-and-coming artists through production, writing, vocal training, and the intricacies of the music business. His passion for artist development continues to be a driving force, as he frequently coordinates with other record labels and entertainment companies to elevate the scene as a whole.\n\nAs a songwriter and vocalist, Ricardo proudly represents the LGBTQIA+ community, using his platform to push for equality and authentic expression. Through tracks like \"You'll Be OK\" featuring Joseph “Joey Tee” Wetmore, his writing reflects the truth of modern love and aims to make a lasting, inclusive statement within the genre.\n\nToday, Ricardo Vazquez remains a cornerstone of the djmerkone MUSIC collective. Continuing to perform, host, and MC, he operates as a lead artist, backup vocalist, and elite songwriter. His decades of experience, undeniable drive, and clinical understanding of hit-making hooks make him an essential pillar of the studio's creative infrastructure, ensuring his continued impact on the music industry.", socials: { ig: "ricardovazquez" } },
  { name: "Dengel", role: ["Producer", "Writer", "Artist", "Engineer"], img: "dengbio.jpg", accent: "rose", bio: "Dengel (William D. Cortes) is a versatile titan of the Latin Urban and Freestyle genres, with a career rooted in the raw energy of the early scene. He first made his mark as 'Willie D' in the burgeoning Latin Hip-Hop movement with the track 'Mi Abuela,' proving early on his ability to capture a rhythmic vibe.\n\nTransitioning into the late 90s, Dengel joined the powerhouse High Power Records under the moniker 'Nadamas.' Alongside his partner, he debuted the 1997 hit 'Dat Hoochie,' a track that became a staple of the era's club rotation. His creative chemistry extended into deep collaborations with the late Carlos 'Charlie' Velasquez (L'amour), co-authoring and performing on the freestyle classics 'I Wanna Be Loved' and 'Don't Look Back.'\n\nThe dawn of the 2000s saw Dengel expand his influence by partnering with djmerkone to establish Wik-It Records. This alliance launched a series of high-impact releases that defined the 'New School' sound, including the hits 'Sexual Vibe' and 'She Left Me.' These tracks didn't just top charts; reshaped the Latin Freestyle landscape for a new generation.\n\nDengel remains an essential pillar of djmerkone MUSIC today. As an artist, elite songwriter, and backup vocalist, his decades of expertise and clinical ear for hooks ensure the collective's output maintains its legendary sonic precision.", socials: { ig: "dengelmusic" } },
  { name: "Apoca", role: ["Artist", "Writer"], img: "apobio.jpg", accent: "purple", bio: "Victor Ivan Justiniano, known to the Latin Urban world as Apocalypsis or \"El Apoca,\" is a trailblazing artist whose roots run deep in the foundational era of the reggaeton movement. Born in Bayamon, Puerto Rico, he discovered his passion for music at the age of 13 before relocating to Florida in 1994. His journey is one of relentless evolution—from a local club pioneer to an internationally recognized solo artist and key driving force within the djmerkone MUSIC collective.\n\nEl Apoca’s professional career ignited when he formed the groundbreaking group Los Archangeles alongside Reinaldo \"Terrorista\" Santiago and producer djmerkone. As true pioneers of the Latin Urban movement in Jacksonville, their gritty, authentic sound and commanding stage presence earned them the undisputed heavyweight title, \"Los que Controlan desde el Norte de la Florida\" (The ones in control from North Florida).\n\nA major turning point arrived in 2005. Following a two-year stint with the independent label Baila Latin Music (BLM), the group released the breakout track \"Esa Nena\" on the Face Off: Special Edition compilation. The song became a massive catalyst, opening doors and expanding their reach into critical markets across Florida, Texas, New York, New Jersey, and Puerto Rico. That same year, El Apoca made his television debut on Telemundo T43, performing at the Hispanic Heritage Festival of South Florida.\n\nBy 2006, after a rebranding as the powerhouse duo \"Apoca & Terro,\" he helped launch the foundational DMO Muzik label alongside djmerkone. Driven to expand his horizons, El Apoca officially transitioned into a solo artist in 2009, relocating to New York City. There, he embedded himself in the vibrant local scene, performing across the Bronx, Queens, Long Island, and at the iconic Puerto Rican Day Parade in Brooklyn. After returning to Florida in 2011 to further refine his sound, he struck international success in 2013, collaborating with acclaimed producer James de la Raza on the remix of \"Bailalo.\" This hit opened the doors to the Dominican Republic, leading to a highly successful promotional tour across the island's premier clubs and events.\n\nThroughout his expansive career, El Apoca has proven his mettle by sharing the stage and opening for a staggering roster of legendary musical figures, including Aventura, Nicky Jam, Farruko, Baby Rasta y Gringo, Don Chezina, Alexis y Fido, Trebol Clan, Khriz y Angel, Tito Puente Jr., Grupo Mania, Algarete, Noriega, and Fulanito.\n\nIn 2020, El Apoca officially reunited with djmerkone to combine forces once again, stepping into a dynamic new chapter. Now partnered with djmerkone MUSIC, he is seamlessly bridging the gap between his pioneer roots and the modern Latin Urban landscape. Armed with a refined sound, an expanding international reach, and the same undeniable energy that first put North Florida on the map, Victor Ivan \"Apoca\" Justiniano continues to prove why he remains a formidable, enduring force in the industry.", socials: { ig: "elapoca" } },
  { name: "Jei", role: ["Writer", "DJ", "Producer", "Vocalist"], img: "jei.jpg", accent: "indigo", bio: "Born in Waukegan, Illinois, and raised between Vineland, New Jersey, and Fort Lauderdale, Florida, Gerry Torres—known creatively as \"Jei\" — is a dynamic, multifaceted talent whose life has been consistently driven by the motivational and inspirational power of music.\n\nJei first cut his teeth in the entertainment scene under the moniker \"Dj Chori,\" where he honed his crowd-control skills by hosting parties and commanding live performances. This foundational era as a DJ gave him an acute ear for what moves an audience, seamlessly transitioning him from the turntables to the vocal booth and onto the stage.\n\nWhile he maintains a highly curated personal discography, Jei’s impact on the industry has been profound and far-reaching. For years, he has served as a trusted advisor, prolific writer, and essential creative pillar within the djmerkone MUSIC collective. Working closely alongside producer djmerkone, Jei has been instrumental in shaping the artistic direction of the label, frequently collaborating with standout artists like Apocalypsis (\"El Apoca\") and Marilyn Torres.\n\nBeyond his behind-the-scenes contributions as a writer and consultant, Jei is a magnetic live performer. He has shared the stage with the entire collective roster, delivering electrifying performances across Puerto Rico, Orlando, and Tampa. His charismatic energy has also transitioned to the screen, making memorable appearances in the collective's music videos.\n\nMusically, Jei is a visionary. Driven by a deep-rooted love for the infectious rhythms of Bachata and the smooth textures of R&B, he is on a mission to pioneer a unique sonic fusion—a genre deliberately crafted to \"move souls.\" This emotive, genre-blending approach is perfectly showcased in his standout early collaborations, including \"Tu Cuerpo\" and the heavy-hitting \"Ella me llama\" alongside Apocalypsis.\n\n Whether he is guiding the creative direction of a new project, writing the perfect hook, or bringing a track to life under the stage lights, Gerry \"Jei\" Torres remains an indispensable force, continuing to elevate the sound, soul, and vision of the djmerkone MUSIC family." },
  { name: "L'amour", role: ["Producer", "Writer", "Artist"], img: "lam0.jpg", accent: "zinc", isMemorial: true, bio: "L'amour (Carlos 'Charlie' Velasquez) was a visionary producer, writer, and artist whose influence spanned the golden eras of freestyle and contemporary electronic music. Operating under various monikers including la-mour, l'amour, Carlos Velasquez, and Charlie Velasquez, he was a key figure in the High Power Records era, where his sharp songwriting and vocal contributions helped define a generation of sound.\n\nHis legacy is rooted in his work with la-mour productions, High Power Records, and his deep creative bond with djmerkone MUSIC. A prolific creator, Charlie was responsible for writing numerous hits for High Power and providing standout vocal performances that combined raw emotion with technical precision. Notable works include his hauntingly beautiful collaboration with Marilyn Torres on 'Yesterday,' a track that remains a cornerstone of his posthumous catalog.\n\nOn December 16, 2019, the music world lost a true sonic architect. Carlos was 45 years old, a beloved resident of Pennsylvania, whose passion for his craft left an indelible mark on the music industry. Though he is no longer in the studio, his frequencies continue to resonate through every project he touched.", note: "Carlos 'Charlie' Velasquez", lifespan: "August 17, 1974 – December 16, 2019", link: "https://www.dillonfuneralhomeinc.com/obituary/CarlosCharlie-Velasquez", socials: { yt: "djmerkone" } }
];

const OFFICIAL_RELEASES_DATA = [
  { artist: "Marilyn Torres", title: "Forgive Me***", type: "EP (4 Tracks)", art: "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F2439182--5D73E809-F785-4433-8CBC1CC3A83D36C0--0--15224287--ForgiveMeCover.png?fm=jpg&q=75&w=800&s=62dbd8cfc4a49938e44a691c33bcec52", preview: "forgive.mp3" },
  { artist: "Marilyn Torres", title: "Don't Let Me*", type: "EP (8 Tracks)", art: "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F2439182--B8ED0DAA-5C77-4DA4-B7B3CEDB5EA4BBFB--0--17901464--DONTLETMECOVERFRONT.png?fm=jpg&q=75&w=800&s=dab38261a5741cf0a98ff6ea6c153afb", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_92815263_3939F1655E75E4A6DE8FD52430E93689.mp3", apple: "https://music.apple.com/us/album/dont-let-me/1870639799?uo=4", spotify: "https://prf.hn/click/camref:1101ljvYv/pubref:albumuuid%3DB8ED0DAA-5C77-4DA4-B7B3CEDB5EA4BBFB/destination:https://open.spotify.com/album/0SJf7QCpc3VD1AaMh6dPRx", yt: "https://music.youtube.com/playlist?list=OLAK5uy_l6vs4GPW_kLZl21rvPS02g5c8kFhUBSiY&si=R-d8ehWM21kkcBAA", amazon: "https://amazon.com/music/player/albums/B0DYM8299K" },
  { artist: "Marilyn Torres", title: "Mi Viejo (Cover)**", type: "Single", art: "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F2439182--B2410C0A-5A37-4B51-8499E7C0F97378EF--0--10600304--1000008540.png?fm=jpg&q=75&w=800&s=743d39c70fe80f17f5cabf99450abeca", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_87699065_8062EA63A1748AD72730E4EA7235A296.mp3", apple: "https://music.apple.com/us/album/mi-viejo-single/1857094292?uo=4", spotify: "https://open.spotify.com/album/7xU3hnUaJZo9AQ5WfswZJK", yt: "https://music.youtube.com/watch?v=b2k2oCnvRwg&si=rY-qi6iBcI7pote8", amazon: "https://www.amazon.com/dp/B0G4CMQFMM/ref=sr_1_1?crid=24353U7SZ7UXU&dib=eyJ2IjoiMSJ9.t_daZ-EJfNUNudjONa2vJfRznUgxbeBPooFwgSkTgWDGjHj071QN20LucGBJIEps.sWjx58MaA8NdZdoVdSuoJ7Gy84mVfV6VWRuAGW_Rrc8&dib_tag=se&keywords=marilyn+torres+mi+viejo&qid=1775479769&sprefix=marilyn+torres+mi+viejo%2Caps%2C404&sr=8-1" },
  { artist: "Marilyn Torres", title: "The EP", type: "Album (15 Tracks)", art: "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F2439182--72B9B244-B77E-488E-8F580A7F85C11985--0--14118676--PSX202510181410442.png?fm=jpg&q=75&w=800&s=61baffb6f3395e6008c830d2b8b4709c", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_85186471_793A0A8058F9B356D76C8852EAB47880.mp3", apple: "https://music.apple.com/us/album/the-ep/1850311861?uo=4", spotify: "https://open.spotify.com/album/4dqPBGWefdt3d0nbDcg2ER", yt: "https://music.youtube.com/browse/MPREb_YgAHRzAwBgS", amazon: "https://amazon.com/music/player/albums/B0FYCWF875?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_zxL1u7MFOBPPWdWVzdnU0SMsC" },
  { artist: "djmerkone", title: "latnem flex", type: "Single", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D3790EFCC%2DFC55%2D4D7A%2DAB629C00CDE5F508%2D%2D0%2D%2D7805867%2D%2D1000007443%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_84250563_A39E3B5DE28D40F31CC1DE9575B8E7F5.mp3", apple: "https://music.apple.com/us/album/latnem-flex-single/1847568073?uo=4", spotify: "https://open.spotify.com/album/2Qrz2t3uSG1D9fU4kcJQLT", yt: "https://music.youtube.com/watch?v=QifcZrj65ms", amazon: "https://www.amazon.com/dp/B0FWWX7BGV/ref=sr_1_1?crid=4IJI60GTTX72&dib=eyJ2IjoiMSJ9.w_jp02N0AvuXIsm4aGPuFzVYFHVf-PS4wPL0-O_HL0U.6wmWxXMLEvGBG5T-3HslL0wiwQyajDTCtFFobVEu4HI&dib_tag=se&keywords=djmerkone+latnem+flex&qid=1775480676&sprefix=djmerkone+latnem+fle%2Caps%2C173&sr=8-1" },
  { artist: "djmerkone", title: "wrong", type: "Single", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D9FF69870%2D6809%2D4A55%2D8E8EC29A948CCEE0%2D%2D0%2D%2D528811%2D%2D1000007464%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_84250289_69C7A0C90B9450E3E52FB2B8692529A6.mp3", apple: "https://music.apple.com/us/album/wrong-single/1847380167?uo=4", spotify: "https://open.spotify.com/album/493KDL9dcZhWuSDpiV2a0i", yt: "https://music.youtube.com/watch?v=GPz1sHH4xVc&si=fgy5HlS4yj8wewC3", amazon: "https://www.amazon.com/dp/B0FWXBTG1M/ref=sr_1_1?crid=3J1GRHC9SMD3K&dib=eyJ2IjoiMSJ9.R0bEaZIsFpoqSmtLYovsh0Pz1Hxp8RiTE_NN2zuTCybGjHj071QN20LucGBJIEps.T_GG1hXeybk_fcHURXMjYkzKJ4pykW_dMNhrHvRclL8&dib_tag=se&keywords=dj+merkone+wrong&qid=1775480704&sprefix=djmerkone+wron%2Caps%2C164&sr=8-1" },
  { artist: "djmerkone", title: "anomaly", type: "Single", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DEB27753B%2D4CAC%2D4F9C%2DB937654AA2EAF313%2D%2D0%2D%2D641299%2D%2D1000007457%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_84249914_E59F1F9981B8013561A80EFA16D2B06F.mp3", apple: "https://music.apple.com/us/album/anomaly-single/1847557771?uo=4", spotify: "https://open.spotify.com/album/771CqnGm4WE0xtapgq8Bap", yt: "https://music.youtube.com/watch?v=vIjRymiWY5Q&si=JSrNIuMfrlDOnqiY", amazon: "https://www.amazon.com/dp/B0FWWL38RM/ref=sr_1_2?crid=11WFVXWZT5Q7P&dib=eyJ2IjoiMSJ9.Z3NOgvEKehqr1K_Rxsb-ifQXks6enKK6W4GWGyirGUPGjHj071QN20LucGBJIEps.koQNUtGGpF6dPpFbntt9x-PoyFTUnSW6mYbe9dwjBVU&dib_tag=se&keywords=djmerkone+anomaly&qid=1775480735&sprefix=djmerkone+anomal%2Caps%2C167&sr=8-2" },
  { artist: "djmerkone", title: "chasmitha", type: "Single", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D5E2BF402%2D1A7A%2D4E84%2DB46C42D07934069F%2D%2D0%2D%2D1482023%2D%2DPSX202510090930412%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_83682243_801FC8AE6C36B097E885BA980169335E.mp3", apple: "https://music.apple.com/us/album/chasmitha-single/1845767250?uo=4", spotify: "https://open.spotify.com/album/5JMUpkuDcShpAqciuwlGh0", yt: "https://music.youtube.com/watch?v=6TGec3Dkwoo&si=GND_I4E-0fvKGOYP", amazon: "https://www.amazon.com/dp/B0FVRPFVWB/ref=sr_1_1?crid=29G4RSB6UM9ZH&dib=eyJ2IjoiMSJ9.ehfdyksba_LBOsAVyar6hdpmTCG8AytzRreCyDD6rHk.aWli3FAhgxIxdsDKs04BuhZw8KtEREZXyIJ53Kql5Fo&dib_tag=se&keywords=dj+merkone+chasmitha&qid=1775480836&sprefix=djmerkone+chasmitha%2Caps%2C159&sr=8-1" },
  { artist: "Luis Marte", title: "100 MPH", type: "EP (8 Tracks)", art: "https://i.discogs.com/vYW6zrL9jzXwT2l7WQnk6rpj1qPyc97evBqM1hJdBhk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NTQ1/NDI1LTE2MTk4ODI4/MzctMjMxMC5qcGVn.jpeg", preview: "/100mph.wav", apple: "https://music.apple.com/us/album/100-mph/1817531010", spotify: "https://open.spotify.com/album/5vjuqBXaAbBvw8o9GNUXj5", yt: "https://music.youtube.com/playlist?list=OLAK5uy_lTGujWshYCYkBPyDKvtNQn_V_VwyF6XdI&si=E5ptXsRTdmvZPAzp", amazon: "https://www.amazon.com/100-MPH-Luis-Marte/dp/B0FBCV7QSS" },
  { artist: "Ricardo Vazquez", title: "Take A Chance", type: "EP (7 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DA316E674%2D67A4%2D4277%2DB1C90DC4B836E2A6%2D%2D0%2D%2D411812%2D%2DIMG20240630173037%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_58209599_F5651FCD-E2B7-4AB3-887638C20D054803.mp3", apple: "https://music.apple.com/us/album/take-a-chance/1755680035?uo=4", spotify: "https://open.spotify.com/album/5RTzX3vyQsYeAYZBeE1Joh", yt: "https://music.youtube.com/playlist?list=OLAK5uy_nHaKW4WLrJQt7PtZT8o8IH_sXLd7Z-Z-Y&si=cE3kckJVRJG46UFR", amazon: "https://www.amazon.com/dp/B0D8R81FS1/ref=sr_1_1?crid=BO764P1CYDTP&dib=eyJ2IjoiMSJ9.h9Mec4Tzwpkpzqe8zc9JMVrbRgd3F8KvsvZXlm_Be2cLBGvl0TFd5SHR2oMANCfI5YGClsUl8pt7PxoKzH4v-nxfg3YOzyDPj6rKWX_UJiAi-WZLgwFsY-7uPquXcx95.xAyEhrhB3UxiD02870w1W9Xyk2ofD36Ze0cvZegntX8&dib_tag=se&keywords=ricardo+vazquez+take+a+chance&qid=1775480858&sprefix=ricardo+vazquez+take+a+chance%2Caps%2C155&sr=8-1" },
  { artist: "L'amour", title: "Yesterday", type: "Album (22 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DE458CCAE%2D1DAC%2D46FC%2DBFDBDFE07BA366D5%2D%2D0%2D%2D3580192%2D%2DLAMOURYesterdayEP%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_35846484_BEA8E7F2-6970-4C27-A0EA010309BAD8F2.mp3", apple: "https://music.apple.com/us/album/yesterday/1649788357?uo=4", spotify: "https://open.spotify.com/album/1R5cKN4duP6TvuzEdano8o", yt: "https://music.youtube.com/playlist?list=OLAK5uy_lEYQu3LGiegfemSOnFtLT7GBXE7h2by1g&si=MEIp_Jocnunf8Xob", amazon: "https://www.amazon.com/music/player/albums/B0BJ52LPY2" },
  { artist: "Marilyn Torres", title: "Torn (The Remixes)", type: "EP (5 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D62C5413F%2D2287%2D46CE%2DA99B33EDB7CF9E03%2D%2D0%2D%2D10245288%2D%2DTORNREMIXCOVERfinal2%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_31148828_7185220A-733F-43A0-90A405FFF7FAB7BC.mp3", apple: "https://music.apple.com/us/album/torn-the-remixes-ep/1620407955?uo=4", spotify: "https://open.spotify.com/album/7mtpN4xWqbJEoOP23bIVwR", yt: "https://music.youtube.com/playlist?list=OLAK5uy_l9lKpSagP4TeCc6zIPNEA9-CHvUVTUxw8&si=E2L1s_ldk6nrxWe7", amazon: "https://www.amazon.com/dp/B09YJ5Y81S/ref=sr_1_1?crid=3BUS87CYX0CUQ&dib=eyJ2IjoiMSJ9.FTKYY1gziKc5NrLZZsMFJG287Q422woGN2ETSjVaCFfhNkkOB2cOmqWM9izxoFXNdQ0QxcO2WYZumEln6Std5Q.vAdqbhKe8kQV_D-TpEzkm4jJr4ZqoRN55HOJd1ScqWw&dib_tag=se&keywords=marilyn+torres+torn+the+remixes&qid=1775480956&sprefix=marilyn+torres+torn+the+remixe%2Caps%2C160&sr=8-1" },
  { artist: "Ricardo Vazquez", title: "Now That I (The Remixes)", type: "EP (8 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D296BE620%2DF7A2%2D4CCD%2DB0E371F8ED2FF454%2D%2D1641042936081%2D%2Dphotostudio1639152467204%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_28440964_DB88B7C3-4DF8-4605-B941A3D2D1FC791A.mp3", apple: "https://music.apple.com/us/album/now-that-i-the-remixes/1603491126?uo=4", spotify: "https://open.spotify.com/album/0esuepT28aFseXmGT1WjgH", yt: "https://music.youtube.com/playlist?list=OLAK5uy_lXV3w1aMPfEOgj9b5Bd5AIZj0cB_lD-tU&si=Jch0kyELIS6IpiUm", amazon: "https://www.amazon.com/dp/B09PSGGMVD/ref=sr_1_1?crid=1EHKYJPIDDGWS&dib=eyJ2IjoiMSJ9.8_30N-0AEpZ4cvouxKEq0ny15jHTOSaGNRSksTrGI5zNUhoigwRUTNKNttoAEjrYWHmuGlxBqFl9g601XoaJstS_0OScvjaeBIBB9XCzxlTVtGvytVS1d-ssOGpwv7lIj2ItDvSnKtJR-G3Zce233g.wYv7ibMPBvRKeNGeTYzd-wFCrnTZmpwyWF5be3vpNEw&dib_tag=se&keywords=ricardo+vazquez+now+that+i+the+remixes&qid=1775480976&sprefix=ricardo+vazquez+now+that+i+the+remixe%2Caps%2C147&sr=8-1" },
  { artist: "Marilyn Torres", title: "Torn", type: "EP (4 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D984552B0%2D21DF%2D4386%2DABAEAA3B460DA50C%2D%2D1634904430369%2D%2Dtornofficialcover%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_26676453_2DF87536-F9A4-4733-89D11FC1DB055A4D.mp3", apple: "https://music.apple.com/us/album/torn-ep/1591786965?uo=4", spotify: "https://open.spotify.com/album/7u3XKR30e7GJtac01DrNLS", yt: "https://music.youtube.com/playlist?list=OLAK5uy_kdXrksJ5ah2WsNY3f4fdEd0AdZRQw144A&si=xzCbgnyrHdhgYjuJ", amazon: "https://www.amazon.com/music/player/albums/B09K6D3YXP" },
  { artist: "Ricardo Vazquez", title: "Now That I", type: "Single (4 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DEAE74939%2DEF31%2D4DB1%2D9204770081398879%2D%2D1632316013319%2D%2D20210919215013%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_25946325_BA355B99-8CDB-4684-B38AC63808F5AE0F.mp3", apple: "https://music.apple.com/us/album/now-that-i-ep/1587073738?uo=4", spotify: "https://open.spotify.com/album/54hHBuGxls7LejOiKvBIfU", yt: "https://music.youtube.com/playlist?list=OLAK5uy_nB5r_xic7u6WH2iPUB4UWTZfU2POqUitw&si=tTKFv0x4xz_x8dap", amazon: "https://www.amazon.com/dp/B09GX5V1P8/ref=sr_1_2?crid=2Q8VW17BNS3OB&dib=eyJ2IjoiMSJ9.FIipcVjQbl5Iesepl7LSqy2w6L7ek70zrl3yaD759vQknFAgamYnGSTs9fR-6OvhWHmuGlxBqFl9g601XoaJsvEjMXyRD6hbV7e98kcu-zpMUCzAEjgb2Ypb50lhF5ubfN863JwsCh7PaGmSMSblFNMB4oxNuzVkDbCeH7bov3JtTC5PrRMtew0gRffYhJTP.0xVvFbiIjVKlc0v_LQRT-SdBG6Ei9AVqZEf5HPkZQBU&dib_tag=se&keywords=ricardo+vazquez+now+that+i&qid=1775481351&sprefix=ricardo+vazquez+now+that+i%2Caps%2C143&sr=8-2" },
  { artist: "Marilyn Torres", title: "In Time", type: "EP (7 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D8C38E505%2D2C1E%2D4C17%2D87E80BACABD9B351%2D%2D1617846997589%2D%2DIMG9924%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_21788491_2EC9C122-F182-402E-BCC39D9F9241283E.mp3", apple: "https://music.apple.com/us/album/in-time/1562225980?uo=4", spotify: "https://open.spotify.com/album/75KDuou5fPoDGghTHFq3Gp", yt: "https://music.youtube.com/playlist?list=OLAK5uy_ljBXrFshzKwe8ULHA7FK-7XYGgsO2HnSc&si=ZP9-Tut6LF1f3FIg", amazon: "https://www.amazon.com/music/player/albums/B092395W1G" },
  { artist: "Marilyn Torres", title: "In Exchange For What (The Freestyle Diaries SuperMix)", type: "Single", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800-2439182--2FCC2F34-3524-4AB0-8F894253D78FF7CF--1614263327044--IEFWFDCVRBASE.jpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_20734716_59E63147-25F3-4046-8BE90C0061128FCE.mp3", apple: "https://music.apple.com/us/album/in-exchange-for-what-the-freestyle-diaries-supermix-single/1555761782", spotify: "https://open.spotify.com/album/6vTlAAb4dIsmWWPT2OwB1X", yt: "https://music.youtube.com/playlist?list=OLAK5uy_mnGLjNYVolm29oCX2nRZQ9lD500P5z1GY&si=IM5wuHNx77_-cpIh", amazon: "https://www.amazon.com/music/player/albums/B08XN3R93X" },
  { artist: "Marilyn Torres", title: "In Exchange For What (Maninho DJ Full Pressure Remix)", type: "Single", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DC6E5A464%2D8CB1%2D4A6E%2D9CDC1394A7F0B6BC%2D%2D1633306273724%2D%2D20211003200113%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_26221657_9A35F096-7301-4238-B727C9363C607AFE.mp3", apple: "https://music.apple.com/us/album/in-exchange-for-what-maninho-dj-full-pressure-remix/1588954675?uo=4", spotify: "https://open.spotify.com/album/0KJFFYHkb2UWGdWUhFoX9g", yt: "https://music.youtube.com/playlist?list=OLAK5uy_mPGb6DRmGHACsOXqD9dFwf8Mac4PTVrZM&si=5LzzzQn06sjCEeFU", amazon: "https://www.amazon.com/music/player/albums/B09HSRR3M4" },
  { artist: "Marilyn Torres", title: "In Exchange For What (Special Edition)", type: "EP (7 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DCED9D066%2D772E%2D4606%2DAC6EFC57BBCF7584%2D%2D1610418885030%2D%2DiefwSECOVER%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_19445074_2C986B68-8B00-4C7D-85EB7CDD7817B1FB.mp3", apple: "https://music.apple.com/us/album/in-exchange-for-what-special-edition/1548992482", spotify: "https://open.spotify.com/album/3OOdDt6K5J8AhdcROFHFAC", yt: "https://music.youtube.com/playlist?list=OLAK5uy_luCwPDPnyPl2eAKms0UhtX1Nua5xnnCRY&si=hfgJmMh9rNZNrpzM", amazon: "https://www.amazon.com/music/player/albums/B08T27647P" },
  { artist: "Ricardo Vazquez", title: "Goodbye (Redeux)", type: "EP (4 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DC9192629%2D7C1D%2D4278%2D88DB2CDD9A0C39B5%2D%2Dmod%2D1613780661%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_19381852_DAAB393E-2A3D-4A41-9BFCA126BF18AA85.mp3", apple: "https://music.apple.com/us/album/goodbye-redeux-ep/1548757033", spotify: "https://open.spotify.com/album/3Cs7QOjUWTvNkWZ4x6muEB", yt: "https://music.youtube.com/playlist?list=OLAK5uy_moGN-caeSOA2ikUv3Fn_qtP0sFJZcqsvY&si=g3I6PIqDN4Xtc6qF", amazon: "https://amazon.com/music/player/albums/B08SXRJM89?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_GiKfHIYAHSeraRpcDGFZDXsIk" },
  { artist: "Marilyn Torres", title: "In Exchange For What", type: "EP (4 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D37B79A6C%2D33BF%2D4581%2D8751DAF0790ECDEC%2D%2D1603490237328%2D%2D02A86F56006F465B997BF80B01B1D7FE%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_17243031_EE19879A-665B-42C2-94C3C17F052D77A2.mp3", apple: "https://music.apple.com/us/album/in-exchange-for-what-ep/1537217629?uo=4&app=music&at=1001lry3&ct=dashboard", spotify: "https://open.spotify.com/album/4aVb5MA1Rm1NDOqWBOp3KD?si=nKF_PS6OTwuB5DIaUIIJiA", yt: "https://music.youtube.com/playlist?list=OLAK5uy_khlp8CnB1uN1W89BMyLVjNBhxqojDn98M&si=tiNxRYipQcUi8Ix1", amazon: "https://www.amazon.com/-/es/Marilyn-Torres/dp/B08NB94MZS" }
];

const DISCOGRAPHY_DATA = [
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

const SERVICES_DATA = [
  { id: "mixing", title: "Mixing & Mastering", icon: <SlidersHorizontal className="w-8 h-8 text-[#00E5FF]" strokeWidth={1} />, detail: "Delivering clinical clarity and punch across a limitless spectrum of genres. We combine analog warmth with pristine digital precision, creating a master that commands any space." },
  { id: "vocal", title: "Vocal Production", icon: <Mic2 className="w-8 h-8 text-[#FF0055]" strokeWidth={1} />, detail: "The human voice is your signature. We provide elite tracking, harmonic comping, and dynamic tuning for absolute pitch perfection while retaining deep emotional authenticity." },
  { id: "writing", title: "Writing & Arrangement", icon: <PenTool className="w-8 h-8 text-[#FFD700]" strokeWidth={1} />, detail: "True songwriting is structural engineering. We collaborate to build captivating arcs, unshakable hooks, and radio-ready experiences that resonate globally." },
  { id: "demo", title: "Demo Services", icon: <Headphones className="w-8 h-8 text-[#B026FF]" strokeWidth={1} />, detail: "Elevating raw voice memos and acoustic sketches into full, high-fidelity prototypes ready for professional pitching to major labels and publishers." }
];

const SOCIAL_MAP = { fb: 'facebook', tt: 'tiktok', yt: 'youtube' };

/**
 * ==========================================
 * 2. CORE ENGINE HOOKS
 * ==========================================
 */

// Custom hook for tracking mouse position globally
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = ev => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  return mousePosition;
};

/**
 * ==========================================
 * 3. ADVANCED VISUAL COMPONENTS
 * ==========================================
 */

// Interactive Neural Network Background
const NetworkCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        // Flee from mouse
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 50;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 50;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      particles = [];
      let numberOfParticles = (canvas.height * canvas.width) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 2) - 1;
        let directionY = (Math.random() * 2) - 1;
        let color = 'rgba(255, 255, 255, 0.15)';
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
            + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `rgba(255,255,255,${opacityValue * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />;
};

// Real Canvas Audio Visualizer
const AudioVisualizer = ({ isPlaying }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const bars = 40;
      const barWidth = width / bars;
      
      for (let i = 0; i < bars; i++) {
        // Simulate dynamic frequency data using sine waves and time
        let barHeight;
        if (isPlaying) {
           barHeight = (Math.sin(i * 0.5 + time) * 0.5 + 0.5) * height * 0.8 + (Math.random() * height * 0.2);
        } else {
           barHeight = 2; // Flatline when paused
        }

        const x = i * barWidth;
        const y = height - barHeight;
        
        // Cyberpunk gradient
        const gradient = ctx.createLinearGradient(0, height, 0, 0);
        gradient.addColorStop(0, '#00E5FF');
        gradient.addColorStop(1, '#FF0055');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth - 2, barHeight);
      }
      time += 0.1;
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying]);

  return <canvas ref={canvasRef} width={200} height={40} className="w-[150px] h-[30px]" />;
};

// 3D Magnetic Tilt Card
const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15; // Max 15 deg tilt
    const rotateY = ((x - centerX) / centerX) * 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'none',
      zIndex: 10
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      zIndex: 1
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};


/**
 * ==========================================
 * 4. MAIN APPLICATION
 * ==========================================
 */

export default function App() {
  const [modal, setModal] = useState({ isOpen: false, type: null, data: null });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [discographyFilter, setDiscographyFilter] = useState("");
  const [playingPreview, setPlayingPreview] = useState(null);
  const [activeRelease, setActiveRelease] = useState(null);
  const audioRef = useRef(new Audio());
  
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  // Custom Cursor Logic
  useEffect(() => {
    const updateMouse = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateMouse);
    
    const checkHover = (e) => {
      const isInteractable = ['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(e.target.tagName) || e.target.closest('.cursor-interact');
      setIsHovering(!!isInteractable);
    };
    window.addEventListener('mouseover', checkHover);
    
    return () => {
      window.removeEventListener('mousemove', updateMouse);
      window.removeEventListener('mouseover', checkHover);
    };
  }, []);

  // Inject Custom Epic CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Plus+Jakarta+Sans:wght@300;500;700&display=swap');
      
      body, html {
        background-color: #050505;
        color: #fff;
        font-family: 'Plus Jakarta Sans', sans-serif;
        cursor: none; 
        overflow-x: hidden;
        scroll-behavior: smooth;
      }

      .font-epic { font-family: 'Outfit', sans-serif; }
      .font-display { font-family: 'Outfit', sans-serif; }

/* Theatrical 24fps Film Grain Overlay */
      .noise-bg { ... }
      /* 24 distinct frames per second */
      @keyframes true-grain { ... }

      /* Parallax text strokes */
      .text-stroke {
        -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        color: transparent;
      }
      
      /* Neon Accents */
      .neon-border {
        border: 1px solid rgba(0, 229, 255, 0.3);
        box-shadow: inset 0 0 20px rgba(0, 229, 255, 0.05), 0 0 20px rgba(0, 229, 255, 0.05);
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #050505; }
      ::-webkit-scrollbar-thumb { background: #333; }
      ::-webkit-scrollbar-thumb:hover { background: #00E5FF; }

      /* Glitch Animations */
      @keyframes glitch {
        0% { transform: translate(0) }
        20% { transform: translate(-2px, 2px) }
        40% { transform: translate(-2px, -2px) }
        60% { transform: translate(2px, 2px) }
        80% { transform: translate(2px, -2px) }
        100% { transform: translate(0) }
      }
      .hover-glitch:hover { animation: glitch 0.2s cubic-bezier(.25, .46, .45, .94) both infinite; }

      /* Marquee */
      @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      .animate-marquee { display: inline-flex; animation: marquee 20s linear infinite; white-space: nowrap; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Audio Handlers
  useEffect(() => {
    const audioEl = audioRef.current;
    const handleEnded = () => { setPlayingPreview(null); setActiveRelease(null); };
    audioEl.addEventListener('ended', handleEnded);
    return () => audioEl.removeEventListener('ended', handleEnded);
  }, []);

  const openModal = (type, data = null) => { setModal({ isOpen: true, type, data }); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setModal({ isOpen: false, type: null, data: null }); document.body.style.overflow = 'auto'; };

  const handlePreviewStart = (url, release) => {
    if (!url) return;
    audioRef.current.src = url;
    audioRef.current.volume = 0.5;
    audioRef.current.play().then(() => { setPlayingPreview(url); setActiveRelease(release); }).catch(() => {});
  };
  const handlePreviewStop = () => { audioRef.current.pause(); audioRef.current.currentTime = 0; setPlayingPreview(null); };
  const togglePreviewAudio = (url, release, e) => {
    if (e) e.stopPropagation(); 
    if (!url) return;
    playingPreview === url ? handlePreviewStop() : handlePreviewStart(url, release);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ state: 'submitting', message: '' });
    try {
      const response = await fetch('https://formspree.io/f/xreovaoa', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (response.ok) {
        setFormStatus({ state: 'success', message: 'UPLINK_ESTABLISHED. WE WILL RESPOND SHORTLY.' });
        setFormData({ name: '', email: '', message: '' });
      } else { setFormStatus({ state: 'error', message: 'UPLINK_FAILED. RETRY CONNECTION.' }); }
    } catch (error) { setFormStatus({ state: 'error', message: 'NETWORK_ERROR. RETRY CONNECTION.' }); }
  };
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formStatus.state === 'error' || formStatus.state === 'success') setFormStatus({ state: 'idle', message: '' });
  };

  const sortedReleases = useMemo(() => {
    return [...OFFICIAL_RELEASES_DATA].sort((a, b) => {
      const scoreA = a.title.includes('***') ? 3 : (a.title.includes('**') ? 1 : (a.title.includes('*') ? 2 : 0));
      const scoreB = b.title.includes('***') ? 3 : (b.title.includes('**') ? 1 : (b.title.includes('*') ? 2 : 0));
      return scoreB - scoreA;
    });
  }, []);

  const filteredDiscography = useMemo(() => {
    return DISCOGRAPHY_DATA.filter(item => 
      item.artist.toLowerCase().includes(discographyFilter.toLowerCase()) ||
      item.tracks.some(t => t.toLowerCase().includes(discographyFilter.toLowerCase()))
    );
  }, [discographyFilter]);


  // Calculate Parallax for Hero based on mouse
  const parallaxX = (cursorPos.x / (typeof window !== 'undefined' ? window.innerWidth : 1) - 0.5) * 50;
  const parallaxY = (cursorPos.y / (typeof window !== 'undefined' ? window.innerHeight : 1) - 0.5) * 50;


  /**
   * RENDER
   */
  return (
    <>

    {/* Cinematic Video Overlays */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-[9998] overflow-hidden">
        {/* Overlay Grain */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          src="/noise.mp4" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-30" 
        />

      </div>

{/* Epic Custom Cursor */}
      <div 
        className="hidden md:flex fixed top-0 left-0 w-8 h-8 rounded-full border border-[#00E5FF] pointer-events-none z-[100000] transition-transform duration-75 ease-out items-center justify-center mix-blend-screen"
        style={{ transform: `translate(${cursorPos.x - 16}px, ${cursorPos.y - 16}px) scale(${isHovering ? 1.5 : 1})`, backgroundColor: isHovering ? 'rgba(0, 229, 255, 0.1)' : 'transparent' }}
      >
         {isHovering && <div className="w-1 h-1 bg-[#FF0055] rounded-full animate-ping" />}
      </div>

      {/* MAIN APPLICATION */}
      <div className="relative w-full z-10 flex flex-col min-h-screen">
        
        {/* Network Canvas Background */}
        <NetworkCanvas />

      {/* Global Nav */}
        <header className="fixed top-0 left-0 w-full z-[100] px-6 py-6 flex justify-between items-center mix-blend-difference">
          <div className="font-epic font-black text-xl cursor-interact tracking-widest text-white flex flex-col items-center leading-none" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <span className="lowercase">djmerkone</span>
            <span className="text-white uppercase text-[37px] tracking-[0.0em] -mt-2">MUSIC</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10">
            {['Services', 'Crew', 'Vault', 'Contact Us'].map((item) => (
              <a key={item} href={item === 'Vault' ? '#catalog' : item === 'Contact Us' ? '#contact' : item === 'Services' ? '#services' : `#Crew`} className="cursor-interact text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:text-[#00E5FF] transition-colors relative group">
                {item}
                <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#00E5FF] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden text-white hover:text-[#00E5FF] transition-colors z-[101]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Fancy Mobile Overlay Menu */}
          <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <nav className="flex flex-col gap-8 text-center">
              {['Services', 'Crew', 'Vault', 'Contact Us'].map((item) => (
                <a 
                  key={item} 
                  href={item === 'Vault' ? '#catalog' : item === 'Contact Us' ? '#contact' : item === 'Services' ? '#services' : `#Crew`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display font-black text-4xl uppercase tracking-tighter text-white hover:text-[#00E5FF] transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* SECTION: HERO (PARALLAX + MASSIVE TYPOGRAPHY) */}
        <section className="relative h-screen flex flex-col justify-center overflow-hidden z-10">
           {/* Center Graphic */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] border-[1px] border-white/5 rounded-full flex items-center justify-center" style={{ transform: `translate(calc(-50% + ${parallaxX * 0.2}px), calc(-50% + ${parallaxY * 0.2}px))` }}>
              <div className="w-[80%] h-[80%] border-[1px] border-[#00E5FF]/20 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-[60%] h-[60%] border-[1px] border-[#FF0055]/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
           </div>

          {/* Parallax Typography */}
           <div className="relative z-20 flex flex-col items-center pointer-events-none w-full px-4 text-center mt-20 md:mt-0">
              <h1 className="font-display font-black text-[15vw] md:text-[12vw] leading-[0.85] text-stroke tracking-tighter" style={{ transform: `translateX(${parallaxX * -1}px)` }}>
                ENGINEERING
              </h1>
              <h1 className="font-display font-black text-[15vw] md:text-[12vw] leading-[0.85] text-white tracking-tighter flex flex-col md:flex-row items-center md:gap-4 mt-2 md:mt-0" style={{ transform: `translateX(${parallaxX * 1.5}px)` }}>
                THE <span className="text-[#00E5FF]">FUTURE</span>
              </h1>
           </div>

           {/* Lower UI */}
           <div className="absolute bottom-10 left-6 right-6 flex justify-between items-end z-30">
              <div className="max-w-xs">
                <div className="flex items-center gap-2 text-[#FF0055] text-[10px] font-bold uppercase tracking-widest mb-3">
                  <Activity size={14} className="animate-pulse" /> SYSTEM ACTIVE
                </div>
                <p className="text-white/60 text-xs leading-relaxed">Multidisciplinary audio collective bridging raw emotion and absolute digital precision.</p>
              </div>
              
              <a href="#catalog" className="cursor-interact w-24 h-24 rounded-full border border-white/20 flex flex-col items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors group">
                 <span className="text-[9px] font-bold uppercase tracking-widest">Vault</span>
                 <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform rotate-90" />
              </a>
           </div>
        </section>

        {/* MARQUEE DIVIDER */}
        <div className="w-full bg-[#00E5FF] text-black py-3 overflow-hidden z-20 border-y border-white">
          <div className="animate-marquee font-epic text-xs font-bold tracking-widest uppercase">
            {Array(10).fill("SONIC ARCHITECTURE /// CLINICAL PRECISION /// ").map((t, i) => <span key={i} className="px-4">{t}</span>)}
          </div>
        </div>

        {/* SECTION: SERVICES (THE Services) */}
        <section id="services" className="relative py-32 px-6 lg:px-20 z-10 bg-black">
           <div className="max-w-[1600px] mx-auto">
              <div className="mb-20">
                 <h2 className="font-display text-4xl md:text-6xl font-black uppercase text-white tracking-tighter">
                   The <span className="text-stroke">Services.</span>
                 </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {SERVICES_DATA.map((srv, i) => (
                   <div key={i} className="cursor-interact group p-10 border border-white/10 hover:border-[#FF0055] transition-colors relative overflow-hidden bg-[#050505]">
                      <div className="absolute top-0 right-0 p-6 text-white/5 font-display text-8xl font-black group-hover:text-[#FF0055]/10 transition-colors">
                        0{i+1}
                      </div>
                      
                      <div className="mb-12 relative z-10 transform group-hover:scale-110 group-hover:translate-x-4 transition-transform duration-500">
                        {srv.icon}
                      </div>
                      
                      <h3 className="font-epic text-xl text-white mb-4 relative z-10 group-hover:text-[#00E5FF] transition-colors uppercase tracking-widest">{srv.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed relative z-10 max-w-sm">
                        {srv.detail}
                      </p>

                      {/* Animated bottom border on hover */}
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FF0055] to-[#00E5FF] w-0 group-hover:w-full transition-all duration-700 ease-out" />
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* SECTION: CREW ROSTER (HYPER-ACCORDION) */}
        <section id="Crew" className="w-full flex flex-col lg:flex-row lg:h-[70vh] overflow-hidden border-y border-white/10">
          {ARTISTS_DATA.map((artist, i) => (
              <div 
                key={i} 
                onClick={() => openModal('artist', artist)}
                className="cursor-interact relative flex-1 min-h-[150px] lg:min-h-0 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden group bg-black"
              >
                 <img 
                   src={artist.img} 
                   alt={artist.name} 
                   className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${artist.isMemorial ? 'grayscale' : 'grayscale group-hover:grayscale-0'} group-hover:scale-105 opacity-40 group-hover:opacity-100`} 
                 />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                 <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                       {artist.isMemorial && <span className="text-[#FF0055] text-[8px] font-bold uppercase tracking-[0.3em] border border-[#FF0055] px-2 py-1 mb-4 inline-block bg-black">Legacy</span>}
                       <h3 className={`font-display text-3xl font-black text-white tracking-tighter whitespace-nowrap ${artist.name.toLowerCase() === 'djmerkone' ? 'lowercase' : 'uppercase'}`}>
                         {artist.name}
                       </h3>
                       
                       {/* Details reveal on expand */}
                       <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 mt-4 hidden lg:block">
                          <p className="text-[#00E5FF] text-[10px] font-bold uppercase tracking-widest mb-4">
                            {artist.role.join(" // ")}
                          </p>
                          <span className="inline-flex items-center gap-2 text-xs border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors">
                            Access Dossier <ArrowUpRight size={14} />
                         </span>
                       </div>
                    </div>
                 </div>
              </div>
          ))}
        </section>

        {/* SECTION: CATALOG (3D MAGNETIC TILT CARDS) */}
        <section id="catalog" className="relative py-40 px-6 lg:px-20 z-10 bg-[#020202]">
           <div className="max-w-[1600px] mx-auto">
              <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8 gap-8">
                 <h2 className="font-display text-5xl md:text-7xl font-black uppercase text-white tracking-tighter">
                   The <span className="text-stroke">Vault.</span>
                 </h2>
                 <button onClick={() => openModal('discography')} className="cursor-interact flex items-center gap-3 border border-white px-8 py-4 bg-white text-black hover:bg-transparent hover:text-white transition-colors group">
                   <span className="font-epic text-[10px] font-bold uppercase tracking-[0.2em]">Full Registry</span>
                   <Disc size={14} className="group-hover:animate-spin" />
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                 {sortedReleases.map((release, i) => {
                   const isPlaying = playingPreview === release.preview;
                   const isMerkone = release.artist.toLowerCase() === 'djmerkone';
                   
                   return (
                     <TiltCard key={i} className="cursor-interact group">
                        <div className="relative aspect-square w-full rounded-none overflow-hidden neon-border bg-black mb-6">
                           
                           <img 
                             src={release.art} 
                             alt={release.title} 
                             className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'scale-110 brightness-50' : 'grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105'}`} 
                           />

                           {/* Play Overlay */}
                           <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                             <button onClick={(e) => togglePreviewAudio(release.preview, release, e)} className="w-20 h-20 border-2 border-[#00E5FF] text-[#00E5FF] rounded-full flex items-center justify-center hover:bg-[#00E5FF] hover:text-black transition-all duration-300 transform scale-90 group-hover:scale-100 hover-glitch">
                               {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
                             </button>
                           </div>

                          {/* Badges */}
                           <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                             {release.title.includes('***') ? (
                               <span className="bg-[#B026FF] text-white px-3 py-1 text-[8px] font-bold uppercase tracking-widest border border-black shadow-[4px_4px_0_#000]">Unreleased</span>
                             ) : release.title.includes('**') ? (
                               <span className="bg-[#00E5FF] text-black px-3 py-1 text-[8px] font-bold uppercase tracking-widest border border-black shadow-[4px_4px_0_#000]">Recent</span>
                             ) : release.title.includes('*') ? (
                               <span className="bg-[#FF0055] text-white px-3 py-1 text-[8px] font-bold uppercase tracking-widest border border-black shadow-[4px_4px_0_#000]">New</span>
                             ) : null}
                           </div>
                        </div>

                        {/* Metadata */}
                        <div>
                          <h4 className="font-display font-black text-white text-2xl uppercase tracking-tighter mb-1 truncate">{release.title.replace(/\*+/g, '')}</h4>
                          <p className={`font-epic text-[#00E5FF] text-[9px] tracking-[0.2em] mb-4 truncate ${isMerkone ? 'lowercase' : 'uppercase'}`}>
                            {release.artist}
                          </p>
                          
                        {/* Streaming Links */}
                          <div className="grid grid-cols-4 gap-2">
                            {release.spotify && <a href={release.spotify} target="_blank" rel="noopener noreferrer" className="py-3 text-center border border-white/20 hover:border-[#00E5FF] hover:text-[#00E5FF] transition-colors font-epic text-[8px] uppercase tracking-widest">Spotify</a>}
                            {release.apple && <a href={release.apple} target="_blank" rel="noopener noreferrer" className="py-3 text-center border border-white/20 hover:border-[#FF0055] hover:text-[#FF0055] transition-colors font-epic text-[8px] uppercase tracking-widest">Apple</a>}
                            {release.yt && <a href={release.yt} target="_blank" rel="noopener noreferrer" className="py-3 text-center border border-white/20 hover:border-[#FF0000] hover:text-[#FF0000] transition-colors font-epic text-[8px] uppercase tracking-widest">YouTube</a>}
                            {release.amazon && <a href={release.amazon} target="_blank" rel="noopener noreferrer" className="py-3 text-center border border-white/20 hover:border-[#FFD700] hover:text-[#FFD700] transition-colors font-epic text-[8px] uppercase tracking-widest">Amazon</a>}
                            
                            {/* Coming Soon Fallback */}
                            {(!release.spotify && !release.apple && !release.yt && !release.amazon) && (
                              <div className="col-span-4 py-3 text-center border border-white/10 text-white/30 font-epic text-[8px] uppercase tracking-widest cursor-not-allowed">
                                Coming Soon
                              </div>
                            )}
                          </div>
                        </div>
                     </TiltCard>
                   );
                 })}
              </div>
           </div>
        </section>

        {/* SECTION: CONTACT (TERMINAL UPLINK) */}
        <section id="contact" className="relative py-40 px-6 lg:px-20 z-10 border-t border-white/10">
           <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              <div className="lg:col-span-5">
                 <div className="sticky top-32">
                   <h2 className="font-display text-5xl md:text-7xl font-black uppercase text-white tracking-tighter mb-6">
                     Contact <br/><span className="text-[#FF0055]">& Connect</span>
                   </h2>
                    <div className="text-white/50 text-sm leading-relaxed max-w-sm mb-12">
                     <p className="mb-2">Looking for lyrics, production, or just want to connect?</p>
                     <p>Send a secure message directly to the studio console.</p>
                   </div>
                   
                   <div className="flex flex-col gap-6 font-epic text-[10px] uppercase tracking-[0.2em] text-white/40">
                      <div className="flex items-center gap-4"><MapPin className="text-[#00E5FF]" size={16} /> North-East Florida // Grid 322</div>
                      <div className="flex items-center gap-4"><Mail className="text-[#00E5FF]" size={16} /> info@djmerkone.com</div>
                   </div>
                 </div>
              </div>

              <div className="lg:col-span-7 bg-[#050505] neon-border p-8 md:p-12 relative">
                 {/* Cyberpunk corner accents */}
                 <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00E5FF] -translate-x-1 -translate-y-1" />
                 <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FF0055] translate-x-1 translate-y-1" />

                 <form className="space-y-10 relative z-10" onSubmit={handleFormSubmit}>
                   <div className="relative">
                     <input type="text" name="name" value={formData.name} onChange={handleFormChange} required className="peer w-full bg-transparent border-b border-white/20 py-4 text-white font-epic focus:outline-none focus:border-[#00E5FF] transition-colors placeholder-transparent" placeholder="Name" />
                     <label className="absolute left-0 -top-3 text-[9px] font-epic uppercase tracking-widest text-[#00E5FF] transition-all peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-[#00E5FF] pointer-events-none">Your Name</label>
                   </div>
                   
                   <div className="relative">
                     <input type="email" name="email" value={formData.email} onChange={handleFormChange} required className="peer w-full bg-transparent border-b border-white/20 py-4 text-white font-epic focus:outline-none focus:border-[#00E5FF] transition-colors placeholder-transparent" placeholder="Email" />
                     <label className="absolute left-0 -top-3 text-[9px] font-epic uppercase tracking-widest text-[#00E5FF] transition-all peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-[#00E5FF] pointer-events-none">Your Email Address</label>
                   </div>
                   
                   <div className="relative">
                     <textarea name="message" value={formData.message} onChange={handleFormChange} rows={4} required className="peer w-full bg-transparent border-b border-white/20 py-4 text-white font-sans text-sm focus:outline-none focus:border-[#00E5FF] transition-colors resize-none placeholder-transparent" placeholder="Message" />
                     <label className="absolute left-0 -top-3 text-[9px] font-epic uppercase tracking-widest text-[#00E5FF] transition-all peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-[#00E5FF] pointer-events-none">Your Message</label>
                   </div>

                   <button type="submit" disabled={formStatus.state === 'submitting'} className="cursor-interact w-full bg-[#00E5FF] text-black py-5 font-epic font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white transition-colors flex items-center justify-center gap-3">
                     {formStatus.state === 'submitting' ? 'Transmitting...' : '[ SEND MESSAGE NOW ]'} <Send size={14} />
                   </button>

                   {formStatus.message && (
                     <div className={`text-[10px] font-epic font-bold uppercase tracking-widest text-center border p-4 ${formStatus.state === 'success' ? 'text-[#00E5FF] border-[#00E5FF]/30 bg-[#00E5FF]/5' : 'text-[#FF0055] border-[#FF0055]/30 bg-[#FF0055]/5'}`}>
                       {formStatus.message}
                     </div>
                   )}
                 </form>
              </div>
           </div>
        </section>

        {/* EPIC FOOTER */}
        <footer className="relative bg-black pt-32 pb-16 px-6 lg:px-20 z-10 border-t border-[#FF0055] overflow-hidden">
           {/* Huge background text */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5">
             <h1 className="font-display font-black text-[15vw] leading-none whitespace-nowrap text-stroke lowercase">djmerkone <span className="uppercase text-white/5">MUSIC</span></h1>
           </div>

           <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 relative z-10">
             <div>
               <div className="font-display font-black text-4xl text-white mb-2 flex flex-col lowercase">
                  <span className="text-white lowercase text-[49px]" >djmerkone</span>
                  <span className="text-white uppercase text-[79px] tracking-[0.0em] -mt-6">MUSIC</span>
               </div>
               <p className="font-epic text-[8px] uppercase tracking-[0.4em] text-white/40 -mt-4">The Sonic Architecture Collective</p>
             </div>

             <div className="flex gap-16">
               <div className="flex flex-col gap-4 text-[10px] font-epic uppercase tracking-[0.2em]">
                 <span className="text-[#FFD700] mb-2 font-bold">Network</span>
                 <a href="https://luismartemusic.com" target="_blank" className="text-white/60 hover:text-white hover:translate-x-1 transition-transform">LUIS MARTE MUSIC</a>
                 <a href="https://marilyn-site.vercel.app/" target="_blank" className="text-white/60 hover:text-white hover:translate-x-1 transition-transform">MARILYN TORRES</a>
                 <a href="https://djmerkone.vercel.app" target="_blank" className="lowercase text-white/60 hover:text-white hover:translate-x-1 transition-transform">djmerkone</a>
               </div>              
               <div className="flex flex-col gap-4 text-[10px] font-epic uppercase tracking-[0.2em]">
                 <span className="text-[#FF0055] mb-2 font-bold">Socials</span>
                 <a href="https://www.tiktok.com/@djmerkone" className="text-white/60 hover:text-white hover:translate-x-1 transition-transform">TikTok</a>
                 <a href="https://facebook.com/djmerkone" className="text-white/60 hover:text-white hover:translate-x-1 transition-transform">Facebook</a>
                 <a href="https://youtube.com/@djmerkone" className="text-white/60 hover:text-white hover:translate-x-1 transition-transform">YouTube</a>
               </div>
               <div className="flex flex-col gap-4 text-[10px] font-epic uppercase tracking-[0.2em]">
                 <span className="text-[#00E5FF] mb-2 font-bold">System Docs</span>
                 <button onClick={() => openModal('privacy')} className="text-white/60 hover:text-white hover:translate-x-1 transition-transform text-left">Privacy</button>
                 <button onClick={() => openModal('terms')} className="text-white/60 hover:text-white hover:translate-x-1 transition-transform text-left">Terms</button>
               </div>
             </div>
           </div>
           
           <div className="max-w-[1600px] mx-auto mt-24 text-[8px] font-epic uppercase tracking-[0.5em] text-white/20 text-center relative z-10">
             © {new Date().getFullYear()} <span className="lowercase">djmerkone</span> MUSIC // ALL SYSTEMS GO
           </div>
        </footer>

        {/* DYNAMIC CANVAS AUDIO PLAYER */}
        <div className={`fixed bottom-0 left-0 w-full z-[2000] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${playingPreview ? 'translate-y-0' : 'translate-y-[120%]'}`}>
           <div className="bg-[#050505]/90 backdrop-blur-xl border-t border-white/10 p-4 flex items-center justify-between gap-6 shadow-[0_-10px_50px_rgba(0,0,0,0.8)]">
              
              <div className="flex items-center gap-4 flex-1">
                 <img src={activeRelease?.art} alt="" className="w-14 h-14 object-cover border border-[#00E5FF]/30" />
                 <div className="flex flex-col max-w-[200px] md:max-w-[300px]">
                    <span className="font-display font-bold text-white text-lg truncate uppercase">{activeRelease?.title.replace(/\*+/g, '')}</span>
                    <span className={`font-epic text-[8px] tracking-widest text-[#00E5FF] truncate ${activeRelease?.artist.toLowerCase() === 'djmerkone' ? 'lowercase' : 'uppercase'}`}>
                      {activeRelease?.artist}
                    </span>
                 </div>
              </div>
              
              {/* Actual Canvas Visualizer */}
              <div className="hidden md:block flex-1 flex justify-center">
                 <AudioVisualizer isPlaying={!!playingPreview} />
              </div>
              
              <div className="flex items-center gap-4 flex-1 justify-end pr-4">
                 <button onClick={() => handlePreviewStop()} className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover-glitch">
                   <Pause size={16} fill="currentColor" />
                 </button>
                 <button onClick={() => handlePreviewStop()} className="w-12 h-12 flex items-center justify-center text-white/40 hover:text-[#FF0055] transition-colors">
                   <X size={20} />
                 </button>
              </div>
           </div>
        </div>

        {/* IMMERSIVE 3D MODAL OVERLAY */}
        {modal.isOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8">
            <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md transition-opacity" onClick={closeModal} />
            
            <div className={`relative w-full ${modal.type === 'discography' ? 'max-w-[1400px]' : 'max-w-6xl'} max-h-[90vh] bg-[#020202] border border-white/10 flex flex-col shadow-[0_0_100px_rgba(0,0,0,1)] animate-[fadeIn_0.3s_ease-out]`}>
              
              {/* Modal Header */}
              <div className="px-8 py-5 border-b border-white/10 flex justify-between items-center bg-black">
                <span className="font-epic font-bold uppercase tracking-[0.4em] text-[9px] text-[#00E5FF]">
                  {modal.type === 'artist' ? 'Personnel Data' : modal.type === 'discography' ? 'Archive Database' : 'System File'}
                </span>
                <button onClick={closeModal} className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-[#FF0055] transition-colors cursor-interact"><X size={20} /></button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto custom-scrollbar flex-grow relative p-6 md:p-12">
                {modal.type === 'artist' ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 relative">
                      <TiltCard className="aspect-[3/4] border border-white/10 p-2 bg-black">
                        <img src={modal.data.img} alt={modal.data.name} className={`w-full h-full object-cover ${modal.data.isMemorial ? 'grayscale' : 'grayscale-[0.5] hover:grayscale-0'} transition-all duration-500`} />
                        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#00E5FF]" />
                        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#FF0055]" />
                      </TiltCard>
                    </div>

                    <div className="lg:col-span-7 flex flex-col h-full">
                      <h2 className={`font-display text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter ${modal.data.name.toLowerCase() === 'djmerkone' ? 'lowercase' : 'uppercase'}`}>
                        {modal.data.name}
                      </h2>
                      
                      <div className="flex flex-wrap gap-2 mb-10 border-l-2 border-[#00E5FF] pl-4">
                        {modal.data.role.map((r, i) => (
                          <span key={i} className="font-epic text-[8px] font-bold uppercase tracking-[0.2em] text-[#00E5FF] bg-[#00E5FF]/10 px-3 py-1">{r}</span>
                        ))}
                      </div>

                      <div className="font-sans text-sm text-white/60 leading-relaxed whitespace-pre-line mb-12">
                        {modal.data.bio}
                      </div>

                      <div className="mt-auto pt-8 border-t border-white/10 flex flex-wrap gap-4">
                         {modal.data.link && (
                           <a href={modal.data.link} target="_blank" className="cursor-interact flex items-center gap-3 border border-white px-6 py-3 text-white hover:bg-white hover:text-black transition-colors font-epic text-[9px] uppercase tracking-[0.2em]">
                             <Globe size={14} /> Global Link
                           </a>
                         )}
                          {modal.data.socials && Object.entries(modal.data.socials).map(([key, val]) => (
                           <a 
                             key={key} 
                             href={`https://${SOCIAL_MAP[key]}.com/${key === 'tt' || key === 'yt' ? '@' : ''}${val}`} 
                             target="_blank"
                             rel="noopener noreferrer" 
                             className="cursor-interact px-4 py-2 border border-white/10 flex items-center justify-center hover:border-[#FF0055] hover:text-[#FF0055] transition-colors text-white/40 font-epic text-[9px] uppercase tracking-[0.2em]"
                           >
                             {SOCIAL_MAP[key]}
                           </a>
                         ))}
                      </div>
                    </div>
                  </div>
                ) : (modal.type === 'discography' ? (
                  <div>
                    <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-6">
                      <h2 className="font-display text-4xl font-black uppercase text-white">Full <span className="text-[#00E5FF]">Archive.</span></h2>
                      <div className="relative w-full md:w-80 border-b border-white/20 focus-within:border-[#00E5FF] transition-colors flex items-center">
                        <Search size={14} className="text-[#00E5FF] mr-3" />
                        <input 
                          type="text" placeholder="QUERY DATABASE..." 
                          className="bg-transparent border-none font-epic text-[9px] uppercase tracking-widest text-white focus:outline-none w-full py-3 placeholder-white/30"
                          onChange={(e) => setDiscographyFilter(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                       {filteredDiscography.map((group, idx) => (
                         <div key={idx} className="border border-white/5 p-6 hover:border-[#00E5FF]/50 transition-colors bg-[#050505]">
                           <h4 className={`font-epic text-sm font-bold tracking-widest text-[#00E5FF] mb-6 ${group.artist.toLowerCase() === 'djmerkone' ? 'lowercase' : 'uppercase'}`}>
                             &gt; {group.artist}
                           </h4>
                           <ul className="space-y-3">
                             {group.tracks.map((track, tIdx) => (
                               <li key={tIdx} className="font-sans text-[12px] text-white/50 flex items-start group">
                                 <span className="text-white/10 text-[9px] font-epic tracking-widest mr-3 pt-1 group-hover:text-[#FF0055] transition-colors">{(tIdx + 1).toString().padStart(2, '0')}</span>
                                 <span className="group-hover:text-white transition-colors">{track}</span>
                               </li>
                             ))}
                           </ul>
                         </div>
                       ))}
                    </div>
                  </div>
                ) : null)}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}