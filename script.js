/**
 * Navigates to the video player for a given season.
 * @param {number} seasonNumber The season number to play.
 */
function goToSeason(seasonNumber) {
  window.location.href = `video.html?season=${encodeURIComponent(seasonNumber)}`;
}

// 🔹 Define your season data with subtitle links
const seasonData = {
  '1': {
    title: "Season 1",
    episodes: [
      {
        title: "Pilot: That's Entertainment",
        description: "Charlie, the princess of Hell, pursues her seemingly impossible goal of rehabilitating demons to peacefully reduce overpopulation in her kingdom.",
        thumbnail: "https://files.catbox.moe/rliimo.jpg",
        url: "https://player.vimeo.com/video/1132843685?autoplay=1&playsinline=1", // 🛑 This MP4 link will likely not play in the new <iframe>
        subtitles: "subtitles/Hazbin-Hotel-s1-e0_1080p.en.vtt"
      },
      {
        title: "Episode 1: Overture",
        description: "Charlie pitches her plan to rehabilitate sinners to Heaven. Vaggie creates a commercial to promote the hotel, with disastrous results.",
        thumbnail: "https://files.catbox.moe/vw6i1j.jpg",
        url: "https://player.vimeo.com/video/1132850961?autoplay=1&playsinline=1", // ✅ Vimeo URL
        subtitles: "subtitles/Hazbin-Hotel-s1-e1_1080p.en.vtt"
      },
      {
        title: "Episode 2: Radio Killed the Video Star",
        description: "The Radio Demon, Alastor, arrives and offers to help Charlie run the hotel, but his intentions are questionable. A new threat emerges.",
        thumbnail: "https://files.catbox.moe/ydyssy.jpg",
        url: "https://player.vimeo.com/video/1131118641?autoplay=1&playsinline=1", // ✅ Vimeo URL
        subtitles: "subtitles/Hazbin-Hotel-s1-e2_1080p.en.vtt"
      },
      {
        title: "Episode 3: Scrambled Eggs",
        description: "While the hotel residents try to make a commercial, the bumbling inventor Sir Pentious attacks, seeking to challenge Alastor.",
        thumbnail: "https://files.catbox.moe/yk0p2b.jpg",
        url: "https://player.vimeo.com/video/1131120560?autoplay=1&playsinline=1", // ✅ Vimeo URL
        subtitles: "subtitles/Hazbin-Hotel-s1-e3_1080p.en.vtt"
      },
      {
        title: "Episode 4: Masquerade",
        description: "Angel Dust's abusive boss, Valentino, calls him to work. Charlie's attempt to intervene reveals the darker side of Angel's life.",
        thumbnail: "https://files.catbox.moe/j3x9gr.png",
        url: "https://player.vimeo.com/video/1131122132?autoplay=1&playsinline=1", // ✅ Vimeo URL
        subtitles: "subtitles/Hazbin-Hotel-s1-e4_1080p.en.vtt"
      },
      {
        title: "Episode 5: Dad Beat Dad",
        description: "Lucifer, the King of Hell and Charlie's father, visits the hotel and clashes with Alastor over his skepticism of Charlie's dream.",
        thumbnail: "https://files.catbox.moe/jr7h23.png",
        url: "https://player.vimeo.com/video/1131123659?autoplay=1&playsinline=1", // ✅ Vimeo URL
        subtitles: "subtitles/Hazbin-Hotel-s1-e5_1080p.en.vtt"
      },
      {
        title: "Episode 6: Welcome to Heaven",
        description: "Charlie and Vaggie travel to Heaven to plead their case directly to the angels, but the meeting with Adam does not go as planned.",
        thumbnail: "https://files.catbox.moe/bumhsm.jpg",
        url: "https://player.vimeo.com/video/1131125348?autoplay=1&playsinline=1", // ✅ Vimeo URL
        subtitles: "subtitles/Hazbin-Hotel-s1-e6_1080p.en.vtt"
      },
      {
        title: "Episode 7: Hello Rosie",
        description: "With extermination imminent, Charlie seeks help from the cannibals of Hell to build an army and defend the hotel.",
        thumbnail: "https://files.catbox.moe/8mldzz.png",
        url: "https://player.vimeo.com/video/1131127189?autoplay=1&playsinline=1", // ✅ Vimeo URL
        subtitles: "subtitles/Hazbin-Hotel-s1-e7_1080p.en.vtt"
      },
      {
        title: "Episode 8: The Show Must Go On",
        description: "Adam and his exorcist army descend on the hotel. The residents and their allies must fight for their lives and for the future of redemption.",
        thumbnail: "https://files.catbox.moe/snp32b.png",
        url: "https://player.vimeo.com/video/1131532740?autoplay=1&playsinline=1", // ✅ Vimeo URL
        subtitles: "subtitles/Hazbin-Hotel-s1-e8_1080p.en.vtt"
      }
    ]
  },
  '2': {
    title: "Season 2",
    episodes: [
      {
        title: "Episode 1: New Pentious",
        description: "Charlie's victory against Heaven has sinners flocking to the newly rebuilt Hazbin Hotel. But can she make sure they're all there for the right reasons? Meanwhile, Vox reveals his plan for the Vees to gain their ultimate victory.",
        thumbnail: "https://files.catbox.moe/3dokf8.png",
        // ✅ CHANGED: URL added, airDate removed
        url: "https://player.vimeo.com/video/1131586963"
      },
      {
        title: "Episode 2: Storyteller",
        description: "Sir Pentious' redemption creates a stir in Heaven, but not everyone is happy to see a sinner redeemed.",
        thumbnail: "https://files.catbox.moe/mezpeg.png",
        // ✅ CHANGED: URL added, airDate removed
        url: "https://player.vimeo.com/video/1131593958"
      },
      {
        title: "Episode 3: Hazbin Hotel: Behind Closed Doors",
        description: "Charlie invites Voxtek to do a piece on the Hotel and Pentious' redemption. But she will need hard proof to convince her skeptical guests.",
        thumbnail: "https://files.catbox.moe/svs231.png",
        url: "https://player.vimeo.com/video/1133784059"
      },
      {
        title: "Episode 4: It's A Deal",
        description: "Charlie tries to do damage control by going live on television! Meanwhile, Alastor reaches his final straw.",
        thumbnail: "https://files.catbox.moe/hb91sh.png",
        url: "https://player.vimeo.com/video/1133784794"
      },
      {
        title: "Episode 5: Silenced",
        description: "Vox hosts a rally for his increasing supporters. Meanwhile, Charlie looks to Heaven for help.",
        thumbnail: "https://files.catbox.moe/7cwonn.png",
        airDate: "2025-11-12" // ✅ KEPT: This will remain grayed out
      },
      {
        title: "Episode 6: Scream Rain",
        description: "Vox leads the overlords toward war with Heaven. Tensions run high at the hotel and Husk returns to his old ways.",
        thumbnail: "https://files.catbox.moe/14u3zn.png",
        airDate: "2025-11-12" // ✅ KEPT: This will remain grayed out
      },
      {
        title: "Episode 7: Weapon of Mass Distraction",
        description: "Vox unveils his secret weapon, giving Heaven their final warning.",
        thumbnail: "https://files.catbox.moe/23oy8v.png",
        airDate: "2025-11-19" // ✅ KEPT: This will remain grayed out
      },
      {
        title: "Episode 8: Curtain Call",
        description: "Vox (and the Vees, I guess) is hosting a party so everyone can watch him take over Heaven - and you're all invited!",
        thumbnail: "https://files.catbox.moe/xrr5jv.png",
        airDate: "2025-11-19" // ✅ KEPT: This will remain grayed out
      }
    ]
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const videoPlayer = document.getElementById("video-frame");
  const title = document.getElementById("season-title");
  const episodeList = document.getElementById("episode-list");
  const nowPlaying = document.getElementById("now-playing-indicator");
  
  if (videoPlayer && title && episodeList) {
    const params = new URLSearchParams(window.location.search);
    const season = params.get("season");
    const currentSeason = seasonData[season];
    let currentEpisodeIndex = 0;
    // 🛑 VIMEO: Commented out progress-saving variables
    // let timeToRestore = 0;
  
    const updateNowPlaying = (episodeTitle, isResuming = false) => {
      if (nowPlaying) {
        nowPlaying.classList.remove('fade-in');
        void nowPlaying.offsetWidth;
        nowPlaying.textContent = isResuming 
          // 🛑 VIMEO: Removed "Resuming..." text as this feature is disabled
          // ? `Resuming where you left off: ${episodeTitle}`
          ? `Now playing: ${episodeTitle}` // Always show "Now playing"
          : `Now playing: ${episodeTitle}`;
        nowPlaying.classList.add('fade-in');
      }
    };
    
    // 🛑 VIMEO: Commented out saveProgress function, as <iframe> does not support this API
    /*
    const saveProgress = () => {
      if (!videoPlayer.paused && videoPlayer.currentTime > 0) {
        const playbackState = {
          season: season,
          episodeIndex: currentEpisodeIndex,
          time: videoPlayer.currentTime,
        };
        localStorage.setItem('lastWatched', JSON.stringify(playbackState));
      }
    };
    */
    
    // Logic for Season 2 Layout
    // ⚠️ THIS LOGIC IS NOW MODIFIED:
    // We check if *any* episode has a URL. If not, it's the centered layout.
    // If *some* episodes have URLs, we show the player.
    const s2HasPlayable = currentSeason && season === '2' && currentSeason.episodes.some(ep => ep.url);

    if (season === '2' && !s2HasPlayable) {
      // Original logic: No S2 episodes are playable, hide player
      document.querySelector('.video-main').style.display = 'none';
      document.querySelector('.player-page').classList.add('centered-layout');
      document.querySelector('.episode-sidebar h3').textContent = 'Season 2 Release Schedule';
    } else {
       // S1 or S2 with *some* playable episodes: Show player
       // 🛑 VIMEO: Commented out saveProgress interval
       // setInterval(saveProgress, 5000); // Only save progress if it's a watchable season
    }

    // 🛑 VIMEO: Commented out loadedmetadata listener, as <iframe> does not support this
    /*
    videoPlayer.addEventListener('loadedmetadata', () => {
        if (timeToRestore > 0) {
            videoPlayer.currentTime = timeToRestore;
            timeToRestore = 0;
        }
    });
    */

    if (currentSeason && currentSeason.episodes.length > 0) {
      if (season !== '2') {
         title.textContent = currentSeason.title;
      } else if (s2HasPlayable) {
         // ✅ If S2 has playable content, show the title
         title.textContent = currentSeason.title;
      }
      
      episodeList.innerHTML = '';
      let firstPlayableEpisodeIndex = -1; // To track the first playable S2 episode

      currentSeason.episodes.forEach((episode, index) => {
        const card = document.createElement("div");
        card.className = "episode-card";

        let descriptionHTML;
        let showMoreLogic = false;

        // ✅ This logic now works for S2 as well
        showMoreLogic = episode.description.length > 60;
        const showMoreButton = showMoreLogic ? `<button class="show-more-btn">Show more</button>` : '';
        descriptionHTML = `<p>${episode.description}</p>${showMoreButton}`;


        let airDateHTML = '';
        // ✅ This logic is still correct. If airDate exists, it's a placeholder.
        if (episode.airDate) {
            let date, options, prefix;

            // ✅ Check if the airDate string includes a time ('T')
            if (episode.airDate.includes('T')) {
                // If it has a time, format it fully
                date = new Date(episode.airDate);
                options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
                prefix = "Airs:";
            } else {
                // If it's just a date, format date-only and specify UTC to prevent timezone shifting the day
                date = new Date(episode.airDate + 'T00:00:00Z'); // Note: Changed GDate to Date for broader compatibility
                options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
                prefix = "Airs on:";
            }
            
            const formattedDate = date.toLocaleString(undefined, options);
            airDateHTML = `<small class="air-date">${prefix} ${formattedDate}</small>`;
            card.classList.add('is-placeholder');
        }

        card.innerHTML = `
          <img src="${episode.thumbnail}" alt="${episode.title}" class="episode-thumb">
          <div class_name="episode-details">
            <h4>${episode.title}</h4>
            ${descriptionHTML}
            ${airDateHTML}
          </div>
        `;

        // ✅ This logic is now key: Only add click if there's a URL
        if (episode.url) {
            // Track the first playable episode
            if (firstPlayableEpisodeIndex === -1) {
                firstPlayableEpisodeIndex = index;
            }

            card.addEventListener("click", (event) => {
              if (event.target.classList.contains('show-more-btn')) return;

              // 🛑 VIMEO: Commented out subtitle track logic
              // const subtitleTrack = document.getElementById("subtitle-track");
              videoPlayer.src = episode.url;
              currentEpisodeIndex = index;
              updateNowPlaying(episode.title);

              /* 🛑 VIMEO: Commented out subtitle logic
              if (episode.subtitles && subtitleTrack) {
                subtitleTrack.src = episode.subtitles;
              } else if (subtitleTrack) {
                subtitleTrack.src = '';
              }
              */
              
              // 🛑 VIMEO: <iframe> does not need .load()
              // videoPlayer.load();
              document.querySelectorAll(".episode-card.active").forEach(c => c.classList.remove("active"));
              card.classList.add("active");
            });
        }
        
        if (showMoreLogic) {
          const btn = card.querySelector('.show-more-btn');
          const p = card.querySelector('.episode-details p');
          btn.addEventListener('click', (event) => {
            event.stopPropagation();
            p.classList.toggle('expanded');
            btn.textContent = p.classList.contains('expanded') ? 'Show less' : 'Show more';
          });
        }
        
        episodeList.appendChild(card);
      });
      
      // ✅ This now correctly loads S1's first ep OR S2's first *playable* ep
      let episodeToLoadIndex = (firstPlayableEpisodeIndex !== -1) ? firstPlayableEpisodeIndex : 0;
      
      if (season === '1') { // S1 still supports resume-logic (if you re-enable it)
          // 🛑 VIMEO: Commented out playback resumption logic
          /*
          const savedStateJSON = localStorage.getItem('lastWatched');
          
          if (savedStateJSON) {
            const savedState = JSON.parse(savedStateJSON);
            if (savedState.season === season) {
              episodeToLoadIndex = savedState.episodeIndex;
              timeToRestore = savedState.time;
              const episodeTitle = currentSeason.episodes[episodeToLoadIndex].title;
              updateNowPlaying(episodeTitle, true);
            }
          }
          */
      }

      // Click the first episode (S1) or first *playable* episode (S2)
      if (episodeList.children[episodeToLoadIndex] && currentSeason.episodes[episodeToLoadIndex].url) {
          episodeList.children[episodeToLoadIndex].click();
      }

    } else {
      title.textContent = `Content for this season is not available yet.`;
      episodeList.innerHTML = '';
    }
  }

  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    });
  }

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

  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 420ms ease";
  requestAnimationFrame(() => (document.body.style.opacity = 1));

});
