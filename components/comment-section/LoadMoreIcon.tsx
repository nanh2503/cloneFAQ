import { SvgIcon, SvgIconProps } from "@mui/material";
import { memo, PropsWithoutRef } from 'react';

const LoadMoreIcon = memo((props: PropsWithoutRef<SvgIconProps>) => (
  <SvgIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5" fill="none">
      <path d="M3.92292 3.06203C4.04435 2.91799 4.11791 2.81674 4.20517 2.72917C4.97462 1.95865 5.74565 1.1897 6.51826 0.422321C6.76959 0.17355 7.11017 0.179272 7.3054 0.431774C7.45874 0.630791 7.45276 0.897224 7.2685 1.08156C6.27798 2.0735 5.28438 3.06236 4.28771 4.04815C4.07128 4.2621 3.78005 4.26309 3.56338 4.04815C2.56172 3.05838 1.56347 2.0652 0.56862 1.06863C0.357433 0.857172 0.367153 0.539989 0.570361 0.347192C0.773569 0.154395 1.07601 0.161609 1.29593 0.379532C2.12272 1.19898 2.94711 2.02084 3.76908 2.8451C3.81571 2.89411 3.84912 2.95729 3.92292 3.06203Z" fill="#333333" />
    </svg>
  </SvgIcon>
))

export default LoadMoreIcon;