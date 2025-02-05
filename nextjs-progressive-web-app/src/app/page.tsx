"use client";

import PushNotificationManager from "@/components/PushNotificationManger";
import InstallPrompt from "@/components/InstallPrompt";

export default function Page() {
  return (
    <div>
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  );
}
