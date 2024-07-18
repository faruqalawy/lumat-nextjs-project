import ContactForm from "@/components/Kontak/ContactForm";
import ContactList from "@/components/Kontak/ContactList";
import MapAddress from "@/components/Kontak/MapAddress";

export default function Contact() {
  return (
    <div className="custom-display">
      <ContactForm />
      <ContactList />
      <MapAddress />
    </div>
  );
}
