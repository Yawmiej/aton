import ContentProvider from '@/components/Editor/Editor';
import { getStaticProps } from 'destack/build/server';

export default async function Page() {
  const props = await getStaticProps().then((res) => res.props);

  return (
    <div style={{ height: '100%' }}>
      <ContentProvider data={props?.data} />
    </div>
  );
}
