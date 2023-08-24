import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'カスタードクリーム'
};

export default function Page() {
  return (
    <>
      <h2>カスタードクリーム</h2>
      <h3>材料</h3>
      <ul>
        <li>牛乳 150ml</li>
        <li>砂糖 20g</li>
        <li>卵黄 1個</li>
        <li>薄力粉 15g</li>
      </ul>
      <h3>手順</h3>
      <ol>
        <li>卵黄と砂糖を入れ、白っぽくなるまでしっかりと混ぜる。</li>
        <li>薄力粉を加え、粉が見えなくなるまでよく混ぜる。</li>
        <li>温めた牛乳を少しずつ加えながらまぜる。</li>
        <li>ヘラで絶えず混ぜながら中火にかける。</li>
        <li>クリームになったら、火から下ろして粗熱を取る。</li>
      </ol>
    </>
  );
}
