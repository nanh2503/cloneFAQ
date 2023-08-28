import { memo, PropsWithoutRef } from "react";

const AppStoreBadgeIcon = memo((props: PropsWithoutRef<{
  stroke?: string;
  fill?: string;
  contentFill?: string;
  hidden?: boolean;
}>) => {
  return <svg {...(props.hidden ? { display: "none" } : {})} width="201" height="71" viewBox="0 0 201 71" fill={props.fill || "none"} xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 1.12207H185.5C193.37 1.12207 199.75 7.50201 199.75 15.3721V55.3721C199.75 63.2421 193.37 69.6221 185.5 69.6221H15.5C7.62994 69.6221 1.25 63.2421 1.25 55.3721V15.3721C1.25 7.50201 7.62994 1.12207 15.5 1.12207Z" stroke={props.stroke || "none"} strokeWidth="1.5" />
    <path d="M67.0002 16.8111C67.9882 16.8111 68.8419 16.9974 69.5612 17.3701C70.2892 17.7341 70.8439 18.2584 71.2252 18.9431C71.6152 19.6277 71.8102 20.4337 71.8102 21.3611C71.8102 22.2884 71.6152 23.0944 71.2252 23.7791C70.8439 24.4551 70.2892 24.9751 69.5612 25.3391C68.8419 25.6944 67.9882 25.8721 67.0002 25.8721H64.1792V16.8111H67.0002ZM67.0002 24.8971C68.1702 24.8971 69.0629 24.5894 69.6782 23.9741C70.2936 23.3501 70.6012 22.4791 70.6012 21.3611C70.6012 20.2344 70.2892 19.3547 69.6652 18.7221C69.0499 18.0894 68.1616 17.7731 67.0002 17.7731H65.3622V24.8971H67.0002ZM76.4776 25.9891C75.8103 25.9891 75.2036 25.8374 74.6576 25.5341C74.1203 25.2307 73.6956 24.8017 73.3836 24.2471C73.0803 23.6837 72.9286 23.0337 72.9286 22.2971C72.9286 21.5691 73.0846 20.9277 73.3966 20.3731C73.7173 19.8097 74.1506 19.3807 74.6966 19.0861C75.2426 18.7827 75.8536 18.6311 76.5296 18.6311C77.2056 18.6311 77.8166 18.7827 78.3626 19.0861C78.9086 19.3807 79.3376 19.8054 79.6496 20.3601C79.9703 20.9147 80.1306 21.5604 80.1306 22.2971C80.1306 23.0337 79.966 23.6837 79.6366 24.2471C79.316 24.8017 78.8783 25.2307 78.3236 25.5341C77.769 25.8374 77.1536 25.9891 76.4776 25.9891ZM76.4776 24.9491C76.9023 24.9491 77.301 24.8494 77.6736 24.6501C78.0463 24.4507 78.3453 24.1517 78.5706 23.7531C78.8046 23.3544 78.9216 22.8691 78.9216 22.2971C78.9216 21.7251 78.809 21.2397 78.5836 20.8411C78.3583 20.4424 78.0636 20.1477 77.6996 19.9571C77.3356 19.7577 76.9413 19.6581 76.5166 19.6581C76.0833 19.6581 75.6846 19.7577 75.3206 19.9571C74.9653 20.1477 74.6793 20.4424 74.4626 20.8411C74.246 21.2397 74.1376 21.7251 74.1376 22.2971C74.1376 22.8777 74.2416 23.3674 74.4496 23.7661C74.6663 24.1647 74.9523 24.4637 75.3076 24.6631C75.663 24.8537 76.053 24.9491 76.4776 24.9491ZM91.1761 18.7481L88.9531 25.8721H87.7311L86.0151 20.2171L84.2991 25.8721H83.0771L80.8411 18.7481H82.0501L83.6881 24.7281L85.4561 18.7481H86.6651L88.3941 24.7411L90.0061 18.7481H91.1761ZM95.8211 18.6181C96.6878 18.6181 97.3898 18.8824 97.9271 19.4111C98.4645 19.9311 98.7331 20.6851 98.7331 21.6731V25.8721H97.5631V21.8421C97.5631 21.1314 97.3855 20.5897 97.0301 20.2171C96.6748 19.8357 96.1895 19.6451 95.5741 19.6451C94.9501 19.6451 94.4518 19.8401 94.0791 20.2301C93.7151 20.6201 93.5331 21.1877 93.5331 21.9331V25.8721H92.3501V18.7481H93.5331V19.7621C93.7671 19.3981 94.0835 19.1164 94.4821 18.9171C94.8895 18.7177 95.3358 18.6181 95.8211 18.6181ZM101.849 16.2521V25.8721H100.666V16.2521H101.849ZM106.972 25.9891C106.304 25.9891 105.698 25.8374 105.152 25.5341C104.614 25.2307 104.19 24.8017 103.878 24.2471C103.574 23.6837 103.423 23.0337 103.423 22.2971C103.423 21.5691 103.579 20.9277 103.891 20.3731C104.211 19.8097 104.645 19.3807 105.191 19.0861C105.737 18.7827 106.348 18.6311 107.024 18.6311C107.7 18.6311 108.311 18.7827 108.857 19.0861C109.403 19.3807 109.832 19.8054 110.144 20.3601C110.464 20.9147 110.625 21.5604 110.625 22.2971C110.625 23.0337 110.46 23.6837 110.131 24.2471C109.81 24.8017 109.372 25.2307 108.818 25.5341C108.263 25.8374 107.648 25.9891 106.972 25.9891ZM106.972 24.9491C107.396 24.9491 107.795 24.8494 108.168 24.6501C108.54 24.4507 108.839 24.1517 109.065 23.7531C109.299 23.3544 109.416 22.8691 109.416 22.2971C109.416 21.7251 109.303 21.2397 109.078 20.8411C108.852 20.4424 108.558 20.1477 108.194 19.9571C107.83 19.7577 107.435 19.6581 107.011 19.6581C106.577 19.6581 106.179 19.7577 105.815 19.9571C105.459 20.1477 105.173 20.4424 104.957 20.8411C104.74 21.2397 104.632 21.7251 104.632 22.2971C104.632 22.8777 104.736 23.3674 104.944 23.7661C105.16 24.1647 105.446 24.4637 105.802 24.6631C106.157 24.8537 106.547 24.9491 106.972 24.9491ZM111.738 22.2841C111.738 21.5561 111.886 20.9191 112.18 20.3731C112.475 19.8184 112.878 19.3894 113.389 19.0861C113.909 18.7827 114.486 18.6311 115.118 18.6311C115.742 18.6311 116.284 18.7654 116.743 19.0341C117.203 19.3027 117.545 19.6407 117.77 20.0481V18.7481H118.966V25.8721H117.77V24.5461C117.536 24.9621 117.185 25.3087 116.717 25.5861C116.258 25.8547 115.721 25.9891 115.105 25.9891C114.473 25.9891 113.901 25.8331 113.389 25.5211C112.878 25.2091 112.475 24.7714 112.18 24.2081C111.886 23.6447 111.738 23.0034 111.738 22.2841ZM117.77 22.2971C117.77 21.7597 117.662 21.2917 117.445 20.8931C117.229 20.4944 116.934 20.1911 116.561 19.9831C116.197 19.7664 115.794 19.6581 115.352 19.6581C114.91 19.6581 114.507 19.7621 114.143 19.9701C113.779 20.1781 113.489 20.4814 113.272 20.8801C113.056 21.2787 112.947 21.7467 112.947 22.2841C112.947 22.8301 113.056 23.3067 113.272 23.7141C113.489 24.1127 113.779 24.4204 114.143 24.6371C114.507 24.8451 114.91 24.9491 115.352 24.9491C115.794 24.9491 116.197 24.8451 116.561 24.6371C116.934 24.4204 117.229 24.1127 117.445 23.7141C117.662 23.3067 117.77 22.8344 117.77 22.2971ZM120.523 22.2841C120.523 21.5561 120.671 20.9191 120.965 20.3731C121.26 19.8184 121.663 19.3894 122.174 19.0861C122.694 18.7827 123.275 18.6311 123.916 18.6311C124.471 18.6311 124.987 18.7611 125.463 19.0211C125.94 19.2724 126.304 19.6061 126.555 20.0221V16.2521H127.751V25.8721H126.555V24.5331C126.321 24.9577 125.975 25.3087 125.515 25.5861C125.056 25.8547 124.519 25.9891 123.903 25.9891C123.271 25.9891 122.694 25.8331 122.174 25.5211C121.663 25.2091 121.26 24.7714 120.965 24.2081C120.671 23.6447 120.523 23.0034 120.523 22.2841ZM126.555 22.2971C126.555 21.7597 126.447 21.2917 126.23 20.8931C126.014 20.4944 125.719 20.1911 125.346 19.9831C124.982 19.7664 124.579 19.6581 124.137 19.6581C123.695 19.6581 123.292 19.7621 122.928 19.9701C122.564 20.1781 122.274 20.4814 122.057 20.8801C121.841 21.2787 121.732 21.7467 121.732 22.2841C121.732 22.8301 121.841 23.3067 122.057 23.7141C122.274 24.1127 122.564 24.4204 122.928 24.6371C123.292 24.8451 123.695 24.9491 124.137 24.9491C124.579 24.9491 124.982 24.8451 125.346 24.6371C125.719 24.4204 126.014 24.1127 126.23 23.7141C126.447 23.3067 126.555 22.8344 126.555 22.2971ZM136.323 25.9891C135.656 25.9891 135.049 25.8374 134.503 25.5341C133.966 25.2307 133.541 24.8017 133.229 24.2471C132.926 23.6837 132.774 23.0337 132.774 22.2971C132.774 21.5691 132.93 20.9277 133.242 20.3731C133.563 19.8097 133.996 19.3807 134.542 19.0861C135.088 18.7827 135.699 18.6311 136.375 18.6311C137.051 18.6311 137.662 18.7827 138.208 19.0861C138.754 19.3807 139.183 19.8054 139.495 20.3601C139.816 20.9147 139.976 21.5604 139.976 22.2971C139.976 23.0337 139.812 23.6837 139.482 24.2471C139.162 24.8017 138.724 25.2307 138.169 25.5341C137.615 25.8374 136.999 25.9891 136.323 25.9891ZM136.323 24.9491C136.748 24.9491 137.147 24.8494 137.519 24.6501C137.892 24.4507 138.191 24.1517 138.416 23.7531C138.65 23.3544 138.767 22.8691 138.767 22.2971C138.767 21.7251 138.655 21.2397 138.429 20.8411C138.204 20.4424 137.909 20.1477 137.545 19.9571C137.181 19.7577 136.787 19.6581 136.362 19.6581C135.929 19.6581 135.53 19.7577 135.166 19.9571C134.811 20.1477 134.525 20.4424 134.308 20.8411C134.092 21.2397 133.983 21.7251 133.983 22.2971C133.983 22.8777 134.087 23.3674 134.295 23.7661C134.512 24.1647 134.798 24.4637 135.153 24.6631C135.509 24.8537 135.899 24.9491 136.323 24.9491ZM145.003 18.6181C145.869 18.6181 146.571 18.8824 147.109 19.4111C147.646 19.9311 147.915 20.6851 147.915 21.6731V25.8721H146.745V21.8421C146.745 21.1314 146.567 20.5897 146.212 20.2171C145.856 19.8357 145.371 19.6451 144.756 19.6451C144.132 19.6451 143.633 19.8401 143.261 20.2301C142.897 20.6201 142.715 21.1877 142.715 21.9331V25.8721H141.532V18.7481H142.715V19.7621C142.949 19.3981 143.265 19.1164 143.664 18.9171C144.071 18.7177 144.517 18.6181 145.003 18.6181ZM154.756 19.7231V23.9221C154.756 24.2687 154.83 24.5157 154.977 24.6631C155.124 24.8017 155.38 24.8711 155.744 24.8711H156.615V25.8721H155.549C154.89 25.8721 154.396 25.7204 154.067 25.4171C153.738 25.1137 153.573 24.6154 153.573 23.9221V19.7231H152.65V18.7481H153.573V16.9541H154.756V18.7481H156.615V19.7231H154.756ZM161.584 18.6181C162.122 18.6181 162.607 18.7351 163.04 18.9691C163.474 19.1944 163.812 19.5367 164.054 19.9961C164.306 20.4554 164.431 21.0144 164.431 21.6731V25.8721H163.261V21.8421C163.261 21.1314 163.084 20.5897 162.728 20.2171C162.373 19.8357 161.888 19.6451 161.272 19.6451C160.648 19.6451 160.15 19.8401 159.777 20.2301C159.413 20.6201 159.231 21.1877 159.231 21.9331V25.8721H158.048V16.2521H159.231V19.7621C159.465 19.3981 159.786 19.1164 160.193 18.9171C160.609 18.7177 161.073 18.6181 161.584 18.6181ZM172.864 22.0371C172.864 22.2624 172.851 22.5007 172.825 22.7521H167.131C167.174 23.4541 167.412 24.0044 167.846 24.4031C168.288 24.7931 168.821 24.9881 169.445 24.9881C169.956 24.9881 170.381 24.8711 170.719 24.6371C171.065 24.3944 171.308 24.0737 171.447 23.6751H172.721C172.53 24.3597 172.149 24.9187 171.577 25.3521C171.005 25.7767 170.294 25.9891 169.445 25.9891C168.769 25.9891 168.162 25.8374 167.625 25.5341C167.096 25.2307 166.68 24.8017 166.377 24.2471C166.073 23.6837 165.922 23.0337 165.922 22.2971C165.922 21.5604 166.069 20.9147 166.364 20.3601C166.658 19.8054 167.07 19.3807 167.599 19.0861C168.136 18.7827 168.751 18.6311 169.445 18.6311C170.121 18.6311 170.719 18.7784 171.239 19.0731C171.759 19.3677 172.157 19.7751 172.435 20.2951C172.721 20.8064 172.864 21.3871 172.864 22.0371ZM171.642 21.7901C171.642 21.3394 171.542 20.9537 171.343 20.6331C171.143 20.3037 170.87 20.0567 170.524 19.8921C170.186 19.7187 169.809 19.6321 169.393 19.6321C168.795 19.6321 168.283 19.8227 167.859 20.2041C167.443 20.5854 167.204 21.1141 167.144 21.7901H171.642Z" fill={props.contentFill || "#000"} />
    <path d="M72.1242 51.4781H67.1202L66.2922 53.8721H63.6462L68.1642 41.2901H71.0982L75.6162 53.8721H72.9522L72.1242 51.4781ZM71.4402 49.4621L69.6222 44.2061L67.8042 49.4621H71.4402ZM79.825 45.3401C80.149 44.8841 80.593 44.5061 81.157 44.2061C81.733 43.8941 82.387 43.7381 83.119 43.7381C83.971 43.7381 84.739 43.9481 85.423 44.3681C86.119 44.7881 86.665 45.3881 87.061 46.1681C87.469 46.9361 87.673 47.8301 87.673 48.8501C87.673 49.8701 87.469 50.7761 87.061 51.5681C86.665 52.3481 86.119 52.9541 85.423 53.3861C84.739 53.8181 83.971 54.0341 83.119 54.0341C82.387 54.0341 81.739 53.8841 81.175 53.5841C80.623 53.2841 80.173 52.9061 79.825 52.4501V58.6241H77.305V43.9001H79.825V45.3401ZM85.099 48.8501C85.099 48.2501 84.973 47.7341 84.721 47.3021C84.481 46.8581 84.157 46.5221 83.749 46.2941C83.353 46.0661 82.921 45.9521 82.453 45.9521C81.997 45.9521 81.565 46.0721 81.157 46.3121C80.761 46.5401 80.437 46.8761 80.185 47.3201C79.945 47.7641 79.825 48.2861 79.825 48.8861C79.825 49.4861 79.945 50.0081 80.185 50.4521C80.437 50.8961 80.761 51.2381 81.157 51.4781C81.565 51.7061 81.997 51.8201 82.453 51.8201C82.921 51.8201 83.353 51.7001 83.749 51.4601C84.157 51.2201 84.481 50.8781 84.721 50.4341C84.973 49.9901 85.099 49.4621 85.099 48.8501ZM92.0242 45.3401C92.3482 44.8841 92.7922 44.5061 93.3562 44.2061C93.9322 43.8941 94.5862 43.7381 95.3182 43.7381C96.1702 43.7381 96.9382 43.9481 97.6222 44.3681C98.3182 44.7881 98.8642 45.3881 99.2602 46.1681C99.6682 46.9361 99.8722 47.8301 99.8722 48.8501C99.8722 49.8701 99.6682 50.7761 99.2602 51.5681C98.8642 52.3481 98.3182 52.9541 97.6222 53.3861C96.9382 53.8181 96.1702 54.0341 95.3182 54.0341C94.5862 54.0341 93.9382 53.8841 93.3742 53.5841C92.8222 53.2841 92.3722 52.9061 92.0242 52.4501V58.6241H89.5042V43.9001H92.0242V45.3401ZM97.2982 48.8501C97.2982 48.2501 97.1722 47.7341 96.9202 47.3021C96.6802 46.8581 96.3562 46.5221 95.9482 46.2941C95.5522 46.0661 95.1202 45.9521 94.6522 45.9521C94.1962 45.9521 93.7642 46.0721 93.3562 46.3121C92.9602 46.5401 92.6362 46.8761 92.3842 47.3201C92.1442 47.7641 92.0242 48.2861 92.0242 48.8861C92.0242 49.4861 92.1442 50.0081 92.3842 50.4521C92.6362 50.8961 92.9602 51.2381 93.3562 51.4781C93.7642 51.7061 94.1962 51.8201 94.6522 51.8201C95.1202 51.8201 95.5522 51.7001 95.9482 51.4601C96.3562 51.2201 96.6802 50.8781 96.9202 50.4341C97.1722 49.9901 97.2982 49.4621 97.2982 48.8501ZM114.62 53.9981C113.744 53.9981 112.952 53.8481 112.244 53.5481C111.548 53.2481 110.996 52.8161 110.588 52.2521C110.18 51.6881 109.97 51.0221 109.958 50.2541H112.658C112.694 50.7701 112.874 51.1781 113.198 51.4781C113.534 51.7781 113.99 51.9281 114.566 51.9281C115.154 51.9281 115.616 51.7901 115.952 51.5141C116.288 51.2261 116.456 50.8541 116.456 50.3981C116.456 50.0261 116.342 49.7201 116.114 49.4801C115.886 49.2401 115.598 49.0541 115.25 48.9221C114.914 48.7781 114.446 48.6221 113.846 48.4541C113.03 48.2141 112.364 47.9801 111.848 47.7521C111.344 47.5121 110.906 47.1581 110.534 46.6901C110.174 46.2101 109.994 45.5741 109.994 44.7821C109.994 44.0381 110.18 43.3901 110.552 42.8381C110.924 42.2861 111.446 41.8661 112.118 41.5781C112.79 41.2781 113.558 41.1281 114.422 41.1281C115.718 41.1281 116.768 41.4461 117.572 42.0821C118.388 42.7061 118.838 43.5821 118.922 44.7101H116.15C116.126 44.2781 115.94 43.9241 115.592 43.6481C115.256 43.3601 114.806 43.2161 114.242 43.2161C113.75 43.2161 113.354 43.3421 113.054 43.5941C112.766 43.8461 112.622 44.2121 112.622 44.6921C112.622 45.0281 112.73 45.3101 112.946 45.5381C113.174 45.7541 113.45 45.9341 113.774 46.0781C114.11 46.2101 114.578 46.3661 115.178 46.5461C115.994 46.7861 116.66 47.0261 117.176 47.2661C117.692 47.5061 118.136 47.8661 118.508 48.3461C118.88 48.8261 119.066 49.4561 119.066 50.2361C119.066 50.9081 118.892 51.5321 118.544 52.1081C118.196 52.6841 117.686 53.1461 117.014 53.4941C116.342 53.8301 115.544 53.9981 114.62 53.9981ZM124.184 45.9701V50.7941C124.184 51.1301 124.262 51.3761 124.418 51.5321C124.586 51.6761 124.862 51.7481 125.246 51.7481H126.416V53.8721H124.832C122.708 53.8721 121.646 52.8401 121.646 50.7761V45.9701H120.458V43.9001H121.646V41.4341H124.184V43.9001H126.416V45.9701H124.184ZM132.657 54.0341C131.697 54.0341 130.833 53.8241 130.065 53.4041C129.297 52.9721 128.691 52.3661 128.247 51.5861C127.815 50.8061 127.599 49.9061 127.599 48.8861C127.599 47.8661 127.821 46.9661 128.265 46.1861C128.721 45.4061 129.339 44.8061 130.119 44.3861C130.899 43.9541 131.769 43.7381 132.729 43.7381C133.689 43.7381 134.559 43.9541 135.339 44.3861C136.119 44.8061 136.731 45.4061 137.175 46.1861C137.631 46.9661 137.859 47.8661 137.859 48.8861C137.859 49.9061 137.625 50.8061 137.157 51.5861C136.701 52.3661 136.077 52.9721 135.285 53.4041C134.505 53.8241 133.629 54.0341 132.657 54.0341ZM132.657 51.8381C133.113 51.8381 133.539 51.7301 133.935 51.5141C134.343 51.2861 134.667 50.9501 134.907 50.5061C135.147 50.0621 135.267 49.5221 135.267 48.8861C135.267 47.9381 135.015 47.2121 134.511 46.7081C134.019 46.1921 133.413 45.9341 132.693 45.9341C131.973 45.9341 131.367 46.1921 130.875 46.7081C130.395 47.2121 130.155 47.9381 130.155 48.8861C130.155 49.8341 130.389 50.5661 130.857 51.0821C131.337 51.5861 131.937 51.8381 132.657 51.8381ZM142.227 45.4481C142.551 44.9201 142.971 44.5061 143.487 44.2061C144.015 43.9061 144.615 43.7561 145.287 43.7561V46.4021H144.621C143.829 46.4021 143.229 46.5881 142.821 46.9601C142.425 47.3321 142.227 47.9801 142.227 48.9041V53.8721H139.707V43.9001H142.227V45.4481ZM156.255 48.6701C156.255 49.0301 156.231 49.3541 156.183 49.6421H148.893C148.953 50.3621 149.205 50.9261 149.649 51.3341C150.093 51.7421 150.639 51.9461 151.287 51.9461C152.223 51.9461 152.889 51.5441 153.285 50.7401H156.003C155.715 51.7001 155.163 52.4921 154.347 53.1161C153.531 53.7281 152.529 54.0341 151.341 54.0341C150.381 54.0341 149.517 53.8241 148.749 53.4041C147.993 52.9721 147.399 52.3661 146.967 51.5861C146.547 50.8061 146.337 49.9061 146.337 48.8861C146.337 47.8541 146.547 46.9481 146.967 46.1681C147.387 45.3881 147.975 44.7881 148.731 44.3681C149.487 43.9481 150.357 43.7381 151.341 43.7381C152.289 43.7381 153.135 43.9421 153.879 44.3501C154.635 44.7581 155.217 45.3401 155.625 46.0961C156.045 46.8401 156.255 47.6981 156.255 48.6701ZM153.645 47.9501C153.633 47.3021 153.399 46.7861 152.943 46.4021C152.487 46.0061 151.929 45.8081 151.269 45.8081C150.645 45.8081 150.117 46.0001 149.685 46.3841C149.265 46.7561 149.007 47.2781 148.911 47.9501H153.645Z" fill={props.contentFill || "#000"} />
    <path d="M51.8237 28.4291C51.7585 28.3259 51.6997 28.2155 51.6264 28.1172C49.1578 24.8381 44.7502 23.5799 40.5834 25.3282C38.1421 26.3519 35.9617 26.5268 33.5784 25.3322C31.9874 24.535 30.2401 24.4794 28.4832 24.9502C24.3204 26.0657 21.297 29.7801 20.9081 34.4504C20.3219 41.4849 22.7657 47.4844 27.3874 52.6585C29.2369 54.7292 30.9809 55.0686 33.5752 53.9038C36.2459 52.7044 38.8056 52.6552 41.4973 53.8522C44.2228 55.0645 46.272 54.6277 48.1263 52.2796C49.632 50.3725 50.8358 48.2227 52.1136 46.1439C52.4904 45.5313 52.6643 44.7937 52.9284 44.1223C46.429 41.0697 45.7148 32.5279 51.8237 28.4291Z" fill={props.contentFill || "#000"} />
    <path d="M44.6382 14.9737C40.4336 14.91 36.0051 20.0858 36.9069 23.9508C41.019 24.378 45.1898 19.582 44.6382 14.9737Z" fill={props.contentFill || "#000"} />
  </svg>
});

export default AppStoreBadgeIcon;