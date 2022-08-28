import * as React from 'react';

function SearchIcon({ fill = 'currentColor', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.7803 16.7198L13.3035 12.2431C14.5235 10.751 15.1233 8.84715 14.9789 6.92525C14.8345 5.00335 13.9569 3.21048 12.5277 1.91747C11.0985 0.624463 9.22696 -0.0697502 7.30025 -0.0215763C5.37354 0.0265975 3.53905 0.813473 2.17623 2.17629C0.813412 3.53911 0.0265365 5.3736 -0.0216374 7.30031C-0.0698112 9.22702 0.624402 11.0985 1.91741 12.5278C3.21042 13.957 5.00329 14.8346 6.92519 14.979C8.84709 15.1234 10.751 14.5235 12.243 13.3036L16.7198 17.7803C16.8612 17.917 17.0507 17.9925 17.2473 17.9908C17.444 17.9891 17.6321 17.9103 17.7711 17.7712C17.9102 17.6321 17.9891 17.444 17.9908 17.2474C17.9925 17.0507 17.9169 16.8613 17.7803 16.7198ZM7.50002 13.5001C6.31333 13.5001 5.15329 13.1482 4.1666 12.4889C3.1799 11.8296 2.41087 10.8925 1.95674 9.79618C1.50262 8.69982 1.3838 7.49342 1.61531 6.32954C1.84682 5.16565 2.41826 4.09655 3.25738 3.25744C4.09649 2.41832 5.16559 1.84688 6.32948 1.61537C7.49336 1.38386 8.69976 1.50268 9.79612 1.9568C10.8925 2.41093 11.8295 3.17996 12.4888 4.16666C13.1481 5.15335 13.5 6.31339 13.5 7.50008C13.4982 9.09083 12.8655 10.6159 11.7407 11.7407C10.6159 12.8656 9.09077 13.4983 7.50002 13.5001Z"
        fill="#C2C2C2"
      />
    </svg>
  );
}

export default SearchIcon;