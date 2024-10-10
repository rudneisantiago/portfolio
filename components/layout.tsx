import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      <Header />
      <main>{children}</main>
    </div>
  );
}
