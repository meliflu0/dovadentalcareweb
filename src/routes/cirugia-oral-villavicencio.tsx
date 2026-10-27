import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/cirugia-oral-villavicencio")({
  head: () => serviceHead("cirugia-oral-villavicencio"),
  component: () => <ServicePage slug="cirugia-oral-villavicencio" />,
});
