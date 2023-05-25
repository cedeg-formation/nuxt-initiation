import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
