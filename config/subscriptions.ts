import { SubscriptionPlan } from "types"
import { env } from "@/env.mjs"

export const proPlan: SubscriptionPlan = {
  name: "PRO",
  description: "The PRO plan has unlimited posts.",
  stripePriceId: env.STRIPE_PRO_MONTHLY_PLAN_ID || "",
}
