import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Music, 
  ExternalLink, 
  Disc, 
  Play, 
  Pause,
  ChevronRight, 
  Instagram, 
  Facebook,
  Youtube,
  Globe, 
  Activity,
  Zap,
  Heart,
  Maximize2,
  X,
  Search,
  Headphones
} from 'lucide-react';

/**
 * DATA CONSTANTS
 */
const ARTISTS_DATA = [
  { name: "djmerkone", role: ["Writer", "Producer", "Engineer", "Artist"], link: "https://djmerkone-site0.vercel.app", img: "dmobio.jpg", accent: "red", bio: "djmerkone // Sonic Architect & Multidisciplinary Engineer\ndjmerkone operates at the high-fidelity intersection of rhythm and precision. With a career spanning over three decades, he has established himself as a definitive architect of the Florida sound—a multidisciplinary engineer whose work bridges the gap between classic foundations and futuristic clarity.\n\nRooted in the high-energy pulse of the 1990s music scene, djmerkone’s evolution is a testament to technical mastery and creative fluidity. His catalog is a diverse registry of credits that move seamlessly between the gritty low-end of experimental hip-hop, the soulful textures of R&B, and the driving, percussive heart of Latin freestyle and house music.\n\nAs a producer and mastering engineer, djmerkone views sound as architecture. Whether he is building a track from the ground up or providing the final clinical polish to a global release, his philosophy remains the same: engineering is the science of emotion. His precision in the studio ensures that every frequency serves a purpose, allowing the artist's vision to cut through the digital noise with absolute authority.\n\nEntering 2026, djmerkone remains a sought-after collaborator for artists seeking a signature sonic identity. His recent works—including extensive production and engineering for Marilyn Torres' The EP and Jase David's Threads—showcase a continued dedication to pushing the boundaries of modern sound.\n\ndjmerkone is more than a technician; he is a curator of the sonic experience. He doesn't just record music—he engineers the future.", socials: { fb: "djmerkone", ig: "djmerkone", tt: "djmerkone", yt: "djmerkone" } },
  { name: "Luis Marte", role: ["Collaborator", "Artist", "Writer", "Producer", "Engineer"], link: "https://luismartemusic.com", img: "luisbio.JPG", accent: "cyan", bio: "Luis Marté has been blessed with a long career in the music industry as an artist, songwriter, engineer and producer. He has opened for Chico Debarge on the Apollo stage, toured with pop sensation 98 Degrees, shared the Disney Channel spotlight with latin heart throb Enrique Iglesias and burned the airwaves of MTV TRL.\n\n“Those were exciting times in my life, here’s a kid from the Bronx, living out his dream on the biggest stage”\n\nFor most of his career as a performing artist, he rode the journey with three other guys. Strange Wayz was the name they went by, four childhood friends, four guys who took a chance on each other to chase a dream and boy did they ever. They signed to power house booking agency ICM: International Creative Management in early 2001 and were catapulted into the scene opening for major pop acts dominating the charts. Strange Wayz was able to fuse their latin roots with a Pop/R&B swag that propelled them to heights only dreamed about in streets of the Bronx.\n\n“They already have the talent, they already have the music…” ~ Enrique Iglesias\n\nStrange Wayz signed a Production Deal shortly after touring and the group took on a different look and feel, sign of the times?! Out with the pop boy band sound and in with the more mature R&B Dance. With a change in sound, so did a change come in the groups members. Luis was the last to remain of the original group and a new group formed around him; ForeKast.\n\n“We were in a different place then, now we were working with some heavyweights, alot was on the line”\n\nThe group was setup for success, working with producer/vocal arranger phenom’ Jim Beanz who they affectionately called “Jimba”, whose credits at the time included P Diddy, Danity Kane, Timberland, Day 26, and Justin Timberlake.\n\nFast forward to present day, Luis now finds himself back on the scene penning pop records, working behind the scenes developing fresh new talent and continuing to release his own music under his label LMM Recordings.\n\nStay tuned for future releases.", socials: { fb: "luismartemusic", ig: "luismarte", tt: "luismarte", yt: "luismarte" } },
  { name: "Marilyn Torres", role: ["Artist", "Writer", "Producer"], link: "https://marilyn-site.vercel.app/", img: "maribio.jpg", accent: "emerald", bio: "Marilyn Torres: The Evolution of a Freestyle Icon\nFrom the sun-drenched streets of Ponce, Puerto Rico, to the rhythmic pulse of New Jersey, Marilyn Torres has spent over two decades carving a unique path through the music industry. Known for her powerhouse vocals and a fearless ability to pivot between genres, she has evolved from a digital pioneer to a cornerstone of the modern Latin Freestyle movement.\n\nThe Foundations (2005–2013)\nMarilyn’s journey began in 2005 with the grounding of \"Callin' For Love.\" This early embrace of digital distribution set the stage for a prolific run that showcased her versatility:\n\nThe Freestyle Era: She solidified her voice with \"No Puedo Amarte\" (2006), \"Why\" (2007), and \"My Cry\" (2008).\n\nGenre Defiance: In 2009, she showcased her range with the reggaeton track \"Yo No Fui\" and dominated the Latin Hip-Hop scene with sharp lyricism.\n\nKey Collaborations: Her career is marked by deep musical partnerships, including work with Apocalypsis and her brother Gerry (Jeriel). She also famously collaborated with L’amour on \"Yesterday\" in 2012—a track that took on new meaning when it was featured again on his posthumous final album as a tribute to their shared artistry.", socials: { fb: "marilyntorresmusic", ig: "marilyntorres", tt: "marilyntorres", yt: "marilyntorres" } },
  { name: "Ricardo Vazquez", role: ["Writer", "Artist"], img: "ricbio.JPG", accent: "orange", bio: "Ricardo Vazquez, widely known in the freestyle and dance music circuits as Ricky Vaz, is a veteran force who emerged from the Rochester, NY scene in the late 90s. His career is characterized by a high-output discography and a relentless dedication to the Latin Freestyle and House music genres.", socials: { ig: "ricardovazquez" } },
  { name: "Dengel", role: ["Writer", "Artist", "Producer"], img: "dengbio.jpg", accent: "rose", bio: "Dengel (William D. Cortes) is a versatile titan of the Latin Urban and Freestyle genres, with a career rooted in the raw energy of the early scene. Transitioning into the late 90s, Dengel joined the powerhouse High Power Records under the moniker 'Nadamas.' alongside his partner.", socials: { ig: "dengelmusic" } },
  { name: "L'amour", role: ["Producer", "Writer", "Artist"], img: "lambio.jpg", accent: "zinc", isMemorial: true, bio: "L'amour (Carlos 'Charlie' Velasquez) was a visionary producer, writer, and artist whose influence spanned the golden eras of freestyle and contemporary electronic music. Operating under various monikers including la-mour, l'amour, Carlos Velasquez, and Charlie Velasquez, he was a key figure in the High Power Records era, where his sharp songwriting and vocal contributions helped define a generation of sound.\n\nHis legacy is rooted in his work with la-mour productions, High Power Records, and his deep creative bond with djmerkone MUSIC. A prolific creator, Charlie was responsible for writing numerous hits for High Power and providing standout vocal performances that combined raw emotion with technical precision. Notable works include his hauntingly beautiful collaboration with Marilyn Torres on 'Yesterday,' a track that remains a cornerstone of his posthumous catalog.\n\nOn December 16, 2019, the music world lost a true sonic architect. Carlos was 45 years old, a beloved resident of Pennsylvania, whose passion for his craft left an indelible mark on the music industry. Though he is no longer in the studio, his frequencies continue to resonate through every project he touched.", note: "Carlos 'Charlie' Velasquez (August 17, 1974 – December 16, 2019)", link: "https://www.dillonfuneralhomeinc.com/obituary/CarlosCharlie-Velasquez", socials: { yt: "djmerkone" } }
];

