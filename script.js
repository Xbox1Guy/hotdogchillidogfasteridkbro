/**
 * Navigates to the video player for a given season.
 * @param {number} seasonNumber The season number to play.
 */
function goToSeason(seasonNumber) {
  window.location.href = `video.html?season=${encodeURIComponent(seasonNumber)}`;
}

// 🔹 HELPER: Converts links to DIRECT VIEW (Not Embed) to bypass quota
function formatDriveLink(link) {
  if (!link) return "";
  
  // If it's an embed link (/preview), switch it to /view
  if (link.includes("/preview")) {
    return link.replace("/preview", "/view");
  }
  
  // If it's an ID link (open?id=), switch to /view
  if (link.includes("open?id=")) {
    const id = link.split("id=")[1].split("&")[0];
    return `https://drive.google.com/file/d/${id}/view`;
  }
  
  return link;
}

// 🔹 HELPER: Launch Video Logic
function playOrOpen(link) {
    const videoPlayer = document.getElementById("video-frame");
    const formattedLink = formatDriveLink(link);

    // Check if it is a Google Drive link
    if (formattedLink.includes("drive.google.com")) {
        // 🛑 EMERGENCY FIX: Open in new tab to bypass embed limits
        window.open(formattedLink, '_blank');
    } else {
        // If it's another host (like Vimeo/ScreenPal), play in iframe as normal
        videoPlayer.src = formattedLink;
    }
}

// 🔹 HELPER: Switch Server Function
function switchServer(serverIndex) {
  const serverBtns = document.querySelectorAll("#server-controls .btn");

  // Update active button style
  serverBtns.forEach((btn, idx) => {
      if (idx === serverIndex) btn.classList.add("primary");
      else btn.classList.remove("primary");
  });

  // Get current episode data from the global variable
  if (window.currentEpisodeData && window.currentEpisodeData.urls) {
     if (window.currentEpisodeData.urls[serverIndex]) {
         console.log(`Switching to Server ${serverIndex + 1}`);
         playOrOpen(window.currentEpisodeData.urls[serverIndex]);
     } else {
         alert("This server is not available for this episode.");
     }
  }
}

