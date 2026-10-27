import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/limpieza-dental-villavicencio")({
  head: () => serviceHead("limpieza-dental-villavicencio"),
  component: () => <ServicePage slug="limpieza-dental-villavicencio" />,
});
