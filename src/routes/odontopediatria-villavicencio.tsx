import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/odontopediatria-villavicencio")({
  head: () => serviceHead("odontopediatria-villavicencio"),
  component: () => <ServicePage slug="odontopediatria-villavicencio" />,
});
