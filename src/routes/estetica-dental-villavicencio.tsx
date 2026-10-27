import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/estetica-dental-villavicencio")({
  head: () => serviceHead("estetica-dental-villavicencio"),
  component: () => <ServicePage slug="estetica-dental-villavicencio" />,
});
