import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Music, 
  ExternalLink, 
  Disc, 
  Play, 
  Pause,
  ChevronRight, 
  ChevronLeft,
  Instagram, 
  Facebook,
  Youtube,
  Globe, 
  Heart,
  X,
  Search,
  SlidersHorizontal,
  Mic2,
  PenTool,
  Headphones,
  ArrowUpRight,
  Send,
  Hexagon,
  Triangle,
  Circle,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

/**
 * DATA CONSTANTS
 */
const ARTISTS_DATA = [
  { name: "djmerkone", role: ["Writer", "Producer", "Engineer", "Artist", "DJ"], link: "http://me.djmerkone.com", img: "dmobio.jpg", accent: "red", bio: "djmerkone // Sonic Architect & Multidisciplinary Engineer\ndjmerkone operates at the high-fidelity intersection of rhythm and precision. With a career spanning over three decades, he has established himself as a definitive architect of the Florida sound—a multidisciplinary engineer whose work bridges the gap between classic foundations and futuristic clarity.\n\nRooted in the high-energy pulse of the 1990s music scene, djmerkone’s evolution is a testament to technical mastery and creative fluidity. His catalog is a diverse registry of credits that move seamlessly between the gritty low-end of experimental hip-hop, the soulful textures of R&B, and the driving, percussive heart of Latin freestyle and house music.\n\nAs a producer and mastering engineer, djmerkone views sound as architecture. Whether he is building a track from the ground up or providing the final clinical polish to a global release, his philosophy remains the same: engineering is the science of emotion. His precision in the studio ensures that every frequency serves a purpose, allowing the artist's vision to cut through the digital noise with absolute authority.\n\nEntering 2026, djmerkone remains a sought-after collaborator for artists seeking a signature sonic identity. His recent works—including extensive production and engineering for Marilyn Torres' The EP and Jase David's Threads—showcase a continued dedication to pushing the boundaries of modern sound.\n\ndjmerkone is more than a technician; he is a curator of the sonic experience. He doesn't just record music—he engineers the future.", socials: { fb: "djmerkone", ig: "djmerkone", tt: "djmerkone", yt: "djmerkone" } },
  { name: "Marilyn Torres", role: ["Artist", "Writer", "Producer"], link: "https://marilyn.djmerkone.com/", img: "marb.png", accent: "emerald", bio: "Marilyn Torres: The Evolution of a Freestyle Icon\nFrom the sun-drenched streets of Ponce, Puerto Rico, to the rhythmic pulse of New Jersey, Marilyn Torres has spent over two decades carving a unique path through the music industry. Known for her powerhouse vocals and a fearless ability to pivot between genres, she has evolved from a digital pioneer to a cornerstone of the modern Latin Freestyle movement.\n\nThe Foundations (2005–2013)\nMarilyn’s journey began in 2005 with the groundbreaking digital debut of \"Callin' For Love.\" This early embrace of digital distribution set the stage for a prolific run that showcased her versatility:\n\nThe Freestyle Era: She solidified her voice with \"No Puedo Amarte\" (2006), \"Why\" (2007), and \"My Cry\" (2008).\n\nGenre Defiance: In 2009, she showcased her range with the reggaeton track \"Yo No Fui\" and dominated the Latin Hip-Hop scene with a series of sharp battle and diss tracks through 2013.\n\nKey Collaborations: Her career is marked by deep musical partnerships, including work with Apocalypsis and her brother Gerry (Jeriel). She also famously collaborated with L’amour on \"Yesterday\" in 2012—a track that took on new meaning when it was featured again on his posthumous final album as a tribute to their shared artistry.\n\nThe Return and Contemporary Success\nAfter a brief hiatus, Marilyn returned to the spotlight with the massive hit \"In Exchange For What,\" signaling a new chapter of official digital releases that have dominated the dance charts. Her recent work continues to push the genre forward while honoring its roots:\n\n\"In Time\": A standout collaboration with Joe Magic and Howie Wienman.\n\nChart-Toppers: Recent staples like \"Torn\" and the upcoming \"Don't Let Me\" continue to resonate with a global audience of DJs and freestyle enthusiasts.\n\nWhether she is delivering a heartfelt ballad or a high-energy dance anthem, Marilyn Torres remains a resilient force in the industry—a Jersey-raised talent with a Puerto Rican heart, bridging the gap between the underground and the international stage.", socials: { fb: "marilyntorresmusic", ig: "marilyntorres", tt: "marilyntorres", yt: "marilyntorres" } },
  { name: "Luis Marte", role: ["Collaborator", "Artist", "Writer", "Producer", "Engineer"], link: "https://luismartemusic.com", img: "luisbio.JPG", accent: "cyan", bio: "Luis Marté has been blessed with a long career in the music industry as an artist, songwriter, engineer and producer. He has opened for Chico Debarge on the Apollo stage, toured with pop sensation 98 Degrees, shared the Disney Channel spotlight with latin heart throb Enrique Iglesias and burned the airwaves of MTV TRL.\n\n“Those were exciting times in my life, here’s a kid from the Bronx, living out his dream on the biggest stage”\n\nFor most of his career as a performing artist, he rode the journey with three other guys. Strange Wayz was the name they went by, four childhood friends, four guys who took a chance on each other to chase a dream and boy did they ever. They signed to power house booking agency ICM: International Creative Management in early 2001 and were catapulted into the scene opening for major pop acts dominating the charts. Strange Wayz was able to fuse their latin roots with a Pop/R&B swag that propelled them to heights only dreamed about in streets of the Bronx.\n\n“They already have the talent, they already have the music…” ~ Enrique Iglesias\n\nStrange Wayz signed a Production Deal shortly after touring and the group took on a different look and feel, sign of the times?! Out with the pop boy band sound and in with the more mature R&B Dance. With a change in sound, so did a change come in the groups members. Luis was the last to remain of the original group and a new group formed around him; ForeKast.\n\n“We were in a different place then, now we were working with some heavyweights, alot was on the line”\n\nThe group was setup for success, working with producer/vocal arranger phenom’ Jim Beanz who they affectionately called “Jimba”, whose credits at the time included P Diddy, Danity Kane, Timberland, Day 26, and Justin Timberlake.\n\nFast forward to present day, Luis now finds himself back on the scene penning pop records, working behind the scenes developing fresh new talent and continuing to release his own music under his label LMM Recordings.\n\nStay tuned for future releases.", socials: { fb: "luismartemusic", ig: "luismarte", tt: "luismarte", yt: "luismarte" } },
  { name: "Ricardo Vazquez", role: ["Writer", "Artist"], img: "ricbio3.jpg", accent: "orange", bio: "Ricardo Vazquez, widely known in the freestyle and dance music circuits as Ricky Vaz, is a veteran force whose musical journey began in the auditoriums and theater productions of his Rochester, New York high school. Emerging onto the scene in the late ‘90s, his career has been defined by a high-output discography and a relentless dedication to Latin Freestyle, R&B, and House music.\n\nHis breakthrough arrived in 1999 with his debut single, \"Moment of Love,\" featured on Freestyle Mania Vol 2. This momentum propelled him into the early 2000s, landing the hit \"See My Tears\" on the legendary Micmac Records in 2005. These early successes proved his ability to blend street-level authenticity with professional studio polish, establishing him as a defining voice in both the Rochester scene and the national freestyle landscape.\n\nA prolific collaborator and dynamic performer, Ricardo has built an expansive discography working with legendary labels and imprints, including Artistik Records, Artie Productions, Str84ward Entertainment, Pitch Control Productions, and DMO Musik. His major studio projects—such as his 2014 full-length album A Piece of Me, Abandoned, and the In A Class of Our Own series (alongside NuStyle Records owner Alex Zuniga)—serve as powerful timestamps of his sonic evolution. Fearlessly pivoting between classic freestyle energy and mature R&B/House textures, he has delivered standout collaborations alongside Andrea Martin (\"That’s What It’s All About\"), Marilyn Sanchez (\"Love Will See Us Through\"), Hector “Sito” Santiago (\"On the Outside\"), and frequent collaborator Luis Marte.\n\nBeyond the vocal booth, Ricardo is a devoted mentor and industry leader. In 2005, he founded Menage3 Entertainment to help guide up-and-coming artists through production, writing, vocal training, and the intricacies of the music business. His passion for artist development continues to be a driving force, as he frequently coordinates with other record labels and entertainment companies to elevate the scene as a whole.\n\nAs a songwriter and vocalist, Ricardo proudly represents the LGBTQIA+ community, using his platform to push for equality and authentic expression. Through tracks like \"You'll Be OK\" featuring Joseph “Joey Tee” Wetmore, his writing reflects the truth of modern love and aims to make a lasting, inclusive statement within the genre.\n\nToday, Ricardo Vazquez remains a cornerstone of the djmerkone MUSIC collective. Continuing to perform, host, and MC, he operates as a lead artist, backup vocalist, and elite songwriter. His decades of experience, undeniable drive, and clinical understanding of hit-making hooks make him an essential pillar of the studio's creative infrastructure, ensuring his continued impact on the music industry.", socials: { ig: "ricardovazquez" } },
  { name: "Dengel", role: ["Producer", "Writer", "Artist", "Engineer"], img: "dengbio.jpg", accent: "rose", bio: "Dengel (William D. Cortes) is a versatile titan of the Latin Urban and Freestyle genres, with a career rooted in the raw energy of the early scene. He first made his mark as 'Willie D' in the burgeoning Latin Hip-Hop movement with the track 'Mi Abuela,' proving early on his ability to capture a rhythmic vibe.\n\nTransitioning into the late 90s, Dengel joined the powerhouse High Power Records under the moniker 'Nadamas.' Alongside his partner, he debuted the 1997 hit 'Dat Hoochie,' a track that became a staple of the era's club rotation. His creative chemistry extended into deep collaborations with the late Carlos 'Charlie' Velasquez (L'amour), co-authoring and performing on the freestyle classics 'I Wanna Be Loved' and 'Don't Look Back.'\n\nThe dawn of the 2000s saw Dengel expand his influence by partnering with djmerkone to establish Wik-It Records. This alliance launched a series of high-impact releases that defined the 'New School' sound, including the hits 'Sexual Vibe' and 'She Left Me.' These tracks didn't just top charts; reshaped the Latin Freestyle landscape for a new generation.\n\nDengel remains an essential pillar of djmerkone MUSIC today. As an artist, elite songwriter, and backup vocalist, his decades of expertise and clinical ear for hooks ensure the collective's output maintains its legendary sonic precision.", socials: { ig: "dengelmusic" } },
  { name: "Apoca", role: ["Artist", "Writer"], img: "apobio.jpg", accent: "purple", bio: "Victor Ivan Justiniano, known to the Latin Urban world as Apocalypsis or \"El Apoca,\" is a trailblazing artist whose roots run deep in the foundational era of the reggaeton movement. Born in Bayamon, Puerto Rico, he discovered his passion for music at the age of 13 before relocating to Florida in 1994. His journey is one of relentless evolution—from a local club pioneer to an internationally recognized solo artist and key driving force within the djmerkone MUSIC collective.\n\nEl Apoca’s professional career ignited when he formed the groundbreaking group Los Archangeles alongside Reinaldo \"Terrorista\" Santiago and producer djmerkone. As true pioneers of the Latin Urban movement in Jacksonville, their gritty, authentic sound and commanding stage presence earned them the undisputed heavyweight title, \"Los que Controlan desde el Norte de la Florida\" (The ones in control from North Florida).\n\nA major turning point arrived in 2005. Following a two-year stint with the independent label Baila Latin Music (BLM), the group released the breakout track \"Esa Nena\" on the Face Off: Special Edition compilation. The song became a massive catalyst, opening doors and expanding their reach into critical markets across Florida, Texas, New York, New Jersey, and Puerto Rico. That same year, El Apoca made his television debut on Telemundo T43, performing at the Hispanic Heritage Festival of South Florida.\n\nBy 2006, after a rebranding as the powerhouse duo \"Apoca & Terro,\" he helped launch the foundational DMO Muzik label alongside djmerkone. Driven to expand his horizons, El Apoca officially transitioned into a solo artist in 2009, relocating to New York City. There, he embedded himself in the vibrant local scene, performing across the Bronx, Queens, Long Island, and at the iconic Puerto Rican Day Parade in Brooklyn. After returning to Florida in 2011 to further refine his sound, he struck international success in 2013, collaborating with acclaimed producer James de la Raza on the remix of \"Bailalo.\" This hit opened the doors to the Dominican Republic, leading to a highly successful promotional tour across the island's premier clubs and events.\n\nThroughout his expansive career, El Apoca has proven his mettle by sharing the stage and opening for a staggering roster of legendary musical figures, including Aventura, Nicky Jam, Farruko, Baby Rasta y Gringo, Don Chezina, Alexis y Fido, Trebol Clan, Khriz y Angel, Tito Puente Jr., Grupo Mania, Algarete, Noriega, and Fulanito.\n\nIn 2020, El Apoca officially reunited with djmerkone to combine forces once again, stepping into a dynamic new chapter. Now partnered with djmerkone MUSIC, he is seamlessly bridging the gap between his pioneer roots and the modern Latin Urban landscape. Armed with a refined sound, an expanding international reach, and the same undeniable energy that first put North Florida on the map, Victor Ivan \"Apoca\" Justiniano continues to prove why he remains a formidable, enduring force in the industry.", socials: { ig: "elapoca" } },
  { name: "L'amour", role: ["Producer", "Writer", "Artist"], img: "lam0.jpg", accent: "zinc", isMemorial: true, bio: "L'amour (Carlos 'Charlie' Velasquez) was a visionary producer, writer, and artist whose influence spanned the golden eras of freestyle and contemporary electronic music. Operating under various monikers including la-mour, l'amour, Carlos Velasquez, and Charlie Velasquez, he was a key figure in the High Power Records era, where his sharp songwriting and vocal contributions helped define a generation of sound.\n\nHis legacy is rooted in his work with la-mour productions, High Power Records, and his deep creative bond with djmerkone MUSIC. A prolific creator, Charlie was responsible for writing numerous hits for High Power and providing standout vocal performances that combined raw emotion with technical precision. Notable works include his hauntingly beautiful collaboration with Marilyn Torres on 'Yesterday,' a track that remains a cornerstone of his posthumous catalog.\n\nOn December 16, 2019, the music world lost a true sonic architect. Carlos was 45 years old, a beloved resident of Pennsylvania, whose passion for his craft left an indelible mark on the music industry. Though he is no longer in the studio, his frequencies continue to resonate through every project he touched.", note: "Carlos 'Charlie' Velasquez", lifespan: "August 17, 1974 – December 16, 2019", link: "https://www.dillonfuneralhomeinc.com/obituary/CarlosCharlie-Velasquez", socials: { yt: "djmerkone" } }
];

