const artists = [
  {
    artistImage: './images/Aka.png',
    artistName: 'Aka Supa Mega',
    artistGenre: 'South African Hip Hop Artist',
    artistInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    artistImage: './images/ami-faku.png',
    artistName: 'Ami Faku',
    artistGenre: 'South African R&B and soul Artist',
    artistInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    artistImage: './images/dj-zinhle.png',
    artistName: 'Dj Zinhle',
    artistGenre: 'South African Female dj',
    artistInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    artistImage: './images/loyiso.png',
    artistName: 'Loyiso',
    artistGenre: 'South African R&B Artist',
    artistInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    artistImage: './images/Nasty-C.png',
    artistName: 'Nasty C',
    artistGenre: 'South African Hip Hop Artist',
    artistInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    artistImage: './images/zahara.png',
    artistName: 'Zahara',
    artistGenre: 'South African Afro Soul Artist',
    artistInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
];

const featureArtist = document.querySelector('.artists-list');
artists.forEach((e) => {
  const div = document.createElement('div');
  div.innerHTML += `
    <div class="artist-card">
      <img src="${e.artistImage}">
      <div>
         <h3>${e.artistName}</h3>
         <h5>${e.artistGenre}</h5>
         <p>${e.artistInfo}</p>
      </div>
    </div>
    `;
  featureArtist.append(div);
});
