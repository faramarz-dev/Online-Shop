import HeaderBanner from "../_components/header-banner/header-banner";
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderBanner />
      <main className="flex-1">{children}</main>
    </>
  );
}
