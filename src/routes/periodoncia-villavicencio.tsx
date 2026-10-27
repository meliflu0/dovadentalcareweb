import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/periodoncia-villavicencio")({
  head: () => serviceHead("periodoncia-villavicencio"),
  component: () => <ServicePage slug="periodoncia-villavicencio" />,
});
