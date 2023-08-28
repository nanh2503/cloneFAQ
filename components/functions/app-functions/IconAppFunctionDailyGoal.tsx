import { memo } from "react";

export default memo((props: { iconColor?: string }) => (
    <svg width="50" height="50" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.4841 14.6988C50.4864 14.0673 50.4933 13.4642 50.4818 12.8632C50.3948 8.25011 47.1056 5.11207 42.3481 5.09895C41.6312 5.09677 40.9119 5.09895 40.1079 5.09895V2.65801C40.1079 1.26599 38.9466 0.138392 37.515 0.138392H37.5105C36.0789 0.138392 34.9176 1.26599 34.9176 2.65801V5.0334C32.5858 5.0334 30.3594 5.0334 28.0574 5.0334L22.9196 5.04432C20.5581 5.04432 18.3271 5.04432 15.993 5.04432V2.65145C15.9953 1.25944 14.834 0.131836 13.4024 0.131836C11.9708 0.131836 10.8095 1.25944 10.8095 2.65145V5.13392C7.79972 4.92413 4.9915 5.14266 2.76051 7.32793C0.790634 9.25752 0.392078 11.5827 0.506606 14.0826H0.488281V22.7319H0.506606C0.506606 29.2156 0.504315 35.7015 0.513477 42.1852C0.513477 42.8364 0.545545 43.5007 0.687559 44.1344C1.51216 47.8144 4.6044 50.1243 8.71136 50.1264C19.9007 50.1352 31.09 50.133 42.2817 50.1221C42.978 50.1221 43.6927 50.0784 44.3684 49.932C48.1203 49.1212 50.4681 46.1449 50.4773 42.1786C50.491 35.2841 50.4818 28.3917 50.4818 21.4972V14.6988H50.4841ZM14.9737 40.555C13.3543 40.5331 12.0693 39.2897 12.0785 37.7534C12.0876 36.2019 13.4162 34.9563 15.0379 34.9782C16.6573 35 17.9423 36.2434 17.9331 37.7797C17.924 39.3312 16.5977 40.5746 14.9737 40.555ZM14.9875 30.9267C13.3703 30.9157 12.0785 29.6767 12.0785 28.1383C12.0785 26.5867 13.3978 25.3367 15.0241 25.3499C16.6412 25.3608 17.9331 26.5998 17.9331 28.1383C17.9354 29.6898 16.6138 30.9398 14.9875 30.9267ZM25.4576 40.555C23.8244 40.5353 22.528 39.2657 22.56 37.7207C22.5921 36.1779 23.9069 34.9585 25.5171 34.9782C27.1503 34.9978 28.4467 36.2675 28.4147 37.8124C28.3826 39.3552 27.0678 40.5746 25.4576 40.555ZM25.5057 30.9267C23.8794 30.9376 22.56 29.6876 22.56 28.1383C22.56 26.602 23.8542 25.363 25.4713 25.352C27.0976 25.3411 28.417 26.5911 28.417 28.1404C28.4147 29.6767 27.1205 30.9157 25.5057 30.9267ZM35.9643 40.555C34.3495 40.5528 33.0508 39.3203 33.0393 37.7819C33.0301 36.2325 34.3426 34.9782 35.9712 34.9803C37.586 34.9825 38.8848 36.215 38.8962 37.7534C38.9077 39.3006 37.5929 40.5571 35.9643 40.555ZM35.9391 30.9267C34.3197 30.907 33.0324 29.6636 33.0416 28.1273C33.0485 26.5758 34.377 25.3302 35.9987 25.3499C37.6181 25.3695 38.9054 26.6129 38.8962 28.1492C38.8894 29.7007 37.5631 30.9463 35.9391 30.9267ZM46.3841 16.01C46.3841 17.048 45.5182 17.8915 44.4485 17.8915H6.92244C5.85275 17.8915 4.98692 17.0502 4.98692 16.01V12.8195C4.98692 10.584 6.85143 8.77239 9.14886 8.77239H42.2175C44.5173 8.77239 46.3795 10.584 46.3795 12.8195V16.01H46.3841Z" fill={props.iconColor || "#435DA1"} />
    </svg>
))