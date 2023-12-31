import { memo, PropsWithoutRef } from "react";

const TumblrShareIcon = memo((props: PropsWithoutRef<{ url?: string }>) => {
  const { url = '' } = props;
  const shareUrl = `https://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=${url}&posttype=link`;
  return <a href={shareUrl} target="_blank" title="Share on Tumblr">
    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="50px"><path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M20,21.714c0,0.055-0.022,0.11-0.066,0.143C19.879,21.912,18.305,23,15.429,23C11.979,23,12,18.87,12,18.429v-4.571H9.913c-0.111,0-0.199-0.088-0.199-0.199v-1.899c0-0.088,0.045-0.154,0.121-0.187c0.033-0.011,3.307-1.453,3.307-4.373C13.143,7.088,13.231,7,13.342,7h1.889c0.11,0,0.198,0.088,0.198,0.199v4.373h3.23c0.099,0,0.199,0.088,0.199,0.199v1.889c0,0.11-0.099,0.198-0.199,0.198h-3.23v4.571c0,0.066-0.105,1.456,1.371,1.456c1.213,0,2.88-0.397,2.891-0.397c0.066-0.045,0.143-0.045,0.199-0.011C19.955,19.51,20,19.576,20,19.653V21.714z"></path></svg>
  </a>
});

export default TumblrShareIcon;