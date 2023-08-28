import { memo } from "react";

const CheckFeatureIcon = memo((props: { fill?: string; }) => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
  <path d="M12.6496 1.29642C12.5077 1.16696 12.3416 1.0668 12.1608 1.00173C11.98 0.936653 11.7881 0.907933 11.5961 0.917238C11.4041 0.926544 11.2159 0.973692 11.0423 1.05595C10.8686 1.13821 10.713 1.25396 10.5843 1.39654C10.0964 1.89712 9.64192 2.43108 9.1607 2.94501L5.224 7.25669C4.34844 6.42238 3.53303 5.61478 2.68421 4.84055C2.39907 4.57181 2.02012 4.4249 1.62809 4.43113C1.23606 4.43737 0.861947 4.59624 0.585522 4.87391C0.449867 5.01369 0.343148 5.17878 0.271408 5.35977C0.199668 5.54075 0.164321 5.73408 0.167424 5.92871C0.170528 6.12333 0.212006 6.31545 0.28948 6.49406C0.366954 6.67268 0.47893 6.8343 0.618973 6.96969C1.82204 8.17109 3.04738 9.348 4.295 10.5005C4.4266 10.632 4.58284 10.7364 4.75487 10.8077C4.92689 10.8789 5.11133 10.9155 5.29755 10.9155C5.48377 10.9155 5.66816 10.8789 5.84019 10.8077C6.01222 10.7364 6.1685 10.632 6.3001 10.5005L6.38699 10.407C8.53914 8.07097 10.6757 5.72157 12.7966 3.35882C12.925 3.21433 13.0236 3.04594 13.0867 2.86333C13.1499 2.68072 13.1763 2.48747 13.1645 2.29463C13.1527 2.1018 13.1029 1.91319 13.018 1.73961C12.9331 1.56602 12.8147 1.41087 12.6696 1.28306L12.6496 1.29642Z" fill={props.fill || "#27AE60"} />
</svg>);

export default CheckFeatureIcon;