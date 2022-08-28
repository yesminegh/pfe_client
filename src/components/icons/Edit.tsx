import * as React from 'react';

function Edit({ fill = 'currentColor', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_401_11)">
        <path
          d="M13.992 0.697554L4.84802 9.84156C4.49877 10.1889 4.2219 10.6021 4.03343 11.0572C3.84495 11.5123 3.74862 12.0002 3.75001 12.4928V13.5001C3.75001 13.699 3.82903 13.8897 3.96968 14.0304C4.11034 14.171 4.3011 14.2501 4.50001 14.2501H5.50726C5.99984 14.2514 6.48779 14.1551 6.94288 13.9666C7.39797 13.7782 7.81116 13.5013 8.15852 13.1521L17.3025 4.00805C17.7408 3.56868 17.987 2.97341 17.987 2.3528C17.987 1.7322 17.7408 1.13693 17.3025 0.697554C16.8568 0.271474 16.2639 0.0336914 15.6473 0.0336914C15.0306 0.0336914 14.4378 0.271474 13.992 0.697554V0.697554ZM16.242 2.94755L7.09802 12.0916C6.67511 12.5119 6.10352 12.7485 5.50726 12.7501H5.25001V12.4928C5.25158 11.8966 5.48819 11.325 5.90851 10.9021L15.0525 1.75805C15.2127 1.60502 15.4257 1.51962 15.6473 1.51962C15.8688 1.51962 16.0818 1.60502 16.242 1.75805C16.3995 1.91594 16.4879 2.12982 16.4879 2.3528C16.4879 2.57579 16.3995 2.78967 16.242 2.94755V2.94755Z"
          fill={fill}
        />
        <path
          d="M17.25 6.73425C17.0511 6.73425 16.8603 6.81327 16.7197 6.95392C16.579 7.09457 16.5 7.28534 16.5 7.48425V11.25H13.5C12.9033 11.25 12.331 11.4871 11.909 11.909C11.4871 12.331 11.25 12.9033 11.25 13.5V16.5H3.75C3.15326 16.5 2.58097 16.2629 2.15901 15.841C1.73705 15.419 1.5 14.8467 1.5 14.25V3.75C1.5 3.15326 1.73705 2.58097 2.15901 2.15901C2.58097 1.73705 3.15326 1.5 3.75 1.5H10.5315C10.7304 1.5 10.9212 1.42098 11.0618 1.28033C11.2025 1.13968 11.2815 0.948912 11.2815 0.75C11.2815 0.551088 11.2025 0.360322 11.0618 0.21967C10.9212 0.0790176 10.7304 0 10.5315 0L3.75 0C2.7558 0.00119089 1.80267 0.396662 1.09967 1.09967C0.396662 1.80267 0.00119089 2.7558 0 3.75L0 14.25C0.00119089 15.2442 0.396662 16.1973 1.09967 16.9003C1.80267 17.6033 2.7558 17.9988 3.75 18H12.2573C12.7499 18.0014 13.238 17.9051 13.6932 17.7166C14.1484 17.5281 14.5618 17.2513 14.9093 16.902L16.9013 14.9085C17.2506 14.5612 17.5275 14.148 17.7161 13.6929C17.9047 13.2378 18.0012 12.7499 18 12.2573V7.48425C18 7.28534 17.921 7.09457 17.7803 6.95392C17.6397 6.81327 17.4489 6.73425 17.25 6.73425ZM13.8488 15.8415C13.5473 16.1423 13.166 16.3505 12.75 16.4415V13.5C12.75 13.3011 12.829 13.1103 12.9697 12.9697C13.1103 12.829 13.3011 12.75 13.5 12.75H16.4438C16.351 13.1651 16.143 13.5457 15.8438 13.848L13.8488 15.8415Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_401_11">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Edit;