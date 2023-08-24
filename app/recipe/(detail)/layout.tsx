import styles from '../styles.module.scss';

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={'m-4 ' + styles.prose}>
      {children}
    </div>
  );
}
