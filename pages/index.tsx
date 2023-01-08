import React from "react";
import Head from "next/head";
import * as dashboardActions from "@/state/actions/dashboard/dashboardActions";
import { BackgroundImage } from "@/components/common/BackgroundImage/BackgroundImage";
import { useAppSelector } from "@/lib/hooks/useAppSelector";
import { getDashboard } from "@/state/selectors/dashboard/dashboardSelectors";
import { AboutSection } from "@/components/MainScreen/AboutSection/AboutSection";
import { LanguagesSection } from "@/components/MainScreen/LanguagesSection/LanguagesSection";
import { ProgrammingSection } from "@/components/MainScreen/ProgramingSection/ProgrammingSection";
import { PortfolioSection } from "@/components/MainScreen/PortfolioSection/PortfolioSection";
import { ContactSection } from "@/components/MainScreen/ContactSection/ContactSection";
import { Footer } from "@/components/MainScreen/Footer/Footer";

import mainImage from "@/assets/images/main.jpg";
import mainImageTwo from "@/assets/images/main2.png";
import mainImageThree from "@/assets/images/main3.png";
import { wrapper } from "@/state/store";

const Main = () => {
  const dashboard = useAppSelector(getDashboard);

  return (
    <>
      <Head>
        <title>Lautaro Aguirre</title>
      </Head>

      <div>
        <BackgroundImage
          sectionName="main"
          image={mainImage.src}
          showBox
          boxText={"Lautaro Aguirre"}
          cover
        />

        <AboutSection />

        <LanguagesSection />

        <ProgrammingSection />

        <BackgroundImage
          image={mainImageTwo.src}
          showBox
          boxText={"Portfolio"}
          sectionName={"portfolio"}
        />

        <PortfolioSection />

        <BackgroundImage
          image={mainImageThree.src}
          showBox
          boxText={"Contact"}
          sectionName={"contact"}
        />

        <ContactSection />

        <Footer />
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await Promise.all([
      store.dispatch(dashboardActions.fetchAbout()),
      store.dispatch(dashboardActions.fetchLanguages()),
      store.dispatch(dashboardActions.fetchPortfolio()),
      store.dispatch(dashboardActions.fetchSkills()),
    ]);

    return {
      props: {},
    };
  }
);

export default Main;