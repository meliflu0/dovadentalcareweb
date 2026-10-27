import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/odontologia-general-villavicencio")({
  head: () => serviceHead("odontologia-general-villavicencio"),
  component: () => <ServicePage slug="odontologia-general-villavicencio" />,
});
