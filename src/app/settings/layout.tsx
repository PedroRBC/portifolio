import { Explorer } from "@/components/Explorer";

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode,
}) {
    return (
        <div className='lg:grid lg:grid-cols-page max-lg:flex max-lg:flex-col' >
            <Explorer />
            <div className="h-full relative" >
                {children}
            </div>
        </div>
    );
}