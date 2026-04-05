import "./globals.css";

export const metadata = {
  title: "Thiago Rodrigues - DevOps",
  description: "DevOps Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#020617] text-white">
        {children}
      </body>
    </html>
  );
}
