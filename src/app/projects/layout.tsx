export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode,
}) {
    return (
        <div className="h-full relative" >
            {children}
        </div>

    );
}