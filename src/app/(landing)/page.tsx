import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * @description Landing Page
 */
function LandingPage() {
  return (
    <>
      <main className="">
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>

        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </main>
    </>
  );
}

export default LandingPage;
