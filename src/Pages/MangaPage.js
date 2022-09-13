import { BasicDetail, ImageView } from "../components/ContentViews";

export function MangaDetail({route, navigation}) {
  const { slug } = route.params;
  return (
    <BasicDetail slug={slug} />
  )
}

export function MangaRead({route, navigation}) {
  const { slug } = route.params;
  return (
    <ImageView slug={slug} />
  )
}