// SEASON DATA STUFF
const seasonData = {
  '1': {
    title: "Season 1",
    episodes: [
      {
        title: "Pilot: That's Entertainment",
        description: "Charlie, the princess of Hell, pursues her seemingly impossible goal of rehabilitating demons to peacefully reduce overpopulation in her kingdom.",
        thumbnail: "https://files.catbox.moe/rliimo.jpg",
        subtitles: "subtitles/Hazbin-Hotel-s1-e0_1080p.en.vtt",
        urls: [
            "https://drive.google.com/open?id=1ilvrAfnoAjRGERsMWHAp9wyQszQne7oJ&usp=drive_copy",
            "https://drive.google.com/open?id=1JGsl60v6JFWIZbN8F5n8Uc4r-TcqMbXH&usp=drive_copy",
            "https://drive.google.com/open?id=1o6uRxz73ac-HmWc-SBxaZjd_Il_g4zUn&usp=drive_copy",
            "https://drive.google.com/open?id=16uVr6yguTvAJJJo0WEbUa2x7L-MVdszN&usp=drive_copy"
        ]
      },
      {
        title: "Episode 1: Overture",
        description: "Charlie pitches her plan to rehabilitate sinners to Heaven. Vaggie creates a commercial to promote the hotel, with disastrous results.",
        thumbnail: "https://files.catbox.moe/vw6i1j.jpg",
        subtitles: "subtitles/Hazbin-Hotel-s1-e1_1080p.en.vtt",
        urls: [
            "https://drive.google.com/open?id=1MLQhjzRAJ06H8Rzohv6yVX-EaZWylhRb&usp=drive_copy",
            "https://drive.google.com/open?id=1Li1Z-aOpQYoX10LTQlQz_0ijzAYjiu4Q&usp=drive_copy",
            "https://drive.google.com/open?id=1_rLpymOBWjLh_JtyzAFQDNZWq_ceb7Dm&usp=drive_copy",
            "https://drive.google.com/open?id=18PPOyjo46b8kpzpOG6gg-6MobSqsjmpQ&usp=drive_copy"
        ]
      },
      {
        title: "Episode 2: Radio Killed the Video Star",
        description: "The Radio Demon, Alastor, arrives and offers to help Charlie run the hotel, but his intentions are questionable. A new threat emerges.",
        thumbnail: "https://files.catbox.moe/ydyssy.jpg",
        subtitles: "subtitles/Hazbin-Hotel-s1-e2_1080p.en.vtt",
        urls: [
            "https://drive.google.com/open?id=1njVbYdkXRqpY3J2c82t1wqYsX_RxPJ_3&usp=drive_copy",
            "https://drive.google.com/open?id=1V9EzhYWBB1TL8w9NJhCQ9sCKNWpzecAA&usp=drive_copy",
            "https://drive.google.com/open?id=1rMz56Q0sWTUzBncIqaoqknAfIPLC6WAD&usp=drive_copy",
            "https://drive.google.com/open?id=1SVgnUVP5pXwvH42LxIgtPnM3zEmS03bS&usp=drive_copy"
        ]
      },
      {
        title: "Episode 3: Scrambled Eggs",
        description: "While the hotel residents try to make a commercial, the bumbling inventor Sir Pentious attacks, seeking to challenge Alastor.",
        thumbnail: "https://files.catbox.moe/yk0p2b.jpg",
        subtitles: "subtitles/Hazbin-Hotel-s1-e3_1080p.en.vtt",
        urls: [
            "https://drive.google.com/open?id=1Yq-K9LWK9ZSqyqBT0qWKClm6cKJsuZbl&usp=drive_copy",
            "https://drive.google.com/open?id=1gW-GQ2GLw4ntUkcfNgCtd6dCm-y2IjOy&usp=drive_copy",
            "https://drive.google.com/open?id=10QoVRGWkptZCp6y3t98EwopDAaJKrONA&usp=drive_copy",
            "https://drive.google.com/open?id=1Ab2LBfcidGGyqgG6z56qT24KEpUuFFj-&usp=drive_copy"
        ]
      },
      {
        title: "Episode 4: Masquerade",
        description: "Angel Dust's abusive boss, Valentino, calls him to work. Charlie's attempt to intervene reveals the darker side of Angel's life.",
        thumbnail: "https://files.catbox.moe/j3x9gr.png",
        subtitles: "subtitles/Hazbin-Hotel-s1-e4_1080p.en.vtt",
        urls: [
            "https://drive.google.com/open?id=1N7lOWCyopldp2FPDaYs3tpCPbper7C4k&usp=drive_copy",
            "https://drive.google.com/open?id=1LaDY-MVFiCuy4gSFmIL9AHNyzCLeZxWj&usp=drive_copy",
            "https://drive.google.com/open?id=1y-Ey0VjAjxe5PyCuVTQZdUf5D7Nulw4b&usp=drive_copy",
            "https://drive.google.com/open?id=1UjeU75HZtCvIeLy9Lpqnmqyujm7f7Jzh&usp=drive_copy"
        ]
      },
      {
        title: "Episode 5: Dad Beat Dad",
        description: "Lucifer, the King of Hell and Charlie's father, visits the hotel and clashes with Alastor over his skepticism of Charlie's dream.",
        thumbnail: "https://files.catbox.moe/jr7h23.png",
        subtitles: "subtitles/Hazbin-Hotel-s1-e5_1080p.en.vtt",
        urls: [
            "https://drive.google.com/open?id=1scnAOICN_QWQxZih3C139mI_3ok6_QpQ&usp=drive_copy",
            "https://drive.google.com/open?id=1_94_SoCTKfyY-16d0WcR4TGhTTBqf2V8&usp=drive_copy",
            "https://drive.google.com/open?id=1tbsQpZwnblajdpCB2mW4Ey2gs30XjQ9O&usp=drive_copy",
            "https://drive.google.com/open?id=1CqLEUzylRjQ2jTaUqlmC1z9uE74Stwsy&usp=drive_copy"
        ]
      },
      {
        title: "Episode 6: Welcome to Heaven",
        description: "Charlie and Vaggie travel to Heaven to plead their case directly to the angels, but the meeting with Adam does not go as planned.",
        thumbnail: "https://files.catbox.moe/bumhsm.jpg",
        subtitles: "subtitles/Hazbin-Hotel-s1-e6_1080p.en.vtt",
        urls: [
            "https://drive.google.com/open?id=1XZRub1F8M7FC8D_iSaZETes62ykMA1fp&usp=drive_copy",
            "https://drive.google.com/open?id=1MnLOC5Cxg97-_0yt5bRc4d6Psnch9IMn&usp=drive_copy",
            "https://drive.google.com/open?id=18C9r-vpCgKtCKa8YBg4Pqwn7owyI9bFj&usp=drive_copy",
            "https://drive.google.com/open?id=1E02Z-F_Ayzu6YeoQTkezfq8rbEd5cpB1&usp=drive_copy"
        ]
      },
      {
        title: "Episode 7: Hello Rosie",
        description: "With extermination imminent, Charlie seeks help from the cannibals of Hell to build an army and defend the hotel.",
        thumbnail: "https://files.catbox.moe/8mldzz.png",
        subtitles: "subtitles/Hazbin-Hotel-s1-e7_1080p.en.vtt",
        urls: [
            "https://drive.google.com/open?id=1L8XdL0-kc4PdC8mC-SHg7-_iknG85Sgb&usp=drive_copy",
            "https://drive.google.com/open?id=1tbwADWT_zFaIoM_5IbeG_fzg081DDKBm&usp=drive_copy",
            "https://drive.google.com/open?id=1cb3rG1F6Ho0DhCuBkGo23KtMLnDwRJ10&usp=drive_copy",
            "https://drive.google.com/open?id=1GktTNCbCcjsCCKlct-M65Yu6yAPPpiob&usp=drive_copy"
        ]
      },
      {
        title: "Episode 8: The Show Must Go On",
        description: "Adam and his exorcist army descend on the hotel. The residents and their allies must fight for their lives and for the future of redemption.",
        thumbnail: "https://files.catbox.moe/snp32b.png",
        subtitles: "subtitles/Hazbin-Hotel-s1-e8_1080p.en.vtt",
        urls: [
            "https://drive.google.com/open?id=10lrE3A2ea-h7-hJSfOpqm1PNnBONWv5h&usp=drive_copy",
            "https://drive.google.com/open?id=1EsJNYs2IsSGHpPzXnuqUjp-UZfoOpRoR&usp=drive_copy",
            "https://drive.google.com/open?id=1HK0oxXvJQSbAYNfp9EQHw21GctANvTqG&usp=drive_copy",
            "https://drive.google.com/open?id=11CGRb8HyzsgXYH-lOTiyqznCVSKzl56V&usp=drive_copy"
        ]
      }
    ]
  },
  '2': {
    title: "Season 2",
    episodes: [
      {
        title: "Episode 1: New Pentious",
        description: "Charlie's victory against Heaven has sinners flocking to the newly rebuilt Hazbin Hotel. But can she make sure they're all there for the right reasons?",
        thumbnail: "https://files.catbox.moe/3dokf8.png",
        urls: [
            "https://drive.google.com/open?id=1IYMIkqvM8xLzB3DzDRhibOu3IcPkbFPu&usp=drive_copy", // S1
            "https://drive.google.com/open?id=16xvgj-1eK0KET_rYO7331cWro1Moetjd&usp=drive_copy", // S2
            "https://drive.google.com/open?id=123BYaiX7h4a1y-wUfLhoeARb1i6h7PtZ&usp=drive_copy", // S3
            "https://drive.google.com/open?id=1He-LFgbxyp6Kr36GGVj04WICodLEx06p&usp=drive_copy"  // S4
        ]
      },
      {
        title: "Episode 2: Storyteller",
        description: "Sir Pentious' redemption creates a stir in Heaven, but not everyone is happy to see a sinner redeemed.",
        thumbnail: "https://files.catbox.moe/mezpeg.png",
        urls: [
            "https://drive.google.com/open?id=1rpiEF3V6ct5Z43l4jIVFh1Ootk7Kfkt3&usp=drive_copy",
            "https://drive.google.com/open?id=1NC84cJOgau6KzniWelfjd6V8Bbxglvgg&usp=drive_copy",
            "https://drive.google.com/open?id=15bpdV9YvCtFytjxnF3vE-WHCmrUbkP-a&usp=drive_copy",
            "https://drive.google.com/open?id=1WOaX6DymJXOIcxUbuzRe7MoFwmxPFp2M&usp=drive_copy"
        ]
      },
      {
        title: "Episode 3: Hazbin Hotel: Behind Closed Doors",
        description: "Charlie invites Voxtek to do a piece on the Hotel and Pentious' redemption. But she will need hard proof to convince her skeptical guests.",
        thumbnail: "https://files.catbox.moe/svs231.png",
        urls: [
            "https://drive.google.com/open?id=1R2hgkkYw1SFgFDT_q3BsuMZT41bbrWkj&usp=drive_copy",
            "https://drive.google.com/open?id=1ZEwy3cTd1YFZtfI_7PAilhdolOttIjHc&usp=drive_copy",
            "https://drive.google.com/open?id=1MQnJDw9ap9PHeucmZEpZiLunojVkUMc0&usp=drive_copy",
            "https://drive.google.com/open?id=1BvRoxZWk3sHDzX3goOHHLGGHV5PJCFtA&usp=drive_copy"
        ]
      },
      {
        title: "Episode 4: It's A Deal",
        description: "Charlie tries to do damage control by going live on television! Meanwhile, Alastor reaches his final straw.",
        thumbnail: "https://files.catbox.moe/hb91sh.png",
        urls: [
            "https://drive.google.com/open?id=1_-iv_ovxkq8mwgPj_360GmaWeTYZ6-3x&usp=drive_copy",
            "https://drive.google.com/open?id=1cCusJ2D6PDzkYFVL6U2BXthebSvJrtwP&usp=drive_copy",
            "https://drive.google.com/open?id=1ZeFcRpk4yX0BCursjX9zrun0VpOxReG8&usp=drive_copy",
            "https://drive.google.com/open?id=1GEvyuMryMj06uwYbKXIgT3dw4ileAEs5&usp=drive_copy"
        ]
      },
      {
        title: "Episode 5: Silenced",
        description: "Vox hosts a rally for his increasing supporters. Meanwhile, Charlie looks to Heaven for help.",
        thumbnail: "https://files.catbox.moe/7cwonn.png",
        urls: [
            "https://drive.google.com/open?id=1BBmUDVz_gcvn50PgICSp_qN5ao82vG8O&usp=drive_copy",
            "https://drive.google.com/open?id=1XH6WVc_J-GEV65YMZBcfYTUR7soBiS8E&usp=drive_copy",
            "https://drive.google.com/open?id=1DGMeCmZrbzbVVpI5f7wvOfYPcZMcUM1Z&usp=drive_copy",
            "https://drive.google.com/open?id=1sbDArHFm_01bIhqF4q3wk4M0fs2Yl903&usp=drive_copy"
        ]
      },
      {
        title: "Episode 6: Scream Rain",
        description: "Vox leads the overlords toward war with Heaven. Tensions run high at the hotel and Husk returns to his old ways.",
        thumbnail: "https://files.catbox.moe/14u3zn.png",
        urls: [
            "https://drive.google.com/open?id=1gqhlNxD0d0Mrx1VifmpYoZzBZoxGrMD5&usp=drive_copy",
            "https://drive.google.com/open?id=13w-N7pP0cLApGymIgJ-P52V8_OVjrMVN&usp=drive_copy",
            "https://drive.google.com/open?id=1SXQt7YSN7CgQAeEtWPwYoTHBEvEoeUz1&usp=drive_copy",
            "https://drive.google.com/open?id=1xTALC_ftStkLhdrp45chARhJWI_5WdmF&usp=drive_copy"
        ]
      },
      {
        title: "Episode 7: Weapon of Mass Distraction",
        description: "Vox unveils his secret weapon, giving Heaven their final warning.",
        thumbnail: "https://files.catbox.moe/23oy8v.png",
        urls: [
            "https://drive.google.com/file/d/1SmAtc4P4RRL_QYHPc3rJR1lFdNxlQpKv/preview"
        ]
      },
      {
        title: "Episode 8: Curtain Call",
        description: "Vox (and the Vees, I guess) is hosting a party so everyone can watch him take over Heaven - and you're all invited!",
        thumbnail: "https://files.catbox.moe/xrr5jv.png",
        urls: [
            "https://drive.google.com/file/d/17Hr7oTtkbhJhJcIIYTU54hoxoo2rfDNE/preview"
        ]
      }
    ]
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const videoPlayer = document.getElementById("video-frame");
  const title = document.getElementById("season-title");
  const episodeList = document.getElementById("episode-list");
  const nowPlaying = document.getElementById("now-playing-indicator");
  const serverControls = document.getElementById("server-controls"); 

  if (videoPlayer && title && episodeList) {
    const params = new URLSearchParams(window.location.search);
    const season = params.get("season");
    const currentSeason = seasonData[season];

    const updateNowPlaying = (episodeTitle) => {
      if (nowPlaying) {
        nowPlaying.classList.remove('fade-in');
        void nowPlaying.offsetWidth;
        nowPlaying.textContent = `Now playing: ${episodeTitle}`;
        nowPlaying.classList.add('fade-in');
      }
    };

    // Logic for Season 2 Layout (Check if any episode has url OR urls)
    const s2HasPlayable = currentSeason && season === '2' && currentSeason.episodes.some(ep => ep.url || ep.urls);

    if (season === '2' && !s2HasPlayable) {
      document.querySelector('.video-main').style.display = 'none';
      document.querySelector('.player-page').classList.add('centered-layout');
      document.querySelector('.episode-sidebar h3').textContent = 'Season 2 Release Schedule';
    }

    if (currentSeason && currentSeason.episodes.length > 0) {
      if (season !== '2') title.textContent = currentSeason.title;
      else if (s2HasPlayable) title.textContent = currentSeason.title;
      
      episodeList.innerHTML = '';
      let firstPlayableEpisodeIndex = -1; 

      currentSeason.episodes.forEach((episode, index) => {
        const card = document.createElement("div");
        card.className = "episode-card";

        // Description Logic
        let descriptionHTML;
        const showMoreLogic = episode.description.length > 60;
        const showMoreButton = showMoreLogic ? `<button class="show-more-btn">Show more</button>` : '';
        descriptionHTML = `<p>${episode.description}</p>${showMoreButton}`;

        // Date Logic
        let airDateHTML = '';
        if (episode.airDate) {
            let date, options, prefix;
            if (episode.airDate.includes('T')) {
                date = new Date(episode.airDate);
                options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
                prefix = "Airs:";
            } else {
                date = new Date(episode.airDate + 'T00:00:00Z');
                options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
                prefix = "Airs on:";
            }
            const formattedDate = date.toLocaleString(undefined, options);
            airDateHTML = `<small class="air-date">${prefix} ${formattedDate}</small>`;
            card.classList.add('is-placeholder');
        }

        card.innerHTML = `
          <img src="${episode.thumbnail}" alt="${episode.title}" class="episode-thumb">
          <div class="episode-details">
            <h4>${episode.title}</h4>
            ${descriptionHTML}
            ${airDateHTML}
          </div>
        `;

        // ✅ CHECK FOR URL OR URLS ARRAY
        if (episode.url || episode.urls) {
            if (firstPlayableEpisodeIndex === -1) firstPlayableEpisodeIndex = index;

            card.addEventListener("click", (event) => {
              if (event.target.classList.contains('show-more-btn')) return;

              // Store current episode data globally so the buttons can access it
              window.currentEpisodeData = episode;

              // Handle Multiple Servers (Arrays) vs Single Links (Strings)
              if (episode.urls && episode.urls.length > 0) {
                  // If it has mirrors, show buttons and play the first one
                  playOrOpen(episode.urls[0]);
                  
                  if(serverControls) serverControls.style.display = "flex"; // Changed to flex for new toolbar style
                  switchServer(0); // Highlight first button
              } else {
                  // If it's a single link, hide buttons and play
                  playOrOpen(episode.url);
                  if(serverControls) serverControls.style.display = "none";
              }

              updateNowPlaying(episode.title);

              document.querySelectorAll(".episode-card.active").forEach(c => c.classList.remove("active"));
              card.classList.add("active");
            });
        }
        
        // Show More Logic
        if (showMoreLogic) {
          const btn = card.querySelector('.show-more-btn');
          const p = card.querySelector('.episode-details p');
          btn.addEventListener('click', (e) => { e.stopPropagation(); p.classList.toggle('expanded'); });
        }
        
        episodeList.appendChild(card);
      });
      
      // Auto-play first episode
      let episodeToLoadIndex = (firstPlayableEpisodeIndex !== -1) ? firstPlayableEpisodeIndex : 0;
      if (episodeList.children[episodeToLoadIndex]) {
          const firstEp = currentSeason.episodes[episodeToLoadIndex];
          if (firstEp.url || firstEp.urls) episodeList.children[episodeToLoadIndex].click();
      }

    } else {
      title.textContent = `Content unavailable.`;
      episodeList.innerHTML = '';
    }
  }
  
  // Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    });
  }

  // Carousel Logic
  const carousels = [...document.querySelectorAll(".carousel")];
  carousels.forEach((carousel) => {
    let isDown = false, startX, scrollLeft;
    carousel.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      e.preventDefault();
    });
    carousel.addEventListener("mouseleave", () => (isDown = false));
    carousel.addEventListener("mouseup", () => (isDown = false));
    carousel.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1.2;
      carousel.scrollLeft = scrollLeft - walk;
    });
  });

  // Carousel Buttons
  document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
      const carousel = wrapper.querySelector('.carousel');
      const prevBtn = wrapper.querySelector('.carousel-btn.prev');
      const nextBtn = wrapper.querySelector('.carousel-btn.next');
      if (carousel && prevBtn && nextBtn) {
          const scrollAmount = () => carousel.clientWidth * 0.8;
          nextBtn.addEventListener('click', () => {
              carousel.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
          });
          prevBtn.addEventListener('click' , () => {
              carousel.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
          });
      }
  });

  // Fade In Effect
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 420ms ease";
  requestAnimationFrame(() => (document.body.style.opacity = 1));

});

