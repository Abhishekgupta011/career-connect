import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/courses">
            <a>Courses</a>
          </Link>
        </li>
        <li>
          <Link href="/forum">
            <a>Forum</a>
          </Link>
        </li>
        <li>
          <Link href="/quiz">
            <a>Quiz</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
