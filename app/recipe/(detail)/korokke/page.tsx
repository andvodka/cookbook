import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'コロッケ'
};

export default function Page() {
  return (
    <>
      <h2>コロッケ</h2>
      <h3>材料</h3>
      <ul>
        <li>ジャガイモ 400g</li>
        <li>合いびき肉 100g</li>
        <li>タマネギ 1/2個</li>
        <li>塩 適量</li>
        <li>コショウ 適量</li>
        <li>パン粉 適量</li>
        <li>卵黄 適量</li>
        <li>薄力粉 適量</li>
        <li>サラダ油（揚げる用） 適量</li>
      </ul>
      <h3>手順</h3>
      <ol>
        <li>ジャガイモを洗い、皮を剥いて一口サイズに切る。</li>
        <li>ジャガイモを茹でる。</li>
        <li>水をきり、ジャガイモをつぶす。</li>
        <li>タマネギをみじん切りにする。</li>
        <li>フライパンにタマネギと合いびき肉、塩、コショウを入れて炒める。</li>
        <li>玉ねぎがしんなりしたら、つぶしたジャガイモと混ぜ合わせる。</li>
        <li>食べやすい大きさに成形する。</li>
        <li>小麦粉、卵、パン粉の順に衣をつけ揚げる。</li>
      </ol>
    </>
  );
}
