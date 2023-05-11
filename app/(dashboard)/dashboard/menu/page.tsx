import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";

import { DashboardHeader } from "@/components/header";

import { DashboardShell } from "@/components/shell";
import CalendarComponent from "@/components/ui/calendar-component";

export default async function MenuPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Training Menu" text="Unlock Your Potential" />
      <div className="">
        <CalendarComponent />
      </div>
    </DashboardShell>
  );
}
