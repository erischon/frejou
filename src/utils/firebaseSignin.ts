import { useAuth } from "@clerk/nextjs";
import { getAuth, signInWithCustomToken } from "firebase/auth";

async function FirebaseSignin() {
  const { getToken } = useAuth();
  const auth = getAuth();

  const firebaseToken = await getToken({ template: "integration_firebase" });

  if (!firebaseToken) {
    return console.log("=== No token");
  }

  signInWithCustomToken(auth, firebaseToken).then((userCredential) => {
    const user = userCredential.user;
  });
}

export default FirebaseSignin;
