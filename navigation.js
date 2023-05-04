// Buttons
headerBtn.addEventListener('click', () => {
    const playlistIsInactive = playlistSection.classList.contains('inactive');
    if (playlistIsInactive) {
        playerSection.classList.add('inactive');
        playlistSection.classList.remove('inactive');
        header.classList.remove('header--player');
    } else {
        playerSection.classList.remove('inactive');
        playlistSection.classList.add('inactive');
        header.classList.add('header--player');
    }
});
