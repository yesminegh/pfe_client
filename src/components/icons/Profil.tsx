import * as React from 'react';

function Profil({ fill = 'currentColor', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.0834 10.8334C11.8362 10.8334 11.5945 10.76 11.3889 10.6227C11.1834 10.4853 11.0231 10.2901 10.9285 10.0617C10.8339 9.8333 10.8092 9.58197 10.8574 9.33949C10.9056 9.09702 11.0247 8.87429 11.1995 8.69947C11.3743 8.52466 11.597 8.40561 11.8395 8.35738C12.082 8.30914 12.3333 8.3339 12.5617 8.42851C12.7901 8.52312 12.9854 8.68333 13.1227 8.88889C13.2601 9.09446 13.3334 9.33613 13.3334 9.58336C13.3334 9.91488 13.2017 10.2328 12.9673 10.4672C12.7329 10.7017 12.4149 10.8334 12.0834 10.8334ZM19.9376 15.12C20.0416 15.7185 20.0134 16.3325 19.8551 16.919C19.6969 17.5055 19.4122 18.0503 19.0212 18.5152C18.6302 18.9801 18.1423 19.3539 17.5916 19.6104C17.041 19.8669 16.4409 19.9999 15.8334 20H12.5001C12.279 20 12.0671 19.9122 11.9108 19.7559C11.7545 19.5997 11.6667 19.3877 11.6667 19.1667V17.2809C11.1227 17.4243 10.5627 17.498 10.0001 17.5C9.43712 17.4971 8.87693 17.4215 8.33339 17.275V19.1667C8.33339 19.3877 8.24559 19.5997 8.08931 19.7559C7.93303 19.9122 7.72107 20 7.50005 20H4.16672C3.55924 19.9999 2.95915 19.8669 2.40847 19.6104C1.8578 19.3539 1.36987 18.9801 0.978867 18.5152C0.587865 18.0503 0.303252 17.5055 0.144967 16.919C-0.0133187 16.3325 -0.0414467 15.7185 0.0625532 15.12L0.312553 13.67C0.395685 13.1878 0.621382 12.7415 0.960539 12.3887C1.2997 12.0359 1.73676 11.7928 2.21537 11.6908C2.69398 11.5887 3.19219 11.6324 3.64576 11.8161C4.09932 11.9999 4.48743 12.3153 4.76005 12.7217C5.81339 14.27 7.84089 15.8334 10.0001 15.8334C12.6084 15.8334 15.1784 13.5175 15.9417 11.3534C16.003 11.1907 16.1122 11.0504 16.2549 10.9512C16.3976 10.8519 16.5671 10.7984 16.7409 10.7975L17.1009 10.8034C17.2622 10.8053 17.4224 10.7752 17.572 10.7148C17.7216 10.6543 17.8577 10.5647 17.9724 10.4512C18.0871 10.3377 18.178 10.2025 18.24 10.0535C18.302 9.90454 18.3337 9.74472 18.3334 9.58336C18.3331 9.29108 18.2304 9.00815 18.0431 8.78374C17.8559 8.55933 17.5959 8.40763 17.3084 8.35502C17.1311 8.32286 16.969 8.2341 16.8464 8.10203C16.7238 7.96997 16.6473 7.80173 16.6284 7.62252C16.4571 5.98526 15.6844 4.4698 14.4599 3.36954C13.2354 2.26928 11.6462 1.6625 10.0001 1.66669C5.35255 1.66669 4.07672 4.69002 3.05172 7.12002C2.86505 7.55919 2.68922 7.97836 2.50005 8.35586C4.17571 8.26725 5.80963 7.80086 7.27957 6.99157C8.74951 6.18228 10.0174 5.05105 10.9884 3.68252C11.052 3.59344 11.1325 3.51776 11.2253 3.45979C11.3181 3.40182 11.4215 3.36271 11.5294 3.34468C11.6374 3.32665 11.7478 3.33006 11.8544 3.35471C11.9611 3.37936 12.0618 3.42478 12.1509 3.48836C12.24 3.55194 12.3157 3.63244 12.3736 3.72527C12.4316 3.81811 12.4707 3.92145 12.4887 4.02939C12.5068 4.13734 12.5034 4.24778 12.4787 4.35441C12.454 4.46105 12.4086 4.56178 12.3451 4.65086C11.2634 6.18432 9.85224 7.45625 8.21505 8.37336C8.46462 8.43463 8.68923 8.57133 8.85831 8.76484C9.02739 8.95835 9.13273 9.19928 9.15997 9.4548C9.18721 9.71033 9.13503 9.96804 9.01054 10.1928C8.88605 10.4177 8.6953 10.5986 8.46427 10.7111C8.23323 10.8236 7.97313 10.8622 7.71939 10.8216C7.46565 10.781 7.23059 10.6631 7.04623 10.4841C6.86187 10.3051 6.73716 10.0736 6.68908 9.82116C6.641 9.56873 6.6719 9.3076 6.77755 9.07336C4.86157 9.84918 2.78989 10.1632 0.730053 9.99002C0.558363 9.96701 0.398111 9.89107 0.271584 9.77276C0.145057 9.65444 0.0585451 9.49964 0.0240794 9.32988C-0.0103864 9.16012 0.00890754 8.98383 0.0792778 8.82555C0.149648 8.66726 0.267597 8.53483 0.41672 8.44669C0.920497 7.87511 1.29537 7.20182 1.51589 6.47252C2.60339 3.89502 4.25005 2.33394e-05 10.0001 2.33394e-05C11.962 -0.00462456 13.8624 0.685063 15.3647 1.94699C16.867 3.20892 17.8743 4.9617 18.2084 6.89502C18.7387 7.11672 19.1917 7.49017 19.5104 7.96847C19.8292 8.44676 19.9995 9.00857 20.0001 9.58336C19.9986 10.2758 19.7457 10.9442 19.2884 11.4642C19.2942 11.4859 19.3092 11.5034 19.3134 11.5267L19.9376 15.12ZM6.66672 16.6167C5.3486 15.9103 4.22161 14.8946 3.38255 13.6567C3.31115 13.5488 3.21427 13.4601 3.10047 13.3985C2.98668 13.3368 2.85946 13.3042 2.73005 13.3034H2.71589C2.53344 13.3072 2.35799 13.3743 2.21952 13.4931C2.08105 13.612 1.98816 13.7753 1.95672 13.955L1.70672 15.4042C1.64417 15.7632 1.66084 16.1315 1.75558 16.4834C1.85032 16.8352 2.02084 17.1621 2.25518 17.4411C2.48953 17.7202 2.78204 17.9446 3.11224 18.0987C3.44243 18.2529 3.80233 18.3329 4.16672 18.3334H6.66672V16.6167ZM18.2959 15.4042L17.7726 12.3934C17.6141 12.4311 17.4527 12.4551 17.2901 12.465C16.4493 14.2391 15.0628 15.6975 13.3334 16.6267V18.3334H15.8334C16.1979 18.3333 16.558 18.2535 16.8884 18.0996C17.2189 17.9457 17.5116 17.7214 17.7462 17.4424C17.9809 17.1634 18.1516 16.8365 18.2466 16.4845C18.3415 16.1326 18.3583 15.7642 18.2959 15.405V15.4042Z"
        fill="black"
      />
    </svg>
  );
}

export default Profil;