import * as React from 'react';

function Send({ fill = 'currentColor', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5 10H15C14.0808 10 13.3333 10.7475 13.3333 11.6667C13.3333 12.5858 12.5858 13.3333 11.6667 13.3333H8.33333C7.41417 13.3333 6.66667 12.5858 6.66667 11.6667C6.66667 10.7475 5.91917 10 5 10H2.5C1.12167 10 0 11.1217 0 12.5V15.8333C0 18.1308 1.86917 20 4.16667 20H15.8333C18.1308 20 20 18.1308 20 15.8333V12.5C20 11.1217 18.8783 10 17.5 10ZM18.3333 15.8333C18.3333 17.2117 17.2117 18.3333 15.8333 18.3333H4.16667C2.78833 18.3333 1.66667 17.2117 1.66667 15.8333V12.5C1.66667 12.04 2.04 11.6667 2.5 11.6667L5 11.665V11.6667C5 13.505 6.495 15 8.33333 15H11.6667C13.505 15 15 13.505 15 11.6667H17.5C17.96 11.6667 18.3333 12.04 18.3333 12.5V15.8333ZM6.0775 4.41083C5.75167 4.085 5.75167 3.55833 6.0775 3.2325L8.82167 0.488333C9.14333 0.166667 9.56583 0.005 9.98833 0.0025L10 0L10.0117 0.0025C10.435 0.005 10.8567 0.166667 11.1783 0.488333L13.9225 3.2325C14.2483 3.55833 14.2483 4.085 13.9225 4.41083C13.76 4.57333 13.5467 4.655 13.3333 4.655C13.12 4.655 12.9067 4.57333 12.7442 4.41083L10.8333 2.5V8.33333C10.8333 8.79417 10.4608 9.16667 10 9.16667C9.53917 9.16667 9.16667 8.79417 9.16667 8.33333V2.5L7.25583 4.41083C6.93 4.73667 6.40333 4.73667 6.0775 4.41083V4.41083Z"
        fill={fill}
      />
    </svg>
  );
}

export default Send;
