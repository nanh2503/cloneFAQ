import { Container } from "@mui/material";
import { useDispatch, useSelector } from "../../app/hooks";
import { wrapper } from "../../app/store";
import Footer from "../../components/footer";
import {
  apiGetAppSettingDetails,
  apiGetSEOInfo
} from "../../features/appInfo/appInfo.api";
import { setAppInfo } from "../../features/appInfo/appInfo.slice";
import Layout from "../../features/common/Layout";
import { getWebAppProps, getWebSEOProps } from "../../utils/getSEOProps";

const ContactPage = (props: { seoInfo: any }) => {
  const { seoInfo } = props;
  const dispatch = useDispatch();
  const appInfo = useSelector((state) => state.appInfos.appInfo);

  return (
    <Layout {...getWebSEOProps(seoInfo)} {...getWebAppProps(appInfo)} disableAuth disableAds disableFBMessenger>
      {/* <Header disableAuth /> */}
      <Container maxWidth="xl">
        <div
          dangerouslySetInnerHTML={{ __html: seoInfo?.content }}
        ></div>
      </Container>
      <Footer />
    </Layout>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store, params }) => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  if (!appName) throw new Error("appName is not defined");
  const appInfo = await apiGetAppSettingDetails({ appName });
  store.dispatch(setAppInfo(appInfo));
  if (!appInfo) return {
    notFound: true,
  };
  const seoInfo = await apiGetSEOInfo(appInfo._id, "/contact");
  return {
    props: {
      seoInfo,
    },
    // revalidate: 600
  };
});

export default ContactPage;
