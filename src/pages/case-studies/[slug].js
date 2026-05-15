// Dynamic case study route: statically generates one detail page for each slug in src/data/caseStudies.js.
// Routing depends on the slug values, so update data and sitemap assumptions together when adding or renaming studies.
import CaseStudyPage from "../../components/CaseStudyPage";
import { caseStudies, caseStudyMap } from "../../data/caseStudies";

export default function CaseStudyDetailPage({ caseStudy }) {
  return <CaseStudyPage caseStudy={caseStudy} />;
}

export function getStaticPaths() {
  return {
    paths: caseStudies.map((caseStudy) => ({
      params: { slug: caseStudy.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      caseStudy: caseStudyMap[params.slug],
    },
  };
}
