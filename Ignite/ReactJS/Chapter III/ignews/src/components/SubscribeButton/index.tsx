import { signIn, useSession } from "next-auth/client";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscriveButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscriveButtonProps) {
  const [session] = useSession();

  async function handleSubscribeButton() {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({sessionId});
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribeButton}
    >
      Subscribe now
    </button>
  );
}