const OFFICIAL_RELEASES_DATA = [
  { artist: "Marilyn Torres", title: "Don't Let Me*", type: "EP (8 Tracks)", art: "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F2439182--B8ED0DAA-5C77-4DA4-B7B3CEDB5EA4BBFB--0--17901464--DONTLETMECOVERFRONT.png?fm=jpg&q=75&w=800&s=dab38261a5741cf0a98ff6ea6c153afb", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_92815263_3939F1655E75E4A6DE8FD52430E93689.mp3", apple: "https://music.apple.com/us/album/dont-let-me/1870639799?uo=4", spotify: "https://prf.hn/click/camref:1101ljvYv/pubref:albumuuid%3DB8ED0DAA-5C77-4DA4-B7B3CEDB5EA4BBFB/destination:https://open.spotify.com/album/0SJf7QCpc3VD1AaMh6dPRx", yt: "https://music.youtube.com/playlist?list=OLAK5uy_l6vs4GPW_kLZl21rvPS02g5c8kFhUBSiY&si=R-d8ehWM21kkcBAA", amazon: "https://amazon.com/music/player/albums/B0DYM8299K" },
  { artist: "Marilyn Torres", title: "Mi Viejo (Cover)**", type: "Single", art: "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F2439182--B2410C0A-5A37-4B51-8499E7C0F97378EF--0--10600304--1000008540.png?fm=jpg&q=75&w=800&s=743d39c70fe80f17f5cabf99450abeca", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_87699065_8062EA63A1748AD72730E4EA7235A296.mp3", apple: "https://music.apple.com/us/album/mi-viejo-single/1857094292?uo=4", spotify: "https://open.spotify.com/album/7xU3hnUaJZo9AQ5WfswZJK", yt: "https://music.youtube.com/watch?v=b2k2oCnvRwg&si=rY-qi6iBcI7pote8", amazon: "https://www.amazon.com/dp/B0G4CMQFMM/ref=sr_1_1?crid=24353U7SZ7UXU&dib=eyJ2IjoiMSJ9.t_daZ-EJfNUNudjONa2vJfRznUgxbeBPooFwgSkTgWDGjHj071QN20LucGBJIEps.sWjx58MaA8NdZdoVdSuoJ7Gy84mVfV6VWRuAGW_Rrc8&dib_tag=se&keywords=marilyn+torres+mi+viejo&qid=1775479769&sprefix=marilyn+torres+mi+viejo%2Caps%2C404&sr=8-1" },
  { artist: "Marilyn Torres", title: "The EP**", type: "Album (15 Tracks)", art: "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F2439182--72B9B244-B77E-488E-8F580A7F85C11985--0--14118676--PSX202510181410442.png?fm=jpg&q=75&w=800&s=61baffb6f3395e6008c830d2b8b4709c", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_85186471_793A0A8058F9B356D76C8852EAB47880.mp3", apple: "https://music.apple.com/us/album/the-ep/1850311861?uo=4", spotify: "https://open.spotify.com/album/4dqPBGWefdt3d0nbDcg2ER", yt: "https://music.youtube.com/browse/MPREb_YgAHRzAwBgS", amazon: "https://amazon.com/music/player/albums/B0FYCWF875?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_zxL1u7MFOBPPWdWVzdnU0SMsC" },
  { artist: "djmerkone", title: "latnem flex", type: "Single", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D3790EFCC%2DFC55%2D4D7A%2DAB629C00CDE5F508%2D%2D0%2D%2D7805867%2D%2D1000007443%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_84250563_A39E3B5DE28D40F31CC1DE9575B8E7F5.mp3", apple: "https://music.apple.com/us/album/latnem-flex-single/1847568073?uo=4", spotify: "https://open.spotify.com/album/2Qrz2t3uSG1D9fU4kcJQLT", yt: "https://music.youtube.com/watch?v=QifcZrj65ms", amazon: "https://www.amazon.com/dp/B0FWWX7BGV/ref=sr_1_1?crid=4IJI60GTTX72&dib=eyJ2IjoiMSJ9.w_jp02N0AvuXIsm4aGPuFzVYFHVf-PS4wPL0-O_HL0U.6wmWxXMLEvGBG5T-3HslL0wiwQyajDTCtFFobVEu4HI&dib_tag=se&keywords=djmerkone+latnem+flex&qid=1775480676&sprefix=djmerkone+latnem+fle%2Caps%2C173&sr=8-1" },
  { artist: "djmerkone", title: "wrong", type: "Single", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D9FF69870%2D6809%2D4A55%2D8E8EC29A948CCEE0%2D%2D0%2D%2D528811%2D%2D1000007464%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_84250289_69C7A0C90B9450E3E52FB2B8692529A6.mp3", apple: "https://music.apple.com/us/album/wrong-single/1847380167?uo=4", spotify: "https://open.spotify.com/album/493KDL9dcZhWuSDpiV2a0i", yt: "https://music.youtube.com/watch?v=GPz1sHH4xVc&si=fgy5HlS4yj8wewC3", amazon: "https://www.amazon.com/dp/B0FWXBTG1M/ref=sr_1_1?crid=3J1GRHC9SMD3K&dib=eyJ2IjoiMSJ9.R0bEaZIsFpoqSmtLYovsh0Pz1Hxp8RiTE_NN2zuTCybGjHj071QN20LucGBJIEps.T_GG1hXeybk_fcHURXMjYkzKJ4pykW_dMNhrHvRclL8&dib_tag=se&keywords=dj+merkone+wrong&qid=1775480704&sprefix=djmerkone+wron%2Caps%2C164&sr=8-1" },
  { artist: "djmerkone", title: "anomaly", type: "Single", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DEB27753B%2D4CAC%2D4F9C%2DB937654AA2EAF313%2D%2D0%2D%2D641299%2D%2D1000007457%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_84249914_E59F1F9981B8013561A80EFA16D2B06F.mp3", apple: "https://music.apple.com/us/album/anomaly-single/1847557771?uo=4", spotify: "https://open.spotify.com/album/771CqnGm4WE0xtapgq8Bap", yt: "https://music.youtube.com/watch?v=vIjRymiWY5Q&si=JSrNIuMfrlDOnqiY", amazon: "https://www.amazon.com/dp/B0FWWL38RM/ref=sr_1_2?crid=11WFVXWZT5Q7P&dib=eyJ2IjoiMSJ9.Z3NOgvEKehqr1K_Rxsb-ifQXks6enKK6W4GWGyirGUPGjHj071QN20LucGBJIEps.koQNUtGGpF6dPpFbntt9x-PoyFTUnSW6mYbe9dwjBVU&dib_tag=se&keywords=djmerkone+anomaly&qid=1775480735&sprefix=djmerkone+anomal%2Caps%2C167&sr=8-2" },
  { artist: "djmerkone", title: "chasmitha", type: "Single", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D5E2BF402%2D1A7A%2D4E84%2DB46C42D07934069F%2D%2D0%2D%2D1482023%2D%2DPSX202510090930412%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_83682243_801FC8AE6C36B097E885BA980169335E.mp3", apple: "https://music.apple.com/us/album/chasmitha-single/1845767250?uo=4", spotify: "https://open.spotify.com/album/5JMUpkuDcShpAqciuwlGh0", yt: "https://music.youtube.com/watch?v=6TGec3Dkwoo&si=GND_I4E-0fvKGOYP", amazon: "https://www.amazon.com/dp/B0FVRPFVWB/ref=sr_1_1?crid=29G4RSB6UM9ZH&dib=eyJ2IjoiMSJ9.ehfdyksba_LBOsAVyar6hdpmTCG8AytzRreCyDD6rHk.aWli3FAhgxIxdsDKs04BuhZw8KtEREZXyIJ53Kql5Fo&dib_tag=se&keywords=dj+merkone+chasmitha&qid=1775480836&sprefix=djmerkone+chasmitha%2Caps%2C159&sr=8-1" },
  { artist: "Luis Marte", title: "100 MPH", type: "EP (8 Tracks)", art: "https://i.discogs.com/vYW6zrL9jzXwT2l7WQnk6rpj1qPyc97evBqM1hJdBhk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NTQ1/NDI1LTE2MTk4ODI4/MzctMjMxMC5qcGVn.jpeg", preview: "/100mph.wav", apple: "https://music.apple.com/us/album/100-mph/1817531010", spotify: "https://open.spotify.com/album/5vjuqBXaAbBvw8o9GNUXj5", yt: "https://music.youtube.com/playlist?list=OLAK5uy_lTGujWshYCYkBPyDKvtNQn_V_VwyF6XdI&si=E5ptXsRTdmvZPAzp", amazon: "https://www.amazon.com/100-MPH-Luis-Marte/dp/B0FBCV7QSS" },
  { artist: "Ricardo Vazquez", title: "Take A Chance", type: "EP (7 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DA316E674%2D67A4%2D4277%2DB1C90DC4B836E2A6%2D%2D0%2D%2D411812%2D%2DIMG20240630173037%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_58209599_F5651FCD-E2B7-4AB3-887638C20D054803.mp3", apple: "https://music.apple.com/us/album/take-a-chance/1755680035?uo=4", spotify: "https://open.spotify.com/album/5RTzX3vyQsYeAYZBeE1Joh", yt: "https://music.youtube.com/playlist?list=OLAK5uy_nHaKW4WLrJQt7PtZT8o8IH_sXLd7Z-Z-Y&si=cE3kckJVRJG46UFR", amazon: "https://www.amazon.com/dp/B0D8R81FS1/ref=sr_1_1?crid=BO764P1CYDTP&dib=eyJ2IjoiMSJ9.h9Mec4Tzwpkpzqe8zc9JMVrbRgd3F8KvsvZXlm_Be2cLBGvl0TFd5SHR2oMANCfI5YGClsUl8pt7PxoKzH4v-nxfg3YOzyDPj6rKWX_UJiAi-WZLgwFsY-7uPquXcx95.xAyEhrhB3UxiD02870w1W9Xyk2ofD36Ze0cvZegntX8&dib_tag=se&keywords=ricardo+vazquez+take+a+chance&qid=1775480858&sprefix=ricardo+vazquez+take+a+chance%2Caps%2C155&sr=8-1" },
  { artist: "L'amour", title: "Yesterday", type: "Album (22 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DE458CCAE%2D1DAC%2D46FC%2DBFDBDFE07BA366D5%2D%2D0%2D%2D3580192%2D%2DLAMOURYesterdayEP%2Ejpg", preview: "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F2439182--E458CCAE-1DAC-46FC-BFDBDFE07BA366D5--0--3580192--LAMOURYesterdayEP.png?fm=jpg&q=75&w=800&s=4f6b4d795d2660785ca83bec13616746", apple: "https://music.apple.com/us/album/yesterday/1649788357?uo=4", spotify: "https://open.spotify.com/album/1R5cKN4duP6TvuzEdano8o", yt: "https://music.youtube.com/playlist?list=OLAK5uy_lEYQu3LGiegfemSOnFtLT7GBXE7h2by1g&si=MEIp_Jocnunf8Xob", amazon: "https://www.amazon.com/music/player/albums/B0BJ52LPY2" },
  { artist: "Marilyn Torres", title: "Torn (The Remixes)", type: "EP (5 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D62C5413F%2D2287%2D46CE%2DA99B33EDB7CF9E03%2D%2D0%2D%2D10245288%2D%2DTORNREMIXCOVERfinal2%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_31148828_7185220A-733F-43A0-90A405FFF7FAB7BC.mp3", apple: "https://music.apple.com/us/album/torn-the-remixes-ep/1620407955?uo=4", spotify: "https://open.spotify.com/album/7mtpN4xWqbJEoOP23bIVwR", yt: "https://music.youtube.com/playlist?list=OLAK5uy_l9lKpSagP4TeCc6zIPNEA9-CHvUVTUxw8&si=E2L1s_ldk6nrxWe7", amazon: "https://www.amazon.com/dp/B09YJ5Y81S/ref=sr_1_1?crid=3BUS87CYX0CUQ&dib=eyJ2IjoiMSJ9.FTKYY1gziKc5NrLZZsMFJG287Q422woGN2ETSjVaCFfhNkkOB2cOmqWM9izxoFXNdQ0QxcO2WYZumEln6Std5Q.vAdqbhKe8kQV_D-TpEzkm4jJr4ZqoRN55HOJd1ScqWw&dib_tag=se&keywords=marilyn+torres+torn+the+remixes&qid=1775480956&sprefix=marilyn+torres+torn+the+remixe%2Caps%2C160&sr=8-1" },
  { artist: "Ricardo Vazquez", title: "Now That I (The Remixes)", type: "EP (8 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D296BE620%2DF7A2%2D4CCD%2DB0E371F8ED2FF454%2D%2D1641042936081%2D%2Dphotostudio1639152467204%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_28440964_DB88B7C3-4DF8-4605-B941A3D2D1FC791A.mp3", apple: "https://music.apple.com/us/album/now-that-i-the-remixes/1603491126?uo=4", spotify: "https://open.spotify.com/album/0esuepT28aFseXmGT1WjgH", yt: "https://music.youtube.com/playlist?list=OLAK5uy_lXV3w1aMPfEOgj9b5Bd5AIZj0cB_lD-tU&si=Jch0kyELIS6IpiUm", amazon: "https://www.amazon.com/dp/B09PSGGMVD/ref=sr_1_1?crid=1EHKYJPIDDGWS&dib=eyJ2IjoiMSJ9.8_30N-0AEpZ4cvouxKEq0ny15jHTOSaGNRSksTrGI5zNUhoigwRUTNKNttoAEjrYWHmuGlxBqFl9g601XoaJstS_0OScvjaeBIBB9XCzxlTVtGvytVS1d-ssOGpwv7lIj2ItDvSnKtJR-G3Zce233g.wYv7ibMPBvRKeNGeTYzd-wFCrnTZmpwyWF5be3vpNEw&dib_tag=se&keywords=ricardo+vazquez+now+that+i+the+remixes&qid=1775480976&sprefix=ricardo+vazquez+now+that+i+the+remixe%2Caps%2C147&sr=8-1" },
  { artist: "Marilyn Torres", title: "Torn", type: "EP (4 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D984552B0%2D21DF%2D4386%2DABAEAA3B460DA50C%2D%2D1634904430369%2D%2Dtornofficialcover%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_26676453_2DF87536-F9A4-4733-89D11FC1DB055A4D.mp3", apple: "https://music.apple.com/us/album/torn-ep/1591786965?uo=4", spotify: "https://open.spotify.com/album/7u3XKR30e7GJtac01DrNLS", yt: "https://music.youtube.com/playlist?list=OLAK5uy_kdXrksJ5ah2WsNY3f4fdEd0AdZRQw144A&si=xzCbgnyrHdhgYjuJ", amazon: "https://www.amazon.com/music/player/albums/B09K6D3YXP" },
  { artist: "Ricardo Vazquez", title: "Now That I", type: "Single (4 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DEAE74939%2DEF31%2D4DB1%2D9204770081398879%2D%2D1632316013319%2D%2D20210919215013%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_25946325_BA355B99-8CDB-4684-B38AC63808F5AE0F.mp3", apple: "https://music.apple.com/us/album/now-that-i-ep/1587073738?uo=4", spotify: "https://open.spotify.com/album/54hHBuGxls7LejOiKvBIfU", yt: "https://music.youtube.com/playlist?list=OLAK5uy_nB5r_xic7u6WH2iPUB4UWTZfU2POqUitw&si=tTKFv0x4xz_x8dap", amazon: "https://www.amazon.com/dp/B09GX5V1P8/ref=sr_1_2?crid=2Q8VW17BNS3OB&dib=eyJ2IjoiMSJ9.FIipcVjQbl5Iesepl7LSqy2w6L7ek70zrl3yaD759vQknFAgamYnGSTs9fR-6OvhWHmuGlxBqFl9g601XoaJsvEjMXyRD6hbV7e98kcu-zpMUCzAEjgb2Ypb50lhF5ubfN863JwsCh7PaGmSMSblFNMB4oxNuzVkDbCeH7bov3JtTC5PrRMtew0gRffYhJTP.0xVvFbiIjVKlc0v_LQRT-SdBG6Ei9AVqZEf5HPkZQBU&dib_tag=se&keywords=ricardo+vazquez+now+that+i&qid=1775481351&sprefix=ricardo+vazquez+now+that+i%2Caps%2C143&sr=8-2" },
  { artist: "Marilyn Torres", title: "In Time", type: "EP (7 Tracks)", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D8C38E505%2D2C1E%2D4C17%2D87E80BACABD9B351%2D%2D1617846997589%2D%2DIMG9924%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_21788491_2EC9C122-F182-402E-BCC39D9F9241283E.mp3", apple: "https://music.apple.com/us/album/in-time/1562225980?uo=4", spotify: "https://open.spotify.com/album/75KDuou5fPoDGghTHFq3Gp", yt: "https://music.youtube.com/playlist?list=OLAK5uy_ljBXrFshzKwe8ULHA7FK-7XYGgsO2HnSc&si=ZP9-Tut6LF1f3FIg", amazon: "https://www.amazon.com/music/player/albums/B092395W1G" },
  { artist: "Marilyn Torres", title: "In Exchange For What (The Freestyle Diaries SuperMix)", type: "Single", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800-2439182--2FCC2F34-3524-4AB0-8F894253D78FF7CF--1614263327044--IEFWFDCVRBASE.jpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_20734716_59E63147-25F3-4046-8BE90C0061128FCE.mp3", apple: "https://music.apple.com/us/album/in-exchange-for-what-the-freestyle-diaries-supermix-single/1555761782", spotify: "https://open.spotify.com/album/6vTlAAb4dIsmWWPT2OwB1X", yt: "https://music.youtube.com/playlist?list=OLAK5uy_mnGLjNYVolm29oCX2nRZQ9lD500P5z1GY&si=IM5wuHNx77_-cpIh", amazon: "https://www.amazon.com/music/player/albums/B08XN3R93X" },
  { artist: "Marilyn Torres", title: "In Exchange For What (The Freestyle Diaries SuperMix)", type: "Single", art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DC6E5A464%2D8CB1%2D4A6E%2D9CDC1394A7F0B6BC%2D%2D1633306273724%2D%2D20211003200113%2Ejpg", preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_26221657_9A35F096-7301-4238-B727C9363C607AFE.mp2", apple: "https://music.apple.com/us/album/in-exchange-for-what-maninho-dj-full-pressure-remix/1588954675?uo=4", spotify: "https://open.spotify.com/album/0KJFFYHkb2UWGdWUhFoX9g", yt: "https://music.youtube.com/playlist?list=OLAK5uy_mPGb6DRmGHACsOXqD9dFwf8Mac4PTVrZM&si=5LzzzQn06sjCEeFU", amazon: "https://www.amazon.com/music/player/albums/B09HSRR3M4" },
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
  { 
    id: "mixing",
    title: "Mixing & Mastering", 
    icon: <SlidersHorizontal size={24} strokeWidth={1.5} />, 
    short: "Analog warmth meets digital precision.",
    detail: "Delivering clinical clarity and punch across a limitless spectrum of genres. While our roots run deep in the energy of Hip-hop and Latin, and the polished precision of EDM and Pop, our hybrid analog-digital approach adapts to any style—ensuring every frequency serves the emotion of your track and commands absolute authority on any sound system." 
  },
  { 
    id: "vocal",
    title: "Vocal Production", 
    icon: <Mic2 size={24} strokeWidth={1.5} />, 
    short: "Specialized tracking and tuning.",
    detail: "The human voice is the most critical element of any record. We specialize in recording, comping, and precision tuning for vocalists across all styles, ensuring pitch-perfect delivery while maintaining raw emotional authenticity." 
  },
  { 
    id: "writing",
    title: "Writing & Arrangement", 
    icon: <PenTool size={24} strokeWidth={1.5} />, 
    short: "Developing hooks from the ground up.",
    detail: "Songwriting is architecture. We collaborate with artists to build compelling structures, memorable hooks, and dynamic arrangements that turn 16-bar loops into complete, radio-ready experiences." 
  },
  { 
    id: "demo",
    title: "Demo Services", 
    icon: <Headphones size={24} strokeWidth={1.5} />, 
    short: "High-fidelity concepts for pitch.",
    detail: "For songwriters and publishers looking to present their work to major labels. We transform raw voice memos and acoustic sketches into full, high-fidelity prototypes ready for professional pitching." 
  }
];

// Mapping for proper social URLs
const SOCIAL_MAP = {
  fb: 'facebook',
  ig: 'instagram',
  tt: 'tiktok',
  yt: 'youtube'
};

/**
 * HELPER UI COMPONENTS
 */

const BrandLogo = ({ size = 'md', className = '' }) => {
  const sizing = {
    sm: 'w-32 md:w-40',
    md: 'w-48 md:w-64',
    lg: 'w-64 sm:w-80 md:w-96 lg:w-[35rem]',
    xl: 'w-80 sm:w-96 md:w-[32rem] lg:w-[45rem]',
  }[size];

  return (
    <div className={`inline-flex cursor-pointer group ${className} ${sizing}`}>
      <img 
        src="logo.png" 
        alt="djmerkone MUSIC" 
        className="w-full h-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mix-blend-screen"
      />
    </div>
  );
};

const AnimatedGridBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{ perspective: '1000px' }}>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:50px_50px] [transform:rotateX(60deg)_translateY(-100px)_scale(2)] animate-[grid-move_20s_linear_infinite]" />
    <style>{`
      @keyframes grid-move {
        0% { background-position: 0 0; }
        100% { background-position: 0 50px; }
      }
    `}</style>
  </div>
);

const AudioVisualizer = ({ isPlaying, className = "" }) => {
  return (
    <div className={`flex items-end justify-center gap-[2px] md:gap-1 h-6 transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-20'} ${className}`}>
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className="w-1 md:w-1.5 bg-rose-500 rounded-t-sm"
          style={{
            height: isPlaying ? '100%' : '15%',
            animation: isPlaying ? `visualizer 0.8s ease-in-out infinite alternate ${i * 0.15}s` : 'none',
            transformOrigin: 'bottom'
          }}
        />
      ))}
      <style>{`
        @keyframes visualizer {
          0% { transform: scaleY(0.2); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  )
};

const FloatingGeometry = () => (
  <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
    <Hexagon className="absolute top-[20%] left-[10%] text-white/5 w-32 h-32 animate-[spin_40s_linear_infinite]" strokeWidth={1} />
    <Triangle className="absolute bottom-[30%] right-[15%] text-rose-500/10 w-48 h-48 animate-[spin_30s_linear_infinite_reverse]" strokeWidth={1} />
    <Circle className="absolute top-[40%] right-[5%] text-white/5 w-24 h-24 animate-[pulse_10s_ease-in-out_infinite]" strokeWidth={1} />
  </div>
);

const App = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, type: null, data: null });
  const [discographyFilter, setDiscographyFilter] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const [activeService, setActiveService] = useState(SERVICES_DATA[0]);
  const [playingPreview, setPlayingPreview] = useState(null);
  const audioRef = useRef(new Audio());
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  // Handle Audio ending
  useEffect(() => {
    const audioEl = audioRef.current;
    const handleEnded = () => setPlayingPreview(null);
    audioEl.addEventListener('ended', handleEnded);
    return () => audioEl.removeEventListener('ended', handleEnded);
  }, []);

  // Global Tracking
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
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
    audioRef.current.play().then(() => setPlayingPreview(url)).catch(() => {});
  };

  const handlePreviewStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setPlayingPreview(null);
  };

  const togglePreviewAudio = (url, e) => {
    e.stopPropagation(); 
    if (!url) return;
    if (playingPreview === url) {
      handlePreviewStop();
    } else {
      handlePreviewStart(url);
    }
  };

  // Formspree Submit Handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ state: 'submitting', message: '' });
    
    try {
      const response = await fetch('https://formspree.io/f/xreovaoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus({ state: 'success', message: 'Transmission received. We will be in touch.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus({ state: 'error', message: 'Transmission failed. Please verify your details and try again.' });
      }
    } catch (error) {
      setFormStatus({ state: 'error', message: 'Network error. Please check your connection and try again.' });
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formStatus.state === 'error' || formStatus.state === 'success') {
       setFormStatus({ state: 'idle', message: '' });
    }
  };

  const filteredDiscography = useMemo(() => {
    return DISCOGRAPHY_DATA.filter(item => 
      item.artist.toLowerCase().includes(discographyFilter.toLowerCase()) ||
      item.tracks.some(t => t.toLowerCase().includes(discographyFilter.toLowerCase()))
    );
  }, [discographyFilter]);

  const sortedReleases = useMemo(() => {
    return [...OFFICIAL_RELEASES_DATA].sort((a, b) => {
      const scoreA = a.title.includes('**') ? 1 : (a.title.includes('*') ? 2 : 0);
      const scoreB = b.title.includes('**') ? 1 : (b.title.includes('*') ? 2 : 0);
      return scoreB - scoreA;
    });
  }, []);

  // Find the currently playing artwork to set the ambient background
  const activeCatalogBg = useMemo(() => {
    if (!playingPreview) return sortedReleases[0]?.art;
    const activeRelease = sortedReleases.find(r => r.preview === playingPreview);
    return activeRelease ? activeRelease.art : sortedReleases[0]?.art;
  }, [playingPreview, sortedReleases]);

  return (
    <div className="bg-[#030303] text-zinc-100 overflow-x-hidden selection:bg-rose-600/40 font-sans min-h-screen">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&family=Inter:wght@300;400;500;700&display=swap');
          
          @font-face {
            font-family: 'XP Ziba';
            src: url('/XP-Ziba.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Horizon';
            src: url('/Horizon.woff2') format('woff2'),
                 url('/Horizon.otf') format('opentype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          .font-ziba { font-family: 'XP Ziba', sans-serif; }
          .font-horizon { font-family: 'Horizon', sans-serif; }

          body { 
            font-family: 'Inter', sans-serif; 
            background-color: #030303; 
            color: #f4f4f5; 
            -webkit-font-smoothing: antialiased;
          }
          
          .font-display { font-family: 'Space Grotesk', sans-serif; }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #030303; }
          ::-webkit-scrollbar-thumb { background: #27272a; border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: #3f3f46; }
          
          /* Animated Film Grain Overlay */
          .bg-noise {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            mix-blend-mode: overlay;
            opacity: 0.2;
            pointer-events: none;
            position: fixed;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            z-index: 50;
            animation: grain 8s steps(10) infinite;
          }

          @keyframes grain {
            0%, 100% { transform: translate(0, 0); }
            10% { transform: translate(-5%, -10%); }
            20% { transform: translate(-15%, 5%); }
            30% { transform: translate(7%, -25%); }
            40% { transform: translate(-5%, 25%); }
            50% { transform: translate(-15%, 10%); }
            60% { transform: translate(15%, 0%); }
            70% { transform: translate(0%, 15%); }
            80% { transform: translate(3%, 35%); }
            90% { transform: translate(-10%, 10%); }
          }

          /* Marquee Animation */
          .marquee-container {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          /* Smooth Section Transitions */
          .sticky-section {
            position: sticky;
            top: 0;
            min-height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-shadow: 0 -20px 50px rgba(0,0,0,0.9);
          }
        `}
      </style>

      <div className="bg-noise" />

      {/* Intro Overlay */}
      {!hasEntered ? (
        <div className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-[#030303]">
           
           {/* --- NEW STATIC BACKGROUND WITH OVERLAYS --- */}
           <div className="absolute inset-0 z-0 pointer-events-none">
             <img 
               src="https://images.unsplash.com/photo-1613231365618-5ebf85a8209e?q=80&w=1931&auto=format&fit=crop" 
               alt="Intro Background" 
               className="w-full h-full object-cover opacity-20 mix-blend-luminosity" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-[#030303]/50" />
           </div>

           <div className="relative z-10 flex flex-col items-center">
             <div className="mb-12">
               <AudioVisualizer isPlaying={true} className="!h-16 gap-2" />
             </div>
             
             <BrandLogo size="xl" className="mb-16" />
             
             <button 
               onClick={() => setHasEntered(true)}
               className="px-10 py-4 rounded-full border border-rose-600/50 text-rose-500 font-display font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-rose-600 hover:text-white transition-all hover:scale-105 duration-500 shadow-[0_0_40px_rgba(225,29,72,0.1)] hover:shadow-[0_0_60px_rgba(225,29,72,0.3)]"
             >
               Enter Environment
             </button>
           </div>
        </div>
      ) : (
        <div className="relative w-full animate-in fade-in duration-1000">
          
          {/* Navigation */}
          <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm transition-all border-b border-white/5">
            <div onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
               <BrandLogo size="sm" />
            </div>
            
            <nav className="hidden md:flex items-center space-x-12">
              {['Services', 'Core', 'Catalog', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-rose-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>
          </header>

          {/* Stacking Architecture Container */}
          <div className="relative w-full">

            {/* SECTION 1: HERO */}
            <section id="hero" className="sticky-section bg-[#030303] z-10 pt-24 pb-12">
              <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
                <img src="https://images.unsplash.com/photo-1509310202330-aec5af561c6b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Studio Background" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/60 via-[#030303]/80 to-[#030303]" />
              </div>
              
              <FloatingGeometry />
              
              <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 flex flex-col justify-center flex-grow relative z-20">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 mb-10 w-fit backdrop-blur">
                   <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                   <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-rose-400">High Fidelity Engineering</span>
                </div>
                
                <h1 className="font-display text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] font-bold leading-[0.95] tracking-tighter text-white uppercase max-w-5xl relative">
                  Elevate<br />
                  <span className="text-zinc-500 italic">The Sound.</span>
                </h1>
                
                <p className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed font-light mt-8 border-l border-rose-500/50 pl-6 md:pl-8 bg-black/20 backdrop-blur-sm py-2 rounded-r-lg">
                  A premier music studio bridging classic foundations with futuristic clarity. We engineer high-fidelity audio across a limitless spectrum of genres—whether dialing in the raw energy of <strong className="text-white font-medium">Hip-hop & Latin</strong>, the refined polish of <strong className="text-white font-medium">EDM & Soul</strong>, or anything in between.
                </p>
              </div>
            </section>

            {/* SECTION 2: SERVICES (Interactive Terminal) */}
            <section id="services" className="sticky-section bg-[#0a0a0c] z-20 border-t border-white/10 rounded-t-[2.5rem] md:rounded-t-[4rem]">
               <div className="w-full overflow-hidden border-b border-white/5 py-4 flex items-center font-display font-bold uppercase tracking-widest text-xs md:text-sm text-zinc-700 bg-black absolute top-0 left-0 z-30">
                <div className="marquee-container">
                   {[...Array(6)].map((_, i) => (
                     <div key={i} className="flex items-center whitespace-nowrap px-8">
                       SONIC ARCHITECTURE <span className="mx-8 text-rose-900">•</span> CLINICAL PRECISION <span className="mx-8 text-rose-900">•</span>
                     </div>
                   ))}
                </div>
              </div>

              <div className="absolute inset-0 opacity-10 mix-blend-luminosity">
                <img src="https://images.unsplash.com/photo-1620455992636-3118c85e30f6?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Gear Background" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/90 to-[#050505]" />
              </div>

              <div className="w-full h-full overflow-y-auto custom-scrollbar relative z-20 pt-20">
                <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 py-20 min-h-full items-center">
                   <div className="flex-1 w-full flex flex-col justify-center">
                      <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white uppercase mb-12">Expertise</h2>
                      <div className="flex flex-col gap-4">
                        {SERVICES_DATA.map((service) => (
                          <div key={service.id} className="bg-black/40 border border-white/5 rounded-xl p-6 backdrop-blur-md hover:bg-black/60 hover:border-white/20 transition-all duration-300">
                            <div className="flex items-center gap-6 mb-4">
                              <div className="text-rose-500">
                                {service.icon}
                              </div>
                              <div>
                                <h4 className="font-display text-lg md:text-xl font-bold uppercase tracking-tight text-white">{service.title}</h4>
                                <p className="text-xs text-zinc-500 mt-1 font-medium">{service.short}</p>
                              </div>
                            </div>
                            <p className="text-sm font-light leading-relaxed text-zinc-400 pt-4 border-t border-white/5">
                              {service.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                   </div>

                   <div className="flex-1 w-full flex flex-col justify-center">
                      <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col relative overflow-hidden shadow-2xl">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 blur-[80px] rounded-full pointer-events-none" />
                         <AnimatedGridBackground />
                         <div className="flex-grow flex flex-col justify-center items-center text-center relative z-10">
                            <AudioVisualizer isPlaying={true} className="text-rose-500 transform scale-150 mb-12" />
                            <h3 className="font-display text-2xl font-bold text-white uppercase tracking-widest">
                              Sonic Architecture
                            </h3>
                            <p className="text-zinc-500 mt-4 text-sm">Real-time fidelity monitoring.</p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: ROSTER */}
            <section id="core" className="sticky-section bg-[#080808] z-[30] border-t border-white/10 rounded-t-[2.5rem] md:rounded-t-[4rem]">
               <div className="absolute inset-0 opacity-10 mix-blend-luminosity">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808] z-10" />
                 <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover blur-[8px]" alt="Studio Vibe" />
               </div>

               <div className="w-full h-full overflow-y-auto custom-scrollbar relative z-20">
                 <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 py-32 flex flex-col">
                    <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                       <div>
                         <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 uppercase">The Core</h2>
                         <p className="text-zinc-400 font-light text-base md:text-lg max-w-lg">The sonic architects and visionary performers driving our catalog forward.</p>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {ARTISTS_DATA.map((artist, i) => (
                        <div key={i} onClick={() => openModal('artist', artist)} className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-square md:aspect-[3/4] bg-black border border-white/10 shadow-xl">
                          <img 
                            src={artist.img} 
                            alt={artist.name} 
                            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${artist.isMemorial ? 'grayscale opacity-70' : 'grayscale-[0.8] opacity-50 group-hover:grayscale-0 group-hover:opacity-100'}`} 
                          />
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            {artist.isMemorial && (
                              <div className="mb-auto self-start bg-red-900/80 backdrop-blur px-3 py-1.5 rounded text-[8px] font-bold uppercase tracking-widest text-white flex items-center gap-2 border border-red-500/50">
                                <Heart size={10} fill="currentColor" className="text-rose-400" /> Legacy Member
                              </div>
                            )}
                            <h3 className={`font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 ${artist.name.toLowerCase() === 'djmerkone' ? 'lowercase' : 'uppercase'}`}>
                              {artist.name}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                               {artist.role.slice(0,3).map((r, idx) => (
                                 <span key={idx} className="text-[8px] uppercase tracking-[0.2em] font-bold text-zinc-300 border border-white/10 px-2 py-1 rounded bg-black/50 backdrop-blur-md">
                                   {r}
                                 </span>
                               ))}
                            </div>
                            
                            <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2 text-rose-500 text-xs font-bold uppercase tracking-widest mt-2">
                               View Profile <ArrowUpRight size={14} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                 </div>
               </div>
            </section>

            {/* SECTION 4: THE CATALOG (GRID) + FOOTER/CONTACT */}
            <div className="relative z-[40] bg-[#020202] shadow-[0_-20px_50px_rgba(0,0,0,0.9)] rounded-t-[2.5rem] md:rounded-t-[4rem] border-t border-white/10">
              
              <section id="catalog" className="relative py-24 md:py-32 overflow-hidden flex flex-col items-center">
                
                {/* Dynamic Ambient Background tied to playing item */}
                <div className="absolute inset-0 -z-20 w-full h-[100%] overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem]">
                   <div 
                     className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
                     style={{ 
                       backgroundImage: `url(${activeCatalogBg})`,
                       filter: 'blur(100px) brightness(0.2) saturate(1.5)',
                       transform: 'scale(1.2)'
                     }} 
                   />
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020202]/80 to-[#020202]" />
                   <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* The Catalog Header */}
                <div className="relative text-center mb-16 flex flex-col items-center w-full px-6 z-10">
                   <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white uppercase">The Catalog</h2>
                   <div className="flex gap-4 items-center">
                     <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-500 border border-rose-500/30 px-4 py-1 rounded bg-rose-500/10 backdrop-blur">Featured Releases</p>
                     <button onClick={() => openModal('discography')} className="text-[10px] font-bold uppercase tracking-[0.4em] text-white border border-white/20 px-4 py-1 rounded bg-white/5 backdrop-blur hover:bg-white hover:text-black transition-all flex items-center gap-2">
                       Full Directory <Disc size={12} />
                     </button>
                   </div>
                </div>

                {/* Immersive Grid Layout */}
                <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 z-20 pb-16">
                  {sortedReleases.map((release, index) => {
                    const isPlaying = playingPreview === release.preview;
                    
                    return (
                      <div
                        key={index}
                        className="group relative flex flex-col bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl"
                      >
                        {/* Image Container */}
                        <div className="relative aspect-square w-full overflow-hidden bg-black">
                          <img src={release.art} alt={release.title} className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'scale-105 brightness-50' : 'group-hover:scale-105 group-hover:brightness-50 grayscale-[0.2]'}`} />
                          
                          {/* Play Button Overlay */}
                          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                            <button 
                               onClick={(e) => togglePreviewAudio(release.preview, e)}
                               className="w-16 h-16 bg-rose-600/90 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(225,29,72,0.4)] hover:scale-110 hover:bg-rose-500 transition-all duration-300 z-30"
                            >
                               {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                            </button>
                            {isPlaying && (
                               <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                                 <AudioVisualizer isPlaying={true} />
                               </div>
                            )}
                          </div>
                          
                          {/* Badges */}
                          {release.title.includes('**') ? (
                            <div className="absolute top-4 left-4 bg-yellow-400 text-black px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-widest z-20 shadow-lg">
                              Recently Released
                            </div>
                          ) : release.title.includes('*') ? (
                            <div className="absolute top-4 left-4 bg-rose-600 text-white px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-widest z-20 shadow-lg">
                              New Release
                            </div>
                          ) : null}
                        </div>

                        {/* Info Container */}
                        <div className="p-6 flex flex-col flex-grow relative overflow-hidden z-20 bg-gradient-to-t from-[#0a0a0c] to-transparent">
                           <h5 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-1 truncate">
                             {release.title.replace(/\*+/g, '')}
                           </h5>
                           <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-6">
                             {release.artist} <span className="mx-2 text-zinc-600">/</span> <span className="text-zinc-500">{release.type}</span>
                           </p>

                           {/* Streaming Links */}
                           <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-2">
                              {release.spotify && <a href={release.spotify} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-white/5 border border-white/5 hover:bg-white hover:text-black py-2.5 rounded text-[9px] font-bold uppercase tracking-widest transition-all text-zinc-300">SPOTIFY</a>}
                              {release.apple && <a href={release.apple} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-white/5 border border-white/5 hover:bg-white hover:text-black py-2.5 rounded text-[9px] font-bold uppercase tracking-widest transition-all text-zinc-300">APPLE</a>}
                              {release.yt && <a href={release.yt} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-white/5 border border-white/5 hover:bg-white hover:text-black py-2.5 rounded text-[9px] font-bold uppercase tracking-widest transition-all text-zinc-300">YT</a>}
                           </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* SECTION 5: CONTACT FORM & FOOTER */}
              <section id="contact" className="py-24 px-6 md:px-12 bg-[#020202] border-t border-zinc-900 relative z-30">
                <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
                  <img src="https://images.unsplash.com/photo-1516280440503-45f0638d1795?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover blur-[4px]" alt="Studio Mic" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/80 to-[#020202]" />
                </div>

                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative z-10">
                  <div className="flex-1">
                    <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white uppercase mb-6">Initiate <br/><span className="text-rose-600">Transmission.</span></h2>
                    <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-md">Looking for engineering, production, or just want to connect? Send a secure message directly to the studio console.</p>
                  </div>
                  
                  <div className="flex-1 w-full max-w-2xl bg-black/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
                    <form className="space-y-6" onSubmit={handleFormSubmit}>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500" htmlFor="name">[ NAME ]</label>
                           <input 
                             type="text" 
                             id="name"
                             name="name"
                             value={formData.name}
                             onChange={handleFormChange}
                             required
                             className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-rose-500 rounded transition-colors" 
                             placeholder="Your Name" 
                           />
                         </div>
                         <div className="space-y-2">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500" htmlFor="email">[ EMAIL ]</label>
                           <input 
                             type="email" 
                             id="email"
                             name="email"
                             value={formData.email}
                             onChange={handleFormChange}
                             required
                             className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-rose-500 rounded transition-colors" 
                             placeholder="Email Address" 
                           />
                         </div>
                       </div>
                       <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500" htmlFor="message">[ MESSAGE ]</label>
                         <textarea 
                           rows="4" 
                           id="message"
                           name="message"
                           value={formData.message}
                           onChange={handleFormChange}
                           required
                           className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-rose-500 rounded transition-colors resize-none" 
                           placeholder="Project details or inquiry..." 
                         />
                       </div>
                       
                       <button 
                         type="submit"
                         disabled={formStatus.state === 'submitting'}
                         className="flex items-center justify-center gap-3 w-full bg-white text-black py-4 font-bold uppercase tracking-widest text-xs hover:bg-rose-600 hover:text-white rounded transition-all duration-300 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(244,63,94,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black"
                       >
                         {formStatus.state === 'submitting' ? 'Transmitting...' : 'Send Transmission'} 
                         {formStatus.state !== 'submitting' && <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                       </button>

                       {/* Status Messages */}
                       {formStatus.message && (
                         <div className={`p-4 rounded border text-xs font-bold uppercase tracking-widest flex items-center gap-3 ${
                           formStatus.state === 'success' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-red-500/10 border-red-500/30 text-red-400'
                         }`}>
                           {formStatus.state === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                           {formStatus.message}
                         </div>
                       )}
                    </form>
                  </div>
                </div>
              </section>

              {/* Massive Minimalist Footer */}
              <footer className="bg-[#020202] py-20 px-6 md:px-12 border-t border-zinc-900 relative overflow-hidden z-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[16vw] font-bold text-white/[0.015] pointer-events-none select-none whitespace-nowrap lowercase">djmerkone</div>
                
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10 mb-20">
                  <div className="max-w-md">
                    <BrandLogo size="md" className="mb-6" />
                  </div>
                  
                  <div className="flex gap-16 md:gap-32">
                    <div>
                      <h6 className="text-[9px] text-zinc-600 tracking-[0.3em] uppercase mb-8 font-bold border-b border-zinc-800 pb-3">Network</h6>
                      <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                        <li><a href="https://luismartemusic.com" target="_blank" className="hover:text-rose-500 transition-colors flex items-center justify-between">Luis Marte</a></li>
                        <li><a href="https://marilyn-site.vercel.app/" target="_blank" className="hover:text-rose-500 transition-colors flex items-center justify-between">Marilyn Torres</a></li>
                        <li><a href="https://djmerkone-site0.vercel.app" target="_blank" className="hover:text-rose-500 transition-colors flex items-center justify-between font-black text-white">djmerkone</a></li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="text-[9px] text-zinc-600 tracking-[0.3em] uppercase mb-8 font-bold border-b border-zinc-800 pb-3">Socials</h6>
                      <div className="flex flex-col gap-4 text-zinc-400">
                        <a href="https://facebook.com/djmerkone" target="_blank" className="hover:text-white transition-colors flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest"><Facebook size={16} /> Facebook</a>
                        <a href="https://instagram.com/djmerkone" target="_blank" className="hover:text-white transition-colors flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest"><Instagram size={16} /> Instagram</a>
                        <a href="https://youtube.com/@djmerkone" target="_blank" className="hover:text-white transition-colors flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest"><Youtube size={16} /> YouTube</a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="max-w-[1400px] mx-auto pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-600 relative z-10">
                  <p>© {new Date().getFullYear()} <span className="lowercase">djmerkone</span> MUSIC. ALL RIGHTS RESERVED.</p>
                  <div className="flex space-x-8 mt-6 md:mt-0 uppercase">
                     <button onClick={() => openModal('privacy')} className="hover:text-white transition-colors">Privacy</button>
                     <button onClick={() => openModal('terms')} className="hover:text-white transition-colors">Terms</button>
                  </div>
                </div>
              </footer>
            </div>
          </div>

          {/* Premium Immersive Modal (OS Level Feel) */}
          {modal.isOpen && (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-0 md:p-6 transition-all duration-500">
              <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={closeModal} />
              
              <div className={`relative w-full h-full md:h-auto ${modal.type === 'discography' ? 'max-w-7xl md:max-h-[90vh]' : 'max-w-6xl md:max-h-[90vh]'} bg-[#070707] border-0 md:border border-zinc-800 md:rounded-2xl overflow-hidden flex flex-col shadow-2xl animate-in slide-in-from-bottom-10 md:zoom-in-95 duration-500`}>
                
                <div className="p-6 md:p-8 border-b border-zinc-900 flex items-center justify-between bg-[#070707] z-10 relative">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded border border-rose-500/20 flex items-center justify-center text-rose-500 bg-rose-500/5"><Music size={16} /></div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-bold flex items-center gap-1">
                      <span className="lowercase font-ziba text-[12px] pt-1">djmerkone</span> // {modal.type === 'artist' ? (modal.data.isMemorial ? 'Memorial' : 'Artist Profile') : (modal.type === 'discography' ? 'Release Archive' : 'Information')}
                    </div>
                  </div>
                  <button onClick={closeModal} className="w-10 h-10 rounded bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-colors text-zinc-300"><X size={18} /></button>
                </div>
                
                <div className="flex-grow overflow-y-auto custom-scrollbar relative bg-[#070707]">
                  {modal.type === 'artist' ? (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 p-6 md:p-12 min-h-full">
                      
                      <div className="lg:col-span-5 relative">
                        <div className="sticky top-0 w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                          <img src={modal.data.img} alt={modal.data.name} className={`absolute inset-0 w-full h-full object-cover object-top ${modal.data.isMemorial ? 'grayscale opacity-70' : ''}`} />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-transparent" />
                        </div>
                      </div>
                      
                      <div className="lg:col-span-7 flex flex-col pb-8 relative">
                        <h3 className={`font-display text-5xl md:text-7xl font-bold tracking-tighter text-white w-full break-words hyphens-auto leading-[0.9] mb-8 ${modal.data.name.toLowerCase() === 'djmerkone' ? 'lowercase' : 'uppercase'}`}>
                          {modal.data.name}
                        </h3>
                        
                        <div className="flex flex-wrap gap-2 mb-10">
                          {modal.data.role.map((r, i) => (
                             <span key={i} className={`text-[9px] px-4 py-2 rounded uppercase tracking-[0.2em] font-bold border ${modal.data.isMemorial ? 'bg-red-900/20 text-rose-300 border-red-500/30' : 'bg-white/5 text-zinc-300 border-white/10'}`}>{r}</span>
                          ))}
                        </div>

                        <div className="prose prose-invert max-w-none text-zinc-400 font-light leading-loose mb-12">
                          {modal.data.isMemorial && (
                            <div className="mb-10 p-8 bg-red-950/10 border border-rose-500/20 rounded-xl">
                              <p className="text-[10px] text-rose-400 font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><Heart size={14} fill="currentColor" /> Legacy Member</p>
                              <p className="text-zinc-200 italic font-display text-lg tracking-tight">{modal.data.note}</p>
                              {modal.data.lifespan && <p className="text-zinc-400 italic text-sm mt-1">{modal.data.lifespan}</p>}
                            </div>
                          )}
                          <p className="whitespace-pre-line text-sm md:text-base">{modal.data.bio}</p>
                        </div>

                        <div className="pt-10 border-t border-zinc-900 mt-auto">
                          <h4 className="text-[10px] tracking-[0.3em] uppercase text-zinc-600 mb-6 font-bold">Connections</h4>
                          <div className="flex flex-wrap gap-4">
                            {modal.data.link && (
                              <a href={modal.data.link} target="_blank" className="flex items-center space-x-3 bg-white px-6 py-3 rounded hover:bg-zinc-300 transition-all text-black">
                                <Globe size={16} />
                                <span className="text-[10px] font-bold uppercase tracking-widest">{modal.data.isMemorial ? 'Obituary' : 'Website'}</span>
                              </a>
                            )}
                            {modal.data.socials && Object.entries(modal.data.socials).map(([key, val]) => (
                                <a key={key} href={`https://${SOCIAL_MAP[key]}.com/${key === 'tt' || key === 'yt' ? '@' : ''}${val}`} target="_blank" className="bg-white/5 border border-white/10 p-3 rounded hover:bg-rose-600 hover:border-rose-600 transition-all text-white">
                                  {key === 'fb' && <Facebook size={18} />}
                                  {key === 'ig' && <Instagram size={18} />}
                                  {key === 'yt' && <Youtube size={18} />}
                                </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (modal.type === 'discography' ? (
                    <div className="p-6 md:p-12 lg:p-20 min-h-full">
                      <div className="relative mb-16 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 justify-between items-end">
                         <div>
                           <h3 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-white uppercase">Directory</h3>
                           <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500">Complete registry of releases.</p>
                         </div>
                         <div className="relative w-full md:w-96">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                            <input 
                              type="text" 
                              placeholder="Search artists or tracks..." 
                              className="w-full bg-zinc-900 border border-zinc-800 p-4 pl-12 rounded text-sm font-medium text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-all shadow-inner"
                              onChange={(e) => setDiscographyFilter(e.target.value)}
                            />
                         </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pb-10 max-w-[1600px] mx-auto">
                        {filteredDiscography.map((group, idx) => {
                          const displayArtist = (group.artist || '').toLowerCase() === 'djmerkone' ? 'djmerkone' : (group.artist || '').toUpperCase();
                          return (
                            <div key={idx} className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-rose-500/50 transition-all">
                              <h4 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-6 pb-4 border-b border-zinc-800">{displayArtist}</h4>
                              <ul className="space-y-4">
                                {group.tracks.map((track, tIdx) => (
                                  <li key={tIdx} className="text-sm text-zinc-400 font-light leading-relaxed flex items-start group/track">
                                    <span className="mr-4 text-[10px] text-zinc-600 font-bold pt-1 group-hover/track:text-rose-500 transition-colors">{(tIdx + 1).toString().padStart(2, '0')}</span>
                                    <span className="group-hover/track:text-white transition-colors">{track}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : <div className="flex items-center justify-center py-32"><div className="text-lg text-zinc-500 font-light">Information coming soon...</div></div>)}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;