const OFFICIAL_RELEASES_DATA = [
  { 
    artist: "Marilyn Torres", 
    title: "Don't Let Me (Maxi)*", 
    type: "EP (8 Tracks)",
    art: "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F2439182--B8ED0DAA-5C77-4DA4-B7B3CEDB5EA4BBFB--0--17901464--DONTLETMECOVERFRONT.png?fm=jpg&q=75&w=800&s=dab38261a5741cf0a98ff6ea6c153afb",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_92815263_3939F1655E75E4A6DE8FD52430E93689.mp3",
    apple: "https://music.apple.com/us/album/dont-let-me/1870639799?uo=4",
    spotify: "https://prf.hn/click/camref:1101ljvYv/pubref:albumuuid%3DB8ED0DAA-5C77-4DA4-B7B3CEDB5EA4BBFB/destination:https://open.spotify.com/album/0SJf7QCpc3VD1AaMh6dPRx",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_l6vs4GPW_kLZl21rvPS02g5c8kFhUBSiY&si=R-d8ehWM21kkcBAA",
    amazon: "https://amazon.com/music/player/albums/B0DYM8299K"
  },
  {
    artist: "Marilyn Torres",
    title: "Mi Viejo (Cover)",
    type: "Single",
    art: "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F2439182--B2410C0A-5A37-4B51-8499E7C0F97378EF--0--10600304--1000008540.png?fm=jpg&q=75&w=800&s=743d39c70fe80f17f5cabf99450abeca",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_87699065_8062EA63A1748AD72730E4EA7235A296.mp3",
    apple: "https://music.apple.com/us/album/mi-viejo-single/1857094292?uo=4",
    spotify: "https://open.spotify.com/album/7xU3hnUaJZo9AQ5WfswZJK",
    yt: "https://music.youtube.com/watch?v=b2k2oCnvRwg&si=rY-qi6iBcI7pote8",
    amazon: "https://www.amazon.com/dp/B0G4CMQFMM/ref=sr_1_1?crid=24353U7SZ7UXU&dib=eyJ2IjoiMSJ9.t_daZ-EJfNUNudjONa2vJfRznUgxbeBPooFwgSkTgWDGjHj071QN20LucGBJIEps.sWjx58MaA8NdZdoVdSuoJ7Gy84mVfV6VWRuAGW_Rrc8&dib_tag=se&keywords=marilyn+torres+mi+viejo&qid=1775479769&sprefix=marilyn+torres+mi+viejo%2Caps%2C404&sr=8-1"
  },
  {
    artist: "Marilyn Torres",
    title: "The EP",
    type: "Album (15 Tracks)",
    art: "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F2439182--72B9B244-B77E-488E-8F580A7F85C11985--0--14118676--PSX202510181410442.png?fm=jpg&q=75&w=800&s=61baffb6f3395e6008c830d2b8b4709c",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_85186471_793A0A8058F9B356D76C8852EAB47880.mp3",
    apple: "https://music.apple.com/us/album/the-ep/1850311861?uo=4",
    spotify: "https://open.spotify.com/album/4dqPBGWefdt3d0nbDcg2ER",
    yt: "https://music.youtube.com/browse/MPREb_YgAHRzAwBgS",
    amazon: "https://amazon.com/music/player/albums/B0FYCWF875?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_zxL1u7MFOBPPWdWVzdnU0SMsC"
  },
  {
    artist: "djmerkone",
    title: "latnem flex",
    type: "Single",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D3790EFCC%2DFC55%2D4D7A%2DAB629C00CDE5F508%2D%2D0%2D%2D7805867%2D%2D1000007443%2Ejpg",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_84250563_A39E3B5DE28D40F31CC1DE9575B8E7F5.mp3",
    apple: "https://music.apple.com/us/album/latnem-flex-single/1847568073?uo=4",
    spotify: "https://open.spotify.com/album/2Qrz2t3uSG1D9fU4kcJQLT",
    yt: "https://music.youtube.com/watch?v=QifcZrj65ms",
    amazon: "https://www.amazon.com/dp/B0FWWX7BGV/ref=sr_1_1?crid=4IJI60GTTX72&dib=eyJ2IjoiMSJ9.w_jp02N0AvuXIsm4aGPuFzVYFHVf-PS4wPL0-O_HL0U.6wmWxXMLEvGBG5T-3HslL0wiwQyajDTCtFFobVEu4HI&dib_tag=se&keywords=djmerkone+latnem+flex&qid=1775480676&sprefix=djmerkone+latnem+fle%2Caps%2C173&sr=8-1"
  },
  {
    artist: "djmerkone",
    title: "wrong",
    type: "Single",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D9FF69870%2D6809%2D4A55%2D8E8EC29A948CCEE0%2D%2D0%2D%2D528811%2D%2D1000007464%2Ejpg",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_84250289_69C7A0C90B9450E3E52FB2B8692529A6.mp3",
    apple: "https://music.apple.com/us/album/wrong-single/1847380167?uo=4",
    spotify: "https://open.spotify.com/album/493KDL9dcZhWuSDpiV2a0i",
    yt: "https://music.youtube.com/watch?v=GPz1sHH4xVc&si=fgy5HlS4yj8wewC3",
    amazon: "https://www.amazon.com/dp/B0FWXBTG1M/ref=sr_1_1?crid=3J1GRHC9SMD3K&dib=eyJ2IjoiMSJ9.R0bEaZIsFpoqSmtLYovsh0Pz1Hxp8RiTE_NN2zuTCybGjHj071QN20LucGBJIEps.T_GG1hXeybk_fcHURXMjYkzKJ4pykW_dMNhrHvRclL8&dib_tag=se&keywords=dj+merkone+wrong&qid=1775480704&sprefix=djmerkone+wron%2Caps%2C164&sr=8-1"
  },
  {
    artist: "djmerkone",
    title: "anomaly",
    type: "Single",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DEB27753B%2D4CAC%2D4F9C%2DB937654AA2EAF313%2D%2D0%2D%2D641299%2D%2D1000007457%2Ejpg",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_84249914_E59F1F9981B8013561A80EFA16D2B06F.mp3",
    apple: "https://music.apple.com/us/album/anomaly-single/1847557771?uo=4",
    spotify: "https://open.spotify.com/album/771CqnGm4WE0xtapgq8Bap",
    yt: "https://music.youtube.com/watch?v=vIjRymiWY5Q&si=JSrNIuMfrlDOnqiY",
    amazon: "https://www.amazon.com/dp/B0FWWL38RM/ref=sr_1_2?crid=11WFVXWZT5Q7P&dib=eyJ2IjoiMSJ9.Z3NOgvEKehqr1K_Rxsb-ifQXks6enKK6W4GWGyirGUPGjHj071QN20LucGBJIEps.koQNUtGGpF6dPpFbntt9x-PoyFTUnSW6mYbe9dwjBVU&dib_tag=se&keywords=djmerkone+anomaly&qid=1775480735&sprefix=djmerkone+anomal%2Caps%2C167&sr=8-2"
  },
  {
    artist: "djmerkone",
    title: "chasmitha",
    type: "Single",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D5E2BF402%2D1A7A%2D4E84%2DB46C42D07934069F%2D%2D0%2D%2D1482023%2D%2DPSX202510090930412%2Ejpg",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_83682243_801FC8AE6C36B097E885BA980169335E.mp3",
    apple: "https://music.apple.com/us/album/chasmitha-single/1845767250?uo=4",
    spotify: "https://open.spotify.com/album/5JMUpkuDcShpAqciuwlGh0",
    yt: "https://music.youtube.com/watch?v=6TGec3Dkwoo&si=GND_I4E-0fvKGOYP",
    amazon: "https://www.amazon.com/dp/B0FVRPFVWB/ref=sr_1_1?crid=29G4RSB6UM9ZH&dib=eyJ2IjoiMSJ9.ehfdyksba_LBOsAVyar6hdpmTCG8AytzRreCyDD6rHk.aWli3FAhgxIxdsDKs04BuhZw8KtEREZXyIJ53Kql5Fo&dib_tag=se&keywords=dj+merkone+chasmitha&qid=1775480836&sprefix=djmerkone+chasmitha%2Caps%2C159&sr=8-1"
  },
  {
    artist: "Luis Marte",
    title: "100 MPH",
    type: "EP (8 Tracks)",
    art: "https://i.discogs.com/vYW6zrL9jzXwT2l7WQnk6rpj1qPyc97evBqM1hJdBhk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NTQ1/NDI1LTE2MTk4ODI4/MzctMjMxMC5qcGVn.jpeg",
    preview: "/100mph.wav", // Fixed path
    apple: "https://music.apple.com/us/album/100-mph/1817531010",
    spotify: "https://open.spotify.com/album/5vjuqBXaAbBvw8o9GNUXj5",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_lTGujWshYCYkBPyDKvtNQn_V_VwyF6XdI&si=E5ptXsRTdmvZPAzp",
    amazon: "https://www.amazon.com/100-MPH-Luis-Marte/dp/B0FBCV7QSS"
  },
  {
    artist: "Ricardo Vazquez",
    title: "Take A Chance (EP)",
    type: "EP (7 Tracks)",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DA316E674%2D67A4%2D4277%2DB1C90DC4B836E2A6%2D%2D0%2D%2D411812%2D%2DIMG20240630173037%2Ejpg",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_58209599_F5651FCD-E2B7-4AB3-887638C20D054803.mp3",
    apple: "https://music.apple.com/us/album/take-a-chance/1755680035?uo=4",
    spotify: "https://open.spotify.com/album/5RTzX3vyQsYeAYZBeE1Joh",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_nHaKW4WLrJQt7PtZT8o8IH_sXLd7Z-Z-Y&si=cE3kckJVRJG46UFR",
    amazon: "https://www.amazon.com/dp/B0D8R81FS1/ref=sr_1_1?crid=BO764P1CYDTP&dib=eyJ2IjoiMSJ9.h9Mec4Tzwpkpzqe8zc9JMVrbRgd3F8KvsvZXlm_Be2cLBGvl0TFd5SHR2oMANCfI5YGClsUl8pt7PxoKzH4v-nxfg3YOzyDPj6rKWX_UJiAi-WZLgwFsY-7uPquXcx95.xAyEhrhB3UxiD02870w1W9Xyk2ofD36Ze0cvZegntX8&dib_tag=se&keywords=ricardo+vazquez+take+a+chance&qid=1775480858&sprefix=ricardo+vazquez+take+a+chance%2Caps%2C155&sr=8-1"
  },
  {
    artist: "L'amour",
    title: "Yesterday",
    type: "Album (22 Tracks)",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DE458CCAE%2D1DAC%2D46FC%2DBFDBDFE07BA366D5%2D%2D0%2D%2D3580192%2D%2DLAMOURYesterdayEP%2Ejpg",
    preview: "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F2439182--E458CCAE-1DAC-46FC-BFDBDFE07BA366D5--0--3580192--LAMOURYesterdayEP.png?fm=jpg&q=75&w=800&s=4f6b4d795d2660785ca83bec13616746",
    apple: "https://music.apple.com/us/album/yesterday/1649788357?uo=4",
    spotify: "https://open.spotify.com/album/1R5cKN4duP6TvuzEdano8o",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_lEYQu3LGiegfemSOnFtLT7GBXE7h2by1g&si=MEIp_Jocnunf8Xob",
    amazon: "https://www.amazon.com/music/player/albums/B0BJ52LPY2"
  },
  {
    artist: "Marilyn Torres",
    title: "Torn (The Remixes)",
    type: "EP (5 Tracks)",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D62C5413F%2D2287%2D46CE%2DA99B33EDB7CF9E03%2D%2D0%2D%2D10245288%2D%2DTORNREMIXCOVERfinal2%2Ejpg",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_31148828_7185220A-733F-43A0-90A405FFF7FAB7BC.mp3",
    apple: "https://music.apple.com/us/album/torn-the-remixes-ep/1620407955?uo=4",
    spotify: "https://open.spotify.com/album/7mtpN4xWqbJEoOP23bIVwR",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_l9lKpSagP4TeCc6zIPNEA9-CHvUVTUxw8&si=E2L1s_ldk6nrxWe7",
    amazon: "https://www.amazon.com/dp/B09YJ5Y81S/ref=sr_1_1?crid=3BUS87CYX0CUQ&dib=eyJ2IjoiMSJ9.FTKYY1gziKc5NrLZZsMFJG287Q422woGN2ETSjVaCFfhNkkOB2cOmqWM9izxoFXNdQ0QxcO2WYZumEln6Std5Q.vAdqbhKe8kQV_D-TpEzkm4jJr4ZqoRN55HOJd1ScqWw&dib_tag=se&keywords=marilyn+torres+torn+the+remixes&qid=1775480956&sprefix=marilyn+torres+torn+the+remixe%2Caps%2C160&sr=8-1"
  },
  {
    artist: "Ricardo Vazquez",
    title: "Now That I (The Remixes)",
    type: "EP (8 Tracks)",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D296BE620%2DF7A2%2D4CCD%2DB0E371F8ED2FF454%2D%2D1641042936081%2D%2Dphotostudio1639152467204%2Ejpg",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_28440964_DB88B7C3-4DF8-4605-B941A3D2D1FC791A.mp3",
    apple: "https://music.apple.com/us/album/now-that-i-the-remixes/1603491126?uo=4",
    spotify: "https://open.spotify.com/album/0esuepT28aFseXmGT1WjgH",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_lXV3w1aMPfEOgj9b5Bd5AIZj0cB_lD-tU&si=Jch0kyELIS6IpiUm",
    amazon: "https://www.amazon.com/dp/B09PSGGMVD/ref=sr_1_1?crid=1EHKYJPIDDGWS&dib=eyJ2IjoiMSJ9.8_30N-0AEpZ4cvouxKEq0ny15jHTOSaGNRSksTrGI5zNUhoigwRUTNKNttoAEjrYWHmuGlxBqFl9g601XoaJstS_0OScvjaeBIBB9XCzxlTVtGvytVS1d-ssOGpwv7lIj2ItDvSnKtJR-G3Zce233g.wYv7ibMPBvRKeNGeTYzd-wFCrnTZmpwyWF5be3vpNEw&dib_tag=se&keywords=ricardo+vazquez+now+that+i+the+remixes&qid=1775480976&sprefix=ricardo+vazquez+now+that+i+the+remixe%2Caps%2C147&sr=8-1"
  },
  {
    artist: "Marilyn Torres",
    title: "Torn",
    type: "EP (4 Tracks)",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D984552B0%2D21DF%2D4386%2DABAEAA3B460DA50C%2D%2D1634904430369%2D%2Dtornofficialcover%2Ejpg",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_26676453_2DF87536-F9A4-4733-89D11FC1DB055A4D.mp3",
    apple: "https://music.apple.com/us/album/torn-ep/1591786965?uo=4",
    spotify: "https://open.spotify.com/album/7u3XKR30e7GJtac01DrNLS",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_kdXrksJ5ah2WsNY3f4fdEd0AdZRQw144A&si=xzCbgnyrHdhgYjuJ",
    amazon: "https://www.amazon.com/music/player/albums/B09K6D3YXP"
  },
  {
    artist: "Ricardo Vazquez",
    title: "Now That I",
    type: "Single (4 Tracks)",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DEAE74939%2DEF31%2D4DB1%2D9204770081398879%2D%2D1632316013319%2D%2D20210919215013%2Ejpg",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_25946325_BA355B99-8CDB-4684-B38AC63808F5AE0F.mp3",
    apple: "https://music.apple.com/us/album/now-that-i-ep/1587073738?uo=4",
    spotify: "https://open.spotify.com/album/54hHBuGxls7LejOiKvBIfU",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_nB5r_xic7u6WH2iPUB4UWTZfU2POqUitw&si=tTKFv0x4xz_x8dap",
    amazon: "https://www.amazon.com/dp/B09GX5V1P8/ref=sr_1_2?crid=2Q8VW17BNS3OB&dib=eyJ2IjoiMSJ9.FIipcVjQbl5Iesepl7LSqy2w6L7ek70zrl3yaD759vQknFAgamYnGSTs9fR-6OvhWHmuGlxBqFl9g601XoaJstS_0OScvjaeBIBB9XCzxlTVtGvytVS1d-ssOGpwv7lIj2ItDvSnKtJR-G3Zce233g.wYv7ibMPBvRKeNGeTYzd-wFCrnTZmpwyWF5be3vpNEw&dib_tag=se&keywords=ricardo+vazquez+now+that+i&qid=1775481351&sprefix=ricardo+vazquez+now+that+i%2Caps%2C143&sr=8-2"
  },
  {
    artist: "Marilyn Torres",
    title: "In Time",
    type: "EP (7 Tracks)",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D8C38E505%2D2C1E%2D4C17%2D87E80BACABD9B351%2D%2D1617846997589%2D%2DIMG9924%2Ejpg",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_21788491_2EC9C122-F182-402E-BCC39D9F9241283E.mp3",
    apple: "https://music.apple.com/us/album/in-time/1562225980?uo=4",
    spotify: "https://open.spotify.com/album/75KDuou5fPoDGghTHFq3Gp",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_ljBXrFshzKwe8ULHA7FK-7XYGgsO2HnSc&si=ZP9-Tut6LF1f3FIg",
    amazon: "https://www.amazon.com/music/player/albums/B092395W1G"
  },
  {
    artist: "Marilyn Torres",
    title: "In Exchange For What (The Freestyle Diaries SuperMix)",
    type: "Single",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800-2439182--2FCC2F34-3524-4AB0-8F894253D78FF7CF--1614263327044--IEFWFDCVRBASE.jpg",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_20734716_59E63147-25F3-4046-8BE90C0061128FCE.mp3",
    apple: "https://music.apple.com/us/album/in-exchange-for-what-the-freestyle-diaries-supermix-single/1555761782",
    spotify: "https://open.spotify.com/album/6vTlAAb4dIsmWWPT2OwB1X",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_mnGLjNYVolm29oCX2nRZQ9lD500P5z1GY&si=IM5wuHNx77_-cpIh",
    amazon: "https://www.amazon.com/music/player/albums/B08XN3R93X"
  },
  {
    artist: "Marilyn Torres",
    title: "In Exchange For What (The Freestyle Diaries SuperMix)",
    type: "Single",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DC6E5A464%2D8CB1%2D4A6E%2D9CDC1394A7F0B6BC%2D%2D1633306273724%2D%2D20211003200113%2Ejpg",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_26221657_9A35F096-7301-4238-B727C9363C607AFE.mp2",
    apple: "https://music.apple.com/us/album/in-exchange-for-what-maninho-dj-full-pressure-remix/1588954675?uo=4",
    spotify: "https://open.spotify.com/album/0KJFFYHkb2UWGdWUhFoX9g",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_mPGb6DRmGHACsOXqD9dFwf8Mac4PTVrZM&si=5LzzzQn06sjCEeFU",
    amazon: "https://www.amazon.com/music/player/albums/B09HSRR3M4"
  },
  {
    artist: "Marilyn Torres",
    title: "In Exchange For What (Special Edition)",
    type: "EP (7 Tracks)",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DCED9D066%2D772E%2D4606%2DAC6EFC57BBCF7584%2D%2D1610418885030%2D%2DiefwSECOVER%2Ejpg",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_19445074_2C986B68-8B00-4C7D-85EB7CDD7817B1FB.mp3",
    apple: "https://music.apple.com/us/album/in-exchange-for-what-special-edition/1548992482",
    spotify: "https://open.spotify.com/album/3OOdDt6K5J8AhdcROFHFAC",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_luCwPDPnyPl2eAKms0UhtX1Nua5xnnCRY&si=hfgJmMh9rNZNrpzM",
    amazon: "https://www.amazon.com/music/player/albums/B08T27647P"
  },
  {
    artist: "Ricardo Vazquez",
    title: "Goodbye (Redeux)",
    type: "EP (4 Tracks)",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2DC9192629%2D7C1D%2D4278%2D88DB2CDD9A0C39B5%2D%2Dmod%2D1613780661%2Ejpg",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_19381852_DAAB393E-2A3D-4A41-9BFCA126BF18AA85.mp3",
    apple: "https://music.apple.com/us/album/goodbye-redeux-ep/1548757033",
    spotify: "https://open.spotify.com/album/3Cs7QOjUWTvNkWZ4x6muEB",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_moGN-caeSOA2ikUv3Fn_qtP0sFJZcqsvY&si=g3I6PIqDN4Xtc6qF",
    amazon: "https://amazon.com/music/player/albums/B08SXRJM89?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_GiKfHIYAHSeraRpcDGFZDXsIk"
  },
  {
    artist: "Marilyn Torres",
    title: "In Exchange For What",
    type: "EP (4 Tracks)",
    art: "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2439182%2D%2D37B79A6C%2D33BF%2D4581%2D8751DAF0790ECDEC%2D%2D1603490237328%2D%2D02A86F56006F465B997BF80B01B1D7FE%2Ejpg",
    preview: "https://s3.amazonaws.com/audio.distrokid.com/preview_17243031_EE19879A-665B-42C2-94C3C17F052D77A2.mp3", 
    apple: "https://music.apple.com/us/album/in-exchange-for-what-ep/1537217629?uo=4&app=music&at=1001lry3&ct=dashboard",
    spotify: "https://open.spotify.com/album/4aVb5MA1Rm1NDOqWBOp3KD?si=nKF_PS6OTwuB5DIaUIIJiA",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_khlp8CnB1uN1W89BMyLVjNBhxqojDn98M&si=tiNxRYipQcUi8Ix1",
    amazon: "https://www.amazon.com/-/es/Marilyn-Torres/dp/B08NB94MZS"
  }
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
  { title: "Mixing & Mastering", category: "ENGINEERING", detail: "Analog warmth meets digital precision for Hip-hop, Latin & EDM." },
  { title: "Vocal Production", category: "RECORDING", detail: "Specialized tracking and tuning for R&B, Soul, and Latin artists." },
  { title: "Writing & Arrangement", category: "CREATIVE", detail: "Developing hooks, lyrics, and structures from the ground up." },
  { title: "Demo Services", category: "PROTOTYPE", detail: "Prototyping high-fidelity concepts for professional pitch." }
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

const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01V14.5c.01 1.62-.2 3.29-1.02 4.71-.82 1.44-2.14 2.62-3.72 3.19-1.58.57-3.34.62-4.96.14-1.62-.48-3.05-1.57-3.95-3.01-.9-1.44-1.2-3.21-.86-4.87.34-1.66 1.32-3.15 2.69-4.14 1.37-.99 3.09-1.48 4.77-1.39 1.05.05 2.08.35 3 .86V3.89c-.1-.01-.2-.01-.3-.02-.15-.02-.3-.02-.45-.02-2.54.02-4.85-.92-6.52-2.5-.15-.14-.29-.29-.43-.44.13-.01.26-.02.4-.02h.01Z" />
  </svg>
);

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
    const opacity = Math.max(0.1, 0.6 - (distance / 1500));
    const sx = dx / 50; 
    const sy = dy / 50;
    setShadowStyle({
      textShadow: `${sx * 0.5}px ${sy * 0.5}px 2px rgba(239, 68, 68, ${opacity * 0.2}), ${sx * 1.5}px ${sy * 1.5}px 8px rgba(0,0,0,${opacity * 0.5}), ${sx * 3}px ${sy * 3}px 16px rgba(0,0,0,${opacity * 0.3})`,
      transform: `translate(${sx * -0.05}px, ${sy * -0.05}px)`
    });
  }, [mousePos, text]);

  return (
    <span ref={textRef} style={{ ...style, ...shadowStyle }} className={`${className} transition-all duration-100 inline-block ${isLowercase ? 'lowercase' : ''}`}>
      {text}
    </span>
  );
};

