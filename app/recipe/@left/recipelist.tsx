import Link from 'next/link';

const recipes: {
  slug: string,
  title: string
}[] = [
  {
    slug: 'custard-cream',
    title: 'カスタードクリーム'
  }
];

export default function RecipeList({ ...props }) {
  return (
    <div {...props}>
      <ul className="m-4 pl-4 space-y-4 list-disc">
        {recipes.map((recipe) => (
          <li key={recipe.slug}>
            <Link className="text-blue-600 visited:text-purple-800 underline" href={'/recipe/' + recipe.slug}>
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
