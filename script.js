/**
 * Navigates to the video player for a given season or shows a modal if the season is unavailable.
 * @param {number} seasonNumber The season number to play.
 */
function goToSeason(seasonNumber) {
  const modal = document.getElementById('unavailable-modal');
  if (seasonNumber === 2 && modal) {
    // If season is 2, show the custom modal
    modal.classList.add('show');
  } else {
    // Otherwise, proceed to the video page
    window.location.href = `video.html?season=${encodeURIComponent(seasonNumber)}`;
  }
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
        url: "https://archive.org/download/hazbin-hotel-full-episodes-final-ver/Hazbin-Hotel-s1-e0%201080p.mp4",
        subtitles: "subtitles/Hazbin-Hotel-s1-e0_1080p.en.vtt"
      },
      {
        title: "Episode 1: Overture",
        description: "Charlie pitches her plan to rehabilitate sinners to Heaven. Vaggie creates a commercial to promote the hotel, with disastrous results.",
        thumbnail: "https://files.catbox.moe/vw6i1j.jpg",
        url: "https://archive.org/download/hazbin-hotel-full-episodes-final-ver/Hazbin-Hotel-s1-e1_1080p.mp4",
        subtitles: "subtitles/Hazbin-Hotel-s1-e1_1080p.en.vtt"
      },
      {
        title: "Episode 2: Radio Killed the Video Star",
        description: "The Radio Demon, Alastor, arrives and offers to help Charlie run the hotel, but his intentions are questionable. A new threat emerges.",
        thumbnail: "https://files.catbox.moe/ydyssy.jpg",
        url: "https://archive.org/download/hazbin-hotel-full-episodes-final-ver/Hazbin-Hotel-s1-e2_1080p.mp4",
        subtitles: "subtitles/Hazbin-Hotel-s1-e2_1080p.en.vtt"
      },
      {
        title: "Episode 3: Scrambled Eggs",
        description: "While the hotel residents try to make a commercial, the bumbling inventor Sir Pentious attacks, seeking to challenge Alastor.",
        thumbnail: "https://files.catbox.moe/yk0p2b.jpg",
        url: "https://archive.org/download/hazbin-hotel-full-episodes-final-ver/Hazbin-Hotel-s1-e3_1080p.mp4",
        subtitles: "subtitles/Hazbin-Hotel-s1-e3_1080p.en.vtt"
      },
      {
        title: "Episode 4: Masquerade",
        description: "Angel Dust's abusive boss, Valentino, calls him to work. Charlie's attempt to intervene reveals the darker side of Angel's life.",
        thumbnail: "https://files.catbox.moe/j3x9gr.png",
        url: "https://archive.org/download/hazbin-hotel-full-episodes-final-ver/Hazbin-Hotel-s1-e4_1080p.mp4",
        subtitles: "subtitles/Hazbin-Hotel-s1-e4_1080p.en.vtt"
      },
      {
        title: "Episode 5: Dad Beat Dad",
        description: "Lucifer, the King of Hell and Charlie's father, visits the hotel and clashes with Alastor over his skepticism of Charlie's dream.",
        thumbnail: "https://files.catbox.moe/jr7h23.png",
        url: "https://archive.org/download/hazbin-hotel-full-episodes-final-ver/Hazbin-Hotel-s1-e5_1080p.mp4",
        subtitles: "subtitles/Hazbin-Hotel-s1-e5_1080p.en.vtt"
      },
      {
        title: "Episode 6: Welcome to Heaven",
        description: "Charlie and Vaggie travel to Heaven to plead their case directly to the angels, but the meeting with Adam does not go as planned.",
        thumbnail: "https://files.catbox.moe/bumhsm.jpg",
        url: "https://archive.org/download/hazbin-hotel-full-episodes-final-ver/Hazbin-Hotel-s1-e6_1080p.mp4",
        subtitles: "subtitles/Hazbin-Hotel-s1-e6_1080p.en.vtt"
      },
      {
        title: "Episode 7: Hello Rosie",
        description: "With extermination imminent, Charlie seeks help from the cannibals of Hell to build an army and defend the hotel.",
        thumbnail: "https://files.catbox.moe/8mldzz.png",
        url: "https://archive.org/download/hazbin-hotel-full-episodes-final-ver/Hazbin-Hotel-s1-e7_1080p.mp4",
        subtitles: "subtitles/Hazbin-Hotel-s1-e7_1080p.en.vtt"
      },
      {
        title: "Episode 8: The Show Must Go On",
        description: "Adam and his exorcist army descend on the hotel. The residents and their allies must fight for their lives and for the future of redemption.",
        thumbnail: "https://files.catbox.moe/snp32b.png",
        url: "https://archive.org/download/hazbin-hotel-full-episodes-final-ver/Hazbin-Hotel-s1-e8_1080p.mp4",
        subtitles: "subtitles/Hazbin-Hotel-s1-e8_1080p.en.vtt"
      }
    ]
  },
  '2': {
    title: "Season 2",
    episodes: Array.from({ length: 10 }, (_, i) => ({
      title: `Episode ${i + 1}`,
      description: "A brief, compelling description for this episode goes here.",
      thumbnail: `https://via.placeholder.com/120x70?text=S2E${i + 1}`,
      url: ''
    }))
  }
};

