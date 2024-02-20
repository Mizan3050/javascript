let unplayedSongs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17];
let playedSongs = [];

function shuffle() {
  if (unplayedSongs.length >= 1) {
    const randomSongToPlay =
      Math.floor(Math.random() * (unplayedSongs.length - 1));

    console.log(randomSongToPlay);
    console.log("Play a song: " + unplayedSongs[randomSongToPlay]);
    playedSongs.push(unplayedSongs[randomSongToPlay]); // O(1)
    console.log("Played a song: " + playedSongs);
    unplayedSongs.splice(randomSongToPlay, 1); //O(n)
    if (unplayedSongs.length === 0) {
      unplayedSongs = playedSongs;
      playedSongs = [];
    }
  }
}
