const menuList = document.querySelector('.menu-list');
const menuIcon = document.querySelector('#hamburger');


menuIcon.addEventListener('click', () => {
  menuList.classList.toggle('open-menu-list');
});

document.querySelectorAll('.close').forEach((e) =>
  e.addEventListener('click', () => {
    menuList.classList.remove('open-menu-list');
  })
);


const artists = [
  {
    artistImage: './images/hip-hop.jpg',
    artistName: 'MissyJ',
    artistGenre: 'South African Hip Hop Artist',
    artistInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    artistImage: './images/r&b.jpg',
    artistName: 'Amy Phaku',
    artistGenre: 'South African R&B and soul Artist',
    artistInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    artistImage: './images/soul.jpg',
    artistName: 'Brad',
    artistGenre: 'South African male R&B',
    artistInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    artistImage: './images/guitarit.jpg',
    artistName: 'Loyiso',
    artistGenre: 'South African R&B Artist',
    artistInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    artistImage: './images/dj.jpg',
    artistName: 'Black Diamond',
    artistGenre: 'South African DJ',
    artistInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    artistImage: './images/singer.jpg',
    artistName: 'Zain',
    artistGenre: 'South African Soul Artist',
    artistInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
];

const featureArtist = document.querySelector('.artists-list');
artists.forEach((e) => {
  const div = document.createElement('div');

  div.innerHTML += `
    <div class="artist-card">
      <img src="${e.artistImage}">
      <div class="artist-card-item">
         <h3>${e.artistName}</h3>
         <h5>${e.artistGenre}</h5>
         <p>${e.artistInfo}</p>
      </div>
    </div>
    `;
  featureArtist.append(div);
});

