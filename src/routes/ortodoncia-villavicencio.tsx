import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/ortodoncia-villavicencio")({
  head: () => serviceHead("ortodoncia-villavicencio"),
  component: () => <ServicePage slug="ortodoncia-villavicencio" />,
});