window.addEventListener("DOMContentLoaded", () => {
  // --- LOGIC FOR THE NEW MODAL ---
  const modal = document.getElementById('unavailable-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (modal && modalCloseBtn) {
    const closeModal = () => modal.classList.remove('show');
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }
  // --- END OF MODAL LOGIC ---

  const videoPlayer = document.getElementById("video-frame");
  const title = document.getElementById("season-title");
  const episodeList = document.getElementById("episode-list");
  const nowPlaying = document.getElementById("now-playing-indicator");
  
  if (videoPlayer && title && episodeList) {
    const params = new URLSearchParams(window.location.search);
    const season = params.get("season");
    const currentSeason = seasonData[season];
    let currentEpisodeIndex = 0;
    let timeToRestore = 0;
  
    const updateNowPlaying = (episodeTitle, isResuming = false) => {
      if (nowPlaying) {
        nowPlaying.classList.remove('fade-in');
        void nowPlaying.offsetWidth;
        nowPlaying.textContent = isResuming 
          ? `Resuming where you left off: ${episodeTitle}`
          : `Now playing: ${episodeTitle}`;
        nowPlaying.classList.add('fade-in');
      }
    };
    
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
    
    setInterval(saveProgress, 5000);

    videoPlayer.addEventListener('loadedmetadata', () => {
        if (timeToRestore > 0) {
            videoPlayer.currentTime = timeToRestore;
            timeToRestore = 0;
        }
    });

    if (currentSeason && currentSeason.episodes.length > 0) {
      title.textContent = currentSeason.title;
      episodeList.innerHTML = '';

      // ✅ --- LOGIC BELOW IS UPDATED ---
      currentSeason.episodes.forEach((episode, index) => {
        const card = document.createElement("div");
        card.className = "episode-card";

        // Check if the description is long enough to need a "Show more" button
        const isLong = episode.description.length > 100;
        const showMoreHTML = isLong ? `<button class="show-more-btn">Show more</button>` : '';

        card.innerHTML = `
          <img src="${episode.thumbnail}" alt="${episode.title}" class="episode-thumb">
          <div class="episode-details">
            <h4>${episode.title}</h4>
            <p>${episode.description}</p>
            ${showMoreHTML}
          </div>
        `;

        // Add main click listener to play the episode
        card.addEventListener("click", (event) => {
          if (event.target.classList.contains('show-more-btn')) return;

          const subtitleTrack = document.getElementById("subtitle-track");
          videoPlayer.src = episode.url;
          currentEpisodeIndex = index;
          updateNowPlaying(episode.title);

          if (episode.subtitles && subtitleTrack) {
            subtitleTrack.src = episode.subtitles;
          } else if (subtitleTrack) {
            subtitleTrack.src = '';
          }
          
          videoPlayer.load();
          document.querySelectorAll(".episode-card.active").forEach(c => c.classList.remove("active"));
          card.classList.add("active");
        });

        // Add specific listener for the "Show more" button if it exists
        if (isLong) {
          const btn = card.querySelector('.show-more-btn');
          const p = card.querySelector('.episode-details p');
          btn.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevents the main card click
            p.classList.toggle('expanded');
            btn.textContent = p.classList.contains('expanded') ? 'Show less' : 'Show more';
          });
        }
        
        episodeList.appendChild(card);
      });
      // ✅ --- END OF UPDATED LOGIC ---
      
      const savedStateJSON = localStorage.getItem('lastWatched');
      let episodeToLoadIndex = 0;

      if (savedStateJSON) {
        const savedState = JSON.parse(savedStateJSON);
        if (savedState.season === season) {
          episodeToLoadIndex = savedState.episodeIndex;
          timeToRestore = savedState.time;
          const episodeTitle = currentSeason.episodes[episodeToLoadIndex].title;
          updateNowPlaying(episodeTitle, true);
        }
      }
      
      if (episodeList.children[episodeToLoadIndex]) {
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