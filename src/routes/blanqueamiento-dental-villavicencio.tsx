import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/blanqueamiento-dental-villavicencio")({
  head: () => serviceHead("blanqueamiento-dental-villavicencio"),
  component: () => <ServicePage slug="blanqueamiento-dental-villavicencio" />,
});
