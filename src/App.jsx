import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';

// Movile and PC Backpgrounds
const pcBackgrounds = [
  'https://64.media.tumblr.com/5b2e400fab2451bcd876e5a2e0c695f0/tumblr_occujlvMQE1qze3hdo1_500.gif',
  'https://i.pinimg.com/originals/00/43/04/0043044fd8e3c55c584ddaf0c9c134e2.gif',
  'https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2019/07/0.gif?iv=406',
  'https://animesher.com/orig/1/184/1846/18461/animesher.com_couple-art-gif-1846121.gif',
  'https://64.media.tumblr.com/668d105fc2701311bfcef33d2771a40e/370b02f259511df9-d6/s1280x1920/b22c8e6e834c0722cf2951aedfcb90bddfef8f87.gif',
  'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f9c282103154127.5f46acc8412b6.gif',
  'https://i.pinimg.com/originals/2a/31/fd/2a31fd31c567d79caf95c1c2325bdcd1.gif',
  'https://i.pinimg.com/originals/cf/70/37/cf7037a49b72ee5e2990e99c6aac1482.gif',
  'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5d96d646847841.586690decaada.gif',
  'https://wallpaperaccess.com/full/5927911.gif',
];
const movilBackgrounds = [
  'https://cdn.sanity.io/images/hpvpbfax/production/e261b661e656a59eabf809608249dca5ab7bca9f-480x600.gif',
  'https://giffiles.alphacoders.com/215/215738.gif',
  'https://i.redd.it/5rwas9m13ce41.gif',
  'https://i.pinimg.com/originals/85/bc/b1/85bcb174b5d45d7682b5f10405791702.gif',
  'https://64.media.tumblr.com/e7f18b59e39a15c8a3b02131e5e13243/tumblr_p5n35wTfJ71rnbw6mo1_640.gif',
  'https://64.media.tumblr.com/6b912543964c92fb542edc7a2bda16d5/tumblr_p6rqvfqa2G1rnbw6mo1_640.gif',
  'https://cutewallpaper.org/26/art-wallpaper-gif/cyberpunk-pixel-art-gif-1020x1555-wallpaper-teahubio.gif',
];
const pcIndex = Math.floor(Math.random() * pcBackgrounds.length);
const movilIndex = Math.floor(Math.random() * movilBackgrounds.length);

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1052;

  return (
    <div
      className="App Hero-Image"
      style={{
        backgroundImage: `url(${
          isMobile ? movilBackgrounds[movilIndex] : pcBackgrounds[pcIndex]
        })`,
      }}
    >
      <Navbar />
    </div>
  );
}

export default App;
