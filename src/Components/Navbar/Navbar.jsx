import React from 'react';
import { RiHomeLine } from 'react-icons/ri';
import {
  BsFolder,
  BsDiscord,
  BsLinkedin,
  BsYoutube,
  BsTwitch,
} from 'react-icons/bs';
import { TbPlant } from 'react-icons/tb';
import { GoMarkGithub } from 'react-icons/go';
import { GrTwitter } from 'react-icons/gr';
import { TfiLinkedin } from 'react-icons/tfi';

import './Navbar.css';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {/* Section */}
        <ul>
          <li>
            <a className="active" href="#1">
              <RiHomeLine className="icon" />
              <span>Me</span>
            </a>
          </li>
          <li>
            <a href="#2">
              <BsFolder className="icon" />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#3">
              <TbPlant className="icon" />
              <span>About</span>
            </a>
          </li>
        </ul>
        {/* Networks */}
        <ul className="networks">
          <li>
            <a href="https://github.com/Steven-Mendez">
              <GoMarkGithub className="icon" />
            </a>
          </li>
          <li>
            <a href="https://discord.com/users/674342488269389845">
              <BsDiscord className="icon" style={{ color: '#8EA7E9' }} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/StevenMendezDev">
              <GrTwitter className="icon" style={{ color: '#A8D8EA' }} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/steven-mendez-16bb10231/">
              <BsLinkedin className="icon" style={{ color: '#3F72AF' }} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@stevenmendez907">
              <BsYoutube className="icon" style={{ color: '#FF2E63' }} />
            </a>
          </li>
          <li>
            <a href="https://www.twitch.tv/steven_werr">
              <BsTwitch className="icon" style={{ color: '#AA96DA' }} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
