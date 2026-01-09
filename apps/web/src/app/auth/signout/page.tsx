import { signOut } from '../../(auth)/actions';

export default async function SignOutPage() {
  await signOut();
  return null;
}
