import { UserButton } from "@clerk/nextjs";

/**
 * @description Dashboard Page
 */
function DashboardPage() {
  return (
    <>
      <div>
        <p>Dashboard Page (protected)</p>
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
}

export default DashboardPage;
