import { memo } from "react";

export default memo((props: { iconColor?: string }) => (
    <svg width="52" height="41" viewBox="0 0 53 42" fill={props.iconColor || "none"} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M23.9077 35.9286C18.1725 35.9298 12.4372 35.9355 6.70173 35.9521C4.485 35.9589 3.13752 34.2961 3.14161 32.36C3.14948 29.0147 3.14812 25.67 3.14675 22.325C3.14622 21.0384 3.1457 19.7517 3.1457 18.4649C3.1457 17.2648 3.14553 16.0646 3.14536 14.8643C3.14485 11.2633 3.14434 7.66197 3.14842 4.06135C3.14979 2.31971 4.13212 0.961468 5.64991 0.590298C5.87744 0.534554 6.11996 0.516879 6.35566 0.516879C13.0826 0.514331 19.8091 0.513905 26.5356 0.514277C33.2622 0.513905 39.9886 0.514331 46.7155 0.516879C46.9513 0.516879 47.1938 0.534554 47.4213 0.590298C48.9391 0.961468 49.9214 2.31971 49.9228 4.06135C49.9269 7.66195 49.9264 11.2633 49.9258 14.8643C49.9257 16.0646 49.9255 17.2648 49.9255 18.4649C49.9255 19.7516 49.925 21.0382 49.9245 22.3247C49.9231 25.6698 49.9217 29.0146 49.9296 32.36C49.9337 34.2961 48.5862 35.9589 46.3695 35.9521C40.634 35.9355 34.8987 35.9298 29.1635 35.9286C27.4116 35.9283 25.6596 35.9282 23.9077 35.9286ZM46.1338 12.655V6.71937C46.1338 5.23197 45.5643 4.66502 44.0724 4.66502C42.2809 4.66502 40.4895 4.66482 38.6981 4.66462C38.2776 4.66458 37.8571 4.66453 37.4366 4.66448C37.3712 4.67343 37.2971 4.67747 37.2128 4.67725C33.6536 4.67056 30.0946 4.66719 26.5356 4.66557C22.9766 4.66719 19.4176 4.67056 15.8584 4.67725C15.7741 4.67747 15.7 4.67343 15.6346 4.66448C15.2141 4.66453 14.7936 4.66458 14.3731 4.66462C12.5817 4.66482 10.7903 4.66502 8.99885 4.66502C7.50695 4.66502 6.93744 5.23197 6.93744 6.71937V12.655C6.98262 12.6736 7.0279 12.6924 7.07327 12.7111V13.1883V29.7306C7.07327 31.2085 7.63188 31.7741 9.09108 31.7741H14.7757H14.8557H15.2825H15.4402H37.631H37.7887H38.2155H38.2955H43.9801C45.4393 31.7741 45.9979 31.2085 45.9979 29.7306V13.1883V12.7111C46.0433 12.6924 46.0886 12.6736 46.1338 12.655Z" fill={props.iconColor || "#6C81FF"} />
        <path d="M51.5079 38.4429C47.0199 38.4144 42.532 38.3926 38.044 38.3505C37.4649 38.345 36.9581 38.4905 36.5494 38.8739C36.1066 39.29 35.6052 39.3919 35.0152 39.3906C29.2847 39.3838 23.5555 39.3974 17.825 39.4055C17.6383 39.4055 17.4449 39.3851 17.2664 39.4273C16.9149 39.5089 16.6955 39.411 16.5225 39.0847C16.1587 38.4008 15.566 38.1669 14.8099 38.2852C14.5251 38.3301 14.2363 38.36 13.9488 38.36C10.4118 38.36 6.87623 38.3532 3.33927 38.3491C2.5395 38.3478 1.73973 38.3342 0.942691 38.3627C0.791457 38.3681 0.578913 38.5136 0.512152 38.6509C0.266908 39.1554 0.780558 40.2784 1.32554 40.602C2.60217 41.3633 4.00279 41.5156 5.447 41.5143C12.4351 41.5088 19.4245 41.5115 26.4126 41.5115C26.4126 41.502 26.4126 41.4925 26.4126 41.4816C33.3503 41.4816 40.288 41.4694 47.2243 41.4912C48.6235 41.4952 49.9506 41.2559 51.264 40.791C51.8676 40.5775 52.2273 40.2675 52.3908 39.6421C52.5856 38.8984 52.294 38.4484 51.5079 38.4429Z" fill={props.iconColor || "#6C81FF"} />
        <path d="M20.7241 17.949C20.9986 18.7536 21.0489 19.5155 20.8407 20.3167C20.6774 20.9474 20.5195 21.578 20.3813 22.2121C20.2503 22.8138 20.471 22.9911 21.1278 22.8104C21.7667 22.6349 22.4074 22.4525 23.0247 22.2275C23.8108 21.9394 24.5645 21.9224 25.3685 22.1883C26.5045 22.565 27.6871 22.6059 28.8716 22.3587C32.1665 21.6718 34.503 18.8951 34.4851 15.3786C34.4994 14.4735 34.1639 13.3263 33.5016 12.2558C31.2279 8.58081 26.0163 7.75411 22.7358 10.628C20.4028 12.67 19.7855 15.1877 20.7241 17.949ZM31.1902 14.7922C31.7304 14.8024 32.1647 15.232 32.1467 15.7399C32.1288 16.2343 31.6371 16.6723 31.1238 16.6485C30.6105 16.6246 30.2355 16.2257 30.2391 15.7093C30.2462 15.1246 30.6016 14.7803 31.1902 14.7922ZM27.3964 14.7871C27.933 14.7956 28.3691 15.2115 28.3745 15.7195C28.3798 16.2036 27.9043 16.6468 27.3802 16.6468C26.8652 16.6451 26.3986 16.1951 26.4058 15.7059C26.4148 15.1962 26.8652 14.7786 27.3964 14.7871ZM23.6241 14.7871C24.1607 14.7939 24.6112 15.2252 24.604 15.7229C24.5968 16.207 24.1069 16.657 23.5954 16.6468C23.0714 16.6382 22.6192 16.1951 22.6245 15.699C22.6299 15.1979 23.0876 14.7803 23.6241 14.7871Z" fill={props.iconColor || "#6C81FF"} />
    </svg>

))