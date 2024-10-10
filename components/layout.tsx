import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      <Header />
      <main className="flex justify-center items-center text-white bg-gray-500">
        {children}
      </main>
    </div>
  );
}
