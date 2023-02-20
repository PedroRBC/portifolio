import { Explorer } from "@/components/Explorer";

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode,
}) {
    return (
        <div className='grid grid-cols-page' >
            <Explorer />
            <div className="h-full relative" >
                {children}
            </div>
        </div>
    );
}