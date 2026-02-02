import DemoLayout from "@/components/DemoLayout";
import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <>
      {/* <div className="flex min-h-[60vh] items-center justify-center">
        <DemoLayout />
      </div> */}
      <div className="w-full h-dvh flex items-center justify-center bg-background relative z-9999999999999"><Spinner /></div>
    </>
  );
}

