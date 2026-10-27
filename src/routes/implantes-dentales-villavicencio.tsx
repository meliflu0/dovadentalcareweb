import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/implantes-dentales-villavicencio")({
  head: () => serviceHead("implantes-dentales-villavicencio"),
  component: () => <ServicePage slug="implantes-dentales-villavicencio" />,
});
