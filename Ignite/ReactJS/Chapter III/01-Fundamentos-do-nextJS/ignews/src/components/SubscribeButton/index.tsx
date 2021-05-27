import styles from "./styles.module.scss";

interface SubscriveButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscriveButtonProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
