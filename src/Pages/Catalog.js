import Stack from '../Navigation/Stack';
import { MangaDetail, MangaRead } from './MangaPage';
import { BasicMangaCard } from '../components/ContentCards';
import { CollScrollPreview, CatalogModal } from '../components/ContentViews';
import { Fragment, useRef } from 'react';

function Catalog() {
  const cards = [...Array(5)].map((_v, i) => (
    <BasicMangaCard
      margin={5}
      key={i}
    />
  ))

  return (
    <CollScrollPreview cards={cards} />
  )
}

export default function CatalogNavigation() {
  const catalogModalRef = useRef()
  const catalogModal = () => catalogModalRef.current.changeModalVisibility()

  return (
    <Fragment>
      <CatalogModal ref={catalogModalRef} />
      <Stack
        screens={
          [
            {
              name: 'Catalog',
              component: Catalog,
              options:
              {
                modal: true,
                modalComponent: catalogModal
              }
            },
            {
              name: 'MangaDetail',
              component: MangaDetail
            },
            {
              name: 'MangaRead',
              component: MangaRead
            }
          ]
        }
      />
    </Fragment>
  )
}