const ArtistCard = ({ artist, openModal }) => {
  return (
    <div onClick={() => openModal('artist', artist)} className="group relative overflow-hidden transition-all duration-700 hover:-translate-y-2 cursor-pointer glass-panel rounded-3xl md:rounded-[2.5rem] p-1 h-[300px] md:h-[400px]">
      <div className="absolute inset-0 rounded-3xl md:rounded-[2.5rem] overflow-hidden">
        <img src={artist.img} alt={artist.name} className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${artist.isMemorial ? 'grayscale-[0.8] opacity-50' : 'grayscale-[0.6] group-hover:grayscale-0 opacity-40 group-hover:opacity-80'}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/80 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-end p-6 md:p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {artist.isMemorial ? (
            <span className="glass-panel text-red-400 px-3 py-1.5 rounded-full mono text-[9px] uppercase tracking-widest flex items-center gap-2">
              <Heart size={12} fill="currentColor" /> Legacy
            </span>
          ) : (
            artist.role.slice(0, 2).map((r, ri) => (
              <span key={ri} className="glass-panel text-zinc-300 px-3 py-1.5 rounded-full mono text-[9px] uppercase tracking-widest">{r}</span>
            ))
          )}
        </div>
        
        <h3 className={`text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-2 ${artist.name === 'djmerkone' ? 'lowercase' : 'uppercase'}`}>
          {artist.name}
        </h3>
        
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
           <span className="mono text-[10px] text-zinc-400 uppercase tracking-widest">View Profile</span>
           <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
             <ChevronRight size={16} />
           </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [splashOpacity, setSplashOpacity] = useState(0);
  const [siteOpacity, setSiteOpacity] = useState(0);

  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [modal, setModal] = useState({ isOpen: false, type: null, data: null });
  const [discographyFilter, setDiscographyFilter] = useState("");
  
  // Carousel State
  const [catalogIndex, setCatalogIndex] = useState(0);
  const [playingPreview, setPlayingPreview] = useState(null);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    // Initial fade in for splash
    const timer = setTimeout(() => setSplashOpacity(1), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsTransitioning(true);
    setSplashOpacity(0);
    setTimeout(() => {
      setHasEntered(true);
      setTimeout(() => setSiteOpacity(1), 50);
    }, 1000);
  };

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

  useEffect(() => {
    handlePreviewStop();
  }, [catalogIndex]);

  // Make sure audio handles ending properly
  useEffect(() => {
    const audioEl = audioRef.current;
    const handleEnded = () => setPlayingPreview(null);
    audioEl.addEventListener('ended', handleEnded);
    return () => audioEl.removeEventListener('ended', handleEnded);
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
    e.stopPropagation(); // prevent card click
    if (!url) return;
    if (playingPreview === url) {
      handlePreviewStop();
    } else {
      handlePreviewStart(url);
    }
  };

  const filteredDiscography = useMemo(() => {
    return DISCOGRAPHY_DATA.filter(item => 
      item.artist.toLowerCase().includes(discographyFilter.toLowerCase()) ||
      item.tracks.some(t => t.toLowerCase().includes(discographyFilter.toLowerCase()))
    );
  }, [discographyFilter]);

  const sortedReleases = useMemo(() => {
    return [...OFFICIAL_RELEASES_DATA].sort((a, b) => (b.title.includes('*') ? 1 : 0) - (a.title.includes('*') ? 1 : 0));
  }, []);

  return (
    <div className="min-h-screen bg-[#050508] text-slate-100 selection:bg-red-500/40 overflow-x-hidden relative">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800;900&family=JetBrains+Mono:wght@300;400;700&display=swap');
          
          body { 
            font-family: 'Outfit', sans-serif; 
            cursor: none; 
            background-color: #050508; 
            color: #f8fafc; 
          }
          * { cursor: none !important; }
          
          /* DISABLE CUSTOM CURSOR ON TOUCH DEVICES */
          @media (pointer: coarse) {
            body, * { cursor: auto !important; }
            .no-touch-cursor { display: none !important; }
          }
          
          .mono { font-family: 'JetBrains Mono', monospace; }
          
          /* Premium Glassmorphism Utility */
          .glass-panel {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(24px) saturate(150%);
            -webkit-backdrop-filter: blur(24px) saturate(150%);
            border: 1px solid rgba(255, 255, 255, 0.06);
          }
          
          .glass-panel-heavy {
            background: rgba(10, 10, 15, 0.6);
            backdrop-filter: blur(40px) saturate(180%);
            -webkit-backdrop-filter: blur(40px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          /* Ambient Orbs */
          .ambient-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(140px);
            opacity: 0.35;
            z-index: 0;
            pointer-events: none;
            mix-blend-mode: screen;
          }
          
          .orb-1 {
            background: #ef4444; /* Red */
            width: 70vw;
            height: 70vw;
            top: -20%;
            left: -10%;
            animation: float-1 25s infinite ease-in-out alternate;
          }
          
          .orb-2 {
            background: #6d28d9; /* Deep Purple */
            width: 60vw;
            height: 60vw;
            bottom: -10%;
            right: -10%;
            animation: float-2 30s infinite ease-in-out alternate;
          }

          @keyframes float-1 {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(10vw, 10vh) scale(1.1); }
          }
          @keyframes float-2 {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(-10vw, -15vh) scale(1.2); }
          }

          .hero-text { 
            font-size: clamp(3.5rem, 12vw, 12rem); 
            line-height: 0.9; 
            font-weight: 900; 
            letter-spacing: -0.03em; 
          }
          
          .text-gradient {
            background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          /* Soft Cursor */
          .cursor-glow { 
            width: 400px; 
            height: 400px; 
            background: radial-gradient(circle, rgba(239, 68, 68, 0.12) 0%, transparent 60%); 
            border-radius: 50%; 
            position: fixed; 
            pointer-events: none; 
            z-index: 5999; 
            filter: blur(30px); 
            transition: transform 0.1s ease-out; 
            mix-blend-mode: screen;
          }
          
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
          
          .text-stroke { -webkit-text-stroke: 1px rgba(255,255,255,0.2); color: transparent; }
          @media (min-width: 768px) { .text-stroke { -webkit-text-stroke: 2px rgba(255,255,255,0.2); } }
        `}
      </style>

      {/* Global Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
         <div className="ambient-orb orb-1" />
         <div className="ambient-orb orb-2" />
         {/* Subtle Noise Texture for texture depth */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay" />
      </div>

      {/* High-Layer Cursor (Hidden on touch via CSS) */}
      <div className="cursor-glow no-touch-cursor" style={{ transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)` }} />
      <div className="fixed w-10 h-10 border border-white/30 rounded-full z-[10000] pointer-events-none backdrop-blur-sm no-touch-cursor items-center justify-center transition-transform duration-75 flex" style={{ left: mousePos.x - 20, top: mousePos.y - 20 }}>
         <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" />
      </div>

      {!hasEntered ? (
        <div className="fixed inset-0 bg-[#050508] z-[2500] flex flex-col items-center justify-center transition-opacity duration-1000 overflow-hidden" style={{ opacity: splashOpacity }}>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
          
          <div className="relative z-10 flex flex-col items-center group text-white text-center px-4">
            <div className="w-16 h-16 md:w-20 md:h-20 glass-panel flex items-center justify-center text-white mb-12 rounded-full shadow-[0_0_60px_rgba(239,68,68,0.3)] animate-pulse">
              <Headphones size={28} md:size={36} strokeWidth={1.5} />
            </div>
            
            <div className="flex flex-col items-center select-none w-full max-w-[95vw] leading-[0.8]">
              <DynamicShadowText 
                text="djmerkone" 
                mousePos={mousePos} 
                isLowercase={true} 
                className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-2 text-gradient"
              />
              
              <div className="mono text-sm md:text-lg tracking-[0.5em] md:tracking-[0.8em] text-red-500 uppercase font-medium">
                Studios
              </div>
            </div>

            <button 
              onClick={handleEnter}
              className={`mt-20 px-10 py-4 glass-panel rounded-full mono text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:bg-white hover:text-black shadow-2xl hover:scale-105 flex items-center gap-4 ${isTransitioning ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
            >
              Enter Session <ChevronRight size={14} />
            </button>
          </div>
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.2)_0%,transparent_60%)] pointer-events-none mix-blend-screen" 
               style={{ 
                 transform: `translate(${mousePos.x - window.innerWidth / 2}px, ${mousePos.y - window.innerHeight / 2}px)`,
               }}
          />
        </div>
      ) : (
        <div className="transition-opacity duration-1000 relative z-10" style={{ opacity: siteOpacity }}>
          
          {/* Floating Glass Navigation */}
          <header className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-5xl z-[70] px-6 flex justify-center pointer-events-none">
            <nav className="glass-panel px-6 md:px-10 py-4 rounded-full flex justify-between items-center w-full shadow-2xl pointer-events-auto">
               <div className="flex flex-col cursor-pointer group" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
                <span className="text-xl md:text-2xl font-black tracking-tight lowercase text-white transition-all group-hover:text-red-400">djmerkone</span>
                <span className="text-zinc-400 text-[8px] mono tracking-[0.4em] uppercase font-bold">MUSIC</span>
              </div>
              <div className="hidden md:flex items-center space-x-10 text-zinc-300">
                {['Production', 'Roster', 'Studio', 'Work'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors relative group">
                    {item}
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300 rounded-full" />
                  </a>
                ))}
              </div>
              <button className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all shadow-lg hover:shadow-red-500/25">
                Inquire
              </button>
            </nav>
          </header>

          <section id="production" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 text-center">
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
              <div className="glass-panel text-red-400 px-6 py-2 rounded-full mono text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-10 flex items-center gap-3 shadow-xl">
                 <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Production Lab
              </div>
              
              <h1 className="hero-text uppercase mb-8">
                <DynamicShadowText text="Sonic" mousePos={mousePos} className="text-white" /> <br /> 
                <DynamicShadowText text="Precision." className="text-stroke" mousePos={mousePos} />
              </h1>
              
              <div className="glass-panel p-2 rounded-full flex items-center gap-6 mt-10 md:mt-16 pr-8 max-w-2xl mx-auto shadow-2xl">
                <div className="flex -space-x-4 pl-2">
                  {['H', 'L', 'E', 'R'].map((l, i) => (
                    <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center text-xs font-black mono text-white shadow-lg">{l}</div>
                  ))}
                </div>
                <p className="text-xs md:text-sm font-medium tracking-[0.1em] text-zinc-300 text-left leading-relaxed">
                  Fusing the raw energy of <span className="text-white font-bold">Hip-hop & Latin</span> with the refined clarity of <span className="text-white font-bold">EDM & Soul</span>.
                </p>
              </div>
            </div>
          </section>

          <section id="roster" className="py-24 md:py-40 px-6 max-w-[1400px] mx-auto relative">
            <div className="flex flex-col lg:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight mb-4 text-white">
                  The <span className="text-red-500">Core</span>
                </h2>
                <p className="mono text-[11px] md:text-xs text-zinc-400 uppercase tracking-widest leading-relaxed">The sonic architects and visionary artists driving the catalog.</p>
              </div>
              <Activity className="text-red-500/50 hidden lg:block animate-pulse" size={48} strokeWidth={1} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {ARTISTS_DATA.map((artist, i) => <ArtistCard key={i} artist={artist} openModal={openModal} mousePos={mousePos} />)}
            </div>
          </section>

          <section id="studio" className="py-24 md:py-40 px-6 max-w-[1400px] mx-auto relative">
            <div className="glass-panel-heavy rounded-[3rem] p-6 md:p-12 lg:p-16 border border-white/10 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-screen" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                 <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <Zap className="text-red-500 mb-12" size={40} strokeWidth={1.5} />
                    <div>
                      <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
                         The Hub.
                      </h3>
                      <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed max-w-md border-l-2 border-red-500/50 pl-6">
                        Engineering multi-genre fidelity since 2019. A clinical environment designed for absolute creative clarity.
                      </p>
                    </div>
                 </div>
                 
                 <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {SERVICES_DATA.map((service, i) => (
                    <div key={i} className="glass-panel p-8 md:p-10 rounded-3xl hover:bg-white/5 transition-all group flex flex-col justify-between border border-white/10">
                      <span className="mono text-[10px] text-zinc-500 group-hover:text-red-400 transition-colors uppercase font-bold tracking-widest mb-8">[{service.category}]</span>
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white mb-3">
                          {service.title}
                        </h4>
                        <p className="text-zinc-400 text-sm font-light leading-relaxed">{service.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="py-24 md:py-40 overflow-hidden flex flex-col items-center relative">
            
            <div className="relative text-center mb-12 flex flex-col items-center w-full px-6">
               <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-4 relative z-10 text-white">
                 The <span className="text-gradient">Catalog</span>
               </h2>
               <p className="mono text-[11px] md:text-xs text-zinc-400 uppercase tracking-widest leading-loose max-w-sm relative z-10">Featured Clinical Sound. Tap to view & play.</p>
            </div>

            {/* Coverflow Carousel - Upgraded mobile interaction & layout */}
            <div className="relative w-full max-w-[100vw] h-[360px] sm:h-[450px] md:h-[650px] flex items-center justify-center [perspective:2000px] mt-4 md:mt-8 mb-10">
              {sortedReleases.map((release, index) => {
                const offset = index - catalogIndex;
                const absOffset = Math.abs(offset);
                const isCenter = offset === 0;

                if (absOffset > 4) return null;

                const translateX = `calc(-50% + ${offset * 26}vmin)`;
                const rotateY = isCenter ? 0 : (offset > 0 ? -45 : 45);
                const scale = isCenter ? 1 : Math.max(0.85 - (absOffset * 0.15), 0.5);
                const zIndex = 50 - absOffset;
                const opacity = absOffset > 2 ? 0 : 1 - (absOffset * 0.2);

                return (
                  <div
                    key={index}
                    onClick={() => !isCenter && setCatalogIndex(index)}
                    onMouseEnter={() => isCenter && window.matchMedia("(pointer: fine)").matches && handlePreviewStart(release.preview)}
                    onMouseLeave={() => isCenter && window.matchMedia("(pointer: fine)").matches && handlePreviewStop()}
                    className={`absolute top-1/2 -translate-y-1/2 w-[310px] sm:w-[400px] md:w-[550px] aspect-square rounded-3xl md:rounded-[3rem] overflow-hidden transition-all duration-700 ease-out cursor-pointer glass-panel border ${isCenter && release.title.includes('*') ? 'border-white/30 shadow-[0_40px_80px_rgba(0,0,0,0.8),0_0_80px_rgba(239,68,68,0.2)]' : 'border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.5)]'}`}
                    style={{
                      left: '50%',
                      transform: `translateX(${translateX}) scale(${scale}) rotateY(${rotateY}deg)`,
                      zIndex,
                      opacity,
                      pointerEvents: opacity > 0 ? 'auto' : 'none',
                    }}
                  >
                    <img src={release.art} alt={release.title} className={`w-full h-full object-cover transition-all duration-700 ${!isCenter && 'grayscale-[0.5] opacity-60'}`} />

                    {/* Premium Hover Overlay - Always visible on center items in mobile, hoverable on desktop */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#050508]/95 via-[#050508]/80 to-transparent p-6 md:p-12 flex flex-col justify-end items-center text-center transition-opacity duration-500 ${isCenter ? 'opacity-100 lg:opacity-0 lg:hover:opacity-100' : 'opacity-0 pointer-events-none'}`}>
                      
                      {/* Interactive Play Button (Essential for mobile touch interactions) */}
                      <button 
                         onClick={(e) => togglePreviewAudio(release.preview, e)}
                         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 glass-panel rounded-full flex items-center justify-center animate-pulse text-white shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform hover:bg-white hover:text-black z-20"
                      >
                         {playingPreview === release.preview ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
                      </button>

                      <div className="w-full translate-y-0 lg:translate-y-4 lg:hover:translate-y-0 transition-transform duration-500">
                        <div className="flex flex-col items-center gap-1 md:gap-2 mb-2 w-full">
                          <h5 className="text-xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                            {release.title.replace('*', '')}
                          </h5>
                          {release.title.includes('*') && (
                            <span className="mono text-[8px] md:text-[9px] bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-full font-bold uppercase tracking-widest mt-1">Featured Release</span>
                          )}
                        </div>

                        <div className="flex items-center space-x-3 mt-2 text-zinc-300">
                          <p className="text-xs md:text-base uppercase font-bold">{release.artist}</p>
                          <span className="w-1 h-1 bg-white/50 rounded-full" />
                          <p className="mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium">{release.type}</p>
                        </div>

                        <div className="mt-6 md:mt-8 pt-4 border-t border-white/10 w-full relative z-30">
                          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                            {release.spotify && <a href={release.spotify} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="glass-panel hover:bg-white hover:text-black px-4 md:px-6 py-2.5 md:py-3 rounded-full text-[8px] md:text-[9px] font-bold tracking-widest transition-all">SPOTIFY</a>}
                            {release.apple && <a href={release.apple} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="glass-panel hover:bg-white hover:text-black px-4 md:px-6 py-2.5 md:py-3 rounded-full text-[8px] md:text-[9px] font-bold tracking-widest transition-all">APPLE</a>}
                            {release.yt && <a href={release.yt} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="glass-panel hover:bg-white hover:text-black px-4 md:px-6 py-2.5 md:py-3 rounded-full text-[8px] md:text-[9px] font-bold tracking-widest transition-all">YOUTUBE</a>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center space-x-4 md:space-x-6 mt-4 relative z-20">
              <button
                onClick={() => setCatalogIndex(prev => Math.max(0, prev - 1))}
                disabled={catalogIndex === 0}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full glass-panel flex items-center justify-center hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
              >
                <ChevronRight className="rotate-180" size={20} />
              </button>

              <button
                onClick={() => openModal('discography')}
                className="flex items-center space-x-3 px-6 md:px-8 py-3 md:py-4 rounded-full glass-panel hover:bg-white/10 transition-all group"
              >
                <Disc className="text-red-400 group-hover:text-white animate-spin-slow" size={18} />
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white">Full Archives</span>
              </button>

              <button
                onClick={() => setCatalogIndex(prev => Math.min(sortedReleases.length - 1, prev + 1))}
                disabled={catalogIndex === sortedReleases.length - 1}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full glass-panel flex items-center justify-center hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
          </section>

          <footer className="py-24 md:py-32 px-6 max-w-[1400px] mx-auto relative border-t border-white/5 mt-20">
            <div className="flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
              <div className="max-w-sm">
                <div className="flex flex-col mb-6 cursor-pointer group" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
                  <span className="text-3xl md:text-4xl font-black tracking-tight lowercase text-white transition-all group-hover:text-red-400">djmerkone</span>
                  <span className="text-zinc-500 text-[9px] mono tracking-[0.4em] mt-1 font-bold uppercase">MUSIC</span>
                </div>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">High-fidelity engineering and multigenre production from the heart of Florida. Established 2019.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-16 md:gap-24">
                <div>
                  <h6 className="mono text-[10px] text-zinc-500 tracking-[0.3em] uppercase mb-6 font-bold">Network</h6>
                  <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-zinc-300">
                    <li><a href="https://luismartemusic.com" target="_blank" className="hover:text-white transition-colors flex items-center">Luis Marte <ExternalLink size={12} className="ml-2 text-zinc-600" /></a></li>
                    <li><a href="https://marilyn-site.vercel.app/" target="_blank" className="hover:text-white transition-colors flex items-center">Marilyn Torres <ExternalLink size={12} className="ml-2 text-zinc-600" /></a></li>
                    <li><a href="https://djmerkone-site0.vercel.app" target="_blank" className="hover:text-white transition-colors flex items-center lowercase font-black text-white">djmerkone <ExternalLink size={12} className="ml-2 text-zinc-600" /></a></li>
                  </ul>
                </div>
                <div>
                  <h6 className="mono text-[10px] text-zinc-500 tracking-[0.3em] uppercase mb-6 font-bold">Social</h6>
                  <div className="flex gap-4 text-zinc-400">
                    <a href="https://facebook.com/djmerkone" target="_blank" className="hover:text-white glass-panel p-3 rounded-full transition-all hover:scale-110"><Facebook size={16} /></a>
                    <a href="https://instagram.com/djmerkone" target="_blank" className="hover:text-white glass-panel p-3 rounded-full transition-all hover:scale-110"><Instagram size={16} /></a>
                    <a href="https://youtube.com/@djmerkone" target="_blank" className="hover:text-white glass-panel p-3 rounded-full transition-all hover:scale-110"><Youtube size={16} /></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-500 mono text-[10px] uppercase tracking-widest">
              <p>© {new Date().getFullYear()} djmerkone MUSIC. All Rights Reserved.</p>
              <div className="flex space-x-8 mt-6 md:mt-0 pointer-events-auto">
                 <button onClick={() => openModal('privacy')} className="hover:text-white transition-colors">Privacy</button>
                 <button onClick={() => openModal('terms')} className="hover:text-white transition-colors">Terms</button>
              </div>
            </div>
          </footer>

          {/* Premium Glass Modal */}
          {modal.isOpen && (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8 transition-all duration-500">
              <div className="absolute inset-0 bg-[#050508]/90 backdrop-blur-xl" onClick={closeModal} />
              
              <div className={`relative w-full ${modal.type === 'discography' ? 'max-w-6xl h-[90vh]' : 'max-w-5xl max-h-[90vh]'} glass-panel-heavy rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in-95 duration-300`}>
                
                <div className="p-4 md:p-8 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-black shadow-lg"><Music size={14} /></div>
                    <div className="mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-bold">
                      djmerkone // {modal.type === 'artist' ? (modal.data.isMemorial ? 'Memorial' : 'Profile') : (modal.type === 'discography' ? 'Archives' : 'Info')}
                    </div>
                  </div>
                  <button onClick={closeModal} className="w-8 h-8 md:w-10 md:h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white hover:text-black transition-all text-white"><X size={16} /></button>
                </div>
                
                <div className="flex-grow overflow-y-auto custom-scrollbar relative">
                  {modal.type === 'artist' ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start p-4 md:p-12">
                      <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                        <img src={modal.data.img} alt={modal.data.name} className={`w-full h-full object-cover ${modal.data.isMemorial && 'sepia-[0.3] grayscale-[0.5]'}`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 md:p-8 flex flex-col justify-end">
                          <h3 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white w-full break-words hyphens-auto leading-none ${modal.data.name === 'djmerkone' && 'lowercase'}`}>{modal.data.name}</h3>
                          <div className="flex flex-wrap gap-2 mt-4 opacity-90">
                            {modal.data.role.map((r, i) => <span key={i} className={`mono text-[8px] md:text-[9px] px-3 py-1.5 rounded-full uppercase tracking-widest font-bold ${modal.data.isMemorial ? 'bg-red-900/80 text-white backdrop-blur-md' : 'bg-white text-black'}`}>{r}</span>)}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-8 md:space-y-10 pb-10 lg:pb-0">
                        <div className="prose prose-invert max-w-none px-2 md:px-0">
                          {modal.data.isMemorial && (
                            <div className="mb-10 p-6 glass-panel border-l-4 border-l-red-500 rounded-r-2xl">
                              <p className="mono text-[10px] text-red-400 font-bold uppercase tracking-widest mb-3 flex items-center gap-2"><Heart size={14} fill="currentColor" /> Legacy</p>
                              <p className="text-zinc-200 font-light text-lg md:text-xl italic leading-relaxed">{modal.data.note}</p>
                            </div>
                          )}
                          <p className="text-sm md:text-base leading-loose text-zinc-300 font-light whitespace-pre-line">{modal.data.bio}</p>
                        </div>
                        <div className="pt-8 border-t border-white/10 px-2 md:px-0">
                          <h4 className="mono text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6 font-bold">Connections</h4>
                          <div className="flex flex-wrap gap-4">
                            {modal.data.link && (
                              <a href={modal.data.link} target="_blank" className="flex items-center space-x-3 group glass-panel px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all">
                                <Globe size={14} />
                                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest">{modal.data.isMemorial ? 'Obituary' : 'Website'}</span>
                              </a>
                            )}
                            {modal.data.socials && Object.entries(modal.data.socials).map(([key, val]) => (
                                <a key={key} href={`https://${SOCIAL_MAP[key]}.com/${key === 'tt' || key === 'yt' ? '@' : ''}${val}`} target="_blank" className="glass-panel p-3 md:p-3.5 rounded-full hover:bg-white hover:text-black transition-all">
                                  {key === 'fb' && <Facebook size={16} />}
                                  {key === 'ig' && <Instagram size={16} />}
                                  {key === 'yt' && <Youtube size={16} />}
                                </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (modal.type === 'discography' ? (
                    <div className="p-6 md:p-12 lg:p-16">
                      <div className="relative mb-12 md:mb-16 text-center max-w-3xl mx-auto">
                         <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tight mb-4 text-white">The Archives</h3>
                         <p className="mono text-[10px] md:text-[11px] text-zinc-400 uppercase tracking-widest mb-10 md:mb-12 px-4">Complete registry of releases, remixes, and studio collaborations.</p>
                         <div className="relative mx-4 md:mx-0">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
                            <input 
                              type="text" 
                              placeholder="Search by Artist or Track..." 
                              className="w-full glass-panel p-5 md:p-6 pl-14 md:pl-16 rounded-full text-sm font-medium text-white placeholder-zinc-500 focus:outline-none focus:bg-white/10 transition-all shadow-xl"
                              onChange={(e) => setDiscographyFilter(e.target.value)}
                            />
                         </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-10">
                        {filteredDiscography.map((group, idx) => (
                          <div key={idx} className="glass-panel p-6 md:p-8 rounded-3xl hover:bg-white/5 transition-all group">
                            <h4 className="text-lg md:text-xl font-black text-white uppercase tracking-tight mb-6 pb-4 border-b border-white/10 group-hover:border-red-500/50 transition-colors">{(group.artist || '').toUpperCase()}</h4>
                            <ul className="space-y-4">
                              {group.tracks.map((track, tIdx) => (
                                <li key={tIdx} className="text-[13px] md:text-sm text-zinc-400 font-light leading-relaxed hover:text-white transition-colors flex items-start">
                                  <span className="mr-4 mono text-[10px] text-red-500/80 font-bold pt-1">{(tIdx + 1).toString().padStart(2, '0')}</span>
                                  {track}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : <div className="flex items-center justify-center py-32"><div className="text-lg text-zinc-400 font-light">Information coming soon...</div></div>)}
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