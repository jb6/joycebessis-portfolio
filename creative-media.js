(() => {
  const musicRoot = document.getElementById('music-library');
  const videoRoot = document.getElementById('video-library');

  if (musicRoot) {
    const tracks = window.MUSIC_TRACKS || [];
    if (!tracks.length) {
      musicRoot.innerHTML = '<div class="media-empty">Selected tracks will appear here.</div>';
    } else {
      musicRoot.innerHTML = tracks.map((t, i) => `
        <article class="track-card">
          <div class="track-cover-wrap">${t.cover ? `<img class="track-cover" src="${t.cover}" alt="${t.title} cover">` : `<div class="track-cover placeholder-cover">${String(i + 1).padStart(2,'0')}</div>`}</div>
          <div class="track-main">
            <h4>${t.title}</h4>
            <p>${t.description || ''}</p>
            <audio controls preload="metadata" src="${t.file}"></audio>
            <div class="tag-row">${(t.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
          </div>
        </article>`).join('');
    }
  }

  if (videoRoot) {
    const videos = window.VIDEO_TRACKS || [];
    if (!videos.length) {
      videoRoot.innerHTML = '<div class="media-empty">Selected films will appear here.</div>';
    } else {
      videoRoot.innerHTML = videos.map(v => `
        <article class="video-card">
          <video controls preload="metadata" src="${v.file}"></video>
          <h4>${v.title}</h4>
          <p>${v.description || ''}</p>
          <div class="tag-row">${(v.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
        </article>`).join('');
    }
  }
})();
