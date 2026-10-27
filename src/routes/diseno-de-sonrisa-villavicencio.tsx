import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/diseno-de-sonrisa-villavicencio")({
  head: () => serviceHead("diseno-de-sonrisa-villavicencio"),
  component: () => <ServicePage slug="diseno-de-sonrisa-villavicencio" />,
});