/* -----------------------------------------------
   SECRET CODE LISTENER (UPDATED FOR YOUTUBE)
   ----------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const secretCode = "tadcvivziepop"; // <--- SECRET WORD
    let inputBuffer = "";
    
    const secretModal = document.getElementById("secret-modal");
    const secretFrame = document.getElementById("secret-frame"); // Back to iframe
    const secretCloseBtn = document.getElementById("secret-close-btn");
    
    // YOUTUBE EMBED LINK with Autoplay
    const videoURL = "https://www.youtube.com/embed/UcMVmBNZfyo?autoplay=1";

    if (secretModal && secretFrame && secretCloseBtn) {
        
        // 1. Listen for typing
        window.addEventListener("keyup", (e) => {
            // Add the key to the buffer (case insensitive)
            inputBuffer += e.key.toLowerCase();

            // If the buffer is longer than the code, trim the beginning
            if (inputBuffer.length > secretCode.length) {
                inputBuffer = inputBuffer.slice(-secretCode.length);
            }

            // Check if it matches
            if (inputBuffer === secretCode) {
                secretModal.classList.add("show");
                secretFrame.src = videoURL;
                inputBuffer = ""; // Reset buffer
                console.log("Secret Activated!");
            }
        });

        // 2. Close Function
        const closeSecret = () => {
            secretModal.classList.remove("show");
            secretFrame.src = ""; // Clear src to stop video
        };

        // 3. Bind Close Events
        secretCloseBtn.addEventListener("click", closeSecret);
        
        // Close if clicking the dark background outside the modal
        secretModal.addEventListener("click", (e) => {
            if (e.target === secretModal) closeSecret();
        });
    }
});

/* --- ABOUT MODAL LOGIC (ADDED) --- */
document.addEventListener('DOMContentLoaded', () => {
    const aboutTrigger = document.getElementById('about-logo-trigger');
    const aboutModal = document.getElementById('about-modal');
    const aboutCloseBtn = document.getElementById('modal-close-btn');

    if (aboutTrigger && aboutModal && aboutCloseBtn) {
        // Open Modal
        aboutTrigger.addEventListener('click', () => {
            aboutModal.classList.add('show');
        });

        // Close Function
        const closeAbout = () => {
            aboutModal.classList.remove('show');
        };

        // Close on Button Click
        aboutCloseBtn.addEventListener('click', closeAbout);

        // Close on Outside Click
        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal) closeAbout();
        });
    }
});