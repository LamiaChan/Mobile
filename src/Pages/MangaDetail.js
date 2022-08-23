import { BasicDetail } from "../components/ContentViews";

export default function MangaDetail({route, navigation}) {
  const { slug } = route.params;
  return (
    <BasicDetail slug={slug} />
  )
}


