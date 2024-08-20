import Card from "@/components/card/Card";
export default function Acolyte() {
    return (
        <main className={`my-5 flex h-fit flex-col md:flex-row md:items-stretch md:gap-5`}>
            <Card>
                <h1 className="text-center font-bold text-xl">Hello from Acolyte!</h1>
            </Card>
        </main>
    );
}
